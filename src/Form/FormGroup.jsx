import React from 'react';
import { uniqueId, isBoolean } from 'lodash';
import { allMatch, needWrapCols } from './utils/index';
import { Card, Row, Col } from 'antd';
import GFormItem from '../GFormItem';
import FormAction from './FormAction';

const FormGroup = props => {
  const { gutter, formItemProps, itemLayout = {} } = props;

  const getGroup = uniqueId('groupName_');

  const groupRender = (ctx, props) => {
    const { container, fields, children } = props;
    const containerNode = container ? (
      <Card {...container.props} />
    ) : (
      <React.Fragment />
    );
    const fieldNode =
      fields?.length > 0 ? containerRender(ctx, fields) : children;
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
    fields.forEach((fieldConfig, index) => {
      const fieldKey =
        fieldConfig.dataIndex ||
        fieldConfig.name ||
        `${getGroup}-field-${index}`;
      let fieldElem;
      if (fieldConfig.container || fieldConfig.fields) {
        fieldElem = <FormGroup {...fieldConfig} key={fieldKey} />;
      } else {
        fieldElem = fieldRender(ctx, { ...fieldConfig, fieldKey });
      }

      fieldsElems.push(fieldElem);
    });
    return fieldsElems;
  };

  const fieldRender = (ctx, { dependency, fieldKey, ...restProps }) => {
    const itemSet = {
      ...restProps,
    };

    if (dependency) {
      const deps = Object.keys(dependency);
      for (let i = 0; i < deps.length; i++) {
        const type = deps[i] || null;
        if (isBoolean(dependency[type])) {
          itemSet[type] = dependency[type];
        } else {
          const { relates = [], inputs = [], output, defaultOutput } =
            dependency[type] || {};
          const values = relates.map(relatedFieldNameList =>
            ctx.getFieldValue(relatedFieldNameList),
          );
          const isAllMatched = allMatch(inputs, values);
          if (type === 'visible') {
            itemSet.visible = isAllMatched ? output : false;
            break;
          }
          if (type === 'disabled') {
            itemSet.disabled = isAllMatched ? output : defaultOutput;
            break;
          }
        }
      }
    }
    return (
      <Col
        span={itemLayout.span}
        key={fieldKey}
        style={{ display: itemSet.visible === false ? 'none' : '' }}
      >
        <GFormItem itemSet={itemSet} {...formItemProps} />
      </Col>
    );
  };

  const renderChildren = props => {
    const {
      formInstance,
      fields,
      container,
      actionsRender,
      itemLayout,
    } = props;
    const children = fields ? groupRender(formInstance, props) : props.children;
    let actionsElem;
    if (actionsRender) {
      actionsElem = (
        <FormAction
          key={`form-action`}
          itemLayout={itemLayout}
          formInstance={formInstance}
          actionsRender={actionsRender}
        />
      );
    }

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

    //return container ? children : <Row gutter={gutter}>{children}</Row>;
  };

  return renderChildren(props);
};

export default FormGroup;
