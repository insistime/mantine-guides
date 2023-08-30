// react
import React from 'react';

// styles
import { useStyles } from './index-styles.js';

/**
 * Index
 */
export const Index = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.child}>createStyles demo</div>
    </div>
  );
};
