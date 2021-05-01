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
          <el-button v-if="form.id == ''" type="primary" @click="onSubmit"
            >立即创建</el-button
          >
          <el-button v-else type="warning" @click="onSubmit"
            >立即修改</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import myAjax from "../utils/ajax";
import common from "./common";
import { baseUrl } from "../utils/ajax";
export default {
  data() {
    return {
      item: {},
      upLoadUrl: baseUrl + "/usr/load/image",
      form: {
        id: "",
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
      if (this.form.id) {
        myAjax.post("/admin/goods/change", this.form).then((res) => {
          if (res.status == 200) {
            this.$message({
              duration: 500,
              message: "修改成功！",
            });
            this.$router.push({ name: "商品信息" });
          } else {
            this.$message("不好意思，服务器开小差了！");
          }
        });
      } else {
        myAjax.post("/admin/goods/add", this.form).then((res) => {
          console.log(res);
          if (res.status == 200) {
            this.$message({
              duration: 500,
              message: "添加成功！",
            });
            this.$router.push({ name: "商品信息" });
          } else {
            this.$message("不好意思，服务器开小差了！");
          }
        });
      }
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
      this.form.imageUrl = res.result.url;
    },
    loaderror() {
      this.$message("不好意思，服务器开小差了！");
    },
    loadPro() {
      // console.log(event.percent);
    },
    handleChange(value) {
      console.log(value);
    },
    priceChange(value) {
      console.log(value);
    },
  },
  mounted() {
    if (this.$route.params.id) {
      this.form = { ...this.$route.params, imageUrl: this.$route.params.image };
      this.item = { name: "修改商品信息" };
    } else {
      this.item = { name: "添加商品" };
    }
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
