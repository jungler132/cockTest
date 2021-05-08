import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import HomeTopTabs from '../topTabNavigator/homeTopTab';
import SearchTopTabs from '../topTabNavigator/searchTopTab';
import ProfileTopTabs from '../topTabNavigator/profileTopTab';
import AddRecipeScreenStack from '../stackScreens/addStacks/stackNavigator';



const Tab = createBottomTabNavigator();

function BottomTabs (){
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name='Home' component={HomeTopTabs}/>
            <Tab.Screen name='Search' component={SearchTopTabs}/>
            <Tab.Screen name='Add' component={AddRecipeScreenStack}/>
            <Tab.Screen name='Profile' component={ProfileTopTabs}/>
        </Tab.Navigator>
    )
}
export default BottomTabs;
