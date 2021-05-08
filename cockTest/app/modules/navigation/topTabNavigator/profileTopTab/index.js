import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ReceptScreen from '../../../../views/profileScreen/receptsScreen';
import ZakladkiScreen from '../../../../views/profileScreen/zakladkiScreen';



const Tab = createMaterialTopTabNavigator();

function ProfileTopTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='ReceptScreen' component={ReceptScreen}/>
            <Tab.Screen name='ZakladkiScreen' component={ZakladkiScreen}/>
        </Tab.Navigator>
    )
}
export default ProfileTopTabs;

