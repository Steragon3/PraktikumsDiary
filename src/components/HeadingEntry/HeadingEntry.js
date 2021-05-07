import React from 'react';
import draggablestyles from '../DiaryEntry/DiaryEntry.module.scss'


const HeadingEntry = ({editing, text, index, onchange, entry}) => {
  let update = (e) => {
    entry.value = e.target.value
    onchange(index, entry)
  }

  return (
    <>
    {editing 
      ? <input type="text" defaultValue={text} className={draggablestyles.Entry} onChange={(e) => {update(e)}}></input>  
      : <p className={draggablestyles.Entry}>{text}</p>
    }
    </>
  )
}

export default HeadingEntry;
