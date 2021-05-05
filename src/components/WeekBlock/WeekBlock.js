import React,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import draggablestyles from '../DiaryEntry/DiaryEntry.module.scss'
import weekbBlock from './WeekBlock.module.scss'
import autoGrow from '../../frontendJS/autoGrow'
import ResizableTextarea from '../textarea/textarea'



const WeekBlock = ({editing, text, index, onchange, entry}) => {

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
            <ResizableTextarea defaultValue={text} className={weekbBlock.inputText} update={update} minRows="1" maxRows="1000"/>
            {/* <input type="text" defaultValue={text} className={weekbBlock.inputText} onChange={(e) => {update(e, 'value')}}></input>   */}
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
