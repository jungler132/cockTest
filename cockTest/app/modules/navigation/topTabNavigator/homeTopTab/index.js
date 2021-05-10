import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FriendsScreen from '../../../../views/homeScreen/friendsScreen';
import InspireScreen from '../../../../views/homeScreen/inspireScreen';
import { ROUTES } from '../../../../services/routes/index'
import { styles } from './styles';


const Tab = createMaterialTopTabNavigator();

const HomeTopTabs = () => {
    return (
        <Tab.Navigator initialRouteName={ROUTES.InspireScreen} tabBarOptions={{indicatorStyle:styles.indicatorStyleBackgroundColor , labelStyle:styles.labelStyle , style:styles.tabBackgroundColor}}>
            <Tab.Screen name={ROUTES.FriendsScreen} component={FriendsScreen}/>
            <Tab.Screen name={ROUTES.InspireScreen} component={InspireScreen}/>
        </Tab.Navigator>
    )
}
export default HomeTopTabs;