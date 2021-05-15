import React from 'react';
import RootStack from './modules/navigation/stackScreens/rootStack/rootStack';
import AddRecipeComponent from './components/addRecipeComponent/addRecipeComponent';
import { KeyboardAvoidingView,  Platform } from 'react-native';
import { SafeAreaView } from 'react-native';

const App = () => {

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'undefined'} style={{flex:1}}>
            <SafeAreaView style={{flex:1}}>
            <RootStack/>
            </SafeAreaView> 
        </KeyboardAvoidingView>
            
    )
}

export default App;