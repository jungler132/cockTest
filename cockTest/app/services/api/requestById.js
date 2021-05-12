import storeData from './saveAsync'

const sendRequestById = async(recipeId) => {

    try {
        const responce = await fetch('https://forkify-api.herokuapp.com/api/get?rId='+ recipeId, {
          method: 'GET'
        })
        storeData(responce.json)
        return await responce.json();
    } catch (error) {
        console.log('ERROR --->', error);
    }
};

export default sendRequestById;