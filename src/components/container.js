import React from 'react';

import * as style from '../styles/container.module.css';

const Container = ({children}) => {
  return (
    <div className={style.content}>
      {children}
    </div>
  )
}

export default Container;
