<template>
  <el-upload
    class="avatar-uploader"
    action="https://jsonplaceholder.typicode.com/posts/"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
  >
    <img v-if="imgUrl" :src="imgUrl" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
  </el-upload>
</template>

<script>
// import { ref } from 'vue'
// import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import {markRaw} from 'vue'

export default {
    name:'UploadAvator',
    props:{
        imgUrl:String
    },
    data:function(){
        return {
            Plus:markRaw(Plus)
        }
    },
    methods:{
        handleAvatarSuccess:function(response,uploadFile){
            this.$emit('changeImgUrl',URL.createObjectURL(uploadFile.raw))
        }
        // beforeAvatarUpload:function(rawFile){
        //     if (rawFile.type !== 'image/jpeg') {
        //         ElMessage.error('Avatar picture must be JPG format!')
        //     return false
        //     } else if (rawFile.size / 1024 / 1024 > 2) {
        //         ElMessage.error('Avatar picture size can not exceed 2MB!')
        //     return false
        //     }
        //     return true
        // }
    }
}
</script>

<style>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
.avatar-uploader {
    border: 1px solid #8c939d;
}
</style>