import requests from "./request"
import mockRequests from "./mockrequest"


export const requestCategoryList=()=>requests({url:'/product/getBaseCategoryList',method:'get'})

export const requestText=()=>requests({url:'http://localhost:8081/Text/students',method:'get'})

export const requestBannerList=()=>mockRequests.get('/banner')

export const requestFloorList=()=>mockRequests.get('/floor')

export const requestSearchInfo=(params)=>requests({url:'/list',method:'post',data:params})

