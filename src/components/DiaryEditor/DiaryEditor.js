import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './DiaryEditor.module.scss';
import DiaryEntry from '../DiaryEntry/DiaryEntry'
import DeleteEntry from '../DeleteEntry/DeleteEntry'
import {Droppable, DragDropContext} from 'react-beautiful-dnd'
const DiaryEditor = () => {
  const initialData = [
      {
          "id": 1,
          "type": "Heading",
          "level": 1,
          "value": "Mein nices Praktikum"
      },
      {
        "id": 2,
          "type": "Heading",
          "level": 2,
          "value": "Mein nices Praktikum"
      },
      {
        "id": 3,
          "type": "Text",
          "level": 2,
          "value": "Mein nices Praktikum"
      },
      {
        "id": 4,
          "type": "Heading",
          "level": 1,
          "value": ""
        },
        {
          "id": 5,
          "type": "Heading",
          "level": 1,
          "value": "Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3"
      }
  ]
  let [data, setItems] = useState(initialData)

  let onDragEnd = (result) => {
    if(!result.destination) return;
    
    if(result.destination.droppableId == 'bucket'){
      deleteItem(result.source.index)
    }else{
      const tempitems = Array.from(data)
      const [reorderedItem] = tempitems.splice(result.source.index,1)
      tempitems.splice(result.destination.index, 0, reorderedItem)
      setItems(tempitems)
    }
  }

  const updateItem = (index, item) => {
    let items = Array.from(data)
    items[index].value = item.target.value
    setItems(items)
  }

  const swapItems = (aInd, bInd) => {
    if(bInd < 0 || bInd > data.length-1){
    }else{
      console.log(aInd, bInd)
      let items = Array.from(data)
      let temp = items[bInd]
      items[bInd] = items[aInd]
      items[aInd] = temp

      setItems(items)
    }
  }

  const deleteItem = (index) => {
    const tempitems = Array.from(data)
    tempitems.splice(index, 1)
    setItems(tempitems)
  }

  return (
  <div className={styles.DiaryEditor}>
    <DragDropContext
          onDragEnd={onDragEnd} >

          <Droppable droppableId="entries">
              {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className={styles.EntryLists} >
                  { data.map((entry, index) => {
                    return <DiaryEntry key={entry.id} entry={entry} index={index} onchange={updateItem} swapItems={swapItems} deleteItem={deleteItem}></DiaryEntry>
                  })}
                  {provided.placeholder}
                </div>
              )}
          </Droppable>
          <Droppable droppableId="bucket">
              {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <DeleteEntry></DeleteEntry>
                  {provided.placeholder}
                </div>
              )}
          </Droppable>
        </DragDropContext>
    
  </div>
  )
}

DiaryEditor.propTypes = {};

DiaryEditor.defaultProps = {};

export default DiaryEditor;
