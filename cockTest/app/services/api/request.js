import storeData from './saveAsync'

const sendRequest = async() => {

    try {
        const responce = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza', {
          method: 'GET'
        })
        storeData(responce.json)
        return await responce.json();
    } catch (error) {
        console.log('ERROR --->', error);
    }
};

export default sendRequest;