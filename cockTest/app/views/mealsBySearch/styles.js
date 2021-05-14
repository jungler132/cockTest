import { colors } from '../../services/config/colors'

export const styles = {
    mainViewStyle:{
        width:'100%' , height:50 , backgroundColor:colors.racingGreen, flexDirection:'row'
    },
    goBackButtonPosition:{
        marginTop:5 , marginStart:5 , backgroundColor:colors.racingGreen
    },
    bottomViewStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginStart:90
    },
    titleNameStyle:{
        fontSize:25,
        marginStart:20,
        color:colors.white
    },
    scrollViewStyle:{
        flex:1,
        backgroundColor:colors.silver
    },
    allRecipeStyle:{
        color:colors.white,
        fontSize:25,
        marginStart:10,
        marginTop:10
    }

}