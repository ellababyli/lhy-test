<template>
  <div class="home">
  </div>
</template>

<script>
 //拦截器：在请求或响应被处理前拦截它们
  //请求拦截器  响应拦截器
import axios from "axios"
import { config } from 'vue/types/umd'
export default {
  name: 'axios3-3',
  created(){
        //请求拦截器
        axios.interceptors.request.use(config=>{
            //在发送请求前做些什么
            return config
        },err=>{
            //在请求后的时候做些什么
            return Promise.reject(err)
        })
        //响应拦截器
        axios.interceptors.response.use(res=>{
            //请求成功对响应数据做处理
            return res
        },err=>{
            //响应错误做些什么
            return Promise.reject(err);
        })
        axios.get().then(res=>{}).catch(err=>{});
        //取消拦截器（了解）
        let inter=axios.interceptors.request.use(config=>{
            config.headers={
                auth:true
            }
            return config
        },err=>{
            return Promise.reject(err)
        })
        axios.interceptors.request.eject(inter);//取消拦截器

        //例子 登录状态 （token=''）需要登录的接口
        let interance=axios.create({})
        interance.interceptors.request.use(config=>{
            config.headers.token=''
            return config
        })
        //不需要登录的接口
        let interce=axios.create({})

        //移动端开发
        let intance_phone=axios.create({});
        intance_phone.interceptors.request.use(config=>{
            $('#tanchuang').show();
            return config;
        })
        intance_phone.response.use(res=>{
            $('#tanchuang').hide();
            return res;
        })
  }
}
</script>
