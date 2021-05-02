<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import myAjax from "./utils/ajax";

export default {
  created() {
    myAjax
      .get("/admin/goods/search")
      .then((res) => this.$store.commit("getData", res.data.data));
  },
};
</script>
