import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { View } from 'react-native';
import SvgComponentSearch from '../../assets/svg/search';
import { colors } from '../../services/config/colors'
import { styles } from './styles';
import { strings } from '../../localization/index'
import { useNavigation } from '@react-navigation/core';

function SearchComponent() {
    const navigation = useNavigation();
    const [text , setText] = useState('')
    return( 
        <View style={styles.mainViewStyle}>
            <View style={styles.imageLoopStyle}>
                <SvgComponentSearch color={colors.white}/>
            </View>
            <TextInput onEndEditing={() => {navigation.navigate('ByNameStack' , text)}} onChangeText={value => setText(value)} style={styles.textInputStyle} placeholder={strings.searchByRecipe} placeholderTextColor={colors.white}/> 
        </View>
    )
}

export default SearchComponent;