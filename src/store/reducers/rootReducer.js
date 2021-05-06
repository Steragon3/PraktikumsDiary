import diaryReducer from './diaryReducer'
import getDepartmentReducer from './getDepartmentReducer'
import getCompanyReducer  from './companyReducer'
import internShipReducer from './internshipsReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    diary: diaryReducer,
    departments: getDepartmentReducer,
    companies: getCompanyReducer,
    internships: internShipReducer
})

export default rootReducer