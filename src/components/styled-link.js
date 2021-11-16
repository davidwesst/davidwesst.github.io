import React from 'react';
import { Link } from 'gatsby';

import * as styles from '../styles/styled-link.module.css';

const StyledLink = ({children, to}) => {
  return (
    <Link className={styles.StyledLink} to={to}>
      {children}
    </Link>
  );
}

export default StyledLink;
