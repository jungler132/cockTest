import React, { useContext } from 'react';
import { View , Text , Image, TouchableOpacity} from 'react-native'
import { styles } from './styles';
import { useNavigation } from '@react-navigation/core';

const MealsInfo = ({title , publisher , imageUrl , publisherUrl , recipeId}) => {

  const navigation = useNavigation();
    
    return (
      <TouchableOpacity onPress={() => {navigation.navigate('RecipeById' , recipeId)}} style={styles.mainTouchableOpacityViewStyle}>
          <View style={styles.leftSideViewStyle}> 
          <Text style={styles.titleMealTextStyle}>
              {title}
          </Text>
          <Text numberOfLines={5} style={styles.ingredientsTextStyle}>
            {publisherUrl}
          </Text>
          <View style={styles.lineStyle}/>
          <Text style={styles.publisherNameTextStyle}>
              {publisher}
          </Text>
          </View>
          <Image style={styles.mealImageStyle} source={{uri:imageUrl}}/>
      </TouchableOpacity>
    )
}

export default MealsInfo;