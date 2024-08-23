<template>
  <div class="Cart" v-if="this.CartList">
    <div class="Cart_conten">

      <div class="title">
        <div class="checkbox"   >
          <el-checkbox v-model="checked" @change="AllIstrue(checked)">全选</el-checkbox>
        </div>
        <div class="Information">商品信息</div>
        <div class="price">单价</div>
        <div class="quantity">数量</div>
        <div class="common">小计</div>
        <div class="del">操作</div>
      </div>

      <div class="Cart_list title" v-for="(item,index) in CartList" :key="index">
        <div class="checkbox">
          <el-checkbox v-model="item.selected"  @change="Istrue()"  ></el-checkbox>
        </div>
        <div class="Information">
          <div class="imag">
            <!-- {{item.picture}} -->
             <img :src="item.picture" style="width: 90%; height: 100%;" alt="">
          </div>
          <div class="text">
           {{item.name}}

          </div>
        </div>
        <div class="price"> {{'￥'+item.nowPrice}}</div>
        <div class="quantity">
          <el-input-number v-model="item.count"  :min="1" :max="10" style="width: 90%;" label=""></el-input-number>
        </div>
        <div class="common">{{'￥'+(item.nowPrice * item.count).toFixed(2)}}</div>
        <div class="del" @click="del(item.skuId)"><a>删除</a></div>
      </div>

      <div class="Total">
        <span class="Total_text">共 {{commodity}} 件商品, 已选中 {{Selected}} 件, 商品合计: <a style="color: red; font-size: 20px;">￥{{price.toFixed(2)}} </a></span>
        <el-button>下单结算</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { GetCart, GetDel } from '@/aip/cart'
export default {
  data () {
    return {
      // 单选按钮
      checked: true,
      // 储存购物车数据
      CartList: '',
      conut: 0
    }
  },
  created () {
    // 调用购物车数据请求
    this.GetCartList()
  },

  methods: {
    // 获取购物车数据请求
    async  GetCartList () {
      const res = await GetCart()
      console.log(res)
      this.CartList = res
    },
    // 全选
    AllIstrue (Istrue) {
      this.CartList.forEach(item => {
        item.selected = Istrue
      })
    },
    Istrue () {
      this.checked = this.isAllSelected
    },
    async del (skuId) {
      const res = await GetDel([skuId])
      console.log(res)
      this.GetCartList()
    }
  },

  computed: {
    isAllSelected () {
      return this.CartList.every(item => item.selected)
    },
    commodity () {
      return this.CartList.reduce((prev, item) => {
        return prev + item.count
      }, 0)
    },
    price () {
      const i = this.CartList.filter(item => item.selected === true)
      return i.reduce((prev, item) => {
        return prev + item.nowPrice * item.count
      }, 0)
    },
    Selected () {
      // 将数据里面选中的数据筛选出来
      const i = this.CartList.filter(item => item.selected === true)
      return i.reduce((prev, item) => {
        return prev + item.count
      }, 0)
    }
  }

}
</script>

<style lang="scss" scoped>
  .Cart{
    width: 100%;
    padding: 20px;
    background:#f5f5f5;
    .Cart_conten{
      width: 50%;
      height: 100%;
      margin: 0 auto;
      background:#f5f5f5;
      .title{
        width: 100%;
        height: 60px;
        border-bottom: 1px solid #fff;
        background:#fff;
        display: flex;
        font-size: 16px;
        text-align: center;
        line-height: 60px;
        // margin-top:3px;
        margin: 2px;
        .checkbox{
          width: 5%;
          height: 100%;
        }
        .Information{
          width: 45%;
          height: 100%;
          text-align: center;
          display: flex;
          justify-content: center;
          .imag{
            width: 20%;
            height: 100%;
            // border: 1px solid red;
          }
          .text{
            flex: 1;
            // border: 1px solid red;
            text-align: left;
            padding: 0 5px;
            // font-size: ;
          }
        }
        .price{
          width: 10%;
          height: 100%;

        }
        .quantity{
          width: 20%;
          height: 100%;

        }
        .common{
          width: 10%;
          height: 100%;

        }
        .del{
          width: 10%;
          height: 100%;

        }
      }
      .Cart_list{
        height: 100px;

        display: flex;
        font-size: 16px;
        // text-align: center;
        line-height: 100px;
        .common{
          color: red;
        }
      }
      .Total{
        width: 100%;
        height: 75px;
        margin: 20px auto;
        line-height: 75px;
        background: #fff;

        align-items: center;
        display: flex;
        .Total_text{
          font-size: 16px;
          flex: 1;
          margin-left:20px ;

        }
        .el-button--default{
          width: 120px;
          height: 40px;
          flex: none;
          margin: 10px 40px;
          color: #fff;
          background: #27ba9b;
          border: #ccc;

        }
        .el-button--default:hover{
          background: #68cfb9;
          border: #ccc;
        }
      }
    }

  }
</style>
