<template>
  <div class="body">
    <el-table :data="tableData" height="500" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="140"> </el-table-column>
      <el-table-column prop="address" label="地址" width="180">
      </el-table-column>
      <el-table-column prop="tel" label="电话" width="180"> </el-table-column>
    </el-table>
    <button @click="getExcel">导出</button>
  </div>
</template>

<script lang="ts">
import { exportJson2Excel } from "webxrj-jslib";
export default {
  data() {
    return {
      tableData: this.$store.state.usrInf,
    };
  },
  created() {
    // this.tableData = this.$store.state.usrInf;;
  },
  methods: {
    getExcel() {
      const th = ["姓名", "地址", "电话"]; // 列头
      const filterVal = ["name", "address", "tel"]; // 内容
      const list = this.tableData; // list是你的数据源，可以自己重新处理数据内容和类型
      const defaultTitle = "我的表格标题";
      const obj = {
        th,
        filterVal,
        list,
        defaultTitle,
      };
      exportJson2Excel(obj);
    },
  },
};
</script>
