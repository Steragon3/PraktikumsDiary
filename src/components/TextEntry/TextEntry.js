import React,{useState} from 'react';
import PropTypes from 'prop-types';
import styles from './TextEntry.module.scss';
import {Draggable} from 'react-beautiful-dnd'
import draggablestyles from '../DiaryEntry/DiaryEntry.module.scss'
import EntryControls from '../EntryControls/EntryControls';
import ControlButton from '../ControlButton/ControlButton'
import edit from '../../images/edit_black_24dp.svg'
import remove from '../../images/delete_black_24dp.svg'
const TextEntry = ({id, index, text, level, onchange, swapItems, deleteItem}) => {
  
  let [editing, setEditing] = useState(false)

  return (
    <Draggable draggableId={`${id}`} index={index}>
    {(provided, snapshot) => (
      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className={draggablestyles[`Level${level}`]} id={`${id}`}>
        <div className={draggablestyles.relative}>

          { editing
            ? <input type="text" defaultValue={text} onChange={(e) => {onchange(index, e)}} className={draggablestyles.Entry}></input>
            : <p className={draggablestyles.Entry}>{text}</p>  
          }

          <span className={draggablestyles.Label}>
            Text
            <ControlButton img={edit} onclick={() =>{setEditing(!editing)}}></ControlButton>
            <ControlButton img={remove} onclick={() => {deleteItem(index)}}></ControlButton>
          </span>
          <EntryControls index={index} swapItems={swapItems}></EntryControls>
        </div>
      </div>
      )
    }
  </Draggable>
  )
}


export default TextEntry;
