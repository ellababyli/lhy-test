<template>
  <div class="home">
  
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'axios3-2',
  created(){
    //axios基本配置参数
  	axios.create({
          baseURL:'http:localhost:8080',//请求的域名，基本地址
          timeout:1000,//请求超时时长（ms）
          url:'/datajson',//请求的路径
          method:'get.post,put,patch,delete',//请求方法
          headers:{//设置请求头
              token:''
          },
          params:{},//请求参数拼接在url上
          data:{},//请求参数放在请求体里
    })
    //axios全局配置
    axios.defaults.baseURL="http://localhost:9090",
    axios.defaults.timeout=1000
    //axios实例配置
    let incetance=axios.create();
    incetance.defaults.timeout=4000
    //axios请求配置
    incetance.get('/data.json',{
        timeout:3000
    })


    //实际开发例子
    //有两种请求接口
    //http:localhost:8080
    //http:localhost:9090
    let ince=axios.create({
        baseURL:'http:localhost:8080',
        timeout:1000
    })
    let ince1=axios.create({
        baseURL:'http:localhost:9090',
        timeout:3000
    })
    ince.get('/contactList',{
        params:{
            id=12
        }
    }).then((res)=>{
        console.log(res)
    })
    ince1.get('/orderList',{
        timeout:5000
    }).then((res)=>{
        console.log(res);
    })

  }
}
</script>
