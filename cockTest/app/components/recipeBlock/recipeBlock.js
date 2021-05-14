import React, { useEffect, useState } from 'react';
import { View, Image , Text } from 'react-native';
import { colors } from '../../services/config/colors'
import { styles } from './styles';
import { TouchableOpacity } from 'react-native';
import SvgComponentFavorite from '../../assets/svg/Simple-Heart'
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { setFavData } from './redux/actions'
import { useDispatch } from 'react-redux';
import { favDataWatcher } from './saga/actions';


function RecipeBlock({imageUrl , publisher , title , recipeId}) {
    const [isFavorite , setFavorite] = useState(false);
    console.log(isFavorite)
    const navigation = useNavigation()
    const dispatch = useDispatch();

    function onPressHeart() {
        setFavorite(!isFavorite);
        dispatch(favDataWatcher())
        dispatch(setFavData({publisher ,title ,recipeId ,imageUrl}))
    }
    
    return( 
        <TouchableOpacity onPress={() => {navigation.navigate('RecipeById' , recipeId)}} style={styles.mainTouchableOpacityStyle}>
        <View>
            <View style={styles.mainViewStyle}>
                <Text style={styles.textStyle}>
                 {publisher}
                </Text>
            </View>
            <View style={styles.bottomViewStyle}>
                <ImageBackground source={{uri:imageUrl}} style={styles.imageBackgroundStyle}>
                    <TouchableOpacity onPress={() => onPressHeart()} style={styles.favoriteButtonOpacityPosition}>
                        <SvgComponentFavorite color={isFavorite ? colors.orange : null}/>   
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <Text style={styles.bottomSideTextStyle}>
                {title}
            </Text>
        </View>
        </TouchableOpacity>
        
    )
}

export default RecipeBlock;