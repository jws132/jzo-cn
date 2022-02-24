---
nav:
  title: 组件
  path: /components
group:
  title: PopoverMenu
---

## 下拉选择组件

### 下拉菜单

Demo:

```jsx
import React from 'react';
import { message } from 'antd';
import { PopoverMenu } from '@jzo/a-cn';

export default ({}) => {
  return (
    <PopoverMenu
      onClickRender={() => {
        return [
          {
            key: 'add',
            title: '新增',
            icon: '',
            onClick: ({ key, item }) => {
              message.success(`当前选中“${item.title}”`);
              console.log('key', key, item);
            },
          },
          {
            key: 'delete',
            title: '删除',
            onClick: ({ key, item }) => {
              message.success(`当前选中“${item.title}”`);
              console.log('key', key);
            },
          },
        ];
      }}
    >
      操作下拉
    </PopoverMenu>
  );
};
```

### 多级漂浮

```jsx
import React from 'react';
import { message } from 'antd';
import { PopoverMenu } from '@jzo/a-cn';

export default ({}) => {
  const treeData = [
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
  ];

  return (
    <PopoverMenu
      isTree={true}
      onMenuClick={(key, item) => {
        message.success(`当前选中“${item.title}”`);
        console.log('item', item);
      }}
      treeData={treeData}
    >
      多级菜单
    </PopoverMenu>
  );
};
```

### Api

| 属性名      | 说明                             | 类型     | 默认  |
| ----------- | -------------------------------- | -------- | ----- |
| type        | link, confirm ,p opconfirm ,more | string   | link  |
| hide        | 是否显示                         | bool     | false |
| disabled    | 是否禁用                         | bool     | false |
| confirmText | confirm, opconfirm 设置提示语    | string[] | []    |
| loading     | 是否 loading                     | bool     | false |
| onOk        | 触发事件                         | fun      | -     |

More skills for writing demo: https://d.umijs.org/guide/demo-principle
