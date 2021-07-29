<template>
  <div class="home">
    
  </div>
</template>

<script>
// @ is an alias to /src
//并发请求，同时进行多个请求，并统一处理返回值
import axios from "axios"
export default {
  name: 'axios2-3',
  components: {
  },
  created(){
  	axios.all([
      axios.get('/data.json'),
      axios.get('/city.json')
    ]).then(axios.spread((datares,cityres)=>{
      console.log(datares,cityres);
    }))
  }
}
</script>
