<template>
    <el-table :data="tableData" border style="width: 100%" >
        <el-table-column fixed prop="id" label="ID" width="100" align="center"></el-table-column>
        <el-table-column prop="name" label="收货人名称" width="120" align="center"></el-table-column>
        <el-table-column prop="phone" label="手机号码" width="160" align="center"></el-table-column>
        <el-table-column prop="area" label="省市区" width="230" align="center"></el-table-column>
        <el-table-column prop="dareas" label="详细地址" width="400" align="center"></el-table-column>
        <el-table-column prop="coding" label="邮政编码" width="100" align="center"></el-table-column>
        <el-table-column prop="pid" label="用户ID" width="120" align="center"></el-table-column>
        <el-table-column fixed="right" label="操作" width="70" align="center">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)"  type="danger" icon="el-icon-delete" circle></el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
<script>
export default {
    name:'addre',
    data(){
        return {
            tableData:[
                {
                    id:1,
                    name: '王小虎',
                    phone:15034023300,
                    area:"山西省太原市小店区",
                    dareas:"阿嘎是否gas书法法师",
                    coding:101001,
                    pid:1
                }
            ]
        }
    },
    methods: {
        handleClick(row) {
            let id=row.id
            this.$http.get(`/api/address/del?id=${id}`).then(res=>{
                if(res.body=="ok"){
                    let index=this.tableData.findIndex(val=>{
                        val.id==id;
                    })
                    this.tableData.splice(index,1);
                }
            })
        }
    },
    created(){
        this.$http.get("/api/address").then(res=>{
            this.tableData=res.body;
        })
    }
}
</script>
<style lang="scss" scoped>

</style>
