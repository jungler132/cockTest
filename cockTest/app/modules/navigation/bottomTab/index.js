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
        <Tab.Navigator initialRouteName='Home' tabBarOptions={{labelStyle:styles.labelStyle,activeBackgroundColor:colors.racingGreen , inactiveBackgroundColor:colors.racingGreen , tabStyle:styles.tabStyleStyle}}>
            <Tab.Screen name='Home' component={HomeTopTabs} options={{tabBarLabel:() => <SvgComponentHome color={colors.orange} />}}/>
            <Tab.Screen name='Search' component={SearchTopTabs} options={{tabBarLabel:() => <SvgComponentSearch color={colors.orange}  />}}/>
            <Tab.Screen name='Add' component={AddRecipeScreenStack} options={{tabBarLabel:() => <SvgComponentPlus color={colors.orange}  />}}/>
            <Tab.Screen name='Profile' component={ProfileTopTabs} options={{tabBarLabel:() => <SvgComponentProfile color={colors.orange}  />}}/>
        </Tab.Navigator>
    )
}
export default BottomTabs;
