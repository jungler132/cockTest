import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import RecipeById from '../../../../views/recipeById/recipeById';



const RecipeById = createStackNavigator();


function RecipeByIdStack() {
    return (
        <RecipeById.Navigator headerMode={false}>
            <RecipeById.Screen name='RecipeById' component={RecipeById}/>
        </RecipeById.Navigator>
        
    )
}

export default RecipeByIdStack;

