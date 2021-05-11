import React from 'react';
import { ImageBackground } from 'react-native';
import { TouchableOpacity, View , Text } from 'react-native'
import { styles } from './styles'


const TrandRecipeComponent = () => {
    return (
            <TouchableOpacity style={{marginBottom:5 , marginEnd:5 , marginStart:5 , marginTop:5}}>
                <ImageBackground style={styles.imageBacgroundStyle} blurRadius={5} source={{uri:'https://www.tourprom.ru/site_media/images/upload/2018/10/7/newsphoto/pinchos.jpg'}}>
                    <Text style={styles.textStyle}>
                        Wawlik
                    </Text>
                </ImageBackground>
            </TouchableOpacity>
    )
}

export default TrandRecipeComponent;