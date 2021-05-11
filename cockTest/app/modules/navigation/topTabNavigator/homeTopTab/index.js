import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import InspireScreen from '../../../../views/homeScreen/inspireScreen';
import { ROUTES } from '../../../../services/routes/index'
import { styles } from './styles';


const Tab = createMaterialTopTabNavigator();

const HomeTopTabs = () => {
    return (
        <Tab.Navigator  tabBarOptions={{indicatorStyle:styles.indicatorStyleBackgroundColor , labelStyle:styles.labelStyle , style:styles.tabBackgroundColor}}>
            <Tab.Screen name={ROUTES.InspireScreen} component={InspireScreen}/>
        </Tab.Navigator>
    )
}
export default HomeTopTabs;