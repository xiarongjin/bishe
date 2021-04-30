<template>
  <div style="width:400px">
    <common :item="item"></common>
    <div style="margin-top:40px">
      <el-form ref="form" size="medium" :model="form" label-width="80px">
        <el-form-item label="商品名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="商品类型">
          <el-radio-group v-model="form.type">
            <el-radio-button label="食品"></el-radio-button>
            <el-radio-button label="饮料"></el-radio-button>
            <el-radio-button label="洗护"></el-radio-button>
            <el-radio-button label="其他"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="商品照片">
          <el-upload
            class="avatar-uploader"
            :action="upLoadUrl"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :on-error="loaderror"
            :on-progress="loadPro"
            :before-upload="beforeUp"
          >
            <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="商品价格">
          <el-input-number
            v-model="form.price"
            controls-position="right"
            @change="priceChange"
            :precision="2"
            :step="0.1"
            :min="1"
            :max="10"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="商品库存">
          <el-input-number
            v-model="form.count"
            @change="handleChange"
            :min="1"
            :max="1000"
            label="库存"
          ></el-input-number>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import common from "./common";
export default {
  data() {
    return {
      item: {},
      upLoadUrl: "http://localhost:3838/usr/load/image",
      form: {
        name: "",
        type: "食品",
        price: 1,
        count: 1,
        imageUrl: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    },
    beforeUp(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleAvatarSuccess(res) {
      console.log(res.result);
      this.form.imageUrl = res.result.url;
    },
    loaderror() {
      alert("不好意思，上传失败了!");
    },
    loadPro(event) {
      console.log(event.percent);
    },
    handleChange(value) {
      console.log(value);
    },
    priceChange(value) {
      console.log(value);
    },
  },
  components: {
    common,
  },
};
</script>
<style scoped>
.el-upload {
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  border-radius: 6px;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
  border: 1px dashed #f6f6f6;
}
.avatar-uploader-icon:hover {
  border-color: #409eff;
}
.avatar {
  border-radius: 6px;
  width: 178px;
  height: 178px;
  display: block;
}
</style>
