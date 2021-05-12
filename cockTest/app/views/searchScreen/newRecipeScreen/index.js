import React from 'react';
import { View , Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../checkedRecipeScreen/styles';
import TrandRecipeComponent from '../../../components/trandRecipeBlock/trandRecipeBlock'

const NewRecipeScreen = () => {
  const array = [1,1,1,1,1,1,1,1]

    return (
      <View  style={styles.mainViewStyle}>
        <ScrollView contentContainerStyle={{justifyContent:'space-evenly' , alignItems:'flex-start'}}>
          {array.map((index) => (
           <TrandRecipeComponent key={index}/>
          ))}
        </ScrollView>
      </View>
    )
}

export default NewRecipeScreen;