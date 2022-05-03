---
nav:
  title: 组件
  path: /components
group:
  title: AuthBtn
---

## 按钮

### 列表操作按钮

```jsx
import React from 'react';
import { message } from 'antd';
import { AuthBtn } from '@jzo/a-cn';

export default ({}) => {
  const btnArray = [
    {
      type: 'link',
      name: '编辑',
      onOk: () => {
        message.success(`编辑`);
      },
    },
    {
      type: 'link',
      name: '禁用',
      disabled: true,
      onOk: () => {
        message.success(`查看`);
      },
    },
    {
      type: 'confirm',
      name: '启用',
      confirmText: '您确定启用吗?',
      onOk: () => {
        message.success(`启用`);
      },
    },
    {
      type: 'confirm',
      name: '加载',
      loading: true,
    },
    {
      type: 'popconfirm',
      name: '删除',
      confirmText: '您确定删除该信息吗?',
      onOk: () => {
        message.success(`删除`);
      },
    },
    {
      type: 'more',
      name: '更多',
      menuChildren: [
        {
          type: 'link',
          name: '授权',
          onOk: v => {
            message.success(`授权`);
          },
        },
        {
          type: 'link',
          name: '每月限数',
          disabled: true,
          onOk: () => {
            message.success(`每月限数`);
          },
        },
        {
          type: 'confirm',
          name: '清空',
          confirmText: '您确定要清空该数据吗',
          onOk: () => {
            message.success(`成功清空数据`);
          },
        },
      ],
    },
  ];

  return btnArray.map((el, index) => <AuthBtn {...el} key={index} />);
};
```

### 按钮

```jsx
import React from 'react';
import { message, Space } from 'antd';
import { AuthBtn } from '@jzo/a-cn';
import { DownloadOutlined } from '@ant-design/icons';

export default ({}) => {
  return (
    <Space>
      <AuthBtn
        type="primary"
        onOk={() => {
          message.success(`我新增数据`);
        }}
      >
        新增
      </AuthBtn>
      <AuthBtn
        type="popconfirm"
        confirmText="您确定要删除该数据吗"
        onOk={() => {
          message.success(`我操作了删除功能`);
        }}
        props={{
          type: 'primary',
          danger: true,
        }}
      >
        删除
      </AuthBtn>
      <AuthBtn
        type="confirm"
        confirmText="您确定要清空该数据吗"
        onOk={({ setLoading }) => {
          setLoading(true);
          message.success(`我操作了删除功能`);
        }}
        props={{
          type: 'primary',
        }}
      >
        确定
      </AuthBtn>
      <AuthBtn
        tipText="编辑"
        confirmText="您确定要清空该数据吗"
        onOk={({ setLoading }) => {
          message.success(`我操作了删除功能`);
        }}
      >
        编辑
      </AuthBtn>
      <AuthBtn
        type="more"
        props={{ type: 'primary' }}
        menuChildren={[
          {
            type: 'link',
            name: '授权',
            onOk: v => {
              message.success(`授权`);
            },
          },
          {
            type: 'link',
            name: '每月限数',
            disabled: true,
            onOk: () => {
              message.success(`每月限数`);
            },
          },
          {
            type: 'confirm',
            name: '清空',
            confirmText: '您确定要清空该数据吗',
            onOk: () => {
              message.success(`成功清空数据`);
            },
          },
        ]}
      >
        更多
      </AuthBtn>
    </Space>
  );
};
```

### Api

| 属性名       | 说明                                                     | 类型     | 默认  |
| ------------ | -------------------------------------------------------- | -------- | ----- |
| type         | confirm ,popconfirm ,more 其余支持 antd Button type 属性 | string   | link  |
| hide         | 是否显示                                                 | bool     | false |
| name         | 名称                                                     | string   | ''    |
| disabled     | 是否禁用                                                 | bool     | false |
| confirmText  | confirm, opconfirm 设置提示语                            | string[] | []    |
| confirmProps | 其余支持 antd popconfirm，confirm                        | object   | -     |
| tipText      | tipText 显示 文字提示                                    | string   | ''    |
| placement    | tipText 为空 该属性失效 Tooltip 组件属性                 | string   | top   |
| loading      | 是否 loading                                             | bool     | false |
| onOk         | 触发事件                                                 | fun      | -     |
| props        | type 为 confirm ,popconfirm ,more 设置 Button 属性使用   | object   | {}    |
| 其他         | 参考根据 type 类型支持 antd 组件属性                     | object   | -     |

More skills for writing demo: https://d.umijs.org/guide/demo-principle
