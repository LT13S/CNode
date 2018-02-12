import Color from "color";
const MAINCOLOR = "#37C6C0" ;
const FabColor = "rgb(80,103,255)" ;
const loadingBackgroundColor = MAINCOLOR ;
const rcColor = MAINCOLOR ; //单复选框的颜色
const activeTintColor = MAINCOLOR ;
const headerBackgroundColor = MAINCOLOR ;
const statusBarColor = Color(MAINCOLOR).darken(0.3) ;
const switchCircleColor = "#eee" ;
const tabBackgroundColor = MAINCOLOR ;
const inActiveTabTextColor = "#333";
const activeTabTextColor = "#fff" ;
const touchableBackgroundColor = MAINCOLOR ;
const tabBarUnderlineColor = Color(MAINCOLOR).darken(0.4) ;
const iosBarStyle = "light-content"; //light-content or dark-content
const inactiveTintColor = "#333";
const headerTextColor = "#fff";
const loadingColor = "#fff" ;
const listViewBackgroundColor = "#fff" ;
export default {
    MAINCOLOR,
    touchableBackgroundColor,
    listViewBackgroundColor,
    inActiveTabTextColor,
    activeTabTextColor,
    tabBackgroundColor,
    FabColor,
    switchCircleColor,
    activeTintColor,
    inactiveTintColor,
    headerBackgroundColor,
    headerTextColor,
    iosBarStyle,
    loadingColor,
    loadingBackgroundColor,
    rcColor,
    statusBarColor,
    tabBarUnderlineColor
}