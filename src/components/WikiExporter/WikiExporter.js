import React,  { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './WikiExporter.module.scss';
import DiaryActions from '../DiaryActions/DiaryActions'
import {updateDiary, fetchDiary} from '../../store/actions/diaryActions'
import { ExportToWiki } from '../../parser/parser.js'
import { compose } from 'redux'
import { connect } from 'react-redux'
import copyIcon from '../../images/content_copy_black_24dp.svg'

const WikiExporter = ({onLoadData}) => {
  let [data, setItems] = useState([])
  const textareaElement = useRef() 
  useEffect(() => {onLoadData().then((d) => {
    setItems(ExportToWiki(d.entries))
  })}, [])
  useEffect(() => {
    console.log(textareaElement.current)
      /* textareaElement.current.select() */
  },)

  return(
    <div className={styles.WikiExporter}>
        <textarea onChange={(e)=>data = e.target.value} id="wikiText" defaultValue={data} rows="10" cols="100"></textarea>
        <button className="btn btn-primary" onClick={()=>navigator.clipboard.writeText(data)}><i class="material-icons">content_copy</i> Copy to Clipboard </button>
    </div>
    
)};
// WikiExporter.propTypes = {};

// WikiExporter.defaultProps = {};

const mapStateToProps = (state) => {
  return {
    diary: state.diary
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadData: async () => {
      return await dispatch(fetchDiary())
    },
    onupdateDiary: async (diary) => {dispatch(updateDiary(diary))}
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(WikiExporter);
