import { colors } from '../../services/config/colors'

export const styles = {
    mainViewStyle:{
        flex:1,
    }, 
    mainBackgroundStyle:{
        flex:0.4,
        backgroundColor:colors.racingGreen,
        justifyContent:"center",
        alignItems:'center'
    },
    mainViewWidthHeight:{
        width:220,
        height:220
    },
    imageStyle:{
        width:200,
        height:100
    },
    viewInsideContentStyle:{
        justifyContent:'center',
        alignItems:'center'
    },
    topSideTextStyle: {
        fontSize:20,
        color:'white',
        marginEnd:16
    },
    topSideButtonStyle: {
        marginTop:30,
        marginEnd:15,
        backgroundColor:colors.silver,
        width:100,
        height:40,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:"row"
    },
    topSideSecondTextStyle : {
        fontSize:15,
        color:colors.silver,
        marginEnd:10,
        marginTop:8 
    },
    textStyleInsideButton : {
        fontSize:15,
        color:colors.white,
        marginStart:5
    },
    bottomSideViewStyle: {
        flex:0.6,
        backgroundColor:colors.silver
    },
    scrollViewStyle:{
        flex:1,
        width:350,
        marginStart:22
    }


}