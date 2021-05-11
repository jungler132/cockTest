import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { View } from 'react-native';
import SvgComponentSearch from '../../assets/svg/search';
import { colors } from '../../services/config/colors'
import { styles } from './styles';
import { strings } from '../../localization/index'

function SearchComponent() {
    const [text , setText] = useState('Search Recipe')
    return( 
        <View style={styles.mainViewStyle}>
            <View style={styles.imageLoopStyle}>
                <SvgComponentSearch color={colors.white}/>
            </View>
            <TextInput  onChangeText={entered => setText(entered)} value={text}  style={styles.textInputStyle} placeholder={strings.searchByRecipe} placeholderTextColor={colors.white}/> 
        </View>
    )
}

export default SearchComponent;