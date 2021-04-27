<template>
  <el-table :data="tableData" height="500" style="width: 100%">
    <el-table-column prop="id" label="id" width="100"> </el-table-column>
    <el-table-column prop="type" label="类型" width="140"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="count" label="库存" width="180"> </el-table-column>
    <el-table-column prop="image" label="照片" width="180"> </el-table-column>
    <el-table-column prop="price" label="价格" width="180"> </el-table-column>
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
      .get("/admin/goods/search")
      .then((res) => (this.tableData = res.data.data));
  },
};
</script>
