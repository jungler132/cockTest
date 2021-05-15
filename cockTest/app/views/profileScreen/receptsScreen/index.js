import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { View , Text} from 'react-native'
import { useSelector } from 'react-redux';
import RecipeBlock from '../../../components/recipeBlock/recipeBlock';
import { getFavDataFromStore } from '../../../modules/saga/selectors';
import { styles } from './styles';
import { colors } from '../../../services/config/colors'

const ReceptScreen = () => {

    const favData = useSelector(getFavDataFromStore);
    const [ fromProfile , setFromProfile ] = useState(true)
    console.log('favData inside profile screen' , favData)
    return (
      <ScrollView contentContainerStyle={{flexWrap:'wrap',flexDirection:'row',alignItems:'flex-start' , justifyContent:'space-between' , marginStart:10, marginEnd:10}} style={{backgroundColor:colors.silver}}>
        {favData?.map((item , index) => (
          <View style={{width:'45%',height:300,marginTop:10}}>
            <RecipeBlock  key={index} publisher={item.publisher} imageUrl={item.imageUrl} title={item.title} recipeId={item.recipeId}/>
        </View>
        ))}
      </ScrollView>
    )
}

export default ReceptScreen;