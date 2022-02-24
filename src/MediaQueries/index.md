---
nav:
  title: 组件
  path: /components
group:
  title: MediaQueries
---

### 多媒体组件

Demo:

```jsx
import React from 'react';
import { message, Button } from 'antd';
import { MediaQueries } from '@jzo/a-cn';

export default ({}) => {
  return (
    <MediaQueries>
      {match => {
        return <div>{match}</div>;
      }}
    </MediaQueries>
  );
};
```

---

### Api

| 属性名   | 说明                    | 类型            | 默认 |
| -------- | ----------------------- | --------------- | ---- |
| children | 返回 xs,sm,md,lg,xl,xxl | (match) => void |      |

#### children 返回

| 属性名 | 说明                                                         | 类型   | 默认 |
| ------ | ------------------------------------------------------------ | ------ | ---- |
| xs     | 屏幕 < 576px 响应式栅格，可为栅格数或一个包含其他属性的对象  | string |      |
| sm     | 屏幕 ≥ 576px 响应式栅格，可为栅格数或一个包含其他属性的对象  | string |      |
| md     | 屏幕 ≥ 768px 响应式栅格，可为栅格数或一个包含其他属性的对象  | string |      |
| lg     | 屏幕 ≥ 992px 响应式栅格，可为栅格数或一个包含其他属性的对象  | string |      |
| xl     | 屏幕 ≥ 1200px 响应式栅格，可为栅格数或一个包含其他属性的对象 | string |      |
| xxl    | 屏幕 ≥ 1600px 响应式栅格，可为栅格数或一个包含其他属性的对象 | string |      |

More skills for writing demo: https://d.umijs.org/guide/demo-principle
