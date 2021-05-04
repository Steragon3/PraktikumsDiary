const initState = {entries: []}
  
const diaryReducer = (state = initState, action) => {
    switch (action.type) {
        case 'diary/update':
            return action.payload;
        case 'diary/fetch':
            return action.payload;
        case 'diary/error':
            console.log('diary err');
            return action.payload;
        default:
            return state;
    }
};

export default diaryReducer;