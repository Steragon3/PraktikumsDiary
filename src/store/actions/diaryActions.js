import {auth} from '../../firebase'
import initialDiary from './initialDiary'

const updateDiary = (diary) => async(dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection("journals").doc(auth.currentUser.uid).set(diary)
    .then((data) => {
        dispatch({
            type: 'diary/update',
            payload: data
        })
    })
    .catch((err) => {
        console.log(err)
        dispatch({
            type: 'diary/error',
            payload: err
        })
    })
};

const fetchDiary = () => async(dispatch,getState, {getFirestore}) => {
        const firestore = getFirestore();

        let action = await firestore.collection("journals").doc(auth.currentUser.uid).get().then((data) => {
            if(data.exists){
                return ({
                    type: 'diary/fetch',
                    payload: data.data()
                })
            }else{
                return ({
                    type: 'diary/fetch',
                    payload: initialDiary
                })
            }
        }).catch((err) => {
            return {
                type: 'diary/error',
                payload: err
            }
        })
        dispatch(action)
        return (action.payload)
}

export {updateDiary as updateDiary, fetchDiary as fetchDiary}