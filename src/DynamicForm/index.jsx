import React from 'react';
import {
  MinusCircleOutlined,
  UpCircleOutlined,
  DownCircleOutlined,
} from '@ant-design/icons';
import { Form, Button, message, Space } from 'antd';
import FormItem from '../FormItem';
import styles from './style.less';

const DynamicForm = ({
  listFormSet = [],
  hasHead,
  name,
  maxLength = 0,
  hasLabel,
  hasRemove,
  hasMove,
  footerRender,
}) => {
  console.log(name, listFormSet);
  return (
    <Form.List name={name}>
      {(fields, { add, remove, move }, { errors }) => {
        return (
          <div className={`${styles.dynamic} ant-table`}>
            <table>
              {hasHead ? (
                <thead className="ant-table-thead">
                  <tr>
                    {listFormSet.map((item, index) => (
                      <th key={item.name || item.dataIndex}>{item.label}</th>
                    ))}
                    <th>操作</th>
                  </tr>
                </thead>
              ) : null}
              <tbody className={`ant-table-tbody`}>
                {fields.map((field, index) => (
                  <tr key={field.key}>
                    {listFormSet.map((item, i) => {
                      const { name: oldName, label, dataIndex } = item;
                      const newName = oldName || dataIndex;
                      item = {
                        ...item,
                        dataIndex: [field.name, newName],
                        name: [field.name, newName],
                        fieldKey: [field.fieldKey, newName],
                        label: hasLabel ? label : '',
                      };
                      return (
                        <td key={`${field.fieldKey}_${newName}`}>
                          <FormItem fields={item} />
                        </td>
                      );
                    })}
                    <td>
                      <Space>
                        {hasRemove ? (
                          <MinusCircleOutlined
                            onClick={() => remove?.(field?.name)}
                            style={{ color: '#ff4d4f' }}
                          />
                        ) : (
                          ''
                        )}

                        {hasMove && index > 0 ? (
                          <UpCircleOutlined
                            onClick={() => move?.(index, index - 1)}
                          />
                        ) : (
                          ''
                        )}
                        {hasMove && fields.length - 1 > index ? (
                          <DownCircleOutlined
                            onClick={() => move?.(index, index + 1)}
                          />
                        ) : (
                          ''
                        )}
                      </Space>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ marginTop: 10 }}>
              {footerRender ? (
                footerRender?.({ add, length: fields.length })
              ) : (
                <Button
                  type="dashed"
                  block
                  disabled={maxLength && fields.length > Number(maxLength)}
                  onClick={() => {
                    add();
                  }}
                >
                  新增
                </Button>
              )}
            </div>
          </div>
        );
      }}
    </Form.List>
  );
};

DynamicForm.defaultProps = {
  listFormSet: [],
  hasHead: true,
  footerRender: null,
  hasLabel: true,
  hasRemove: true,
  hasMove: true,
  size: 'middle',
  maxLength: 0,
};

export default DynamicForm;
