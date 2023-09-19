//对于axios进行二次封装
import axios from "axios"
//引入进度条
import nprogress  from 'nprogress'
import "nprogress/nprogress.css"
//requests就是axios，只是配置一下
const requests=axios.create({
    //基础路径，发请求时，路径会出现api
    baseURL:"/api",
    //请求超时时间
    timeout:5000
})

//请求拦截器：发请求前，做一些事情
requests.interceptors.request.use((config)=>{
    //进度条开始
    nprogress.start()
    //引入进度条样式

    return config
})

//响应拦截器
requests.interceptors.response.use((res)=>{
      //进度条结束
      nprogress.done()
    return res.data;
},(error)=>{
    return error
})



//对外暴露
export default requests;