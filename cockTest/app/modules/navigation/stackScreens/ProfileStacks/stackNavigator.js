import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import ReceptScreen from '../../../../views/profileScreen/receptsScreen';
import ZakladkiScreen from '../../../../views/profileScreen/zakladkiScreen';



const ProfileStack = createStackNavigator();


function ProfileScreenStack() {
    return (
        <ProfileStack.Navigator headerMode={false}>
            <ProfileStack.Screen name='ZakladkiScreen' component={ZakladkiScreen}/>
            <ProfileStack.Screen name='ReceptScreen' component={ReceptScreen}/>
        </ProfileStack.Navigator>
        
    )
}

export default ProfileScreenStack;

