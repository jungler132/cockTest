import React from 'react';
import { View , Text , TouchableOpacity , ScrollView} from 'react-native'
import { styles } from './styles';
import { colors } from '../../services/config/colors'
import SvgComponentGoBack from '../../assets/svg/goBack'
import MealsInfo from '../../components/mealInfo/mealInfo';
import { useNavigation } from '@react-navigation/core';

const MealsBySeacrh = () => {

    const tempArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

    const navigation = useNavigation();

    return (
      <>
      <View style={{width:'100%' , height:50 , backgroundColor:colors.racingGreen, flexDirection:'row'}}>
        <TouchableOpacity onPress={() => navigation.goBack(null)} style={{marginTop:5 , marginStart:5 , backgroundColor:colors.racingGreen}}>
          <SvgComponentGoBack/>
        </TouchableOpacity>
        <View style={{justifyContent:'center' , alignItems:'center' , marginStart:90}}>
          <Text numberOfLines={1} style={{fontSize:25 , color:colors.white}}>
          Quick Meal
          </Text>
        </View>
      </View>
      <ScrollView style={{flex:1 , backgroundColor:colors.silver}}>
        <Text style={{color:colors.white , fontSize:25 , marginStart:10,marginTop:10}}>
          All recipes(62)
        </Text>
        {tempArr.map(() => (
          <MealsInfo/>
        ))}
      </ScrollView>
      </>
    )
}

export default MealsBySeacrh;