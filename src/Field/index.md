---
nav:
  title: 组件
  path: /components
group:
  title: Field
---

### Select

```jsx
import React from 'react';
import { message, Button } from 'antd';
import { Form, Select } from '@jzo/a-cn';

export default ({}) => {
  const selectProps = {
    defaultValue: 1,
    optionsData: [
      { id: 1, name: '设计部' },
      { id: 2, name: '运营部' },
      { id: 3, name: '技术部' },
    ],
    models: ['id', 'name'],
    placeholder: '请选择',
  };

  return (
    <>
      <Select {...selectProps} />
    </>
  );
};
```

### Checkbox

```jsx
/**
 * [配置项名称]: [值]
 */
import React from 'react';
import { message, Button } from 'antd';
import { Form, Checkbox } from '@jzo/a-cn';

export default ({}) => {
  const selectProps = {
    defaultValue: [1],
    optionsData: [
      { id: 1, name: '设计部' },
      { id: 2, name: '运营部' },
      { id: 3, name: '技术部' },
    ],
    models: ['id', 'name'],
    placeholder: '请选择',
  };

  return (
    <>
      <Checkbox {...selectProps} />
    </>
  );
};
```

### Radio

```jsx
/**
 * [配置项名称]: [值]
 */
import React from 'react';
import { message, Button } from 'antd';
import { Form, Radio } from '@jzo/a-cn';

export default ({}) => {
  const selectProps = {
    defaultValue: [1],
    optionsData: [
      { id: 1, name: '设计部' },
      { id: 2, name: '运营部' },
      { id: 3, name: '技术部' },
    ],
    models: ['id', 'name'],
    placeholder: '请选择',
  };

  return (
    <>
      <Radio {...selectProps} />
    </>
  );
};
```

### Api

| 属性名      | 说明             | 类型     | 默认                         |
| ----------- | ---------------- | -------- | ---------------------------- |
| models      | 字段索引值转化   | Array    | ['value','label','children'] |
| optionsData | 默认选中的树节点 | string[] | []                           |

More skills for writing demo: https://d.umijs.org/guide/demo-principle

## 金额组件

展示:

```jsx
import React from 'react';
import { message } from 'antd';
import { Money } from '@jzo/a-cn';

const { MoneyInput, MoneyShow } = Money.set(100); // 甚至转化单位

export default () => (
  <>
    无值：
    <MoneyShow value={'--'} />
    <br />
    小
    <MoneyShow value={10000} size="sm" />
    <br />
    中（默认）
    <MoneyShow value={10000} />
    <br />
    大
    <MoneyShow value={10000} size="lg" />
    <br />
    加粗
    <MoneyShow value={10000} size="lg" bold />
    <br />
    颜色（green,red,orange,primary,默认文本色）
    <MoneyShow value={10000} size="lg" color="green" />
    <MoneyShow value={10000} size="lg" color="red" />
    <MoneyShow value={10000} size="lg" color="orange" />
    <MoneyShow value={10000} size="lg" color="primary" />
    <br />
    横排：
    <MoneyShow value={10000} align="horizontal" precision={4} />
  </>
);
```

## 金额输入框

```jsx
import React, { useState } from 'react';
import { message } from 'antd';
import { Money, GForm } from '@jzo/a-cn';

const { MoneyInput } = Money.set(100); // 甚至转化单位

export default () => {
  const [value, setValue] = useState(1);
  const onChange = v => {
    console.log(v);
    setValue(v);
  };

  return (
    <>
      金额输入框： <MoneyInput value={value} onChange={onChange} />
      <br />
      <br />
      <br />
      Form表单结合:
      <GForm
        formSet={[
          {
            label: '金额',
            type: 'custom',
            name: 'amount',
            renderChild: <MoneyInput />,
            props: {
              precision: 4, // 默认两位
            },
          },
          {
            label: '金额',
            type: 'custom',
            name: 'amount2',
            renderChild: <MoneyInput />,
            props: {
              prefix: '$',
              suffix: '元',
            },
          },
          {
            label: '金额',
            type: 'custom',
            name: 'amount3',
            renderChild: <MoneyInput />,
            props: {
              addonBefore: '$',
              addonAfter: '元',
            },
          },
        ]}
      />
    </>
  );
};
```

## API

MoneyShow

| 参数      | 说明                                     | 类型      | 默认值 | 版本 |
| --------- | ---------------------------------------- | --------- | ------ | ---- |
| value     | 数值                                     | num , str | -      |      |
| size      | 字体大小三种规格 sm,md,lg                | bool      | true   |      |
| bold      | 是否加粗                                 | bool      | false  |      |
| color     | 颜色 green,red,orange,primary,默认文本色 | string    | -      |      |
| align     | 横排 horizontal                          | string    | -      |      |
| prefix    | 前缀                                     | string    | ￥     |      |
| precision | 精度                                     | num       | 2      |      |
| className | 样式                                     | string    | -      |      |
| 其它      | Statistic 组件支持的属性                 | obj       | -      |      |

MoneyInput

| 参数        | 说明                       | 类型      | 默认值 | 版本 |
| ----------- | -------------------------- | --------- | ------ | ---- |
| value       | 数值                       | num       | -      |      |
| onChange    | 输入监听变化               | func      | -      |      |
| prefix      | 前缀图标                   | ReactNode | -      |      |
| suffix      | 后缀图标                   | ReactNode | -      |      |
| addonBefore | 前缀标签                   | ReactNode | -      |      |
| addonAfter  | 后缀标签                   | ReactNode | -      |      |
| 其它        | InputNumber 组件支持的属性 | obj       | -      |      |
