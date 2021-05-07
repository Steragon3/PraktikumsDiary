var API_KEY = "c317d1183d8d6261f075c90fbcf8517b"
var BASE_URL = 'http://api.positionstack.com/v1/'
var regex = /([\d]-[\d])/g

const QueryFetch = (url = BASE_URL, params) => {
    var url = new URL(url)

    Object.keys(params).forEach(key => {
        url.searchParams.append(key, params[key])
    })

    console.log(url)
    console.log(url.href)
    return fetch(url.href)
}

const createCompany = async (company, firestore) => {

    company.street = company.street.replace(regex, m => {
        m = m.replaceAll('-', '/')
        return m
    })



    let { latitude, longitude } = await QueryFetch(BASE_URL + "forward", { access_key: API_KEY, query: `${company.street}, ${company.zip}, ${company.country}` })
        .then((result) => { return result.json() })
        .then((body) => {
            return { latitude: body.data[0].latitude, longitude: body.data[0].longitude }
        }).catch((err) => {
            throw new Error(err.message)
        })
    console.log(latitude, longitude)

    let id = await firestore.collection('companies').add({ name: company.name, latitude, longitude, website: company.website }).then((docRef) => {
        return docRef.id
    }).catch((error) => {

    })

    return id
}

const cacheCompany = async (companies, company, firestore) => {
    var found = companies.find((e) => e.name === company.name)
    if (found) {
        return found.id
    } else {
        return await createCompany(company, firestore)
    }
}

const CreateInternPost = (internPost, company, companies) => async (dispatch, getState, { getFirestore }) => {
    try {
        const firestore = getFirestore();
        var companyId = await cacheCompany(companies, company, firestore)
        console.log(companyId)
        internPost.company = companyId

        firestore.collection("interns").doc().set(internPost)
            .then((data) => {
                console.log("alles ok" + data)
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
    } catch (err) {
        dispatch({
            type: 'internPost/error',
            payload: err
        })
    }
};

const fetchInternships = () => async(dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();

    let action = await firestore.collection("interns").get().then((data) => {
        let internships = []
        data.forEach((doc)=>{
            internships.push({id: doc.id, ...doc.data()})
        })
        return ({
            type: 'internships/fetch',
            payload: internships
        })
    }).catch((err) => {
        return {
            type: 'internships/error',
            payload: err
        }
    })
    dispatch(action)
    return (action.payload)
}

export {CreateInternPost, fetchInternships}