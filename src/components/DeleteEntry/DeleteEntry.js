import React from 'react';
import PropTypes from 'prop-types';
import styles from './DeleteEntry.module.scss';
import remove from '../../images/delete_black_24dp.svg'

const DeleteEntry = () => (
  <div className={styles.DeleteEntry}>
    <img src={remove}></img>
  </div>
);

DeleteEntry.propTypes = {};

DeleteEntry.defaultProps = {};

export default DeleteEntry;
