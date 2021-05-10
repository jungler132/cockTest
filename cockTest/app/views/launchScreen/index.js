import React, { useEffect } from 'react';
import { View, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { setNavigator } from '../../services/navigationServices';
import { runWatcher } from '../launchScreen/saga/actions';
import { styles } from './styles'

const LaunchScreen = ({navigation}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    setNavigator(navigation);
    dispatch(runWatcher());
}, []);

    return (
      <View style={styles.mainViewStyle}>
        <Text style={styles.textStyle}>
          APP
        </Text>
      </View>
    )
}
export default LaunchScreen;