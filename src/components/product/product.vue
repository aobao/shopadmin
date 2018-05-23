<template>
    <div>
<el-row>
  <!-- <el-button type="primary" target='#add' class='mybtn'> 添加商品</el-button> -->
  <el-button type="primary" @click="dialogFormVisible = true" class='mybtn'>添加商品</el-button>
</el-row>
<el-container>
  <el-header><h1>商品列表</h1> </el-header>
  
</el-container>
<el-table :data="tableData" stripe border style="width: 100%" height="600" class='mytab' title='商品展示'>
<el-table-column align='center' prop="id" label="id" fixed width="100"></el-table-column>
<el-table-column align='center' prop="title" label="描述" width="200"> </el-table-column>
<el-table-column align='center' prop="name" label="中文名字" width="200"> </el-table-column>
<el-table-column align='center' prop="con" label="具体介绍" width="300"> </el-table-column>
<el-table-column align='center' prop="econ" label="英文介绍" width="200"> </el-table-column>
<!-- <el-table-column align='center' prop="img" label="图片" width="100"> -->
 <!-- <el-upload v-for='(item,index) in tableData' :key='index'
  class="upload-demo"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="JSON.parse(item.img)"
  list-type="picture">
</el-upload> -->
 <!-- </el-table-column>  -->
<el-table-column align='center' prop="offprice" label="减价价格" width="100"> </el-table-column>
<el-table-column align='center' prop="price" label="价格" width="100"> </el-table-column>
<el-table-column align='center' prop="amount" label="数量" width='100'> </el-table-column>
<el-table-column align='center' prop="degra" label="度数" width="100"> </el-table-column>
<el-table-column align='center' prop="sap" label="溶积" width="100"></el-table-column>
<el-table-column align='center' prop="type" label="口味" width="200"> </el-table-column>
<el-table-column align='center' label="操作" fixed='right' width='200'>
<template slot-scope="scope">
<el-button
size="mini"
@click="handleEdit(scope.$index, scope.row)">编辑</el-button>
<el-button
size="mini"
type="danger"
@click="handleDelete(scope.$index, scope.row)">删除</el-button>
</template>
</el-table-column>
</el-table>
<el-dialog title="修改商品" :visible.sync="editvisible">
<el-form ref="form" :model="editform" label-width="80px">
  <el-form-item label="ID"><el-input v-model="editform.id" :disabled='true'></el-input></el-form-item>
  <el-form-item label="描述"><el-input v-model="editform.title"></el-input></el-form-item>
  <el-form-item label="中文名字"><el-input v-model="editform.name"></el-input></el-form-item>
  <el-form-item label="具体介绍"><el-input v-model="editform.con"></el-input></el-form-item>
  <el-form-item label="英文介绍"><el-input v-model="editform.econ"></el-input></el-form-item>
  <el-form-item label="图片">
    <el-upload
  class="upload-demo"
  action="/api/poduct/upload"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="form.img"
  list-type="picture">
  <el-button size="small" type="primary">点击上传</el-button>
</el-upload>
  </el-input>
  </el-form-item>
  <el-form-item label="减价价格"><el-input v-model="editform.offprice"></el-input></el-form-item>
  <el-form-item label="价格"><el-input v-model="editform.price"></el-input></el-form-item>
  <el-form-item label="数量"><el-input v-model="editform.amount"></el-input></el-form-item>
  <el-form-item label="度数"><el-input v-model="editform.degra"></el-input></el-form-item>
  <el-form-item label="容积"><el-input v-model="editform.sap"></el-input></el-form-item>
  <el-form-item label="口味"><el-input v-model="editform.type"></el-input></el-form-item>
  
  <el-form-item>
    <el-button type="primary" @click="editsub">提交</el-button>
    <el-button @click='editvisible=false'>取消</el-button>
  </el-form-item>
</el-form>  
</el-dialog>

<el-dialog title="添加商品" :visible.sync="dialogFormVisible">
<el-form ref="form" :model="form" label-width="80px">
  <!-- <el-form-item label="ID"><el-input v-model="form.id"></el-input></el-form-item> -->
  <el-form-item label="描述"><el-input v-model="form.title"></el-input></el-form-item>
  <el-form-item label="中文名字"><el-input v-model="form.name"></el-input></el-form-item>
  <el-form-item label="具体介绍"><el-input v-model="form.con"></el-input></el-form-item>
  <el-form-item label="英文介绍"><el-input v-model="form.econ"></el-input></el-form-item>
  <el-form-item label="图片">
  <el-upload
  action="/api/poduct/upload"
  list-type="picture-card"
  :file-list="form.img"  
  :on-preview="handlePreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
  </el-form-item>
  <el-form-item label="减价价格"><el-input v-model="form.offprice"></el-input></el-form-item>
  <el-form-item label="价格"><el-input v-model="form.price"></el-input></el-form-item>
  <el-form-item label="数量"><el-input v-model="form.amount"></el-input></el-form-item>
  <el-form-item label="度数"><el-input v-model="form.degra"></el-input></el-form-item>
  <el-form-item label="容积"><el-input v-model="form.sap"></el-input></el-form-item>
  <el-form-item label="口味"><el-input v-model="form.type"></el-input></el-form-item>
  
  <el-form-item>
    <el-button type="primary" @click="onSubmit">提交</el-button>
    <el-button @click='dialogVisible=false'> 取消</el-button>
  </el-form-item>
</el-form>  
</el-dialog>
<template>
  <el-button type="text" :visible.sync="messbox"></el-button>
</template>

    </div>
</template>
<script>
export default {
    name:'product',
    data(){
        return{
         tableData: [],
         form:{
          //  id:'',
           title:'',
           name:'',
           con:'',
           econ:'',
           img:[],
           offprice:'',
           price:'',
           amount:'',
           degra:'',
           sap:'',
           type:''
         },
         messbox:false,
         editform:{},
         dialogImageUrl: '',
         dialogVisible: false,
         dialogFormVisible: false,
         editvisible:false,
        
        }
    },
    created(){
     
     this.$http.get(`/api/poduct?`).then(res=>{
       if(res.body.img){
         re.body.img=JSON.parse(res.body.img);
       }
       this.tableData=res.body;
     });
     
    },
     methods: {
     handleEdit(index,row){
       this.editform=row;
       this.editvisible=true;
     },
      handleDelete(index, row) {
       let id=row.id;
       this.$http.get(`/api/poduct/delete?id=${id}`).then(res=>{
         if(res.body=='1'){
           let index=this.tableData.findIndex(val=>val.id==id);
           this.tableData.splice(index,1);
          this.$message.error('哦,你真的删了');
           
         }else{
            this.$message({message:'哈哈,没删掉我哦',type:'warning'})
         }
       })       
      },
      handleRemove(file,filelist){
         this.form.img=filelist; 
      },
      handlePreview(file,filelist){
          this.form.img=filelist;
      },
       onSubmit() {
         let obj={...this.form};
         obj.img=JSON.stringify(obj.img);
        //  console.log(obj);
         this.$http.post(`/api/poduct/add`,obj,{headers:{
           "content-type":'application/json'
         }}).then(res=>{
          if(res.body=='0'){
            this.$message.error('失败了');
          }else{
            this.$message({message:'添加成功了哦', type:'success'});
            this.form.id=res.body;
            this.tableData.push(this.form)
          }
           this.dialogFormVisible=false;
          
     })
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      editsub(){
        let obj={...this.editform};
        obj.img=JSON.stringify(obj.img);
         this.$http.post(`/api/poduct/edit`,obj,{headers:{
           "content-type":'application/json'
         }}).then(res=>{
          if(res.body=='1'){
            this.$message({message:'修改成功了哦', type:'success'});
          }else{
           this.$message.error('失败了');
          }
          this.editvisible=false;
       })
      }
    }
}
</script>
<style lang="scss" scoped>
 .el-header{
    background-color: #5394EC;
    color: #fff;
    text-align: center;
    line-height: 60px;
    h1{
      font-size:26px;
    }
  }
  .mybtn{
    margin-bottom:20px;
  }
  .mytab{
    margin-bottom:40px;
  }
</style>
