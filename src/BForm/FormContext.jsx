import * as React from 'react';

/**
 * 存储数据用于跨组件
 */

const Context = React.createContext({});
Context.displayName = 'FormContext';
export default Context;
