import React, { useContext } from 'react';

export const formContext = React.createContext({
  itemLayout: '',
  layout: 'horizontal',
  formInstance: null,
});
export default formContext;
