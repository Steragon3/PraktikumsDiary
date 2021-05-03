import React,{useState} from 'react';
import PropTypes from 'prop-types';
import draggablestyles from '../DiaryEntry/DiaryEntry.module.scss'



const WeekBlock = ({editing, text, index, onchange, entry}) => {
  let update = (e, key) => {
    entry[key] = e.target.value
    onchange(index, entry)
  }

  return (
    <>
    {editing 
      ? (
        <>
          <input type="date" defaultValue={entry.startDate} className={draggablestyles.Entry} onChange={(e) => {update(e, 'startDate')}}></input>  
          <input type="date" defaultValue={entry.endDate} className={draggablestyles.Entry} onChange={(e) => {update(e, 'endDate')}}></input>  
          <input type="text" defaultValue={text} className={draggablestyles.Entry} onChange={(e) => {update(e, 'value')}}></input>  
        </>
        )
      :
      (
        <>
          <p className={draggablestyles.Entry}>{text}</p>
          <p className={draggablestyles.Entry}>{entry.startDate}</p>
          <p className={draggablestyles.Entry}>{entry.endDate}</p>
        </>
      ) 
    }
    </>
  )
  }

WeekBlock.propTypes = {};

WeekBlock.defaultProps = {};

export default WeekBlock;
