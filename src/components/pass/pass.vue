<template>
    <div class="pass">
        <div class="top">
            <span>管理员修改密码</span>
        </div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign"  :disabled="true">
            <el-form-item label="ID" >
                <el-input v-model="formLabelAlign.id"></el-input>
            </el-form-item>
            <el-form-item label="账号">
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="formLabelAlign.pass"></el-input>
            </el-form-item>
        </el-form>
        <el-button type="primary" round class="button" @click="dialogFormVisible = true">修改密码</el-button>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="旧密码" :label-width="formLabelWidth">
                    <el-input v-model="form.oldpass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="新密码" :label-width="formLabelWidth">
                    <el-input v-model="form.newpass" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="updata()">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    name:'mypass',
    data() {
        return {
            labelPosition: 'right',
            formLabelAlign: {
                id: '1',
                name: 'admin',
                pass: '*********'
            },
            dialogFormVisible: false,
            formLabelWidth: '120px',
            form: {
                newpass:"",
                oldpass:""
            }
        };
    },
    methods:{
        updata(){
            let newpass=this.form.newpass;
            if(newpass!=""){
                this.$http.post("/api/user/checkpass",this.form,{headers:"application/json"}).then(res=>{
                    if(res.body=="ok"){
                        this.$message({
                            message: '修改成功！',
                            type: 'success'
                        });
                        this.formLabelAlign.pass=newpass;
                        this.dialogFormVisible = false;
                        this.form.oldpass="";
                        this.form.newpass="";
                    }else{
                        this.$message.error('修改失败！');
                        this.dialogFormVisible = false
                        this.form.oldpass="";
                        this.form.newpass="";
                    }
                })
            }else{
                this.dialogFormVisible = false
            }
        }
    },
    created(){
        this.$http.get("/api/user/pass").then(res=>{
            this.formLabelAlign=res.body[0]
        })
    }
}
</script>
<style lang="scss" scoped>
    .pass{
        width: 100%;
        .top{
            margin: 0 auto;
            width: 80%;
            height: 100px;
            line-height: 100px;
            text-align: center;
            border-radius: 10px;
            border: 1px solid #DCDFE6;
            span{
                font-size: 28px;
                color: #909399;
            }
        }
        .el-form{
            margin-top: 50px;
            margin-left: 100px;
            width: 600px;
            height: 200px;
        }
        .button{
            margin-left: 200px;
        }
    }

</style>
