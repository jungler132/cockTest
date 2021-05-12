import React, { useEffect, useState } from 'react';
import { View, Image , Text } from 'react-native';
import { colors } from '../../services/config/colors'
import { styles } from './styles';
import { strings } from '../../localization/index'
import { TouchableOpacity } from 'react-native';
import SvgComponentFavorite from '../../assets/svg/Simple-Heart'
import { ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



function RecipeBlock({onPressFav , onPress , imageUrl , publisher , title}) {

    return( 
        <TouchableOpacity onPress={onPress} style={styles.mainTouchableOpacityStyle}>
            <View style={styles.mainViewStyle}>
                <Image style={styles.imageStyle}/>
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
            </Text>
        </TouchableOpacity>
        
    )
}

export default RecipeBlock;