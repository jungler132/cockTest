import React from 'react';
import { View, Text } from 'react-native'

const LaunchScreen = () => {
    return (
      <View style={{backgroundColor:"red" , flex:1 , justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:50 , color:'white'}}>
          APP
        </Text>
      </View>
    )
}

export default LaunchScreen;