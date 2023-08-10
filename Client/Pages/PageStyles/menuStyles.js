import { Platform, StyleSheet } from 'react-native';
import {verticalScale, moderateScale, horizontalScale} from '../../HelperComponents/Scale.js';
import colorObject from '../../HelperComponents/Colors.js';
export default StyleSheet.create({
    databaseSearch: {
        fontSize: moderateScale(24), 
        textAlign: 'center', 
        marginTop: '5%'
    },
    mealTimeTab: {
        flexGrow: 1, 
        borderBottomColor: colorObject["red"]["3"], 
        width: '33%'
    },
    tabTitle: {
        fontSize: moderateScale(18), 
        color: colorObject["yellow"]["1"], 
        textAlign: 'center'
    },
    scrollViewDivs: {
        margin: "5%",
        backgroundColor: colorObject["grey"]["7"],  
        borderRadius: moderateScale(12)
    }, 
    sectionTitle: {
        textAlign: 'center', 
        color: colorObject["grey"]["2"]
    },
    emptyDataSet: {
        fontSize: moderateScale(24), 
        textAlign: 'center', 
        marginTop: '5%'
    },
    menuPageContainer: {
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%',
        backgroundColor: colorObject["red"]["7"]
    },
    menuFilters: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        width: '100%',
        height: '8%'
    },
    menuFilterButton: {
        backgroundColor: colorObject["grey"]["4"], 
        width: '15%', 
        justifyContent: 'center',
        paddingRight: '3%'
    },
    mealTimeTabContainer: {
        width: '100%', 
        display: 'flex', 
        flexDirection: 'row', 
        paddingTop: '1%',
        backgroundColor: colorObject["grey"]["4"],
        height: '4%',
        shadowColor: colorObject["grey"]["1"], 
        shadowOffset: {width: 0, height: moderateScale(4)}, 
        shadowOpacity: 0.3, 
        shadowRadius: 0,
        zIndex: 1
    },
    scrollView:{
        height: Platform.OS === 'ios' ? '80%' : '79%'
    },
    sectionContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 'auto'
    }
});