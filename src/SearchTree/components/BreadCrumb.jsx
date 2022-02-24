import React from 'react';
import styles from '../style.less';

const BreadCrumb = ({ title, rightRender }) => {
  return (
    <div className={styles.breadCrumb}>
      <span>{title}</span>
      <div>{rightRender?.()}</div>
    </div>
  );
};

BreadCrumb.defaultProps = {
  rightRender: null,
};

export default BreadCrumb;
