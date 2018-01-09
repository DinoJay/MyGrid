import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from './Comp.scss';

// import Comp2 from './Comp2';

class Comp extends Component {
  // static propTypes = {
  //   children: PropTypes.node,
  //   className: PropTypes.string,
  // };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.base} />
    );
  }
}

export default Comp;
