<template>
<div>
<el-page-header content="添加信息" title="销售管理" @back="goBack" />
<el-tag class="ml-2"  size="large">基本信息</el-tag>
<el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="编号">
      <el-input v-model="formInline.No" placeholder="请输入编号" />
    </el-form-item>
    <el-form-item label="名称">
      <el-input v-model="formInline.name" placeholder="请输入名称" />
    </el-form-item>
    <el-form-item label="数量">
      <el-input v-model="formInline.number" placeholder="请输入数量" />
    </el-form-item>
    <el-form-item label="金额">
      <el-input v-model="formInline.sum" placeholder="请输入金额" />
    </el-form-item>
    <el-form-item label="图片">
        <UploadAvator :imgUrl="formInline.img" @changeImgUrl="handleChangeImgUrl"/>
    </el-form-item>
    <el-form-item style="margin-left: auto">
        <el-button :icon="Check" type="primary" @click="onSubmit">提交</el-button>
    </el-form-item>
     <el-form-item style="margin-left: auto">
        <el-button :icon="Refresh"  @click="onReset">重置</el-button>
    </el-form-item>
</el-form>
</div>
</template>

<script>
import { ref } from 'vue'
import {markRaw} from 'vue'
import { ElMessage } from 'element-plus'
import UploadAvator from '../../components/UploadAvator.vue'
import { Refresh,Check} from '@element-plus/icons-vue'

export default {
  components: { UploadAvator },
  name: 'SellAdd',
  data:function(){
      return {
          formInline:{
              No:'',
              name:'',
              number:'',
              sum:'',
              img:ref('')
          },
          Refresh:markRaw(Refresh),
          Check:markRaw(Check)
      }
  },
  methods:{
      goBack(){
          window.location.href="/sell/manage"
      },
      onSubmit(){
          console.log(this.formInline.img);
          ElMessage({
            message: '添加成功',
            type: 'success',
          })
          setTimeout(()=>{
              window.location.href="/sell/manage";
          },3000); //延时触发
      },
      onReset(){
          this.formInline={  No:'',
              name:'',
              number:'',
              sum:'',
              img:ref('')}
      },
      handleChangeImgUrl(params){
          this.formInline.img=params;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ml-2 {
    margin-top:30px;
    margin-bottom: 30px;
}
</style>
