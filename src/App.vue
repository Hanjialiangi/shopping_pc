<template>
  <div id="app">
    <el-container>
  <el-header v-if="user">
    <p>商场进存销管理系统</p>
    <el-popconfirm title="确认注销登陆?" @confirm="handleWindow">
      <template #reference>
        <el-avatar
          style="float:right;margin-top:-30px;margin-right:80px"
          src="https://api.vvhan.com/api/avatar"
        />
      </template>
    </el-popconfirm>
     <label class="name">{{user}}</label>
  </el-header>
  <el-container>
    <el-aside v-if="user" width="200px"><MenuList/></el-aside>
    <el-container>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</el-container>
  </div>
</template>

<script>
import MenuList from './components/MenuList.vue'
import Cookies  from 'js-cookie'
import { ElMessage } from 'element-plus'

export default {
  name: 'App',
  components: {
   MenuList
  },
  data:function(){
    return {
      user:'',
    }
  },
  methods:{
    handleWindow(){
      Cookies.remove('token');
       ElMessage({
        message: '注销成功',
        type: 'success',
      })
      window.location.href="/login";
    }
  },
  mounted:function(){
    const token = Cookies.get('token');
    console.log(token);
    if(token){
      this.user = 'admin'
    }
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
#app{
  width:100%;
  height:100%;
}
.el-header{
  background-color: #B3C0D1;
  width:100%;
}
.el-header p {
  margin-top:15px;
  font-size:20px;
  font-weight: bolder;
}
.el-aside{
  overflow: hidden;
}
.name{
  margin-top:-20px;
  float:right;
  position: relative;
  left:90px;
}
.el-main{
    padding:0 !important;
    overflow: hidden !important;
}

</style>
