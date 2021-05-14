import React from 'react';
import { ImageBackground } from 'react-native';
import { ScrollView } from 'react-native';
import { View , Text , Image, TouchableOpacity} from 'react-native'
import { colors } from '../../services/config/colors';
import  SvgComponentPhoto  from '../../assets/svg/photoCameras'
import SvgComponent from '../../assets/svg/goBack';
import { TextInput } from 'react-native';``

const AddRecipeComponent = () => {
    return (
      <ScrollView style={{flex:1 , backgroundColor:colors.racingGreen}}>
          <View style={{width:'100%' , height:60, flexDirection:'row' , alignItems:'center' , marginStart:10}}>
              <TouchableOpacity>
              <SvgComponent/>
              </TouchableOpacity>
              <TouchableOpacity style={{width:60, height:35, justifyContent:'center', alignItems:'center' , borderRadius:10, borderColor:colors.white , borderWidth:0.8 , marginStart:270}}>
                    <Text style={{color:colors.white}}>
                        Save
                    </Text>
              </TouchableOpacity>
          </View>
          <ImageBackground source={{uri:'https://i.pinimg.com/600x315/53/c7/3e/53c73edd8bf4ee71a59d17248e34ca15.jpg'}} style={{width:'100%', height:200 , backgroundColor:'green' , justifyContent:'flex-end' , alignItems:'center'}}>
                <TouchableOpacity style={{borderRadius:5, marginBottom:20 , width:200 , height:35 , flexDirection:'row' ,justifyContent:'center', alignItems:'center'}}>
                <SvgComponentPhoto/>
                    <Text style={{marginStart:10 , fontSize:15, color:colors.white}}>
                        Upload recipe photo
                    </Text>
                </TouchableOpacity>
          </ImageBackground>
            <TextInput placeholderTextColor={colors.white} placeholder={"Title:Mother`s vegetable soup"} style={{backgroundColor:colors.silver , width:'90%' , borderRadius:5, height:40, marginStart:20, marginTop:20, fontSize:18}}/>
            <Text style={{marginTop:20 , marginStart:20, fontSize:22, color:colors.white}}>
                Ingredients
            </Text>
            <TextInput numberOfLines={1} placeholderTextColor={colors.white} placeholder={"What is the origin of your recipe? What inspired it what makes it special m who did you cook it for?"} style={{backgroundColor:colors.silver , width:'90%' , borderRadius:5, height:80, marginStart:20, marginTop:20, fontSize:17}}/>

      </ScrollView>
    )
}

export default AddRecipeComponent;