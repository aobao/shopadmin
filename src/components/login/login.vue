<template>
    <div id="login">
        <div class="login">
            <el-form :model="ruleForm2"  status-icon  :rules="rules2"  ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账号" prop="user">
                    <el-input type="text" v-model="ruleForm2.user" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="code">
                    <el-input type="text" v-model="ruleForm2.code" auto-complete="off" class="codeinput"></el-input>
                    <div class="code">
                        <img src="/api/user/captcha" alt=""  onclick="this.src='/api/user/captcha?'+Math.random()">
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                    <el-button @click="resetForm('ruleForm2')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>

</template>
<script>
export default {
    name:'login',
    data(){
        var validateUser = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入账号'));
            }else {
                callback();
            }
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                callback();
            }
        };
        var validateCode = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入验证码'));
            } else {
                callback();
            }
        };
        return {
            ruleForm2: {
                user: '',
                pass: '',
                code:''
            },
            rules2: {
                user: [
                    { validator: validateUser, trigger: 'blur' }
                ],
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                code: [
                    { validator: validateCode, trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let arr=this.ruleForm2
                    this.$http.post("/api/user",arr,{headers:"application/x-www-form-urlencoded"}).then(res=>{
                        if(res.body=="ok"){
                            localStorage.login="ok";
                            this.$message({
                                message: '恭喜你，登录成功！',
                                type: 'success'
                            });
                            this.$router.push("/")
                        }else{
                            this.$message({
                                message: res.body,
                                type: 'warning'
                            });
                        }
                   })
                } else {
                    console.log('请输入正确!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>
<style lang="scss" scoped>
    #login{
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-image: url("../../assets/img/3.jpg");
        background-size: 100%;
        color: #000;
        .login{
            width: 500px;
            height: 300px;
            margin: 300px auto;
            .codeinput{
                float: left;
                width: 280px;
            }
            .code{
                float: left;
                width: 120px;
                height: 40px;
                border-radius: 4px;
                overflow: hidden;
                img{
                    width: 100%;
                }
            }
        }
    }
</style>
