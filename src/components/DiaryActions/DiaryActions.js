import React from 'react';
import PropTypes from 'prop-types';
import styles from './DiaryActions.module.scss';

const DiaryActions = ({addItem}) => {
  
  return (
    <div className={styles.DiaryActions}>
      <button onClick={() => {addItem({type: 'Heading', level: 1, value: ''})}}>Heading Level 1</button>
      <button onClick={() => {addItem({type: 'Heading', level: 2, value: ''})}}>Heading Level 2</button>
      <button onClick={() => {addItem({type: 'Heading', level: 3, value: ''})}}>Heading Level 3</button>
      <button onClick={() => {addItem({type: 'Heading', level: 4, value: ''})}}>Heading Level 4</button>
      <button onClick={() => {addItem({type: 'Heading', level: 5, value: ''})}}>Heading Level 5</button>
      <button onClick={() => {addItem({type: 'Week', level: 2, value: '', startDate: '', endDate:''})}}>Week</button>
      <button onClick={() => {addItem({type: 'Text', level: 1, value: ''})}}>Text</button>
    </div>
  )
}

DiaryActions.propTypes = {};

DiaryActions.defaultProps = {};

export default DiaryActions;
