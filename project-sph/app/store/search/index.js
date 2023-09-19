import {  requestSearchInfo} from "@/api"

const state={
    searchList:{},

}
//准备mutations——用于操作数据（state）
const mutations={
    SEARCHLIST(state,value){
        state.searchList=value
    }

}
//准备actions——用于响应组件中的动作
const actions={
   
    async getSearchList(context,params={}){

        let result =await requestSearchInfo(params);
        console.log(result)
        if(result.code==200){
            context.commit('SEARCHLIST',result.data)
        }
    },
    

}
const getters={
    goodsList(state){
      return  state.searchList.goodsList||[]
    },
    attrsList(state){
        return  state.searchList.attrsList||[]
      },
      trademarkList (state){
        return  state.searchList.trademarkList||[]
      },

}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}