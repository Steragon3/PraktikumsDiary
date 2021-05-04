export const createCompany = (project) => {
    return (dispatch, getState, {getFirestore}) => {
      
      const firestore = getFirestore();
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