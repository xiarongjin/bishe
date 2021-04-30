<template>
  <div>
    <div v-if="this.$router.currentRoute.path == '/goodsInf'">
      <router-link to="/goodsInf/addgoods">
        <el-button type="primary">添加商品</el-button>
      </router-link>
      <el-table :data="tableData" height="500">
        <el-table-column align="center" prop="id" label="id" width="60">
        </el-table-column>
        <el-table-column align="center" prop="type" label="类型" width="60">
        </el-table-column>
        <el-table-column align="center" prop="name" label="名称" width="100">
        </el-table-column>
        <el-table-column prop="count" align="center" label="库存" width="80">
        </el-table-column>
        <el-table-column label="照片" align="center" width="80">
          <template slot-scope="scope">
            <img width="80" :src="tableData[scope.$index].image" alt="" />
          </template>
        </el-table-column>
        <el-table-column prop="price" label="价格" align="center" width="80">
        </el-table-column>
        <el-table-column
          label="操作"
          style="textAligan"
          align="center"
          width="150"
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
              type="primary"
              icon="el-icon-edit"
              size="small"
              circle
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <router-view></router-view>
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
      rows.splice(index, 1);
    },
  },
  mounted() {
    myAjax
      .get("/admin/goods/search")
      .then((res) => (this.tableData = res.data.data));
  },
};
</script>
<style scoped></style>
