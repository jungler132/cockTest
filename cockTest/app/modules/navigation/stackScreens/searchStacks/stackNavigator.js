import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import CheckedRecipeScreen from '../../../../views/searchScreen/checkedRecipeScreen';
import NewRecipeScreen from '../../../../views/searchScreen/newRecipeScreen';
import AddRecipeScreen from '../../../views/addRecipeScreen';


const SearchStack = createStackNavigator();


function SearchScreenStack() {
    return (
        <SearchStack.Navigator headerMode={false}>
            <SearchStack.Screen name='NewRecipeScreen' component={NewRecipeScreen}/>
            <SearchStack.Screen name='CheckedRecipeScreen' component={CheckedRecipeScreen}/>
        </SearchStack.Navigator>
        
    )
}

export default SearchScreenStack;
