import companyReducer  from './companyReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    company: companyReducer
})

export default rootReducer