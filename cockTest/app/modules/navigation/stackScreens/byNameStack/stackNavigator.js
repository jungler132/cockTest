import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import MealsBySeacrh from '../../../../views/mealsBySearch';



const ByName = createStackNavigator();


const ByNameStack = () => {
    return (
        <ByName.Navigator headerMode={false}>
            <ByName.Screen name='MealsBySeacrh' component={MealsBySeacrh}/>
        </ByName.Navigator>
        
    )
}

export default ByNameStack;
