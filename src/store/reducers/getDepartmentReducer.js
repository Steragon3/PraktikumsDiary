const initState = []
  
const getDepartmentReducer = (state = initState, action) => {
    switch (action.type) {
        case 'department/fetch':
            return action.payload;
        case 'department/error':
            console.log('department err');
            console.log(action.payload)
            return state
        default:
            return state;
    }
};

export default getDepartmentReducer;