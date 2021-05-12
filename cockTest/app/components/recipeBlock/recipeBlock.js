import React, { useEffect, useState } from 'react';
import { View, Image , Text } from 'react-native';
import { colors } from '../../services/config/colors'
import { styles } from './styles';
import { TouchableOpacity } from 'react-native';
import SvgComponentFavorite from '../../assets/svg/Simple-Heart'
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/core';



function RecipeBlock({onPressFav  , imageUrl , publisher , title , recipeId}) {

    const navigation = useNavigation()
    
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
                    <TouchableOpacity onPress={onPressFav} style={styles.favoriteButtonOpacityPosition}>
                        <SvgComponentFavorite color={colors.orange}/>   
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <Text style={styles.bottomSideTextStyle}>
                {title}
                {/* {recipeId} */}
            </Text>
        </View>
        </TouchableOpacity>
        
    )
}

export default RecipeBlock;