<template>
<div>
<el-page-header content="修改信息" title="进货管理" @back="goBack" />
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
    <el-form-item label="进货人">
      <el-input v-model="formInline.people" placeholder="请输入进货人" />
    </el-form-item>
    <el-form-item label="进货时间">
      <el-date-picker v-model="formInline.time" type="date" placeholder="请选择日期" />
    </el-form-item>
    <el-form-item label="图片">
        <UploadAvator :imgUrl="formInline.img" @changeImgUrl="handleChangeImgUrl"/>
    </el-form-item>
    <el-form-item style="margin-left: auto">
        <el-button :icon="Check" type="primary" @click="onSubmit">提交</el-button>
    </el-form-item>
</el-form>
</div>
</template>

<script>
import {stockInfo} from '../../constant'
import {markRaw} from 'vue'
import { ElMessage } from 'element-plus'
import UploadAvator from '../../components/UploadAvator.vue'
import {Check} from '@element-plus/icons-vue'

export default {
  name: 'StockEdit',
  components:{
      UploadAvator
  },
  data:function(){
      return {
          id:'',
          formInline:{},
          Check:markRaw(Check)
      }
  },
  methods:{
       goBack(){
          window.location.href="/stock/manage"
      },
      onSubmit(){
          console.log(this.formInline.img);
          ElMessage({
            message: '添加成功',
            type: 'success',
          })
          setTimeout(()=>{
              window.location.href="/stock/manage";
          },3000); //延时触发
      },
      handleChangeImgUrl(params){
          this.formInline.img=params;
      }
  },
  mounted:function(){
      this.id = this.$route.params.id; //获取路由参数
      this.formInline=stockInfo[this.$route.params.id-1];
  }
}
</script>
<style scoped>
.ml-2 {
    margin-top:30px;
    margin-bottom: 30px;
}
</style>
