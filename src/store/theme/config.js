/***
 * 该方法是通过传入一颜色值，生成主题皮肤
 * @param color
 */
import Color from "color";
export default (color,text) =>{
    const MAINCOLOR = color ;
    const COLOR = Color(MAINCOLOR) ;
    const FabColor = COLOR.darken(0.3) ;
    const loadingBackgroundColor = MAINCOLOR ;
    const rcColor = MAINCOLOR ; //单复选框的颜色
    const activeTintColor = MAINCOLOR ;
    const headerBackgroundColor = MAINCOLOR ;
    const switchCircleColor = "#eee" ;
    const tabBackgroundColor = MAINCOLOR ;
    const inActiveTabTextColor = "#333";
    const activeTabTextColor = "#fff" ;
    const touchableBackgroundColor = COLOR.lighten(0.7) ;
    const tabBarUnderlineColor = COLOR.darken(0.4) ;
    const statusBarColor = COLOR.darken(0.3) ;
    const barStyle = statusBarColor.isDark()?"light-content":"dark-content"; //light-content or
    const inactiveTintColor = "#bbb";
    const headerTextColor = "#fff";
    const loadingColor = "#fff" ;
    const listViewBackgroundColor = "#fff" ;
    return {
        text,
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
        barStyle,
        loadingColor,
        loadingBackgroundColor,
        rcColor,
        statusBarColor,
        tabBarUnderlineColor
    }
};