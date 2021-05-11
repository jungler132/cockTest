import React from 'react';
import { View, Image , Text } from 'react-native';
import { colors } from '../../services/config/colors'
import { styles } from './styles';
import { strings } from '../../localization/index'
import { TouchableOpacity } from 'react-native';
import SvgComponentFavorite from '../../assets/svg/Simple-Heart'
import { ImageBackground } from 'react-native';


function RecipeBlock() {
    return( 
        <TouchableOpacity style={{flex:1,backgroundColor:colors.racingGreen , paddingTop:10 , borderRadius:7}}>
            <View style={{flex:0.1,backgroundColor:colors.racingGreen , flexDirection:'row' , justifyContent:'flex-start' , alignItems:'center'}}>
                <Image style={{width:25 , height:25 , borderRadius:100 , backgroundColor:colors.silver , marginStart:10}}>
                
                </Image>
                <Text style={{color:colors.silver , marginStart:15}}>
                    Viktoriya Egorova
                </Text>
            </View>
            <View style={{flex:0.6, borderRadius:7 , paddingTop:5}}>
                <ImageBackground source={{uri:'https://rb.ru/media/upload_tmp/43698072_358002605007163_7117367642860805032_n.jpg'}} style={{ width : '100%' , height: '100%' , justifyContent:'flex-end' , alignItems:'flex-end'}}>
                    <TouchableOpacity>
                        <SvgComponentFavorite color={colors.orange}/>   
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <Text style={{color:colors.silver , marginTop:5, marginStart:5}}>
                Vkusniye Sirniki
            </Text>
        </TouchableOpacity>
        
        
    )
}

export default RecipeBlock;