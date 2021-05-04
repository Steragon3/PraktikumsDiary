import diaryReducer from './diaryReducer'
import companyReducer  from './companyReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    company: companyReducer,
    diary: diaryReducer
})

export default rootReducer