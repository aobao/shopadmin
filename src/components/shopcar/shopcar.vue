<template>
  <div>
    <el-table
      :data="tableData"
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="id"
        >
      </el-table-column>
      <el-table-column
        prop="cid"
        label="用户名"
        width="200">
      </el-table-column>
      <el-table-column
        prop="shopname"
        label="商品名称"
        width="400">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格(RMB)"
        width='300'
      >
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    name: 'shopcar',
    data(){
      return {
        tableData: []
      }
    },
    methods: {
      handleDelete(index, row) {
//        console.log(index, row);
      }
    },
    created(){
      this.$http.get('/api/shopcar').then(response => {
        this.tableData=response.body;
      });
    }
  }
</script>
<style lang="scss" scoped>

</style>
