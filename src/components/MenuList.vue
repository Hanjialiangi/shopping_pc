<template>
    <el-menu
      :default-active="url"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      router
      text-color="#fff"
      active-text-color="#ffd04b">
     <el-menu-item index="/goods/manage">
        <el-icon><goods /></el-icon>
        <span slot="title">商品管理</span>
      </el-menu-item>
      <el-menu-item index="/personal/manage">
        <el-icon><avatar /></el-icon>
        <span slot="title">人事管理</span>
      </el-menu-item>
      <el-menu-item index="/sell/manage">
       <el-icon><sell /></el-icon>
        <span slot="title">销售管理</span>
      </el-menu-item>
      <el-menu-item index="/stock/manage">
        <el-icon><van /></el-icon>
        <span slot="title">进货管理 </span>
      </el-menu-item>
       <el-menu-item index="/depot/manage">
        <el-icon><box /></el-icon>
        <span slot="title">库存管理 </span>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
  name: 'MenuList',
  data:function() {
    return {
      url:'/goods/manage'
    };
},
  mounted:function(){
      const path = window.location.pathname.split('/')[1];
      if(path==='goods'){
          this.url = '/goods/manage'
      }else if (path==='personal'){
           this.url = '/personal/manage'
      }else if(path==='sell'){
          this.url='/sell/manage'
      }else if(path==='stock'){
          this.url ='/stock/manage';
      }else if(path ==='depot'){
          this.url ='/depot/manage';
      }
 }
}
</script>

<style scoped>
.el-menu {
    height:750px;
}
</style>
