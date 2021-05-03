import React from 'react'
import PropTypes from 'prop-types'
import styles from './DiaryEntry.module.scss'
import HeadingEntry from '../HeadingEntry/HeadingEntry'
import TextEntry from '../TextEntry/TextEntry'
import {Draggable} from 'react-beautiful-dnd'

const DiaryEntry = ({entry, index, onchange, swapItems, deleteItem}) => {
  switch(entry.type){
    case "Heading":
      return <HeadingEntry  level={entry.level} text={entry.value} index={index} id={entry.id} onchange={onchange} swapItems={swapItems} deleteItem={deleteItem}></HeadingEntry>
    case "Text":
      return <TextEntry     level={entry.level} text={entry.value} index={index} id={entry.id} onchange={onchange} swapItems={swapItems}> deleteItem={deleteItem}</TextEntry>
    default:
      return <>Not Implemented type</>
  }
}

DiaryEntry.propTypes = {};

DiaryEntry.defaultProps = {};

export default DiaryEntry;
