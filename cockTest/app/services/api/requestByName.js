import storeData from './saveAsync'




const sendRequestByName = async(name) => {
    try {
        const responce = await fetch('https://forkify-api.herokuapp.com/api/search?q='+ name, {
          method: 'GET'
        })
        storeData(responce.json)
        return await responce.json();
    } catch (error) {
        console.log('ERROR --->', error);
    }
};

export default sendRequestByName;