import React from 'react';
import {View , Text} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ReceptScreen from '../../../../views/profileScreen/receptsScreen';
import ZakladkiScreen from '../../../../views/profileScreen/zakladkiScreen';
import { TouchableOpacity } from 'react-native';
import { ROUTES } from '../../../../services/routes/index'
import { styles } from './styles';


const Tab = createMaterialTopTabNavigator();

function ProfileTopTabs({navigation}) {
    return (<>
            <View style={styles.headerViewStyle}>
                <TouchableOpacity onPress={() => {navigation.navigate(ROUTES.SettingsScreenStack)}}>
                    <Text style={styles.textStyle}>
                    SETTINGS
                    </Text>
                </TouchableOpacity>
            </View>
            <Tab.Navigator tabBarOptions={{indicatorStyle:styles.indicatorStyleBackgroundColor , labelStyle:styles.labelStyle , style:styles.tabBackgroundColor}}>
            <Tab.Screen name='ReceptScreen' component={ReceptScreen}/>
            <Tab.Screen name='ZakladkiScreen' component={ZakladkiScreen}/>
            </Tab.Navigator>
            </>
    )
}
export default ProfileTopTabs;