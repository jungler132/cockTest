import storeData from './saveAsync'

const sendRequestRandom = async() => {

    const arrayOfMeal = ['carrot','broccoli','cucumber','apple','melon','papaya','strawberry','chicken','fish','bacon', 'radish','artichoke','saffron','grapefruit','mandarin','pizza','popcorn','steak','kebab','chili',]

    const randomMeal = arrayOfMeal[Math.floor(Math.random()*arrayOfMeal.length)];

    try {
        const responce = await fetch('https://forkify-api.herokuapp.com/api/search?q='+ randomMeal, {
          method: 'GET'
        })
        storeData(responce.json)
        return await responce.json();
    } catch (error) {
        console.log('ERROR --->', error);
    }
};

export default sendRequestRandom;