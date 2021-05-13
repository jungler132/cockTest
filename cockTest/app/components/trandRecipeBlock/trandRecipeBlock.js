import React from 'react';
import { ImageBackground } from 'react-native';
import { TouchableOpacity, View , Text } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/core';


const TrandRecipeComponent = ({menuData}) => {

const { image , name } = menuData

const navigation = useNavigation();    

    return (
            <TouchableOpacity onPress={() => navigation.navigate('ByNameStack' , name)} style={{marginBottom:5 , marginEnd:5 , marginStart:5 , marginTop:5}}>
                <ImageBackground style={styles.imageBacgroundStyle} blurRadius={2} source={{uri:image}}>
                    <Text numberOfLines={2} style={styles.textStyle}>
                        {name}
                    </Text>
                </ImageBackground>
            </TouchableOpacity>
    )
}

export default TrandRecipeComponent;