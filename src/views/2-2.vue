<template>
  <div class="home">
    
  </div>
</template>

<script>
/**
  axios请求方法：get,post,put,patch,delete
  get:获取数据
  post:请求数据（表单提交，文件上传）
  put:更新数据（所有数据推送到后端）
  patch:更新数据（只将修改后的数据推送到后端）
  delete:删除数据
  **/
// @ is an alias to /src
import axios from "axios"
export default {
  name: 'axios2-2',
  components: {
  },
  created(){
  	axios.get('/data.json',{
      params:{
        id:12
      }
    }).then((res)=>{
  		console.log(res);
  	}),
    axios({
      url:'/data.json',
      method:'get',
      params:{
        id:12
      }
    }).then((res)=>{
      console.log(res);
    })
    //post别名请求
    let data={
      id:12
    }
    axios.post('/post',data).then(res=>{
      console(res);
    })
    axios({
      url:'/post',
      method:"post",
      data:data
    }).then(res=>{
      console.log(res);
    })
    //form-data请求
    let formData=new FormData();
    for(let key in data){
      formData.append(key,data[key])
    }
    axios.post('/post',formData).then(res=>{
      console.log(res);
    })
    //put请求
    axios.put('/put',data).then(res=>{
      console.log(res);
    })
    //patch请求
    axios.patch('/patch',data).then(res=>{
      console.log(res);
    })
    //delete 删除
    axios.delete('/delete',{
      params:{
        id:12
      }
    }).then(res=>{
      console.log(res);
    })
    axios.delete('/delete',{
      data:{
        id:12
      }
    }).then(res=>{
      console.log(res);
    })
  }
}
</script>
