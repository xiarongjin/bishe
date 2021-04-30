<template>
  <el-table :data="tableData" height="500" border style="width: 100%">
    <el-table-column prop="id" label="id" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
  </el-table>
</template>

<script>
import myAjax from "../utils/ajax";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  mounted() {
    myAjax
      .get("/admin/search/admin")
      .then((res) => (this.tableData = res.data.data));
  },
};
</script>
