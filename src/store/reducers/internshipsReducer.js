const initState = []
  
const internshipsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'internships/fetch':
            return action.payload;
        case 'internships/error':
            console.log('internships err');
            console.log(action.payload)
            return state
        default:
            return state;
    }
};

export default internshipsReducer;