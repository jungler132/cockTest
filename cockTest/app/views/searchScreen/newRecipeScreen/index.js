import React from 'react';
import { View , Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../checkedRecipeScreen/styles';
import TrandRecipeComponent from '../../../components/trandRecipeBlock/trandRecipeBlock'

const NewRecipeScreen = () => {
  const array = [1,2,3,4,5,6,7,8,9]

    return (
      <View  style={styles.mainViewStyle}>
        <ScrollView contentContainerStyle={{flexWrap:'wrap' , flexDirection:'row'}}>
          {array.map((index) => (
           <TrandRecipeComponent key={index}/>
          ))}
        </ScrollView>
      </View>
    )
}

export default NewRecipeScreen;