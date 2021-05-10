import React from 'react';
import { Platform } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import SearchComponent from './components/searchPanel/searchComponent';
import RootStack from './modules/navigation/stackScreens/rootStack/rootStack';


const App = () => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'undefined'} style={{flex:1}}>
            <RootStack/>
        </KeyboardAvoidingView>
        
    )
    
}
export default App;