import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CheckedRecipeScreen from '../../../../views/searchScreen/checkedRecipeScreen';
import NewRecipeScreen from '../../../../views/searchScreen/newRecipeScreen';
import { styles } from './styles';


NewRecipeScreen
const Tab = createMaterialTopTabNavigator();

function SearchTopTabs() {
    return (
        <Tab.Navigator tabBarOptions={{indicatorStyle:styles.indicatorStyleBackgroundColor , labelStyle:styles.labelStyle , style:styles.tabBackgroundColor}}>
            <Tab.Screen name='NewRecipeScreen' component={NewRecipeScreen}/>
            <Tab.Screen name='CheckedRecipeScreen' component={CheckedRecipeScreen}/>
        </Tab.Navigator>
    )
}
export default SearchTopTabs;

