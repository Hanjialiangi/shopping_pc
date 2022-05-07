<template>
<div>
<el-page-header content="添加信息" title="人事管理" @back="goBack" />
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
    <el-form-item label="薪水">
      <el-input v-model="formInline.wage" placeholder="请输入薪水" />
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
        <UploadAvator :imgUrl="formInline.avator" @changeImgUrl="handleChangeImgUrl"/>
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
  name: 'PersonalAdd',
  data:function(){
      return {
          formInline:{
              jobNo:'',
              name:'',
              work_time:'',
              wage:'',
              note:'',
              avator:ref(''),
              type:''
          },
          Refresh:markRaw(Refresh),
          Check:markRaw(Check)
      }
  },
  methods:{
      goBack(){
          window.location.href="/personal/manage"
      },
      onSubmit(){
          console.log(this.formInline.avator);
          ElMessage({
            message: '添加成功',
            type: 'success',
          })
          setTimeout(()=>{
              window.location.href="/personal/manage";
          },3000); //延时触发
      },
      onReset(){
          this.formInline={ jobNo:'',
              name:'',
              work_time:'',
              wage:'',
              note:'',
              avator:ref(''),
              type:''}
      },
      handleChangeImgUrl(params){
          this.formInline.avator=params;
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
