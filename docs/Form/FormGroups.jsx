import React from 'react';
import { Button, Row, Col } from 'antd';
import { JForm, FormItem } from '@jzo/a-cn';
import { basicInfoForm, companyInfoForm, payInfoForm } from './FormGroupsMap';
import './index.less';

const CardForm = ({ title, itemSet }) => {
  const formItemProps = {
    column: 3,
    layout: 'vertical',
  };

  return (
    <div className="card-box">
      <h5 className="chapter-title">{title}</h5>
      <Row gutter={30}>
        {itemSet.map(itemSet => (
          <Col span={8} key={itemSet.name || Math.random()}>
            <FormItem {...formItemProps} itemSet={itemSet} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

const FormGroups = () => {
  const formProps = {
    layout: 'vertical',
    initialValues: {
      // 初始值
      status: 1,
    },
    submitCall: values => {
      // 提交回调
      const { expirationTime, ...rest } = values;
      values = rest;
      values.startTime = expirationTime[0];
      values.endTime = expirationTime[1];
      console.log(values);
    },

    actionsRender: actionRef => {
      console.log('actio------------n', actionRef);
      return (
        <>
          <Button
            type="link"
            size="large"
            className="mr10"
            onClick={history.goBack}
          >
            返回
          </Button>
        </>
      );
    },
  };

  return (
    <div className="gray-bg">
      <JForm {...formProps}>
        <CardForm title="基础信息" itemSet={basicInfoForm} />
        <CardForm title="公司信息" itemSet={companyInfoForm} />
        <CardForm title="付款信息" itemSet={payInfoForm} />
      </JForm>
    </div>
  );
};

export default FormGroups;
