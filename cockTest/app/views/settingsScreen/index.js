import React from 'react';
import { View , Text} from 'react-native'
import { styles } from './styles';


const SettingsScreen = () => {
    return (
      <View style={styles.mainViewStyle}>
        <Text style={styles.textStyle}>
          SETTINGS SCREEN
        </Text>
      </View>
    )
}

export default SettingsScreen;