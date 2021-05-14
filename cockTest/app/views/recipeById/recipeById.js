import React, { useEffect } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';
import { View , Text , ScrollView} from 'react-native'
import { colors } from '../../services/config/colors'
import  SvgComponentFavorite from '../../assets/svg/Simple-Heart'
import SvgComponentGoBack from '../../assets/svg/goBack';
import { useNavigation } from '@react-navigation/core';
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux';
import {setRecipeByIdScreen} from '../../views/recipeById/redux/actions'
import { getRecipeIdData } from '../../modules/saga/selectors';
import { getRecipeByIdScreen } from './saga/actions';


const RecipeById = ({route}) => {
    const { key , name , params } = route
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const data = useSelector(getRecipeIdData);
    const { recipe } = data
    const title = recipe?.title
    const publisher = recipe?.publisher;
    const ingredients = recipe?.ingredients;
    const imageUrl = recipe?.image_url;
    const publisherUrl = recipe?.publisher_url

    useEffect(() => {
        dispatch(setRecipeByIdScreen(params))
        dispatch(getRecipeByIdScreen())
    },[])
   

    return (
        <ScrollView style={styles.mainScrollViewStyle}>
            <View style={styles.topViewStyle}>
                <ImageBackground style={styles.imageBackgroundStyle} source={{uri:imageUrl}}>
                    <TouchableOpacity style={styles.favoriteButtonFlexStyle}>
                        <SvgComponentFavorite width={35} height={35} color={colors.orange}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.goBack(null)} style={styles.goBackButtonFlexStyle}>
                        <SvgComponentGoBack/>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <View style={styles.topViewStyle}>
                <Text style={styles.topTextMealStyle}>
                    {title}
                </Text>
            </View>
            <View style={styles.publisherViewStyle}>
                <Image style={styles.publisherImageStyle} source={{uri:'https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg'}}/>
                <Text style={styles.publisherTextStyle}>
                    {publisher}
                </Text>
                
            </View>
            <View style={styles.tipViewStyle}>
            <Text style={styles.tipTextStyle}>
                    {publisherUrl}
            </Text>
            </View>
            <View style={styles.lineStyle}/>
            <View style={styles.ingredientsViewStyle}>
                <Text style={styles.ingredientsTextStyle}>
                    Ingredients
                </Text>
            </View>
            {ingredients?.map((item, index) => (
                <View key={index} style={styles.ingredientLineViewStyle}>
                <Text style={styles.ingredientLineTextStyle}>
                    {item}
                </Text>
                <View style={styles.lineStyle}/>
            </View>
            ))}
            <View>
                <View style={styles.bottomProfileInfoViewStyle}>
                    <Image style={styles.bottomProfileInfoImageStyle} source={{uri:'https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg'}}/>
                    <Text style={styles.bottomProfileInfoTextStyle}>
                        Published by
                    </Text>
                    <Text style={styles.bottomProfileInfoTextNameStyle}>
                    {publisher}
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default RecipeById;