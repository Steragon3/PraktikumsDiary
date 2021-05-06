import diaryReducer from './diaryReducer'
import getDepartmentReducer from './getDepartmentReducer'
import getCompanyReducer  from '../reducers/companyReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    diary: diaryReducer,
    departments: getDepartmentReducer,
    companies: getCompanyReducer
})

export default rootReducer