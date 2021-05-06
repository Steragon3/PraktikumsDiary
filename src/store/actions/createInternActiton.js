const CreateInternPost = (internPost) => async(dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection("interns").doc().set(internPost)
    .then((data) => {
        console.log("alles ok"+ data)
        dispatch({
            type: 'internPost/create',
            payload: data
        })
    })
    .catch((err) => {
        console.log(err)
        dispatch({
            type: 'internPost/error',
            payload: err
        })
    })
};

export default CreateInternPost