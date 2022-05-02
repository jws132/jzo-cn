import React from 'react';
import { Card, Row, Col } from 'antd';
import FormItem from '../FormItem';

const FormGroup = props => {
  //表单分组
  const containerRender = ({ container, fields, formLyoutProps }) => {
    const fieldNode =
      fields?.length > 0 ? itemRender({ fields, formLyoutProps }) : null;

    return container ? (
      <Card {...container.props} title={container?.title}>
        {fieldNode}
      </Card>
    ) : (
      fieldNode
    );
  };

  const itemRender = ({ fields, formLyoutProps }) => {
    const { gutter, column, totalSpan } = formLyoutProps;
    const fieldsList = [];
    const formGroupList = [];
    fields.forEach((fieldConfig, index) => {
      const { container, fields, column: itemColumn } = fieldConfig;
      if (container && fields) {
        formGroupList.push(containerRender({ formLyoutProps, ...fieldConfig }));
      } else {
        const span = Math.min(
          Number.isNaN(Number(itemColumn)) ? 1 : itemColumn,
          column,
        ); // 列占比数
        const colSpan = Math.ceil(totalSpan / column) * span;
        fieldsList.push(
          <Col
            span={colSpan}
            key={fieldConfig.dataIndex || fieldConfig.name || Math.random()}
          >
            <FormItem fields={fieldConfig} {...formLyoutProps} />
          </Col>,
        );
      }
    });

    return fieldsList.length > 0 ? (
      <Row gutter={gutter}>{fieldsList}</Row>
    ) : (
      formGroupList
    );
  };

  return containerRender(props);
};

export default FormGroup;
