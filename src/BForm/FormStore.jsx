import * as React from 'react';

export class FormStroe {
  fieldEntities = [];
  constructor(formInstance) {
    this.formInstance = formInstance;
  }
  getForm = () => {
    return {
      getFieldValue: this.getFieldValue,
      getFieldsValue: this.getFieldsValue,
      setFieldValue: this.setFieldValue,
      setFieldDisabled: this.setFieldDisabled,
      getInternalHooks: this.getInternalHooks,
    };
  };

  getInternalHooks = () => {
    return {
      fieldRegister: this.fieldRegister,
    };
  };

  // 根据name获取store中的值
  getFieldValue = name => {
    return this.store[name];
  };

  // 获取整个store
  getFieldsValue = () => {
    return { ...this.store };
  };

  setFieldValue(name, value) {
    // 1. 设置值
    const fieldData = [
      {
        name,
        value,
        errors: [], // setFieldValue 使用 setFields 实现，需要显式clear errors
      },
    ];

    this.formInstance.setFields(fieldData);

    // 3. 通知更新
    this.notifyObservers(fieldData);
  }

  setFieldDisabled = (name, disabled) => {
    const field = this.getField(name);
    field.setDisabled(disabled);
  };

  // 通知 Field 组件更新
  notifyObservers = store => {
    let finalStore = store;
    if (!isArray(store)) {
      finalStore = transStore(store, this.fieldNameMap.getNameLists());
    }

    finalStore.forEach(({ name }) => {
      // fieldName -> fieldKey
      const field = this.getField(name);
      /** 动态表单删掉前面的field为空，应该不需要加了，下个版本验证下 */
      if (field) {
        field.reRender();
      }
    });
  };

  getField = name => {
    return this.fieldEntities.find(({ props }) => props.fieldKey === name);
  };

  fieldRegister = entity => {
    this.fieldEntities.push(entity);
  };
}

export function useForm(form) {
  console.log(form);
  const formRef = React.useRef(null);
  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      const contextStore = new FormStroe(form);
      formRef.current = contextStore.getForm();
    }
  }

  return [formRef.current];
}
