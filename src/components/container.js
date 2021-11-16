import React from 'react';

import * as styles from '../styles/container.module.css';

const Container = ({children}) => {
  return (
    <div className={styles.Container}>
      {children}
    </div>
  )
}

export default Container;
