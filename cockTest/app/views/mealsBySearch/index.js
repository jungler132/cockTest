import React from 'react';
import { View , Text , TouchableOpacity , ScrollView} from 'react-native'
import { styles } from './styles';
import { colors } from '../../services/config/colors'
import SvgComponentGoBack from '../../assets/svg/goBack'
import MealsInfo from '../../components/mealInfo/mealInfo';
import { useNavigation } from '@react-navigation/core';

const MealsBySeacrh = ({route}) => {

    const tempArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

    const navigation = useNavigation();

    return (
      <>
      <View style={styles.mainViewStyle}>
        <TouchableOpacity onPress={() => navigation.goBack(null)} style={styles.goBackButtonPosition}>
          <SvgComponentGoBack/>
        </TouchableOpacity>
        <View style={styles.bottomViewStyle}>
          <Text numberOfLines={1} style={styles.titleNameStyle}>
          Quick Meal
          </Text>
        </View>
      </View>
      <ScrollView style={styles.scrollViewStyle}>
        <Text style={styles.allRecipeStyle}>
          All recipes(62)
        </Text>
        {tempArr.map(() => (
          <MealsInfo data={route}/>
        ))}
      </ScrollView>
      </>
    )
}

export default MealsBySeacrh;