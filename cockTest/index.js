
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './app/App';
import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


const startScreen = () => {
    return(
        <NavigationContainer>
            <App/>   
        </NavigationContainer>
       
    )
}
AppRegistry.registerComponent(appName, () => startScreen);
