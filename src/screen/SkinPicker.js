import React,{Component} from "react" ;
import {
    Modal,
    View,
    Text,
    Alert
} from "react-native" ;
import { Container } from "native-base" ;
import { HeaderWithBackIcon } from "../component/LayoutHeaderWithoutIcon" ;
import {
    observer,inject
} from "mobx-react/native" ;
import Radio from '../component/Radio';
import normal from "../store/theme/normal";
@inject("common")
@observer
export default class SkinPicker extends Component {
    static navigationOptions={header:null} ;
    setAppTheme(theme){
        Alert.alert("提示","更改主题会导致整个应用重新加载,是否继续?",[
            {
                text:"否",
                onPress:()=>{}
            },
            {
                text:"是",
                onPress:()=>{ this.props.common._theme = theme }
            }
        ]);
    }
    setMarkdownTheme(theme){
        this.props.common._markdownStyle = theme ;
    }
    render(){
        let { theme,_theme,_markdownStyle } = this.props.common ;
        return (
            <Container>
                <HeaderWithBackIcon onPress={()=>{this.props.navigation.goBack()}} theme={theme} title={"皮肤设置"}/>
                <View style={style.center}>
                    <View style={style.header}>
                        <Text style={style.headerText}>应用主题设置</Text>
                    </View>
                    <View>
                        <Radio color={theme.rcColor} label='正常模式'
                               checked={(_theme ==="normal")}
                               onChange={() => this.setAppTheme("normal")}/>
                    </View>
                    <View>
                        <Radio color={theme.rcColor} label='护眼模式'
                               checked={(_theme ==="dark")}
                               onChange={() =>  this.setAppTheme("dark")}/>
                    </View>
                    <View style={[style.header,{marginTop:15}]}>
                        <Text style={style.headerText}>文章主题设置</Text>
                    </View>
                    <View>
                        <Radio color={theme.rcColor} label='正常模式'
                               checked={_markdownStyle === "markdown_light"}
                               onChange={() => this.setMarkdownTheme("markdown_light")}/>
                    </View>
                    <View>
                        <Radio color={theme.rcColor} label='护眼模式'
                               checked={_markdownStyle === "markdown_dark"}
                               onChange={() => this.setMarkdownTheme("markdown_dark")}/>
                    </View>
                </View>

            </Container>
        )
    }
}
const style = {
    center:{ flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center" },
    container:{width:200},
    header:{ marginBottom:15 },
    headerText:{ fontSize:18 }
};