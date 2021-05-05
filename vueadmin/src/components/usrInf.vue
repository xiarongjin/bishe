<template>
  <el-table :data="tableData" height="500" style="width: 100%">
    <el-table-column prop="name" label="姓名" width="140"> </el-table-column>
    <el-table-column prop="address" label="地址" width="180"> </el-table-column>
    <el-table-column prop="tel" label="电话" width="180"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    this.tableData = this.$store.state.usrInf;
  },
};
</script>
