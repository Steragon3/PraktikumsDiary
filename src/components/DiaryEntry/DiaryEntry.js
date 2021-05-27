import React, {useState} from 'react'
import styles from './DiaryEntry.module.scss'
import HeadingEntry from '../HeadingEntry/HeadingEntry'
import TextEntry from '../TextEntry/TextEntry'
import {Draggable} from 'react-beautiful-dnd'
import down from '../../images/expand_more_black_24dp.svg'
import up from '../../images/expand_less_black_24dp.svg'
import EntryControls from '../EntryControls/EntryControls';
import ControlButton from '../ControlButton/ControlButton'
import edit from '../../images/edit_black_24dp.svg'
import remove from '../../images/delete_black_24dp.svg'
import WeekBlock from '../WeekBlock/WeekBlock'

const DiaryEntry = ({entry, index, onchange, swapItems, deleteItem}) => {
  let [editing, setEditing] = useState(false)

  let renderSwitch = () => {
    switch(entry.type){
      case "Heading":
        return <HeadingEntry  text={entry.value} editing={editing} index={index}  onchange={onchange} entry={entry}></HeadingEntry>
      case "Text":
        return <TextEntry     text={entry.value} editing={editing} index={index} onchange={onchange} entry={entry}></TextEntry>
      case "Week":
        return <WeekBlock     text={entry.value} editing={editing} index={index} onchange={onchange} entry={entry}></WeekBlock>
      default:
        return <>Not Implemented type</>
    }
  }

  let renderLabel = () => {
    return entry.type === 'Text' ? 'Text' : `${entry.type} ${entry.level}`  
  }

  return (<Draggable draggableId={`${entry.id}`} index={index}>
    {(provided, snapshot) => (
      <div ref={provided.innerRef} {...provided.draggableProps} className={styles[`Level${entry.level}`] + " " + styles.LevelAll} id={`${entry.id}`}>
        <div className={styles.relative}>
          { renderSwitch() }

          <span className={styles.Label}>
            {renderLabel()}
            <ControlButton img={edit} onclick={() =>{setEditing(!editing)}}></ControlButton>
            <ControlButton img={remove} onclick={() => {deleteItem(index)}}></ControlButton>
          </span>
          <div className={styles.EntryControls} {...provided.dragHandleProps} >  
            <ControlButton img={up} onclick={() => {swapItems(index, index-1)}}></ControlButton>
            <ControlButton img={down} onclick={() => {swapItems(index, index+1)}}></ControlButton>
          </div>
          {/* <EntryControls index={index} swapItems={swapItems} controls={...provided.dragHandleProps}></EntryControls> */}
        </div>
      </div>
      )
    }
  </Draggable>)
}

DiaryEntry.propTypes = {};

DiaryEntry.defaultProps = {};

export default DiaryEntry;
