const fetchCompany = () => async(dispatch,getState, {getFirestore}) => {
    const firestore = getFirestore();
    let action = await firestore.collection("companies").get().then((data) => {
        let companies = []
        data.forEach((doc)=>{
            var data = doc.data()
            companies.push({id: doc.id ,...data})
            // companies.push({id: doc.id ,name: data.name, longitude: data.longitude, latitude: data.latitude})
        })
        return ({
            type: 'company/fetch',
            payload: companies
        })
    }).catch((err) => {
        return {
            type: 'company/error',
            payload: err
        }
    })
    dispatch(action)
    return (action.payload)
}

export default fetchCompany