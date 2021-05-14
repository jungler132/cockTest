import React, { useEffect } from 'react';
import { View , Text , TouchableOpacity , ScrollView} from 'react-native'
import { styles } from './styles';
import SvgComponentGoBack from '../../assets/svg/goBack'
import MealsInfo from '../../components/mealInfo/mealInfo';
import { useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';
import { setMealName } from './redux/actions';
import { mealByNameWatcher } from './saga/actions';
import { getMealByNameData } from '../../modules/saga/selectors'

const MealsBySeacrh = ({route}) => {

    const { key , dataT , params } = route;
    const mealName = params?.route?.params?.name || params?.route?.params;
    const dispatch = useDispatch();
    const data = useSelector(getMealByNameData);
    const navigation = useNavigation();
    const { count } = data;
    const { recipes } = data;

    useEffect(() => {
      dispatch(setMealName(mealName))
      dispatch(mealByNameWatcher())
    },[])

    return (
      <>
      <View style={styles.mainViewStyle}>
        <TouchableOpacity onPress={() => navigation.goBack(null)} style={styles.goBackButtonPosition}>
          <SvgComponentGoBack/>
        </TouchableOpacity>
        <View style={styles.bottomViewStyle}>
          <Text numberOfLines={1} style={styles.titleNameStyle}>
          {mealName}
          </Text>
        </View>
      </View>
      <ScrollView style={styles.scrollViewStyle}>
        <Text style={styles.allRecipeStyle}>
          All recipes({count})
        </Text>
        {recipes?.map((item , index) => (
          <MealsInfo key={index} publisher={item.publisher} imageUrl={item.image_url} title={item.title} recipeId={item.recipe_id} publisherUrl={item.publisher_url}/>
        ))}
      </ScrollView>
      </>
    )
}

export default MealsBySeacrh;