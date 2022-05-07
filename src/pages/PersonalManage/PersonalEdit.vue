<template>
<div>
<el-page-header content="修改信息" title="人事管理" @back="goBack" />
<el-tag class="ml-2"  size="large">基本信息</el-tag>
<el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="编号">
      <el-input v-model="formInline.jobNo" placeholder="请输入编号" />
    </el-form-item>
    <el-form-item label="名称">
      <el-input v-model="formInline.name" placeholder="请输入名称" />
    </el-form-item>
    <el-form-item label="工龄">
      <el-input v-model="formInline.work_time" placeholder="请输入工龄" />
    </el-form-item>
    <el-form-item label="工资">
      <el-input v-model="formInline.wage" placeholder="请输入工资" />
    </el-form-item>
    <el-form-item label="备注">
      <el-input v-model="formInline.note" placeholder="请输入备注" />
    </el-form-item>
    <el-form-item label="类型">
      <el-select v-model="formInline.type" placeholder="请选择类型">
        <el-option label="职工" value="职工" />
        <el-option label="供应商" value="供应商" />
      </el-select>
    </el-form-item>
    <el-form-item label="头像">
        <UploadAvator :imgUrl="formInline.img" @changeImgUrl="handleChangeImgUrl"/>
    </el-form-item>
    <el-form-item style="margin-left: auto">
        <el-button :icon="Check" type="primary" @click="onSubmit">提交</el-button>
    </el-form-item>
</el-form>
</div>
</template>

<script>
import {personalInfo} from '../../constant'
import {markRaw} from 'vue'
import { ElMessage } from 'element-plus'
import UploadAvator from '../../components/UploadAvator.vue'
import {Check} from '@element-plus/icons-vue'

export default {
  name: 'GoodsEdit',
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
          window.location.href="/personal/manage"
      },
      onSubmit(){
          console.log(this.formInline.img);
          ElMessage({
            message: '添加成功',
            type: 'success',
          })
          setTimeout(()=>{
              window.location.href="/personal/manage";
          },3000); //延时触发
      },
      handleChangeImgUrl(params){
          this.formInline.avator=params;
      }
  },
  mounted:function(){
      this.id = this.$route.params.id; //获取路由参数
      this.formInline=personalInfo[this.$route.params.id-1];
  }
}
</script>
<style scoped>
.ml-2 {
    margin-top:30px;
    margin-bottom: 30px;
}
</style>
