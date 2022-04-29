---
nav:
  title: 组件
  path: /components
group:
  title: BForm
---

## 登录表单

```jsx
import React from 'react';
import { Button } from 'antd';
import { BForm, SearchTree } from '@jzo/a-cn';

export default () => {
  const [form] = BForm.useForm();
  const props = {
    initialValues: {
      username: '1375433457',
      menu: ['1-1'],
    },
    fields: [
      {
        type: 'input',
        label: '用户名',
        name: 'username',
      },
      {
        type: 'password',
        label: '密码',
        name: 'password',
        required: true,
      },
      {
        type: 'custom',
        label: '测似乎',
        name: 'menu',
        renderChild: (
          <SearchTree
            treeData={[
              {
                key: '1',
                title: '文件夹1',
                children: [
                  { key: '1-1', title: '子文件1' },
                  { key: '1-2', title: '子文件2' },
                  { key: '1-3', title: '子文件3' },
                  { key: '1-4', title: '子文件4' },
                  { key: '1-5', title: '子文件5' },
                ],
              },
              {
                key: '2',
                title: '文件夹2',
                children: [
                  {
                    key: '2-1',
                    title: '子文件夹',
                    children: [{ key: '2-1-1', title: '子文件小小' }],
                  },
                  {
                    key: '2-2',
                    title: '子文件2',
                  },
                ],
              },
              {
                key: '3',
                title: '文件夹3333333',
                children: [],
              },
            ]}
            checkable
          />
        ),
      },
    ],
    column: 1,
    style: { width: 400, margin: '0 auto' },
    defaultFooterBar: false,
    formItemLayout: {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 24 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
      },
    },
    layout: 'vertical',
    submitCall: values => {
      console.log(values);
    },
    actionsRender: [
      {
        type: 'primary',
        name: '登录',
        htmlType: 'submit',
        style: {
          width: '100%',
        },
      },
    ],
  };
  console.log(form);
  return (
    <>
      <BForm {...props} from={form} />
      <Button onClick={() => form.setFieldDisabled('username', true)}>
        重置
      </Button>
    </>
  );
};
```

### 分组表单

```jsx
/**
 * [配置项名称]: [值]

import React from 'react';
import { message, Button, Row, Col } from 'antd';
import { BForm } from '@jzo/a-cn';

export default ({}) => {
  const [from] = BForm.useForm();

  const fromProps = {
    fields: [
      {
        name: 'sender',
        container: {
          type: 'card',
          props: {
            title: '发送',
            style: {
              padding: 0,
              marginBottom: 16,
            },
            size: 'small',
          },
        },
        fields: [
          {
            name: 'senderName',
            label: '发送人姓名',
            field: {
              type: 'input',
              props: {
                placeholder: '请输入发送人姓名',
              },
            },
            rules: [
              {
                required: true,
                message: '该项为必填项',
              },
            ],
          },
          {
            name: 'secrecy',
            label: '是否保密',
            field: {
              type: 'switch',
              props: {
                checkedChildren: 'on',
                unCheckedChildren: 'off',
              },
            },
            valuePropName: 'checked',
          },
          {
            name: 'senderNumber',
            label: '发送人号码',
            field: {
              type: 'inputnumber',
              props: {
                placeholder: '请输入发送人号码',
                style: {
                  width: '80%',
                },
              },
            },
            rules: [
              {
                required: true,
                message: '该项为必填项',
              },
            ],
          },
          {
            name: 'senderAddress',
            label: '发送人地址',
            field: {
              type: 'textarea',
              props: {
                placeholder: '发送人地址',
              },
            },
            rules: [
              {
                required: true,
                message: '该项为必填项',
              },
            ],
          },
        ],
      },
      {
        name: 'recipient',
        container: {
          type: 'card',
          props: {
            title: '接收',
            style: {
              padding: 0,
              marginBottom: 16,
            },
          },
        },
        fields: [
          {
            name: 'recipientName',
            label: '接收人姓名',
            field: {
              type: 'select',
              props: {
                placeholder: '请选择接收人姓名',
              },
            },
            remoteSource: {
              url: '/api/manage/recipientList.json',
            },
            rules: [
              {
                required: true,
                message: '该项为必填项',
              },
            ],
          },
          {
            name: 'recipientTime',
            label: '接收时间',
            field: {
              type: 'checkboxgroup',
            },
            initialSource: [
              {
                text: 'Morning',
                value: 'morning',
              },
              {
                text: 'Afternoon',
                value: 'afternoon',
              },
              {
                text: 'Night',
                value: 'night',
              },
            ],
          },
          {
            name: 'recipientNumber',
            label: '接收人号码',
            field: {
              type: 'inputnumber',
              props: {
                placeholder: '请输入接收人号码',
                style: {
                  width: '80%',
                },
              },
            },
            rules: [
              {
                required: true,
                message: '该项为必填项',
              },
            ],
          },
          {
            name: 'recipientAddress',
            label: '接收人地址',
            field: {
              type: 'textarea',
              props: {
                placeholder: '请输入接收人地址',
              },
            },
            rules: [
              {
                required: true,
                message: '该项为必填项',
              },
            ],
          },
        ],
      },
      {
        name: 'basic',
        container: {
          type: 'card',
          props: {
            title: '基础',
            style: {
              padding: 0,
              marginBottom: 16,
            },
          },
        },
        fields: [
          {
            name: 'time',
            label: '送货时间',
            field: {
              type: 'rangepicker',
              props: {
                placeholder: ['开始时间', '结束时间'],
              },
            },
            rules: [
              {
                required: true,
                message: '该项为必填项',
              },
            ],
          },
          {
            name: 'priceProject',
            label: '价格保护',
            field: {
              type: 'slider',
              props: {
                min: 0,
                max: 1000,
                step: 100,
                dots: true,
              },
            },
            remoteSource: {
              url: '/api/manage/priceList.json',
            },
          },
          {
            name: 'description',
            label: '其他信息',
            field: {
              type: 'textarea',
              props: {
                placeholder: '请输入其他信息',
              },
            },
          },
        ],
      },
    ],

    actionsRender: [
      {
        type: 'button',
        name: '提交',
        props: {
          children: '自定义提交',
          type: 'primary',
        },
        onOk: ctx => {
          ctx.onValidate(values => {
            console.log(values);
          });
        },
      },
      {
        type: 'button',
        props: {
          children: '重置',
        },
        onOk: ctx => {
          console.log('重置');
        },
      },
    ],
  };

  return (
    <>
      <BForm {...fromProps} form={from} />
    </>
  );
};
 */
```

### Api

GForm

| 参数             | 说明                               | 类型                    | 默认值     | 版本 |
| ---------------- | ---------------------------------- | ----------------------- | ---------- | ---- |
| fields           | 表单输入项配置                     | {type,name,label,...}[] | -          |      |
| loading          | 正在保存标志                       | bool                    | false      |      |
| column           | 一行显示几列                       | num                     | 3          |      |
| layout           | 布局方式                           | string                  | horizontal |
| initialValues    | 表单初始值                         | object                  | -          |      |
| labelBasicSpan   | label 的占比                       | num                     | 6          |      |
| defaultFooterBar | 是否使用默认的按钮 重置、保存      | bool                    | true       |      |
| totalSpan        | 行的总占比，最高 24                | num                     | 24         |      |
| gutter           | 列与列之间的间隔,配置参考 antd Row | object 或 num           | -          |      |
| actionsRender    | 表单操作，配置参数参考 AuthBtn     | []                      | -          |      |
| 其它             | 参考 antd Form                     | object                  | -          |      |

fields

| 参数         | 说明                                                 | 类型                            | 默认值            | 版本 |
| ------------ | ---------------------------------------------------- | ------------------------------- | ----------------- | ---- |
| type         | 组件类型，具体看下面说明                             | string                          | -                 |      |
| label        | 标签                                                 | string                          | -                 |      |
| title        | 标签,同 label,结合 pro-table 列表配置时使用          | string                          | -                 |      |
| name         | 入参名                                               | string                          | -                 |      |
| dataIndex    | 入参名，同 name,结合 pro-table 列表配置时使用        | string                          | -                 |      |
| valueEnum    | 枚举值 key 为 value value 为：label                  | object                          | []                |      |
| hideInForm   | 是否失效去除                                         | bool                            | false             |      |
| validOptions | 校验相关，参考 antd Form.Item 校验相关的             | { validateFirst, rules:[], ...} | -                 |      |
| treeData     | type 为 treeselect 时有效，树形数据                  | object                          | -                 |      |
| optionsData  | 下拉框数据,如 Select,Radio 等输入项                  | array                           | -                 |      |
| models       | 下拉框数据对应的字段名                               | ['valueField','labelField']     | ['value','label'] |      |
| fieldProps   | type 类型对应组件原生的属性，参考 antd，会透传给组件 | object                          | -                 |      |
| itemProps    | Form.Item 原生的属性，参考 antd，会透传给组件        | object                          | -                 |      |
| renderChild  | type 为 custom 时有效，自定义组件                    | ReactNode                       | -                 |      |

type

| 参数             | 说明                     | 描述                            |
| ---------------- | ------------------------ | ------------------------------- |
| input            | 输入框                   | -                               |
| inputnumber      | 数字框                   | -                               |
| numrange         | 数字区间                 | 输出值为 [minNumber,maxNumber]  |
| select           | 下拉框                   | 需配置 optionsData，配合 models |
| selectgroup      | 分组下拉框               | 需配置 optionsData，配合 models |
| timepickerrange  | 时间选择器               | -                               |
| yearpicker       | 年                       | -                               |
| monthpicker      | 月份                     | -                               |
| rangepicker      | 日期区间                 | -                               |
| checkbox         | 复选框                   | -                               |
| checkboxgroup    | 复选框组合               | 需配置 optionsData，配合 models |
| textarea         | 文本域                   | -                               |
| radiogroup       | 单选框组合               | 需配置 optionsData，配合 models |
| radiogroupbutton | 单选框组合 button 类型   | 需配置 optionsData，配合 models |
| switch           | 开关                     | -                               |
| treeselect       | 树形下拉框               | 需配置 treeData                 |
| roletree         | 角色树，针对角色选菜单时 | 需配置 treeData                 |
| custom           | 自定义组件               | 需配置 renderChild              |

GForm Instance

| 参数       | 说明                                                  | 类型           | 默认值 | 版本 |
| ---------- | ----------------------------------------------------- | -------------- | ------ | ---- |
| onValidate | 触发表单校验，并接收一个回调函数,给回调函数传入表单值 | (callback)=>{} | -      |      |
| ...        | 其它参考 Antd Form 的实例方法                         | -              | -      |      |

More skills for writing demo: https://d.umijs.org/guide/demo-principle
