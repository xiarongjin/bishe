<template>
  <el-table :data="tableData" height="500" style="width: 100%">
    <el-table-column prop="id" label="id" width="100"> </el-table-column>
    <el-table-column prop="usrId" label="用户id" width="140"> </el-table-column>
    <el-table-column prop="goods" label="商品表" width="180"> </el-table-column>
    <el-table-column prop="price" label="总价" width="180"> </el-table-column>
    <el-table-column prop="time" label="下单时间" width="180">
    </el-table-column>
    <el-table-column prop="isDo" label="是否完成" width="180">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "01",
          usrId: "饮料",
          goods: "王小虎",
          price: "库存",
          time: "照片",
          isDo: "价格",
        },
        {
          id: "01",
          usrId: "饮料",
          goods: "王小虎",
          price: "库存",
          time: "照片",
          isDo: "价格",
        },
      ],
    };
  },
};
</script>
