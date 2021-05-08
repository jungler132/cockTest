import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import FriendsScreen from '../../../../views/homeScreen/friendsScreen';
import InspireScreen from '../../../../views/homeScreen/inspireScreen';


const HomeStack = createStackNavigator();


const HomeScreenStack = () => {
    return (
        <HomeStack.Navigator headerMode={false} initialRouteName='InspireScreen'>
            <HomeStack.Screen name='FriendsScreen' component={FriendsScreen}/>
            <HomeStack.Screen name='InspireScreen' component={InspireScreen}/>
        </HomeStack.Navigator>
        
    )
}

export default HomeScreenStack;
