import React,{useState} from 'react';
import PropTypes from 'prop-types';
import styles from './TextEntry.module.scss';
import {Draggable} from 'react-beautiful-dnd'
import draggablestyles from '../DiaryEntry/DiaryEntry.module.scss'
import EntryControls from '../EntryControls/EntryControls';
import ControlButton from '../ControlButton/ControlButton'
import edit from '../../images/edit_black_24dp.svg'
import remove from '../../images/delete_black_24dp.svg'
const TextEntry = ({editing, index, text, onchange, entry}) => {
  let update = (e) => {
    entry.value = e.target.value
    onchange(index, entry)
  }

  return (
      <>
          { editing
            ? <input type="text" defaultValue={text} onChange={(e) => {update(e)}} className={draggablestyles.Entry}></input>
            : <p className={draggablestyles.Entry}>{text}</p>  
          }

      </>
  )
}


export default TextEntry;
