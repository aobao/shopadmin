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
      width="100">
      </el-table-column>
      <el-table-column
      prop="times"
      label="日期"
      width="300">
      </el-table-column>
      <el-table-column
      prop="name"
      label="姓名"
      width="200">
      </el-table-column>
      <el-table-column
      prop="comment"
      label="评论内容"
      width='300'
      >
      </el-table-column>
       <el-table-column label="操作">
      <template slot-scope="scope">
       
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
     </el-table-column>
      </el-table>
    </div>
</template>
<script>
export default {
    name:'product',
    data(){
        return{
         tableData: [{
          id:1,   
          times: '2016-05-02',
          name: '王小虎',
          comment: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id:2,   
          times: '2016-05-02',
          name: '王小虎',
          comment: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id:3,   
          times: '2016-05-02',
          name: '王小虎',
          comment: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id:4,   
          times: '2016-05-02',
          name: '王小虎',
          comment: '上海市普陀区金沙江路 1518 弄'
        },
        ]
        }
    },
     methods: {
     
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
}
</script>
<style lang="scss" scoped>

</style>
