<template>
  <div class="idCard">
    <div class="name">
      <span>{{ tableData[0]["name"] }}</span>
    </div>
    <div class="info">
      <div class="container">
        <span>性别：<span class="des">男</span></span>
        <span>id：<span class="des">01</span></span>
        <span>爱好：<span class="des">后台管理</span></span>
      </div>
      <img
        class="headPic"
        src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3355464299,584008140&fm=26&gp=0.jpg"
        alt="头像不见了"
      />
    </div>
    <div class="slog">
      <span>个人宣言：</span><span class="myText">我的后台我做主</span>
    </div>
  </div>
</template>
<style scoped>
.des {
  color: white;
  font-weight: 600;
  text-shadow: 0.1rem 0.1rem 0.1rem #3a2788;
  line-height: 0.8rem;
  text-decoration: underline;
}
.idCard {
  width: 22rem;
  height: 12rem;
  padding: 2rem;
  border: 2px solid transparent;
  border-radius: 2rem;
  margin-left: 2rem;
  margin-top: 2rem;
  box-shadow: 0.2rem 0.2rem 0.5rem 0.5rem #f6f6f6;
}
.info {
  display: flex;
}
.container {
  width: 15rem;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-left: 1.5rem;
  color: #85ade6;
}
.container span {
  margin-top: 0.5rem;
}
.headPic {
  width: 6rem;
  object-fit: cover;
}
.slog {
  margin-top: 1rem;
  color: #85ade6;
}
.myText {
  color: transparent;
  background-image: linear-gradient(to right, #fc09ff, #04e0e3);
  background-clip: text;
}
.name {
  font-size: 2rem;
  font-weight: 800;
  color: white;
  text-shadow: 0.1rem 0.1rem 0.1rem #666;
}
</style>

<script>
import myAjax from "../utils/ajax";
export default {
  data() {
    return {
      tableData: [
        {
          name: "",
        },
      ],
    };
  },
  beforeCreate() {
    myAjax
      .get("/admin/search/admin")
      .then((res) => (this.tableData = res.data.data));
  },
};
</script>
