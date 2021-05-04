import {auth} from '../../firebase'
export const createCompany = (project) => {
    return (dispatch, getState, {getFirestore}) => {
      const firestore = getFirestore();
           
      firestore.collection("journals").doc(auth.currentUser.uid).get().then((data) => {
        console.log(data.exists)
        if(!data.exists){
          firestore.collection("journals").doc(auth.currentUser.uid).set({feci: 'farted'})
          .then((data) => {
            console.log(data)
          })
          .catch((err) => {
            console.log(err)
          })
        }else{
          firestore.collection("journals").doc(auth.currentUser.uid).set({feci: 'farted again'})
          .then((data) => {
            console.log(data)
          })
          .catch((err) => {
            console.log(err)
          })
          
        }
        console.log(data.docs)
      })

      
      
      firestore.collection('companies').add({
        ...project
      }).then(() => {
        dispatch({ type: 'CREATE_COMPANY' });
      }).catch(err => {
        dispatch({ type: 'CREATE_COMPANY_ERROR' }, err);
        console.log(err)
      });
    }
  };