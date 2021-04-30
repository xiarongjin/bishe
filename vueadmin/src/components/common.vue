.<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/goodsInf' }">返回</el-breadcrumb-item>
    <el-breadcrumb-item>{{
      this.$router.history.current.name
    }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  mounted() {
    // console.log(this.$router.history);
  },
};
</script>

<style></style>
