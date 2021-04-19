<template>
  <el-table :data="tableData" height="500" border style="width: 100%">
    <el-table-column prop="id" label="id" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "01",
          name: "王小虎",
        },
        {
          id: "02",
          name: "王小虎",
        },
      ],
    };
  },
};
</script>
