import { colors } from '../../services/config/colors'

export const styles = {
    mainTouchableOpacityStyle:{
        flex:1,backgroundColor:colors.racingGreen,
        paddingTop:10,
        borderRadius:7
    },
    mainViewStyle : {
        backgroundColor:colors.racingGreen,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    imageStyle: {
        width:30,
        height:30,
        borderRadius:100,
        backgroundColor:colors.silver,
        marginStart:10
    },
    textStyle: {
        color:colors.silver,
        marginStart:5,
        fontSize:15
    },
    bottomViewStyle : {
        width:'100%',
        height:'60%',
        borderRadius:7,
        paddingTop:5
    },
    imageBackgroundStyle : {
        width: '100%',
        height: '100%',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        marginBottom:20,
        marginEnd:20
    },
    favoriteButtonOpacityPosition: {
        marginBottom:10,
        marginEnd:10
    },
    bottomSideTextStyle: {
        color:colors.silver,
        marginTop:10,
        marginStart:5,
        fontSize:15,
        width:'100%',
        height:'30%'
    }
   


}