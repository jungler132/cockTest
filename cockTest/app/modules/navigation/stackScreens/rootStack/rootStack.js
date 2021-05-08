import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import LaunchScreen from '../../../../views/launchScreen';
import BottomTabs from '../../bottomTab';
import SettingsScreenStack from '../../stackScreens/settingsScreen/stackNavigator';



const Stack = createStackNavigator();


function RootStack() {

    return (
        <Stack.Navigator headerMode={false} initialRouteName={'LaunchScreen'}>
            <Stack.Screen name='LaunchScreen' component={LaunchScreen}/>
            <Stack.Screen name='BottomTabs' component={BottomTabs}/>
            <Stack.Screen name="SettingsScreenStack" component={SettingsScreenStack}/>
        </Stack.Navigator>
        
    )
}

export default RootStack;

