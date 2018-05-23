<template>
    <el-table :data="tableData" border style="width: 100%" >
        <el-table-column fixed prop="id" label="ID" width="70" align="center"></el-table-column>
        <el-table-column fixed  label="头像" width="100"  align="center">
            <template slot-scope="scope">
                <div class="heads">
                    <img src="" alt="">
                </div>
            </template>
        </el-table-column>
        <el-table-column prop="time" label="日期" width="150" align="center"></el-table-column>
        <el-table-column prop="name" label="名称" width="120" align="center"></el-table-column>
        <el-table-column prop="con" label="内容" width="400" align="center"></el-table-column>
        <el-table-column prop="cid" label="商品ID" width="70" align="center"></el-table-column>
        <el-table-column prop="shopname" label="商品名称" width="120" align="center"></el-table-column>
        <el-table-column prop="shopimg" label="商品图片" width="300" align="center">
            <template slot-scope="scope">
                <div class="shopimg">
                    <img src="" alt="">
                    <img src="" alt="">
                    <img src="" alt="">
                </div>
            </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="70" align="center">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)"  type="danger" icon="el-icon-delete" circle></el-button>
            </template>
        </el-table-column>
    </el-table>
</template>


<script>
export default {
    name:'comment',
    data(){
        return {
            tableData:[
                {
                id:1,
                time: '2016-05-03',
                name: '王小虎',
                con: '内容看到奶奶玩电脑了萨克三大两三年但大盘温暖的温暖的你来撒看你的孔蓝色那两款是你的离开那里可是你的了看书了困难的来看是快乐',
                cid:1,
                shopname: '商品名称',
                shopimg: '商品图片',
                userimg:""
            }
            ]
        }
    },
    methods: {
        handleClick(row) {
            let id=row.id
            this.$http.get(`/api/comment/del?id=${id}`).then(res=>{
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
        this.$http.get("/api/comment").then(res=>{
            this.tableData=res.body;
        })
    }
}
</script>
<style lang="scss" scoped>
    .heads{
        width: 70px;
        height: 70px;
        background: #81dfff;
        border-radius: 50%;
        margin: 0 auto;
    }
    .shopimg{
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: space-around;
        img{
            width: 70px;
            height: 70px;
            background: #81dfff;
            display: block;
        }
    }

</style>
