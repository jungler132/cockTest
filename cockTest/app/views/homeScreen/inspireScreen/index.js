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
  const recipes = data?.recipes

  useEffect(() => {
    dispatch(getRecipesHomeScreen())
  },[])

    return (
        <ScrollView style={styles.scrollViewStyle} contentContainerStyle={styles.contentCOntainerStyle}>
            {recipes?.map((item , index) => (
              <View key={index} style={styles.insideViewStyle}>
                   <RecipeBlock key={index} publisher={item.publisher} imageUrl={item.image_url} title={item.title} recipeId={item.recipe_id}/>
              </View>
               
        ))}
        </ScrollView>
    )
}

export default InspireScreen;