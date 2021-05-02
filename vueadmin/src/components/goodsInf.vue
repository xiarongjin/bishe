<template>
  <div>
    <div v-if="this.$router.currentRoute.path == '/goodsInf'">
      <router-link to="/goodsInf/addgoods">
        <el-button type="primary">添加商品</el-button>
      </router-link>
      <el-table
        :data="tableData"
        :row-style="{ height: '50px' }"
        class="show_table"
        height="450"
        :default-sort="{ prop: 'id', order: 'descending' }"
      >
        <el-table-column prop="id" align="center" label="序号" width="100">
          <template slot-scope="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column align="center" prop="type" label="类型" width="120">
        </el-table-column>
        <el-table-column align="center" prop="name" label="名称" width="120">
        </el-table-column>
        <el-table-column prop="count" align="center" label="库存" width="100">
        </el-table-column>
        <el-table-column label="照片" align="center" width="200">
          <template slot-scope="scope">
            <img width="80" :src="tableData[scope.$index].image" alt="" />
          </template>
        </el-table-column>
        <el-table-column prop="price" label="价格" align="center" width="100">
          <template slot-scope="scope">
            <span> {{ tableData[scope.$index].price }}元 </span>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          style="textAligan"
          align="center"
          width="170"
        >
          <template slot-scope="scope">
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="small"
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              circle
            ></el-button>
            <el-button
              type="warning"
              icon="el-icon-edit"
              size="small"
              circle
              @click="toChange(scope.$index, tableData)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import myAjax from "../utils/ajax";
export default {
  data() {
    return {
      tableData: [],
      item: {},
    };
  },
  methods: {
    deleteRow(index, rows) {
      console.log(index, rows[index]);
      myAjax.post("/admin/goods/del", rows[index]).then((res) => {
        console.log(res);
        if (res.status == 200) {
          rows.splice(index, 1);
          this.$message.error({
            duration: 500,
            message: "删除成功！",
          });
        }
      });
    },
    toChange(index, rows) {
      this.$router.push({ name: "添加商品", params: rows[index] });
    },
  },
  mounted() {
    myAjax
      .get("/admin/goods/search")
      .then((res) => (this.tableData = res.data.data));
  },
};
</script>
<style scoped>
.show_table {
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  border: none;
  overflow: auto;
}
</style>
