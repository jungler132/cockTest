
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './app/App';
import React from 'react'


const startScreen = () => {
    return(
        <App/>  
    )
    
}

AppRegistry.registerComponent(appName, () => startScreen);
