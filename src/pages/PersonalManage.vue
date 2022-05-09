<template>
<div>
  <h3>人事管理</h3>
   <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="编号">
      <el-input v-model="formInline.jobNo" placeholder="请输入编号" />
    </el-form-item>
    <el-form-item label="名称">
      <el-input v-model="formInline.name" placeholder="请输入名称" />
    </el-form-item>
    <el-form-item label="类型">
      <el-select v-model="formInline.type" placeholder="请选择类型">
        <el-option label="职工" value="职工" />
        <el-option label="供应商" value="供应商" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary"  :icon="Search" @click="handleSearch">搜索</el-button>
    </el-form-item>
      <el-form-item>
      <el-button :icon="Refresh" @click="handleReset">重置</el-button>
    </el-form-item>
   </el-form>
<router-link to="/personal/manage/add"><el-button  class="add" type="primary" :icon="Edit">新增</el-button></router-link>
<el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="jobNo" label="编号"/>
    <el-table-column prop="name" label="名称" />
     <el-table-column  label="图片" >
       <template v-slot="scope">
         <el-image style="width:50%; height:50%" :src="scope.row.avator" />
       </template>
     </el-table-column>
       <el-table-column prop="work_time" label="工龄" />
     <el-table-column prop="wage" label="薪水" />
      <el-table-column prop="note" label="备注" />
      <el-table-column prop="type" label="类型" />
       <el-table-column label="操作" width="180">
      <template #default="scope">
        <el-button :icon="Edit" size="small" @click="handleEdit(scope.row.id)"
          >编辑</el-button
        >
        <el-popconfirm confirm-button-text="确认" 
        cancel-button-text="取消" 
        title="确认要删除该项吗？" 
        :icon="InfoFilled"
        @confirm="handleDelete(scope.row.id)"
        icon-color="#626AEF">
          <template #reference>
            <el-button
              size="small"
              type="danger"
              :icon="Delete"
              >删除</el-button
            >
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination style="float:right" background  layout="prev, pager, next" :page-size="pageSize" :current-page="page" :total="total" @current-change="handleCurrentChange" />
  </div>
</template>

<script>
import { personalInfo} from '../constant'
import {markRaw} from 'vue'
import { ElNotification } from 'element-plus'
import { Delete, Edit,Search,Refresh,InfoFilled} from '@element-plus/icons-vue'

export default {
  name: 'PersonalManage',
  components:{
  },
  data:function() {
  return {
    tableData :personalInfo,
    Delete:markRaw(Delete),
    Edit:markRaw(Edit),
    Search:markRaw(Search),
    Refresh:markRaw(Refresh),
    InfoFilled:markRaw(InfoFilled),
    total:1,
    page:1,
    pageSize:5,
    formInline:{
      jobNo:'',
      name:'',
      type:''
    }
  };
  },
  methods:{
    handleEdit:function(row){
      window.location.href=`/personal/manage/edit/${row}`
    },
    handleDelete:function(row){
      console.log(row) //执行删除api
       ElNotification({
        title: 'Success',
        message: '删除成功',
        type: 'success',
  })
    },
    handleCurrentChange :function(val) {
      this.page = val;
    },
    handleSearch:function(){
      console.log(this.formInline);
    },
    handleReset:function(){
      this.formInline={jobNo:'',name:'',type:''};
    }
  },
  mounted:function(){
    this.total = personalInfo.length;
    console.log(this.$store.state);
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}
.add{
  margin-top:30px;
  margin-bottom:10px;
}
.demo-form-inline{
  margin:30px;
}
</style>
