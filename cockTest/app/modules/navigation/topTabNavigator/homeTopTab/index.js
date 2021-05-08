import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FriendsScreen from '../../../../views/homeScreen/friendsScreen';
import InspireScreen from '../../../../views/homeScreen/inspireScreen';


const Tab = createMaterialTopTabNavigator();

const HomeTopTabs = () => {
    return (
        <Tab.Navigator initialRouteName='InspireScreen'>
            <Tab.Screen name='FriendsScreen' component={FriendsScreen}/>
            <Tab.Screen name='InspireScreen' component={InspireScreen}/>
        </Tab.Navigator>
    )
}
export default HomeTopTabs;