import React from 'react';
import styles from './EntryControls.module.scss';
import down from '../../images/expand_more_black_24dp.svg'
import up from '../../images/expand_less_black_24dp.svg'
import ControlButton from '../ControlButton/ControlButton'

const EntryControls = ({index, swapItems}) => (
  <div className={styles.EntryControls}>
    <ControlButton img={up} onclick={() => {swapItems(index, index-1)}}></ControlButton>
    <ControlButton img={down} onclick={() => {swapItems(index, index+1)}}></ControlButton>
  </div>
);

EntryControls.propTypes = {};

EntryControls.defaultProps = {};

export default EntryControls;
