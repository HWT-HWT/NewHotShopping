<template>
  <div id="login">
    <div class="title">
      <div class="image">
      </div>
      <div class="occupy">
      </div>
      <div class="text">
        <a href="">进入网站首页</a>
      </div>
    </div>

    <div class="centen">
      <div class="login">
        <div class="title">账户登录</div>
        <div class="input">
            账号：<el-input  placeholder="请输入账号" v-model="ruleForm.name" style="width: 300px;"></el-input>
        </div>
        <div class="input">
            密码：<el-input placeholder="请输入密码" style="width: 300px;" v-model="ruleForm.password" show-password></el-input>
        </div>
        <div class="checkbox">
          <el-checkbox > 我已同意隐私条款和服务条款 </el-checkbox>
        </div>
        <div class="button" >
          <el-button style="width: 200px;" type="primary">登录</el-button>
        </div>
      </div>
    </div>

    <div class="footer">
      <span>关于我们</span> | <span>帮助中心</span> | <span>售后服务</span>
      <span>CopRight@小兔鲜</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        password: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  #login{
    margin: 0;
    padding: 0;
    .title{
      width: 100%;
      height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      .image{
        background: url('../../assets/images/logo.png') no-repeat center 18px / contain;
        width: 200px;
        height: 120px;
        margin-left: 100px;
      }
      .occupy{
        flex: 0.5;
      }
      .text{
        margin-right: 100px;
        a{
          color: black;
          text-decoration: none;
        }
      }
    }
    .centen{
      width: 110%;
      height: 400px;
      margin-left: -10px;
      background: url('../../assets/images/login-bg.png') no-repeat center 5px /cover;
      position: relative;
      text-align: center;
      .login{
        width: 400px;
        height: 300px;
        position: absolute;
        top: 50px;
        left: 50%;
        background: white;
        .title{
          width: 100%;
          height: 20%;
          border-bottom: 1px solid #ccc;
          font-size: 18px;
        }
        .input{
          width: 100%;
          margin: 20px 0;

        }
        .button{
          margin: 10px auto;
        }
      }
    }
    .footer{
      width: 100%;
      height: 200px;
      // border: 1px solid black;
      color: #ccc;
      text-align: center;
      align-content: center;
    }
  }
</style>
