<template>

  <el-container>
    <el-header>
      <h3>REALIST  后台管理系统</h3>

      <el-dropdown>
        <div class="el-dropdown-link adminUser">
          <span>admin</span>
          <div class="imgbox">
            <img src="" alt="">
          </div>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>我的消息</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item><router-link to="/login">退出登录</router-link></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-container>
      <el-aside width="250px">
        <el-col>
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <template v-for='(item,n) in arr' >
              <router-link :to='item.to' :key='n'>
             <el-menu-item :key="n" :index=String(n) @click='mun=n' >
              <i :class="item.class"></i>
              <span slot="title">{{item.title}}</span>
            </el-menu-item>
              </router-link>
               
            </template>
            
            
          </el-menu>
        </el-col>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name:'mainadmin',
  data () {
    return {
      mun:'0',
       arr:[
         {class:'el-icon-news',title:'用户信息管理',to:'/user'},
         {class:'el-icon-menu',title:'商品信息管理',to:'/product'},
         {class:'el-icon-document',title:'订单管理',to:'/book'},
         {class:'el-icon-goods',title:'购物车管理',to:'/shopcar'},
         {class:'el-icon-star-off',title:'评论管理',to:'/comment'},
         {class:'el-icon-location',title:'收货地址管理',to:'/address'},
         {class:'el-icon-edit',title:'密码管理',to:'/pass'}
       ],
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .el-header, .el-footer {
    background-color: #5394EC;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    > h3{
      font-size: 20px;
      color: #fff;
      width: 250px;
      font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
     .adminUser{
      height: 40px;
      display: flex;
      align-items: center;
      > span{
        font-size: 18px;
        color: #fff;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
      }
      > .imgbox{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: pink;
        margin-left: 10px;
        > img{
          width: 100%;
        }
      }
    }
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    line-height: 200px;
  }

  .el-main {
    background-color: #fff;
    color: #333;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>
