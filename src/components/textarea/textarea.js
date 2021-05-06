import React, { useState, useEffect } from "react";

const  ResizableTextarea = ({defaultValue, update, className, minRows, maxRows, placeholder}) => {
  const [rows, setRows] = useState(5)
  
  
  const handleChange = (event) => {
    console.log(event)
    const textareaLineHeight = 24;

    const previousRows = event.target.rows;
    event.target.rows = minRows; // reset number of rows in textarea

    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }
    if (currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }
    setRows(currentRows < maxRows ? currentRows : maxRows)
    update(event, 'value')
  };
    return (
      <textarea
        rows={rows}
        defaultValue={defaultValue}
        className={className}
        onChange={(e)=>{handleChange(e)}}
        placeholder={placeholder}
      />
    );

}

export default ResizableTextarea;
