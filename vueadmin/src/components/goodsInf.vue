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
export default {
  data() {
    return {
      tableData: [
        {
          id: "01",
          type: "饮料",
          name: "王小虎",
          count: "库存",
          image: "照片",
          price: "价格",
        },
        {
          id: "02",
          type: "饮料",
          name: "王小虎",
          count: "库存",
          image: "照片",
          price: "价格",
        },
      ],
    };
  },
};
</script>
