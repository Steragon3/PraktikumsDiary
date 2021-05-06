const fetchDepartment = () => async(dispatch,getState, {getFirestore}) => {
    const firestore = getFirestore();
    let action = await firestore.collection("department").get().then((data) => {
        
        let departments = []
        data.forEach((doc)=>{
           departments.push(doc.id)
        })
        
        return ({
            type: 'department/fetch',
            payload: departments
        })
    }).catch((err) => {
        return {
            type: 'department/error',
            payload: err
        }
    })
    dispatch(action)
    return (action.payload)
}

export default fetchDepartment