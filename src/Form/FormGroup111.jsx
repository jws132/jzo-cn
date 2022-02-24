import React, { useContext } from 'react';
import { Form, Card, Row, Col } from 'antd';
import { uniqueId } from 'lodash';
import { allMatch, needWrapCols } from './utils/index';
import FormField from '../GFormItem';
import FormAction from './FormAction';
import FormContext from './utils/FormContext';

const FormGroup = props => {
  const { itemLayout, layout, formInstance, actionsPosition } = props;
  const { span, gutter, offset } = itemLayout;
  const getGroup = uniqueId('groupName_');

  const groupRender = (ctx, props) => {
    const { container, fields, children } = props;
    const containerNode = container ? (
      <Card {...container.props} />
    ) : (
      <React.Fragment />
    );
    const fieldNode = fields ? containerRender(ctx, fields) : children;
    return React.cloneElement(
      containerNode,
      {
        ...containerNode.props,
        style: Object.assign({}, containerNode.props.style, {
          //display: container.visible === false ? 'none' : '',
        }),
      },
      fieldNode,
    );
  };

  const containerRender = (ctx, fields) => {
    const fieldsElems = [];
    const itemProps = {
      itemLayout,
      layout,
      formInstance,
    };
    fields.forEach((fieldConfig, index) => {
      const fieldKey =
        fieldConfig.dataIndex ||
        fieldConfig.name ||
        `${getGroup}-field-${index}`;
      let fieldElem;
      if (fieldConfig.container || fieldConfig.fields) {
        fieldElem = (
          <FormGroup {...fieldConfig} key={fieldKey} {...itemProps} />
        );
      } else {
        fieldElem = fieldRender(ctx, { ...fieldConfig, fieldKey });
      }

      fieldsElems.push(fieldElem);
    });
    return fieldsElems;
  };

  const fieldRender = (ctx, { name, dependency, fieldKey, ...restProps }) => {
    const el = {
      name,
      dependency,
      ...restProps,
    };
    if (dependency) {
      const deps = Object.keys(dependency);
      for (let i = 0; i < deps.length; i++) {
        const type = deps[i] || null;
        const { relates = [], inputs = [], output, defaultOutput } =
          dependency[type] || {};
        const values = relates.map(relatedFieldNameList =>
          ctx.getFieldValue(relatedFieldNameList),
        );
        const isAllMatched = allMatch(inputs, values);
        if (type === 'visible') {
          el.visible = isAllMatched ? output : false;
          break;
        }
        if (type === 'disabled') {
          el.disabled = isAllMatched ? output : defaultOutput;
          break;
        }
      }
    }

    if (layout === 'inline') {
      return <FormField itemSet={el} />;
    }
    actionsPosition;
    return (
      <Col
        span={span}
        offset={offset}
        key={fieldKey}
        style={{ display: el.visible === false ? 'none' : '' }}
      >
        <FormField itemSet={el} />
      </Col>
    );
  };

  const renderChildren = (ctx, props, conf) => {
    debugger;
    const { fields, container, actionsRender } = props;
    const { itemLayout } = conf;
    const { span, gutter } = itemLayout;
    const children =
      fields || container ? groupRender(ctx, props) : props.children;
    debugger;
    let actionsElem;
    if (actionsRender) {
      actionsElem = (
        <FormAction
          key={`form-action`}
          itemLayout={itemLayout}
          formInstance={formInstance}
          actionsRender={actionsRender}
          actionsPosition={actionsPosition}
        />
      );
    }

    const isNeedWrapCols = needWrapCols(span);

    if (!isNeedWrapCols) {
      if (actionsElem) {
        return (
          <React.Fragment>
            {children}
            {actionsElem}
          </React.Fragment>
        );
      } else {
        return children;
      }
    }

    const finalChildren = [];
    let groupFieldsElem = [];
    let groupRowIndex = 0;
    React.Children.forEach(children, child => {
      let childElem;
      if (child.type === FormGroup) {
        if (groupFieldsElem.length) {
          const rowKey = `${getGroup}-row-${groupRowIndex}`;
          childElem = (
            <Row gutter={gutter} key={rowKey}>
              {groupFieldsElem}
            </Row>
          );
          groupFieldsElem = [];
          groupRowIndex += 1;
        }

        finalChildren.push(childElem);
        finalChildren.push(child);
      } else if (child.type === FormAction) {
        actionsElem = child;
        actionsPosition = child.props.actionsPosition;
      } else {
        groupFieldsElem.push(child);
      }
    });
    const rowKey = `${getGroup}-row-${groupRowIndex}`;
    const isDefaultPosition = !actionsPosition || actionsPosition === 'default';

    if (!actionsElem) {
      finalChildren.push(
        <Row gutter={gutter} key={rowKey}>
          {groupFieldsElem}
        </Row>,
      );
    } else {
      if (isDefaultPosition) {
        finalChildren.push(
          <Row gutter={gutter} key={rowKey}>
            {groupFieldsElem}
            {actionsElem}
          </Row>,
        );
      } else {
        finalChildren.push(
          <Row gutter={gutter} key={rowKey}>
            {groupFieldsElem}
          </Row>,
        );
        finalChildren.push(actionsElem);
      }
    }

    return finalChildren;
  };

  const fieldGroupContext = {
    formInstance,
    layout,
    itemLayout,
  };

  return renderChildren(formInstance, props, fieldGroupContext);
};

export default FormGroup;
