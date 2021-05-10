import React from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CheckedRecipeScreen from '../../../../views/searchScreen/checkedRecipeScreen';
import NewRecipeScreen from '../../../../views/searchScreen/newRecipeScreen';
import { styles } from './styles';
import SearchComponent from '../../../../components/searchPanel/searchComponent';


NewRecipeScreen
const Tab = createMaterialTopTabNavigator();

function SearchTopTabs() {
    return (
        // <View style={{flex:1 , justifyContent:'space-around', backgroundColor:"blue"}}>
        <>
        <SearchComponent/>
        <Tab.Navigator tabBarOptions={{indicatorStyle:styles.indicatorStyleBackgroundColor , labelStyle:styles.labelStyle , style:styles.tabBackgroundColor}}>
            <Tab.Screen name='NewRecipeScreen' component={NewRecipeScreen}/>
            <Tab.Screen name='CheckedRecipeScreen' component={CheckedRecipeScreen}/>
        </Tab.Navigator>
        </>
        // </View>
    )
}
export default SearchTopTabs;

