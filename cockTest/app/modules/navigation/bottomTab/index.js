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

const Tab = createBottomTabNavigator();

function BottomTabs (){
    return (
        <Tab.Navigator initialRouteName='Home' tabBarOptions={{labelStyle:{fontSize:15,color:'#FFA500'},activeBackgroundColor:'#282B2A' , inactiveBackgroundColor:'#282B2A' , tabStyle:{justifyContent:'center' , alignItems:'center'}}}>
            <Tab.Screen name='Home' component={HomeTopTabs} options={{tabBarLabel:() => <SvgComponentHome color='#FFA500' />}}/>
            <Tab.Screen name='Search' component={SearchTopTabs} options={{tabBarLabel:() => <SvgComponentSearch color='#FFA500' />}}/>
            <Tab.Screen name='Add' component={AddRecipeScreenStack} options={{tabBarLabel:() => <SvgComponentPlus color='#FFA500' />}}/>
            <Tab.Screen name='Profile' component={ProfileTopTabs} options={{tabBarLabel:() => <SvgComponentProfile color='#FFA500' />}}/>
        </Tab.Navigator>
    )
}
export default BottomTabs;
