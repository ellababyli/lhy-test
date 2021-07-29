<template>
  <div class="home">
   
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'axios3-1',
  created(){
  	let instance = axios.create({
          baseURL:'http://localhost:8080',
          timeout:1000
      })
    let instance1 = axios.create({
        baseURL:'http://localhost:9090',
        timeout:5000
    })
    instance.get('/data.json').then((res)=>{
            console.log(res);
    })
  }
}
</script>
