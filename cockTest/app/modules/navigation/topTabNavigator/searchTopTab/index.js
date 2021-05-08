import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CheckedRecipeScreen from '../../../../views/searchScreen/checkedRecipeScreen';
import NewRecipeScreen from '../../../../views/searchScreen/newRecipeScreen';


NewRecipeScreen
const Tab = createMaterialTopTabNavigator();

function SearchTopTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='NewRecipeScreen' component={NewRecipeScreen}/>
            <Tab.Screen name='CheckedRecipeScreen' component={CheckedRecipeScreen}/>
        </Tab.Navigator>
    )
}
export default SearchTopTabs;

