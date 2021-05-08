import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CheckedRecipeScreen from '../../../../views/searchScreen/checkedRecipeScreen';
import NewRecipeScreen from '../../../../views/searchScreen/newRecipeScreen';


NewRecipeScreen
const Tab = createMaterialTopTabNavigator();

function SearchTopTabs() {
    return (
        <Tab.Navigator tabBarOptions={{indicatorStyle:{backgroundColor:'#FFA500'} , labelStyle:{color:'#FFA500' , fontSize:13} , style:{backgroundColor:'#282B2A'}}}>
            <Tab.Screen name='NewRecipeScreen' component={NewRecipeScreen}/>
            <Tab.Screen name='CheckedRecipeScreen' component={CheckedRecipeScreen}/>
        </Tab.Navigator>
    )
}
export default SearchTopTabs;

