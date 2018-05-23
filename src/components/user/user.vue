<template>
  <div>
    <el-table
      :data="tableData"
      stripe
      border
      style="width: 100%"
      >
      <el-table-column
        prop="id"
        label="id"
        width="150"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="用户名"
        width="300">
      </el-table-column>
      <el-table-column
        prop="nickname"
        label="用户昵称"
        width="300">
      </el-table-column>
      <el-table-column
        prop="ename"
        label="拼音"
      >
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    name: 'user',
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
      this.$http.get('/api/user').then(response => {
        this.tableData=response.body;
      });
    }
  }
</script>
<style lang="scss" scoped>

</style>
