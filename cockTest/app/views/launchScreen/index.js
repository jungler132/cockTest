import React, { useEffect } from 'react';
import { View, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { setNavigator } from '../../services/navigationServices';
import { runWatcher } from '../launchScreen/saga/actions';

const LaunchScreen = ({navigation}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    setNavigator(navigation);
    dispatch(runWatcher());
}, []);

    return (
      <View style={{backgroundColor:"red" , flex:1 , justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:50 , color:'white'}}>
          APP
        </Text>
      </View>
    )
}
export default LaunchScreen;