import {
    observable,
    computed,
    action
} from "mobx";
import images from "../asserts"
let storage = global._storage ;
const defaultUser = { id:"",loginname:"登录",avatar_url:images.user,accesstoken:"" } ;
export default class {
    constructor(store){
        this.store = store ;
        storage.load({key: 'user'}).then((res)=>this._user = res).catch(()=>{});
    }
    @observable
    _notReadMessage = [] ;//未读消息
    @observable
    _readMessage = [] ;//已读消息
    get notReadMessage(){
        return this.store.utils.parseMessage(this._notReadMessage) ;
    }
    get readMessage(){
        return this.store.utils.parseMessage(this._readMessage) ;
    }
    @action.bound
    async getMessage(){
        let url = this.store.url.message_list ;
        let accesstoken = this.user.token ;
        let result = await this.store.http.get({
            url,
            data:{accesstoken}
        }) ;
        this._readMessage = result.data.has_read_messages ;
        this._notReadMessage = result.data.hasnot_read_messages ;
    }
    @computed
    get login(){// 检测用户是否登录
        return !!this._user.id;
    }
    @computed
    get user(){
        let { id,loginname, avatar_url,accesstoken } = this._user ;
        if(typeof avatar_url === "string"){
            avatar_url = {uri:(/^https:|^http:/.test(avatar_url) ? avatar_url : "https:" + avatar_url)};
        }
        return { id,authorName:loginname, authorUrl:avatar_url,token: accesstoken} ;
    }
    @observable
    _user = {...defaultUser} ;
    @action.bound
    async validateAccessToken(accesstoken){
        let { token } = this.store.url;
        let data = await this.store.http.post({url:token ,data:{accesstoken}});
        if(data.success){
            delete data.success ;
            data.accesstoken = accesstoken ;
            this._user = data ;
            storage.save({key: 'user',data: data}); //登录信息持久化
            return true ;
        }
        return false;
    }
    @action.bound
    deleteUser(){
        storage.remove({key: 'user'}).then((res)=>{
            this._user = {...defaultUser} ;
        });//删除登录信息
    }
    @action.bound
    async saveTopic(topic){
        let token = this.user.token ;
        topic.accesstoken = token ;
        topic.content = topic.content+ this.store.common.tail ;
        let { topic_list } = this.store.url;
        return this.store.http.post({url:topic_list,data:topic}) ;
    }

}