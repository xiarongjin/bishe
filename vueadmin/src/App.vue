<template>
  <div id="app">
   <!-- <Login msg="登录"></Login> -->
   <Manage></Manage>
   
  </div>
  
</template>

<script>
// import Login from "./components/login"
import Manage from './components/manage.vue';
export default {
  name: 'App',
  components:{
    // Login,
    Manage
  },
 computed:{
   data(){
     return this.$store.state.data;
   }
 }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
