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
        label="订单id"
        width="100"
      >
      </el-table-column>
      <el-table-column
        prop="uid"
        label="用户id"
        width="100"
      >
      </el-table-column>
      <el-table-column
        prop="status"
        label="订单状态"
        width="200">
      </el-table-column>
      <el-table-column
        prop="logistics"
        label="物流单号"
        width="200">
      </el-table-column>
      <el-table-column
        prop="time"
        label="时间"
        widte="150"
      >
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="dialogFormVisible = true;handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="primary"
            @click="dialogTableVisible = true;table(scope.row.id)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--编辑-->
    <el-dialog title="订单编辑" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="ID" :label-width="formLabelWidth">
          <el-input v-model="form.id" disabled></el-input>
        </el-form-item>
        <el-form-item label="物流单号" :label-width="formLabelWidth">
          <el-input v-model="form.logistics"></el-input>
        </el-form-item>
        <el-form-item label="订单状态" :label-width="formLabelWidth">
          <el-select v-model="form.value" placeholder="请选择">
            <el-option
              v-for="item in form.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="edits()">确 定</el-button>
      </div>
    </el-dialog>

    <!--查看-->
    <el-dialog title="订单明细" :visible.sync="dialogTableVisible">
      <el-table
      :data="tableData2"
      :summary-method="getSummaries"
      show-summary
      >
        <el-table-column property="id" label="商品ID" width="150"></el-table-column>
        <el-table-column property="count" label="数量" width="200"></el-table-column>
        <el-table-column property="price" label="单价"></el-table-column>
        <el-table-column property="sum" label="总价"></el-table-column>
      </el-table>
    </el-dialog>



  </div>
</template>
<script>
  export default {
    name: 'book',
    data(){
      return {
        tableData: [],
        tableData2:[],
        lishi:{},
        sum:'',
        dialogTableVisible: false,
        dialogFormVisible: false,
        formLabelWidth: '120px',
        form: {
          id: '',
          logistics: '',
          options: [{
            value: '1',
            label: '待付款'
          },{
            value: '2',
            label: '未发货'
          }, {
            value: '3',
            label: '已发货'
          },{
            value: '4',
            label: '待收货'
          },{
            value: '5',
            label: '已完成'
          }
          ],
          value: ''
        },
      }
    },
    methods: {
      open2() {
        this.$message({
          message: '编辑订单成功',
          type: 'success'
        });
      },
      open4() {
        this.$message.error('编辑订单失败');
      },
      handleEdit(index, row) {
        this.form.id=row.id;
        this.form.value=row.status;
        this.form.logistics=row.logistics;
      },
      edits(){
        this.dialogFormVisible = false;
        let data={
          id:this.form.id,
          logistics:this.form.logistics,
          status:this.form.value
        };
        console.log(data);
        this.$http.post('/api/book/edit',data,{
            headers:{
                "content-type":'application/json'
            }
        }).then(response => {
          if(response.body=='ok'){
              let index=this.tableData.findIndex(val=>val.id===data.id);
              this.tableData[index].logistics=data.logistics;
              this.tableData[index].status=data.status;
              this.open2();
          }else{
              this.open4();
          }
        });
      },
      getSummaries(param){
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '总价';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (index===3) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += ' 元';
          } else {
            sums[index] = '';
          }
        });

        return sums;
      },
      table(id){
        this.$http.get('/api/book/info?id='+id).then(response => {
            this.tableData2=response.body;
        });
      }
    },
    created(){
      this.$http.get('/api/book').then(response => {
          this.tableData=response.body;
      });
    }
  }
</script>
<style lang="scss" scoped>
  .edit{
    width: 700px;
    height: 500px;
  }
</style>
