---
nav:
  title: 控件
  path: /field
group:
  title: NumRange
---

## 数字区间组件

Demo:

```jsx
import React, { useState } from 'react';
import { NumRange } from '@jzo/a-cn';

export default () => {
  const [value, setValue] = useState(null);
  return (
    <NumRange
      value={value}
      style={{ width: 500 }}
      onChange={v => {
        setValue(v);
      }}
    />
  );
};
```

## API

TableBtns

| 参数        | 说明                                                 | 类型       | 默认值              | 版本 |
| ----------- | ---------------------------------------------------- | ---------- | ------------------- | ---- |
| value       | 受控                                                 | 数字 array | -                   |      |
| onChange    | 变化回调                                             | function   | -                   |      |
| precision   | 精度位数                                             | num        | 0                   |      |
| minProps    | 区间小的一方的属性，支持 antd InputNumber 的所有属性 | object     | -                   |      |
| maxProps    | 区间大的一方的属性，支持 antd InputNumber 的所有属性 | object     | -                   |      |
| placeholder | 控制 placeholder 显示内容                            | array      | ['请输入','请输入'] |      |
| ...rest     | 支持 antd InputGroup 的所有属性                      | object     | -                   |      |
