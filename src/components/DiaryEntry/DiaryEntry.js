import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styles from './DiaryEntry.module.scss'
import HeadingEntry from '../HeadingEntry/HeadingEntry'
import TextEntry from '../TextEntry/TextEntry'
import {Draggable} from 'react-beautiful-dnd'

import EntryControls from '../EntryControls/EntryControls';
import ControlButton from '../ControlButton/ControlButton'
import edit from '../../images/edit_black_24dp.svg'
import remove from '../../images/delete_black_24dp.svg'
import WeekBlock from '../WeekBlock/WeekBlock'

const DiaryEntry = ({entry, index, onchange, swapItems, deleteItem}) => {
  let [editing, setEditing] = useState(false)

  console.log(entry)

  let renderSwitch = () => {
    switch(entry.type){
      case "Heading":
        return <HeadingEntry  text={entry.value} editing={editing} index={index}  onchange={onchange} entry={entry} ></HeadingEntry>
      case "Text":
        return <TextEntry     text={entry.value} editing={editing} index={index} onchange={onchange} entry={entry}></TextEntry>
      case "Week":
        return <WeekBlock     text={entry.value} editing={editing} index={index} onchange={onchange} entry={entry}></WeekBlock>
      default:
        return <>Not Implemented type</>
    }
  }

  let renderLabel = () => {
    return entry.type == 'Text' ? 'Text' : `${entry.type} ${entry.level}`  
  }

  return (<Draggable draggableId={`${entry.id}`} index={index}>
    {(provided, snapshot) => (
      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className={styles[`Level${entry.level}`]} id={`${entry.id}`}>
        <div className={styles.relative}>
          { renderSwitch() }

          <span className={styles.Label}>
            {renderLabel()}
            <ControlButton img={edit} onclick={() =>{setEditing(!editing)}}></ControlButton>
            <ControlButton img={remove} onclick={() => {deleteItem(index)}}></ControlButton>
          </span>
          <EntryControls index={index} swapItems={swapItems}></EntryControls>
        </div>
      </div>
      )
    }
  </Draggable>)
}

DiaryEntry.propTypes = {};

DiaryEntry.defaultProps = {};

export default DiaryEntry;
