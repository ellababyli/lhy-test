<template>
  <div class="home">
  </div>
</template>

<script>
//错误处理：请求错误时进行处理
import axios from "axios"
import { config } from 'vue/types/umd';
export default {
  name: 'axios3-4',
  created(){
  	axios.get('/data.json').then((res)=>{
  		console.log(res);
  	}).catch(err=>{
        console.log(err);
    })
  }
}
</script>
