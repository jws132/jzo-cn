import React from 'react';
import { Button, Row, Col } from 'antd';
import { JForm, FormItem } from '@jzo/a-cn';
import { basicInfoForm, companyInfoForm, payInfoForm } from './FormGroupsMap';
import './index.less';

const FormGroups = () => {
  const formProps = {
    layout: 'vertical',
    gutter: 20,
    initialValues: {
      // 初始值
      status: 1,
    },
    fields: [
      {
        container: {
          type: 'card',
          title: '基础信息',
          props: {
            style: {
              padding: 0,
              marginBottom: 16,
            },
            size: 'small',
          },
        },
        fields: basicInfoForm,
      },
      {
        container: {
          type: 'card',
          title: '公司信息',
          props: {
            style: {
              padding: 0,
              marginBottom: 16,
            },
            size: 'small',
          },
        },
        fields: companyInfoForm,
      },
    ],
    submitCall: values => {
      // 提交回调
      const { expirationTime, ...rest } = values;
      values = rest;
      values.startTime = expirationTime[0];
      values.endTime = expirationTime[1];
      merchantSave(values);
    },

    toolBarRender: () => (
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
    ),
  };

  return (
    <div className="gray-bg">
      <JForm {...formProps} />
    </div>
  );
};

export default FormGroups;
