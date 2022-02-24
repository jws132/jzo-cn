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
    onFinish: values => {
      console.log('values', values);
    },
    fields: [
      {
        type: 'custom',
        label: '',
        name: 'colors',
        renderChild: (
          <DynamicForm
            name="colors"
            maxLength="2"
            listFormSet={[
              {
                type: 'input',
                name: 'name',
                label: '姓名',
                props: {
                  placeholder: '请输入文本',
                },
              },
              {
                type: 'input',
                name: 'phone',
                label: '手机号',
                props: {
                  placeholder: '请输入文本',
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

### 常规呈现方式

```jsx
import React from 'react';
import { message, Button } from 'antd';
import { DynamicForm, JForm } from '@jzo/a-cn';

export default ({}) => {
  const fromProps = {
    onFinish: values => {
      console.log('values', values);
    },
    fields: [
      {
        type: 'custom',
        label: '',
        name: 'colors',
        renderChild: (
          <DynamicForm
            hideThead
            name="colors"
            hasLabel={true}
            listFormSet={[
              {
                type: 'input',
                name: 'name',
                label: '姓名',
                props: {
                  placeholder: '请输入文本',
                },
              },
              {
                type: 'input',
                name: 'phone',
                label: '手机号',
                props: {
                  placeholder: '请输入文本',
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
        renderChild: (
          <DynamicForm
            hideThead
            name="users"
            hasLabel={true}
            listFormSet={[
              {
                type: 'input',
                name: 'name',
                label: '姓名',
                props: {
                  placeholder: '请输入文本',
                },
              },
              {
                type: 'input',
                name: 'phone',
                label: '手机号',
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

| 属性名       | 说明                  | 类型                | 默认  |
| ------------ | --------------------- | ------------------- | ----- |
| listFormSet  | 参照 Form 表单 fields | Array               | []    |
| maxLength    | 限制长度              | number              | 0     |
| name         | 字段名称              | string              | []    |
| hideLabel    | 是否显示 label        | bool                | false |
| hideHead     | 是否显示头部          | bool                | false |
| hasRemove    | 是否显示删除按钮      | bool                | true  |
| footerRender | 自定义底部新增操作    | ({add,length} )=>{} | -     |

More skills for writing demo: https://d.umijs.org/guide/demo-principle
