import React from 'react';
import { JForm } from '@jzo/a-cn';
import { complexForm } from './AllComMap';

export default () => {
  const props = {
    layout: 'vertical',
    gutter: 20,
    fields: complexForm,
    submitCall: values => {
      console.log(values);
    },
  };
  return <JForm {...props} />;
};
