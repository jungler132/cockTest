import React from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CheckedRecipeScreen from '../../../../views/searchScreen/checkedRecipeScreen';
import NewRecipeScreen from '../../../../views/searchScreen/newRecipeScreen';
import { styles } from './styles';
import SearchComponent from '../../../../components/searchPanel/searchComponent';
import { KeyboardAvoidingView,  Platform } from 'react-native';
import { SafeAreaView } from 'react-native';



NewRecipeScreen
const Tab = createMaterialTopTabNavigator();

function SearchTopTabs() {
    return (
        
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'undefined'} style={{flex:1}}>
        <SafeAreaView style={{flex:1}}>
        <SearchComponent/>
        <Tab.Navigator tabBarOptions={{indicatorStyle:styles.indicatorStyleBackgroundColor , labelStyle:styles.labelStyle , style:styles.tabBackgroundColor}}>
            <Tab.Screen name='Trand' component={NewRecipeScreen}/>
            <Tab.Screen name='Old' component={CheckedRecipeScreen}/>
        </Tab.Navigator>
        </SafeAreaView>
    </KeyboardAvoidingView>
    )
}
export default SearchTopTabs;

