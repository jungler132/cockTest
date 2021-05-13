import React, { useEffect } from 'react';
import { View , Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './styles'
import TrandRecipeComponent from '../../../components/trandRecipeBlock/trandRecipeBlock'
import { getRandomRecipeForSearch } from '../../../modules/saga/selectors';
import { getRecipesHomeScreen } from './saga/actions';
import { useDispatch, useSelector } from 'react-redux';

const NewRecipeScreen = () => {

  const dispatch = useDispatch();
  const data = useSelector(getRandomRecipeForSearch)
  const countRecipes = data?.count;
  const recipes = data?.recipes;

  const imagesArray = [
    {image:'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?size=626&ext=jpg', name:'pizza'},
    {image:'https://trishnainternational.com/uploaded_files/2505.jpg', name:'potato'},
    {image:'https://www.spicemountain.co.uk/wp-content/uploads/2019/10/apple.jpg', name:'apple'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWvTwuqbZQ6YXRuk9QWmE5ooAp9YZ3MviXkw&usqp=CAU', name:'melon'},
    {image:'https://s01.sgp1.cdn.digitaloceanspaces.com/article/143395-pysnzzzleh-1593090551.jpg', name:'hamburger'},
    {image:'https://img2.10bestmedia.com/Images/Photos/380699/GettyImages-855447930_54_990x660.jpg', name:'ice'},
    {image:'https://thenovicechefblog.com/wp-content/uploads/2012/01/How-to-cook-bacon-in-the-oven-1-sm-720x405.jpg', name:'bacon'},
    {image:'https://i8.amplience.net/i/traeger/20190309_Smoked-Peppered-Beef-Tenderloin_RE_HE_M?w=1200&sm=aspect&aspect=2:1&scaleFit=poi&$poi2$', name:'beef'},
    {image:'https://cdn8.dissolve.com/p/D2115_169_346/D2115_169_346_1200.jpg', name:'fish'},
    {image:'https://image.freepik.com/free-photo/top-view-assortment-with-chicken-food-salad_23-2148308840.jpg', name:'chicken'}
  ]
  
  useEffect(() => {
    dispatch(getRecipesHomeScreen())
  },[])


    return (
      <View style={styles.mainViewStyle}>
        <ScrollView contentContainerStyle={{flexWrap:'wrap' , flexDirection:'row'}}>
          {imagesArray?.map((item , index , id) => (
           <TrandRecipeComponent menuData={item} key={index}/>
          ))}
        </ScrollView>
      </View>
    )
}

export default NewRecipeScreen;