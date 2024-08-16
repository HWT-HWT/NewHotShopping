<template>
  <div class="Cart">
    <div class="Cart_conten">

      <div class="title">
        <div class="checkbox">
          <el-checkbox v-model="checked"></el-checkbox>
        </div>
        <div class="Information">商品信息</div>
        <div class="price">单价</div>
        <div class="quantity">数量</div>
        <div class="common">小计</div>
        <div class="del">操作</div>
      </div>

      <div class="Cart_list title" v-for="item in 10" :key="item">
        <div class="checkbox">
          <el-checkbox v-model="checked"></el-checkbox>
        </div>
        <div class="Information">
          <div class="imag">
            图片
          </div>
          <div class="text">
            亚洲头盔
          </div>
        </div>
        <div class="price">￥150.00</div>
        <div class="quantity">
          <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" style="width: 90%;" label="描述文字"></el-input-number>
        </div>
        <div class="common">￥150.00</div>
        <div class="del">删除</div>
      </div>
    </div>
  </div>
</template>

<script>
import { GetCart } from '@/aip/cart'
export default {
  data () {
    return {
      checked: false,
      num: '1'
    }
  },
  methods: {
    async  GetCartList () {
      const res = await GetCart()
      console.log(res)
    }
  },
  created () {
    this.GetCartList()
  }
}
</script>

<style lang="scss" scoped>
  .Cart{
    width: 100%;
    // height: 1000px;
    border: 1px solid black;
    .Cart_conten{
      width: 50%;
      height: 100%;
      border: 1px solid black;
      margin: 0 auto;
      overflow: hidden;
      // overflow-y: scroll;
      .title{
        width: 100%;
        height: 60px;
        border: 1px solid black;
        display: flex;
        font-size: 16px;
        text-align: center;
        line-height: 60px;
        .checkbox{
          width: 5%;
          height: 100%;
          border: 1px solid black;
        }
        .Information{
          width: 45%;
          height: 100%;
          border: 1px solid black;
          display: flex;
          justify-content: center;
          .imag{
            width: 20%;
            height: 100%;
            border: 1px solid black;
          }
          .text{
            flex: 1;
            border: 1px solid red;
            text-align: left;
            padding: 0 5px;
            // font-size: ;
          }
        }
        .price{
          width: 10%;
          height: 100%;
          border: 1px solid black;

        }
        .quantity{
          width: 20%;
          height: 100%;
          border: 1px solid black;
        }
        .common{
          width: 10%;
          height: 100%;
          border: 1px solid black;
        }
        .del{
          width: 10%;
          height: 100%;
          border: 1px solid black;
        }
      }
      .Cart_list{
        height: 100px;
        border: 1px solid black;
        display: flex;
        font-size: 16px;
        // text-align: center;
        line-height: 100px;
        .common{
          color: red;
        }
      }
    }
  }
</style>
