import React from 'react';
import {View , Text} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ReceptScreen from '../../../../views/profileScreen/receptsScreen';
import ZakladkiScreen from '../../../../views/profileScreen/zakladkiScreen';
import { TouchableOpacity } from 'react-native';



const Tab = createMaterialTopTabNavigator();

function ProfileTopTabs({navigation}) {
    return (<>
            <View style={{alignItems:'flex-end' , height:'5%' , justifyContent:'center', backgroundColor:'#282B2A'}}>
                <TouchableOpacity onPress={() => {navigation.navigate('SettingsScreenStack')}}>
                    <Text style={{color:'white' , fontSize:14, marginEnd:10}}>
                    SETTINGS
                    </Text>
                </TouchableOpacity>
            </View>
            <Tab.Navigator tabBarOptions={{indicatorStyle:{backgroundColor:'#FFA500'} , labelStyle:{color:'#FFA500' , fontSize:13} , style:{backgroundColor:'#282B2A'}}}>
            <Tab.Screen name='ReceptScreen' component={ReceptScreen}/>
            <Tab.Screen name='ZakladkiScreen' component={ZakladkiScreen}/>
            </Tab.Navigator>
            </>
    )
}
export default ProfileTopTabs;

