import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import MealsBySeacrh from '../../../../views/mealsBySearch';



const ByName = createStackNavigator();


const ByNameStack = ({route}) => {
    return (
        <ByName.Navigator headerMode={false}>
            <ByName.Screen name='MealsBySeacrh' component={MealsBySeacrh} initialParams={{route}}/>
        </ByName.Navigator>
        
    )
}

export default ByNameStack;
