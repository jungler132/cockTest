import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import HomeTopTabs from '../topTabNavigator/homeTopTab';
import SearchTopTabs from '../topTabNavigator/searchTopTab';
import ProfileTopTabs from '../topTabNavigator/profileTopTab';
import AddRecipeScreenStack from '../stackScreens/addStacks/stackNavigator';
import SvgComponentHome from '../../../assets/svg/house';
import SvgComponentPlus from '../../../assets/svg/plus';
import SvgComponentSearch from '../../../assets/svg/search';
import SvgComponentProfile from '../../../assets/svg/profile';
import { colors } from '../../../services/config/colors'
import { styles } from './styles'



const Tab = createBottomTabNavigator();

function BottomTabs (){
    return (
        <Tab.Navigator initialRouteName='Home' tabBarOptions={{labelStyle:styles.labelStyle,activeBackgroundColor:colors.racingGreen , inactiveBackgroundColor:colors.racingGreen , tabStyle:styles.tabStyleStyle , keyboardHidesTabBar:true}}>
            <Tab.Screen name='Home' component={HomeTopTabs} options={{tabBarLabel:({ focused }) => (focused ? <SvgComponentHome color={colors.orange}/> : <SvgComponentHome color={colors.white}/>)}}/>
            <Tab.Screen name='Search' component={SearchTopTabs} options={{tabBarLabel:({ focused }) => (focused ? <SvgComponentSearch color={colors.orange}/> : <SvgComponentSearch color={colors.white}/>)}}/>
            <Tab.Screen name='Add' component={AddRecipeScreenStack} options={{tabBarLabel:({ focused }) => (focused ? <SvgComponentPlus color={colors.orange}/> : <SvgComponentPlus color={colors.white}/>)}}/>
            <Tab.Screen name='Profile' component={ProfileTopTabs} options={{tabBarLabel:({ focused }) => (focused ? <SvgComponentProfile color={colors.orange}/> : <SvgComponentProfile color={colors.white}/>)}}/>
        </Tab.Navigator>
    )
}
export default BottomTabs;
