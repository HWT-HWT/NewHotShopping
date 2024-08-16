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
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-checkbox v-model="checked" >我已同意隐私条款和服务条款</el-checkbox>
        <el-form-item>
          <el-button type="primary" @click="GetTokenList">登录</el-button>
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

import { GetToken } from '@/aip/login'
export default {
  data () {
    return {
      // 储存账号密码
      form: {
        // 账号
        account: 'xiaotuxian001',
        // 密码
        password: '123456'
      },
      checked: false
    }
  },
  created () {
    this.GetToken()
  },
  methods: {
    //  发起登录验证函数
    async GetTokenList () {
      // 判断用户没有输入账号密码时
      if (!this.form.account || !this.form.password) {
        // 弹出警告
        this.$message({
          showClose: true,
          message: '请输入账户或者密码',
          type: 'warning'
        })
        // 跳出函数
        return
      } else if (!this.checked) {
        // 判断没有勾选条款时
        // 弹出警告
        this.$message({
          showClose: true,
          message: '请勾选下方条款',
          type: 'warning'
        })
        return
      }
      // 发起登录请求
      const res = await GetToken(this.form.account, this.form.password)
      // console.log(res)
      // 获取登录成功返回的token 将token保存到localStorage
      localStorage.setItem('token', res.token)
      // 获取登录成功返回的用户名 将用户名 保存到localStorage
      localStorage.setItem('nickName', res.nickname)
      // 跳转到home
      this.$router.push({ path: '/home' })
    },

    // 用户是否登录过
    GetToken () {
      const token = localStorage.getItem('token')
      // 判断是否有token
      if (token) {
        // 有token执行的代码
        // 跳转到首页
        this.$router.push('/home')
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
