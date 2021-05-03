<template>
  <div style="position: relative;">
    <i type="primary" @click="getData" class="el-icon-refresh btnRe">刷新</i>
    <el-table :data="tableData" height="500" style="width: 100%">
      <el-table-column prop="id" label="订单号" width="100"> </el-table-column>
      <el-table-column prop="usrName" label="用户姓名" width="140">
      </el-table-column>
      <el-table-column prop="id" label="商品表" width="180">
        <template slot-scope="scope">
          <div
            v-for="(item, i) in getName(tableData[scope.$index].goodsInfo)"
            :key="i"
          >
            {{ item.name }}×{{ item.count }}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="总价" width="180">
        <template slot-scope="scope">
          {{ tableData[scope.$index].sumPrice }}元
        </template>
      </el-table-column>
      <el-table-column prop="time" label="下单时间" width="180">
      </el-table-column>
      <el-table-column prop="done" label="是否完成" width="180">
        <template slot-scope="scope">
          <template v-if="tableData[scope.$index].done == 0" type="warning"
            ><span>未完成</span>
            <el-button
              style="margin-left:20px"
              type="warning"
              @click="sendSuccess(tableData[scope.$index].id, scope.$index)"
              >点击完成</el-button
            >
          </template>
          <el-button v-else type="success">配送完成</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import myAjax from "../utils/ajax";
export default {
  data() {
    return {
      goodsData: [],
      tableData: [],
      orderData: [],
    };
  },
  methods: {
    getName(inf) {
      return JSON.parse(inf).map((item) => item);
    },
    sendSuccess(id, i) {
      myAjax.post("/admin/record/change", { id }).then((res) => {
        if (res.data.code == 1) {
          this.tableData[i].done = 1;
        }
      });
    },
    getData() {
      this.$store.commit("getCunt", 1);
      myAjax.get("/admin/record/search").then((res) => {
        this.tableData = res.data.data.reverse();
      });
    },
  },
  created() {
    this.goodsData = this.$store.state.data;
  },
  mounted() {
    this.getData();
  },
};
</script>
<style scoped>
.btnRe {
  position: absolute;
  top: -20px;
  left: 0;
  z-index: 10;
  cursor: pointer;
}
.btnRe:hover {
  color: blue;
}
</style>
