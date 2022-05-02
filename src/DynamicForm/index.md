---
nav:
  title: 组件
  path: /components
group:
  title: DynamicForm
---

## 自定义动态表单

### 表头呈现方式

```jsx
import React from 'react';
import { message, Button } from 'antd';
import { DynamicForm, JForm } from '@jzo/a-cn';

export default ({}) => {
  const fromProps = {
    layout: 'vertical',
    column: 1,
    onFinish: values => {
      console.log('values', values);
    },
    fields: [
      {
        type: 'custom',
        label: '',
        name: 'colors',
        renderFormItem: (
          <DynamicForm
            name="colors"
            maxLength="2"
            hasLabel={false}
            listFormSet={[
              {
                type: 'input',
                name: 'name',
                label: '姓名',
              },
              {
                type: 'input',
                name: 'phone',
                label: '手机号',
              },
            ]}
          />
        ),
      },
    ],
  };

  return <JForm {...fromProps} />;
};
```

### 常规呈现方式

```jsx
import React from 'react';
import { message, Button } from 'antd';
import { DynamicForm, JForm } from '@jzo/a-cn';

export default ({}) => {
  const fromProps = {
    column: 1,
    onFinish: values => {
      console.log('values', values);
    },
    fields: [
      {
        type: 'custom',
        label: '',
        name: 'users',
        renderFormItem: (
          <DynamicForm
            hasHead={false}
            name="users"
            listFormSet={[
              {
                type: 'input',
                label: '姓名',
                name: 'name',
                props: {
                  placeholder: '姓名',
                },
              },
              {
                type: 'select',
                name: 'sex',
                title: '性别',
                props: {
                  placeholder: '性别',
                },
                optionsData: [
                  { label: '男', value: '0' },
                  { label: '女', value: '1' },
                ],
              },
              {
                type: 'datepicker',
                name: 'date',
                label: '入职日期',
                props: {
                  placeholder: '入职日期',
                },
              },
            ]}
          />
        ),
      },
    ],
  };

  return <JForm {...fromProps} />;
};
```

### 底部自定义展示

```jsx
import React from 'react';
import { message, Button } from 'antd';
import { DynamicForm, JForm } from '@jzo/a-cn';

export default ({}) => {
  const fromProps = {
    layout: 'vertical',
    column: 1,
    initialValues: {
      users: [{ name: '小张', phone: 13141415108 }],
    },
    onFinish: values => {
      console.log('values', values);
    },
    fields: [
      {
        type: 'custom',
        label: '',
        name: 'users',
        renderFormItem: () => (
          <DynamicForm
            hasHead={false}
            name="users"
            listFormSet={[
              {
                type: 'input',
                name: 'name',
                label: '',
                props: {
                  placeholder: '请输入文本',
                },
              },
              {
                type: 'input',
                name: 'phone',
                label: '',
                props: {
                  placeholder: '请输入文本',
                },
              },
            ]}
            footerRender={({ add, length }) => {
              return (
                <Button
                  onClick={add}
                  style={{ width: '100%' }}
                  disabled={length > 5}
                >
                  {length > 5 ? '用户已超过最大限制' : '新增用户信息'}
                </Button>
              );
            }}
          />
        ),
      },
    ],
  };

  return <JForm {...fromProps} />;
};
```

### Api

| 属性名       | 说明                  | 类型                | 默认 |
| ------------ | --------------------- | ------------------- | ---- |
| name         | 字段名称              | string              | []   |
| listFormSet  | 参照 Form 表单 fields | Array               | []   |
| maxLength    | 限制长度              | number              | 0    |
| hasLabel     | 是否显示 label        | bool                | true |
| hasHead      | 是否显示头部          | bool                | true |
| hasRemove    | 是否显示删除按钮      | bool                | true |
| hasRemove    | 是否上下移动          | bool                | true |
| footerRender | 自定义底部新增操作    | ({add,length} )=>{} | -    |

More skills for writing demo: https://d.umijs.org/guide/demo-principle
