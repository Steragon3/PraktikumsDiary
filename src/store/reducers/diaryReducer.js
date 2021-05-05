const initState = {entries: []}
  
const diaryReducer = (state = initState, action) => {
    switch (action.type) {
        case 'diary/update':
            return state;
        case 'diary/fetch':
            return action.payload;
        case 'diary/error':
            console.log('diary err');
            console.log(action.payload)
            return state
        default:
            return state;
    }
};

export default diaryReducer;