<template>
  <div id="MyLayout">
    <div class="header">
      <div class="top">
      <ul>
        <li><a href="">请先登录</a></li>
        <li><a href="">帮助中心</a></li>
        <li><a href="">关于我们</a></li>
      </ul>
    </div>
    <div class="nav">
      <div class="centen">
        <div class="image"></div>
        <div class="titleNav">
          <ul>
            <li><a href=""><router-link to='/home'>首页</router-link></a></li>
            <li v-for="item in HeaderList" :key="item.id"><a @click="ClickNav(item.id)">{{item.name}}</a></li>
          </ul>
        </div>
        <div class="search">
          <div class="input">
            <i class="el-icon-search" style="width: 10%; font-size: 20px;"></i>
            <input type="text" placeholder="搜索">
          </div>
        </div>
        <div class="cart">
          <i class="el-icon-shopping-cart-full" style="font-size: 30px;"></i>
        </div>
      </div>
    </div>
    </div>

    <div class="assembly">
      <router-view :AtHomee="AtHomeList"></router-view>
    </div>

    <div class="footer">

          <div class="footerone">
            <Footer>
            <template #title>
              客服服务
            </template>
            <template #customer>
              <div class="i ihover">
                <i class=" el-icon-chat-round" style="font-size: 30px;"></i>
                <br>
                在线客服
              </div>
            </template>
            <template #bug>
              <div class="i ihover">
                <i class="el-icon-chat-line-square" style="font-size: 30px;"></i>
                <br>
                问题反馈
              </div>
            </template>
          </Footer>

          <Footer>
            <template #title>
              关注我们
            </template>
            <template #customer>
             <div class="i ihover">
              <i class=" el-icon-chat-round" style="font-size: 30px;"></i>
              <br>
              公众号
             </div>
            </template>
            <template #bug>
              <div class="i ihover">
                <i class="el-icon-chat-line-square" style="font-size: 30px;"></i>
                <br>
                微博
              </div>
            </template>
          </Footer>

          <Footer>
            <template #title>
              下载app
            </template>
            <template #customer>
              <div class="i">
                <img src="../../assets/images/qrcode.jpg" style="width: 90%; height: 95%;" alt="">
              </div>
            </template>
            <template #bug >
              <div class="i" style="font-size: 13px; border: none;" >
                扫描二维码
                <br>
                立马下载app
              </div>
            </template>
          </Footer>

          <Footer>
            <template #title>
              服务热线
            </template>
            <template #customer>
              <div class="i"  style="border: none;">
                400-000-000
                <br>
                周一到周日8:00-18:00
              </div>
            </template>
          </Footer>
          </div>

          <div class="footertow">
            <div class="title">
              <div class="conten">
                <i class="el-icon-s-finance"></i>
                价格亲民
              </div>
              <div class="conten">
                <i class="el-icon-s-goods"></i>
                物流快捷
              </div>
              <div class="conten">
                <i class="el-icon-s-order"></i>
                品字新鲜
              </div>
            </div>
            <div class="text">
              <div class="textTitle">
                <ul>
                  <li v-for="item in 5" :key="item"><a href="">帮助我们</a></li>
                </ul>
                <p>CopyRigth@小兔鲜</p>
              </div>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/My-Footer.vue'
import { getHeader } from '@/aip/Home'
import { GetAtHome } from '@/aip/AllCategories'
export default {
  name: 'MyLayout',
  data () {
    return {
      HeaderList: '',
      AtHomeList: ''
    }
  },
  created () {
    this.GetHeaderList()
  },
  methods: {
    async GetHeaderList () {
      const res = await getHeader()
      this.HeaderList = res
    },
    async ClickNav (id) {
      if (this.$route.params.id === id) {
        return
      }
      this.$router.push({ path: '/category/' + id })
      const res = await GetAtHome(id)
      console.log(res)
      this.AtHomeList = res
    }

  },
  components: {
    Footer
  }
}
</script>

<style lang="scss" scoped>
#MyLayout{
  background: #fff;
  .header{
    .top{
  width: 100%;
  height: 50px;
  border: 1px solid #333333;
  background: #333333;
  text-align: center;
  ul{
    width: 51%;
    text-align: right;
    display: inline-block;
    margin: 0 auto;
    line-height: 50px;
    li{
      display: inline-block;
      // margin-left: 10px;
      width: 6%;
      a{
        color: #cdcdcd;
      }
    }
  }
}
.nav{
  width: 100%;
  height: 150px;
  background: white;
  line-height: 200px;
  .centen{
    width: 53%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    line-height: 150px;
    // border: 1px solid black;
    .image{
      width: 20%;
      height: 100%;
      // border: 1px solid black;
      background: url(../../assets/images/logo.png) no-repeat center 18px/ contain;
    }
    .titleNav{
      width: 60%;
      height: 100px;
      ul{
        width: 100%;
        // line-height: 100px;
        text-align: center;
        li{
          width: 10%;
          display: inline-block;
        }
        a:hover{
          color: #ccc;
          border-bottom: 1px solid #ccc;
        }
      }
    }
    .search{
      margin-left: 10px;
      .input{
        input{
          width: 70%;
          height: 40px;
          margin-left: 5px;
          font-size: 18px;
          border: none;
          border-bottom:1px solid #ccc ;
        }
        input:focus{
          outline: none;
        }
      }
    }
    .cart{
      width: 5%;
      // text-align: center;
      }
    }
  }
  }
  .assembly{
  width: 100%;
  height: 100%;
  margin-bottom: 50px;
  }
  .footer{
    margin-top:100px ;
    // border-top:1px solid black ;
    width: 100%;
    background: white;
    .footerone{
      width: 50%;
      height: 250px;
      display: flex;
      margin: 0 auto;
      // border: 1px solid ;
      padding: 0 50px;

   }
   .footertow{
      width: 100%;
      height: 400px;
      border: 1px solid  black;
      background: #333333;
      display: flex;
      flex-direction: column;
      .title{
        padding: 50px;
        width: 50%;
        height: 50%;
        border-bottom: 1px solid #9d9d9d;
        margin: 0 auto;
        display: flex;
        color: white;
        .conten{
          width: 30%;
          height: 100%;
          margin: 0 3%;
          align-content: center;
          text-align: center;
          font-size:30px;
          font-weight: 500;
          i{
            font-size: 40px;
          }
        }
      }
      .text{
        width: 50%;
        height: 50%;
        color: #ccc;
        text-align: center;
        margin: 0 auto;
        padding: 50px;
        .textTitle{
          width: 100%;
          height: 30%;
          ul{
          width: 100%;
          display: flex;
          align-content: center;
          justify-content: center;
          li{
            width:8%;
            display: inline-block;
            border-right: 1px solid  #ccc;;
            font-size: 15px;
            a{
              color: #ccc;
            }
          }
        }
        p{
            margin-top: 20px;
          }
        }
      }
   }
  }

}
</style>
