<template>
  <el-table :data="tableData" height="500" style="width: 100%">
    <el-table-column prop="name" label="姓名" width="140"> </el-table-column>
    <el-table-column prop="address" label="地址" width="180"> </el-table-column>
    <el-table-column prop="tel" label="电话" width="180"> </el-table-column>
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
      .get("/admin/search/usr")
      .then((res) => (this.tableData = res.data.data));
  },
};
</script>
