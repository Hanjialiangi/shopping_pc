<template>
<div className="bg">
<div className="box" v-if="isShow">
    <div class="root">用户登录</div>
    <div class="img" @click="handleTurn"></div>
<el-form :model="form" label-width="120px">
    <el-form-item label="用户名">
      <el-input v-model="form.username" />
    </el-form-item>
      <el-form-item label="密码">
      <el-input type="password" v-model="form.password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">登陆</el-button>
      <el-button @click="onReset">重置</el-button>
    </el-form-item>
</el-form>
</div>
<el-avatar v-show="!isShow" class="entry" size="large" @click="handleTurn">登陆</el-avatar>
</div>
</template>

<script>
import {username,password} from '../constant'
import {hex_md5} from '../until'
import { ElMessage } from 'element-plus'
import Cookies from 'js-cookie';
// import {useStore} from 'vuex'
// import { computed } from 'vue'
export default {
  name: 'Login',
  data:function(){
      return {
          form:{
              username:"",
              password:""
          },
          isShow:true
      }
  },
//   setup(){
//       let store = useStore();
      
//       const change=(username)=>{
//           store.commit('change',username); // store.dispatch('change')
//       }
//       return {
//           state:computed(() => store.state),
//           change
//       }
//   },
  methods:{
      onSubmit(){
          if(this.form.username===username&& this.form.password===password){
              Cookies.set('token',hex_md5(password)); //设置令牌
              //设置保存
            // this.$store.commit('change',username);
             ElMessage({
                    showClose: true,
                    message: '登陆成功',
                    type: 'success',
                }) 
            setTimeout(() => {
                window.location.href="/home"
            }, 3000);
          }else{
                ElMessage({
                    showClose: true,
                    message: '登陆失败,请检查用户名或者密码.',
                    type: 'error',
                }) 
          }
      },
      onReset(){
          this.form={username:'',password:''}
      },
      handleTurn(){
          this.isShow =!this.isShow; //取反
      }
  },
  mounted:function(){
      console.log(this.$store.state);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--https://api.btstu.cn/sjbz/api.php    https://api.paugram.com/bing/   https://api.mtyqx.cn/api/random.php -->
<style scoped>
.bg{
    width:100vw;
    height:100vh;
    background-image:url(https://api.btstu.cn/sjbz/api.php) ; 
    background-repeat: no-repeat;
    /* background-size: 100% 100%; */
    background-position:center;
    background-size: cover;
}
.box{
    position: absolute;
    border-radius: 10px;
    top:35vh;
    left:35vw;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius:10px;
    /* background-color:#fff ; */
    backdrop-filter: blur(5px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    width: 400px;
    height: 300px;
}
.root{
    margin:10px;
    font-size:16px;
}
:deep().el-form-item__label{
    color: #000 !important;
}
.el-form{
    margin:30px;
    position: relative;
    left:-20px;
    top:50px;
}
.img{
    width: 20px;
    height: 20px;
    position: absolute;
    background-image:url('../assets/close.svg');
    background-size:100% 100%;
    top: 10px;
    left: 370px;
}
.entry {
    position: absolute;
    background-color:aqua;
    bottom:0;
    right:0;
    margin:20px;
}
@media screen and (max-width: 1000px) {
    .box{
        left:10vw;
    }
}


@media screen and (max-width:400px){
   .box{
       width:300px;
       height:200px;
   }
   .img {
    left:270px;
   }
   .el-form{
       position: relative;
       left:-35px;
       top:10px;
       margin:0;
   }
}
</style>
