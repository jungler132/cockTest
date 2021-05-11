import { View , Text ,ScrollView} from 'react-native';
import React from 'react';
import RecipeBlock from '../../../components/recipeBlock/recipeBlock';
import { styles } from './styles';
import { colors } from '../../../services/config/colors';

const InspireScreen = () => {
  const Vana = [1,1,1,1,1,1,1,1]

    return (
      <View style={{flex:1 , backgroundColor:colors.silver}}>
        <ScrollView style={{flex:1}}>
            {Vana.map((item , index) => (
              <View style={{width:180 , height:'40%', borderRadius:50 , marginBottom:10 , marginStart:10}}>
                <RecipeBlock key={index}/>
              </View>
          
        ))}
        </ScrollView>
        </View>
    )
}

export default InspireScreen;