<template>
  <el-table :data="tableData" height="500" style="width: 100%">
    <el-table-column prop="id" label="id" width="100"> </el-table-column>
    <el-table-column prop="usrName" label="用户姓名" width="140">
    </el-table-column>
    <el-table-column prop="goodsInfo" label="商品表" width="180">
    </el-table-column>
    <el-table-column prop="price" label="总价" width="180"> </el-table-column>
    <el-table-column prop="time" label="下单时间" width="180">
    </el-table-column>
    <el-table-column prop="done" label="是否完成" width="180">
    </el-table-column>
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
      .get("/admin/record/search")
      .then((res) => (this.tableData = res.data.data));
    //这个数据还得做二次处理
  },
};
</script>
