import React from 'react';
import PropTypes from 'prop-types';
import styles from './DiaryScreen.module.scss';
import DiaryEditor from '../DiaryEditor/DiaryEditor';
import Menu from '../Menu/Menu';

const DiaryScreen = () => {
  return (
    <DiaryEditor></DiaryEditor>
  )
}

DiaryScreen.propTypes = {};

DiaryScreen.defaultProps = {};

export default DiaryScreen;
