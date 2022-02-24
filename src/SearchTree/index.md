---
nav:
  title: 组件
  path: /components
group:
  title: SearchTree
---

## 搜索树组件

### 选择树

Demo:

```jsx
import React, { useState } from 'react';
import { message, Button } from 'antd';
import { SearchTree } from '@jzo/a-cn';

export default ({}) => {
  const [checkedKeys, setCheckedKeys] = useState(['2-1']);

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
    <>
      <SearchTree
        treeData={treeData}
        checkedKeys={checkedKeys}
        onCheck={keys => {
          console.log(keys);
          setCheckedKeys(keys);
        }}
        toolBarRender={({ checkedKeys, clearCheckedKeys }) => {
          return (
            <SearchTree.BreadCrumb
              title={`已选${checkedKeys.length}`}
              rightRender={() => (
                <Button type="link" onClick={clearCheckedKeys}>
                  清空
                </Button>
              )}
            />
          );
        }}
        checkable
      />
      <Button
        type="primary"
        onClick={() => {
          console.log(checkedKeys);
        }}
      >
        保存
      </Button>
    </>
  );
};
```

### 无搜索

Demo:

```jsx
import React from 'react';
import { message } from 'antd';
import { SearchTree } from '@jzo/a-cn';

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
    <SearchTree
      treeData={treeData}
      hideSearch={true}
      checkedKeys={['2-1']}
      onSelect={(keys, item) => {
        console.log(keys, item);
      }}
      checkable
    />
  );
};
```

### 目录树

Demo:

```jsx
import React from 'react';
import { message } from 'antd';
import { SearchTree } from '@jzo/a-cn';
import {
  CarryOutOutlined,
  FormOutlined,
  AreaChartOutlined,
} from '@ant-design/icons';

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
    <SearchTree
      treeData={treeData}
      defaultSelectedKeys={['2-1']}
      iconRender={({ type, selected }) => {
        if (type == 1) {
          return <CarryOutOutlined />;
        } else if (type == 2) {
          return <FormOutlined />;
        } else {
          return <AreaChartOutlined />;
        }
      }}
      onSelect={(keys, item) => {
        console.log(keys, item);
      }}
      menuRightRender={(key, item) => {
        return [
          {
            key: 'add',
            title: '新增',
            icon: '',
            onClick: () => {
              message.success(`当前选中“${item?.title}”`);
              console.log('key', key, item);
            },
          },
          {
            key: 'delete',
            title: '删除',
            onClick: () => {
              message.success(`当前选中“${item?.title}”`);
              console.log('key', key);
            },
          },
        ];
      }}
      toolBarRender={({ checkedKeys, clearCheckedKeys, allCheckedKeys }) => {
        return <SearchTree.BreadCrumb title="产品目录" />;
      }}
    />
  );
};
```

---

### Api

| 属性名              | 说明                          | 类型                                                | 默认                       |
| ------------------- | ----------------------------- | --------------------------------------------------- | -------------------------- |
| treeData            | 树状数据                      | Array                                               | []                         |
| modelKeys           | 字段索引值转化                | Array                                               | ['children','title','key'] |
| defaultSelectedKeys | 默认选中的树节点              | string[]                                            | []                         |
| hideSearch          | 是否显示搜索                  | bool                                                | false                      |
| onSelect            | 点击树节点触发                | (keys,node)=>{}                                     | -                          |
| toolBarRender       | 渲染工具栏                    | ({checkedKeys,clearCheckedKeys,allCheckedKeys})=>{} | null                       |
| placeholder         | 搜索框 hideSearch = true 使用 | string                                              | 请输入查询条件             |
| iconRender          | 显示 icon                     | 数据节点的 icon 展示 (node,isExpand)=>{}            | null                       |
| menuRightRender     | 菜单显示                      | (key,item)=>{}                                      | []                         |

### menuRightRender 菜单

| 属性名  | 说明          | 类型   | 默认 |
| ------- | ------------- | ------ | ---- |
| key     | 唯一标识      | string | []   |
| name    | 名称          | String | ''   |
| icon    | 菜单显示 icon | string | []   |
| onClick | 点击事件      | fun    | -    |

--

More skills for writing demo: https://d.umijs.org/guide/demo-principle
