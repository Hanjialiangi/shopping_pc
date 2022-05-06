<template>
  <div id="app">
    <el-container>
  <el-header><p>商场进存销管理系统</p></el-header>
  <el-container>
    <el-aside width="200px"><MenuList/></el-aside>
    <el-container>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</el-container>
  </div>
</template>

<script>
import MenuList from './components/MenuList.vue'

export default {
  name: 'App',
  components: {
   MenuList
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

</style>
