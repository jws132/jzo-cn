import React from 'react';
import { JForm, NumRange } from '@jzo/a-cn';

export default () => {
  const props = {
    column: 1,
    style: { width: 500 },
    fields: [
      {
        type: 'custom',
        label: '年龄区间',
        name: 'ageRange',
        renderChild: <NumRange precision={2} />,
        props: {
          onChange(v) {
            console.log(v);
          },
        },
      },
    ],
    submitCall: values => {
      console.log(values);
    },
  };
  return <JForm {...props} />;
};
