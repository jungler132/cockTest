import { View , Text ,ScrollView} from 'react-native';
import React, { useEffect } from 'react';
import RecipeBlock from '../../../components/recipeBlock/recipeBlock';
import { styles } from './styles';
import { colors } from '../../../services/config/colors';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipesHomeScreen } from './saga/actions';
import { getDataForHomeScreen } from '../../../modules/saga/selectors';
import getData from '../../../services/api/getSearchableData';

const InspireScreen = () => {

  const dispatch = useDispatch();
  const data = useSelector(getDataForHomeScreen)
  //const data = getData();
  // console.log(data)

  const countRecipes = data?.count;
  // console.log('countRecipes--->',countRecipes)
  const recipes = data?.recipes
  // console.log('recipes--->',recipes)


  useEffect(() => {
    dispatch(getRecipesHomeScreen())
  },[])

    return (
      <View style={styles.mainViewStyle}>
        <ScrollView style={styles.sctollViewStyle}>
          <View style={{flex:1 ,alignItems:'flex-start', justifyContent:'center'}}>
            {recipes?.map((item , index) => (
              <View style={styles.insideViewStyle}>
                <RecipeBlock key={index} publisher={item.publisher} imageUrl={item.image_url} title={item.title} recipeId={item.recipe_id}/>
              </View>
        ))}
        </View>
        </ScrollView>
        </View>
    )
}

export default InspireScreen;