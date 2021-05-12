import React from 'react';
import { ImageBackground } from 'react-native';
import { TouchableOpacity, View , Text } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/core';


const TrandRecipeComponent = () => {


    const arrayOfMeal = ['carrot','broccoli','cucumber','apple','melon','papaya','strawberry','chicken','fish','bacon', 'radish','artichoke','saffron','grapefruit','mandarin','pizza','popcorn','steak','kebab','chili',]

    const randomMeal = arrayOfMeal[Math.floor(Math.random()*arrayOfMeal.length)];

    const navigation = useNavigation();    

    return (
            <TouchableOpacity onPress={() => navigation.navigate('ByNameStack')} style={{marginBottom:5 , marginEnd:5 , marginStart:5 , marginTop:5}}>
                <ImageBackground style={styles.imageBacgroundStyle} blurRadius={5} source={{uri:'https://www.tourprom.ru/site_media/images/upload/2018/10/7/newsphoto/pinchos.jpg'}}>
                    <Text style={styles.textStyle}>
                        {randomMeal}
                    </Text>
                </ImageBackground>
            </TouchableOpacity>
    )
}

export default TrandRecipeComponent;