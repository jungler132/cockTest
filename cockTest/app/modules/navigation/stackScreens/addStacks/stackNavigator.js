import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import AddRecipeScreen from '../../../../views/addRecipeScreen';



const RecipeStack = createStackNavigator();


function AddRecipeScreenStack() {
    return (
        <RecipeStack.Navigator headerMode={false}>
            <RecipeStack.Screen name='AddRecipeScreen' component={AddRecipeScreen}/>
        </RecipeStack.Navigator>
        
    )
}

export default AddRecipeScreenStack;