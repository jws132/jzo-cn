---
nav:
  title: 组件
  path: /components
group:
  title: ModalForm
---

### 基础弹框表单

Demo:

```jsx
import React from 'react';
import { message, Button, Alert } from 'antd';
import { ModalForm } from '@jzo/a-cn';

export default ({}) => {
  const [modalVisit, setModalVisit] = React.useState(false);
  const noEmpty = [{ required: true }];
  const patternPhone = /^((13[0-9])|(14[1]|[4-9])|(15([0-3]|[5-9]))|(16[2]|[5-7])|(17[0-3]|[5-8])|(18[0-9])|(19[1|8|9]))\d{8}$/;

  const onCancel = () => {
    setModalVisit(false);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setModalVisit(true);
        }}
      >
        Modal 展示
      </Button>

      <ModalForm
        title="基本信息"
        formProps={{
          column: 1,
          labelBasicSpan: 5,
        }}
        onVisibleChange={visible => {
          console.log('visible', visible);
        }}
        onCancel={onCancel}
        fields={[
          {
            type: 'input',
            label: '手机号',
            name: 'mobile',
            validOptions: {
              rules: [
                ...noEmpty,
                { pattern: patternPhone, message: '请输入正确的手机号' },
              ],
            },
          },
          {
            type: 'input',
            label: '登录名称',
            name: 'loginName',
            validOptions: {
              rules: noEmpty,
            },
          },
          {
            type: 'password',
            label: '登录密码',
            name: 'password',
            validOptions: {
              rules: [
                ...noEmpty,
                { message: '请输入密码(6-20位)', min: 6, max: 20 },
              ],
            },
          },
        ]}
        visible={modalVisit}
        beforeRender={() => (
          <Alert
            message="表单前位置渲染"
            type="warning"
            style={{ marginBottom: 10 }}
          />
        )}
        afterRender={() => <Alert message="表单后位置渲染" />}
      />
    </>
  );
};
```

---

### Api

| 属性名           | 说明                                   | 类型            | 默认    |
| ---------------- | -------------------------------------- | --------------- | ------- |
| title            | 标题                                   | (match) => void |         |
| visible          | 弹窗显示                               |                 |         |
| initialValues    | 表单初始值                             |                 |         |
| defaultActionBar | 底部是否显示按钮                       | true            |         |
| loading          | 请求的加载状态                         | (match) => void |         |
| fields           | 表单的配置项，请参考 JForm 的 fields   |                 |         |
| formProps        | form 内部的一些配置，参考 JForm 的属性 |                 |         |
| onVisibleChange  | 返回 visible 状态                      | (match) => void |         |
| actionsPosition  | 菜单位置 center ,left                  | string          | default |
| okButtonProps    | 保存按钮属性                           | object          |         |
| cancelButtonProp | 关闭按钮属性                           | object          |         |
| onOk             | 保存按钮的回调                         | func            |         |
| onCancel         | 关闭按钮的回调                         | func            |         |
| beforeRender     | 表单前的渲染 funciton =>ReactNode      | fun             |         |
| afterRender      | 表单后的渲染 funciton =>ReactNode      | fun             |         |
| actionsRender    | 底部按钮位置渲染 form=>                | fun             |         |

More skills for writing demo: https://d.umijs.org/guide/demo-principle
