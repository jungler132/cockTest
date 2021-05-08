import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import SettingsScreen from '../../../../views/settingsScreen';



const SearchStack = createStackNavigator();


function SettingsScreenStack() {
    return (
        <SearchStack.Navigator headerMode={false}>
            <SearchStack.Screen name='SettingsScreen' component={SettingsScreen}/>
        </SearchStack.Navigator>
        
    )
}

export default SettingsScreenStack;
