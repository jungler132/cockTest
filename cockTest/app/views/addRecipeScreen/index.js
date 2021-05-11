import React from 'react';
import { Image } from 'react-native';
import { ImageBackground } from 'react-native';
import { ScrollView } from 'react-native';
import { TextInput } from 'react-native';
import { View , Text , TouchableOpacity} from 'react-native';
import SvgComponentFood from '../../assets/svg/simplefastfoodicon';
import { colors } from '../../services/config/colors';
import { styles } from './styles';

const AddRecipeScreen = () => {
    return (
      <View  style={styles.mainViewStyle}>
        <View style={styles.mainBackgroundStyle}>
          <View style={styles.mainViewWidthHeight}>
            <Image style={styles.imageStyle} source={{uri:'https://cdn.dribbble.com/users/3428869/screenshots/6320020/createsomething1_4x.jpg'}}/>
            <View style={styles.viewInsideContentStyle}>
              <Text style={styles.topSideTextStyle}>
                Create Something New
              </Text>
              <Text style={styles.topSideSecondTextStyle}>
                Help and inspire others to cock
              </Text>
              <TouchableOpacity style={styles.topSideButtonStyle}>
                  <SvgComponentFood/>
                  <Text style={styles.textStyleInsideButton}>
                    Recipe 
                  </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.bottomSideViewStyle}>
          <ScrollView style={styles.scrollViewStyle}>

          </ScrollView>
        </View>
      </View>
    )
}

export default AddRecipeScreen;