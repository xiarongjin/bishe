<template>
<div>

   <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>管理员{{msg}}</span>
  </div>
 <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="用户名">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
    <el-form-item label="密码">
    <el-input type='password' v-model="form.pass"></el-input>
  </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="onSubmit">登录</el-button>
    <el-button @click="reset">重置</el-button>
    </el-form-item>
 </el-form>
</el-card>

</div>
 



  
</template>

<script>
export default {
name:'test',
props:{
    msg:String
},
data(){
  return{
    form:{
      name:'',
      pass:''
    }
  }

},
  methods: {
      onSubmit() {
          let getList =  this.$store.dispatch('getHotMovieList');
      getList.then(res=>{
             console.log(res)
      })
      },
      reset(){
        console.log('重置')
      }
    }
 
}
</script>

<style>
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 350px;
    margin: 100px auto;
  }

</style>