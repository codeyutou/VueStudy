import {  requestCategoryList,requestBannerList,requestFloorList} from "@/api"

const state={
    categoryList:[],
    bannerList:[],
    floorList:[],
}
//准备mutations——用于操作数据（state）
const mutations={
    JIA(state,value){
        state.count += value
    },
    CATEGORYLIST(state,value){
        state.categoryList=value
    },
    BANNERLIST(state,value){
        state.bannerList=value
    },
    FLOORLIST(state,value){
        state.floorList=value
    }

}
//准备actions——用于响应组件中的动作
const actions={
    addCount(context,value){
        context.commit('JIA',value)
    },
    //async 需要了解
    async requestCategoryList(context){
        let result =await requestCategoryList();
        if(result.code==200){
            context.commit('CATEGORYLIST',result.data)
        }
    },

     async getBannerList(context){
        let result =await requestBannerList();
        console.log(result)
        if(result.code==200){
            context.commit('BANNERLIST',result.data)
        }
    },
    
    async getFloorList(context){

        let result =await requestFloorList();
        console.log(result)
        if(result.code==200){
            context.commit('FLOORLIST',result.data)
        }
    },
    

}
const getters={}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}