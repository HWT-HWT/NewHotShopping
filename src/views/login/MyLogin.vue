<template>
  <div id="login">
    <div class="title">
      <div class="image">
      </div>
      <div class="occupy">
      </div>
      <div class="text">
        <el-button type="text" style="color: black;">进入网站首页</el-button>
      </div>
    </div>

    <div class="centen">

      <el-form :model="form" label-width="80px">
        <p>账户登录</p>
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-checkbox>我已同意隐私条款和服务条款</el-checkbox>
        <el-form-item>
          <el-button type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="footer">
      <span>关于我们</span> | <span>帮助中心</span> | <span>售后服务</span>
      <br>
      <br>
      <span>CopRight@小兔鲜</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  #login{
    .title{
      width: 100%;
      height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      .image{
        background: url('../../assets/images/logo.png') no-repeat center 18px / contain;
        width: 8%;
        height: 120px;
        margin-left: 100px;
      }
      .occupy{
        flex: 0.5;
      }
      .text{
        margin-right: 100px;
        a{
          font-size: 0.7vmax;
        }
      }
    }
    .centen{
      height: 700px;
      margin-left: -10px;
      background: url('../../assets/images/login-bg.png') no-repeat center 5px /cover;
      background-size: cover;
      position: relative;
      display: flex;
      .el-form{
        text-align: center;
        width: 15%;
        padding: 30px;
        background: white;
        position: absolute;
        top: 100px;
        right: 800px;
        margin: 0 auto;
        .el-form-item{
          margin: 20px auto;
          justify-content: center;
          align-content: center;
          text-align: left;
          .el-button--primary{
            width: 50%;
            margin-left:35px ;
          }
        }
      }
    }
    .footer{
      width: 70%;
      height: 200px;
      color: #ccc;
      text-align: center;
      align-content: center;
      margin: 0 auto;
    }
  }
</style>
