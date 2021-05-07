import React  from 'react';
import draggablestyles from '../DiaryEntry/DiaryEntry.module.scss'

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
