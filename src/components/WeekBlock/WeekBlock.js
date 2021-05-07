import React from 'react';
import weekbBlock from './WeekBlock.module.scss'
import ResizableTextarea from '../textarea/textarea'



const WeekBlock = ({editing, text, index, onchange, entry}) => {
  console.log(entry.startDate)
  if(entry.startDate===""){
    entry.startDate="Start"
  }
  if(entry.endDate===""){
    entry.endDate="End"
  }
  if(text===""){
    text = "Enter text"
  }
  let update = (e, key) => {
    console.log("patzi")
    entry[key] = e.target.value
    onchange(index, entry)
}

  return (
    <>
    {editing 
      ? (
        <div className={weekbBlock.pTag}>
          <input type="date" defaultValue={entry.startDate} className={weekbBlock.inputDate} onChange={(e) => {update(e, 'startDate')}}></input><span> - </span> 
          <input type="date" defaultValue={entry.endDate} className={weekbBlock.inputDate} onChange={(e) => {update(e, 'endDate')}}></input>  
          <div>
            <ResizableTextarea defaultValue={text} className={weekbBlock.inputText} update={update} minRows="1" maxRows="1000" placeholder="Enter text!"/>
          </div>
        </div>
        )
      :
      (
        <div className={weekbBlock.pTag}>
          <p className={weekbBlock.pDate}>Date: <span className={weekbBlock.spanElements}>{entry.startDate}</span> - <span className={weekbBlock.spanElements}>{entry.endDate}</span></p>
          <span></span>
          <p className={weekbBlock.pItems}>{text}</p>
        </div>
      ) 
    }
    </>
  )
  }

WeekBlock.propTypes = {};

WeekBlock.defaultProps = {};

export default WeekBlock;
