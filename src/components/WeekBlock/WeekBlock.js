import React, {useRef, useState} from 'react';
import weekbBlock from './WeekBlock.module.scss'
import ResizableTextarea from '../textarea/textarea'



const WeekBlock = ({editing, text, index, onchange, entry}) => {
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
    entry[key] = e.target.value

    if(key == 'startDate'){
      entry.endDate = getNextFriday(new Date(entry[key]))
    }

    onchange(index, entry)
  }

  var pad = (num, size) => {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
  }
  var getNextFriday = (d) => {
    var end = d
    var i = 0  
    while(end.getUTCDay() != 5 && i < 7){
        end.setDate(end.getDate()+1)
        i++
    }
    return end.getFullYear() + '-' + pad(end.getMonth()+1, 2) + '-' +pad(end.getDate(),2) 
  }
  return (
    <>
    {editing 
      ? (
        <div className={weekbBlock.pTag}>
          <input type="date" defaultValue={entry.startDate} className={weekbBlock.inputDate} onChange={(e) => {update(e, 'startDate')}}></input><span> - </span> 
          <input type="date" value={entry.endDate} className={weekbBlock.inputDate} onChange={(e) => {update(e, 'endDate')}}></input>  
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
