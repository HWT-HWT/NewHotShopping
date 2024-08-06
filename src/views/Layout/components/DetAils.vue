<template>
  <div class="details">
    <div class="details_conten">
      <div class="Banner_DetaList">
        <div class="banner">
          <div class="maxBanner">
            <img style="width: 100%; height: 100%;" :src=" maxBanner || DetaList.mainPictures[0]" alt="">
          </div>
          <div class="minBanner">
            <div class="minImg" @click="MinImg(item)" v-for="item in DetaList.mainPictures" :key="item">
              <img style="width: 100%; height: 100%;" :src="item" alt="">
            </div>
          </div>
        </div>
        <div class="details">
          <div class="text">
            <p>销量人气</p>
            <p style="margin: 10px auto; color: red;">{{DetaList.salesCount}}</p>
            <p style="color: #666666;">销量人气</p>
          </div>
          <div class="text">
            <p>商品评价</p>
            <p style="margin: 10px auto; color: red;">{{DetaList.videoScale}}</p>
            <p style="color: #666666;">查看评价</p>
          </div>
          <div class="text">
            <p>收藏人气</p>
            <p style="margin: 10px auto; color: red;">{{DetaList.collectCount}}</p>
            <p style="color: #666666;">收藏商品</p>
          </div>
          <div class="text">
            <p>品牌信息</p>
            <p style="margin: 10px auto; color: red;">{{DetaList.brand.name}}</p>
            <p style="color: #666666;">品牌主页</p>
          </div>
        </div>
      </div>
      <div class="DetaText">
        <p style="font-size: 25px;"> {{DetaList.name}}</p>
        <p style="font-size: 15px; margin:10px auto ; color: #bababa;">{{DetaList.desc}}</p>
        <p><a style="color: red; font-size: 20px;">￥{{DetaList.price}}</a> <a style="text-decoration:line-through">￥{{DetaList.oldPrice}}</a></p>
        <div class="preferential">
          <p>促销 <a href="">12月好物放送,APP领卷购买120元</a></p>
          <p>服务 <a href="">无忧退货 快熟退款 免费包邮 点击了解</a></p>
        </div>
        <div class="sku"  v-for="item in DetaList.specs" :key="item.id">
          <div class="skutext" >{{item.name}}</div>
          <div style=" align-items: center; height: 100%; display: flex; flex-wrap: wrap; width: 100%;">
            <div class="skuImg" :class="{Sku_text:!index.picture}" v-for="(index,sum) in item.values" :key="sum">
              <img style="width: 100%; height: 100%;" v-if="index.picture" :src="index.picture" alt="">
              <div style="margin: 5px;" class="text" v-else>{{index.name}}</div>
            </div>
          </div>
        </div>
        <div class="number">
          <el-input-number v-model="num" @change="handleChange" :min="1" :max="DetaList.inventory" label="描述文字"></el-input-number>
        </div>

        <el-button type="info" plain>加入购物车</el-button>
      </div>
    </div>

    <div class="Product_desciption">
      <div class="desciption">
        <div class="title">
          商品详情
        </div>
        <div class="text" >
          <div style="width: auto; height: 50%; display: flex; padding: 20px;" v-for="item in DetaList.details.properties" :key="item.id">
              <div style="width: 20%;">{{item.name}}</div>
              <div style="flex: 1;">{{item.value}}</div>
          </div>
        </div>
        <div class="image" v-for="item in DetaList.details.pictures" :key="item.id" >
          <img style="width: 100%; height: 100%;" v-lazy="item">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GetDeta } from '@/aip/AllCategories'
export default {
  data () {
    return {
      DetaList: '',
      maxBanner: '',
      num: 1,
      url: 'https://yanxuan-item.nosdn.127.net/af759ee5e5d47e8f268de061d313a35c.jpg'
    }
  },
  methods: {
    async GetDetaList () {
      const res = await GetDeta(this.$route.params.id)
      console.log(res)
      this.DetaList = res
    },
    // 小图控制大图
    MinImg (minimg) {
      console.log(minimg)
      this.maxBanner = minimg
    },
    handleChange (value) {
      console.log(value)
    }
  },
  created () {
    this.GetDetaList()
  }
}
</script>

<style lang="scss" scoped>
.details{
  width: 100%;
  .details_conten{
    width: 50%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    margin-bottom: 40px;
    .Banner_DetaList{
      width: 50%;
      height: 100%;

      margin-right:40px ;
      .banner{
        width: 100%;
        height: 80%;
        // border: 1px solid red;
        display: flex;
        .maxBanner{
          width: 82%;
          height: 100%;
          // border: 1px solid red;
        }
        .minBanner{
          width: 18%;
          height: 100%;
          // border: 1px solid red;
          .minImg{
            width:80%;
            height: 19%;
            // border: 1px solid red;
            margin:0 auto;
            margin-bottom:6px ;
            // padding: 10px;
          }
        }
      }
      .details{
        width: 100%;
        height: 20%;
        // border: 1px solid red;
        display: flex;
        .text{
          width: 20%;
          height: 60%;
          border-right: 1px solid #e4e4e4;
          margin-top:20px ;
          text-align: center;
          align-content: center;
          p{
            color: #999999;
          }
        }
      }
    }
    .DetaText{
      width: 40%;
      height: 100%;

      line-height: 30px;
      .preferential{
        width: 100%;
        height: 20%;

        font-size: 18px;
        background: #f5f5f5;
        align-content: center;
        p{
          margin:10px 10px;
        }
      }
      .sku{
        width: 100%;
        display: flex;
        align-items: center;
        .skutext{
          margin-right:10px;
          flex: 1;
          text-align: center;
          display: flex;
          align-items: center;
          color: #999999;
          justify-content: center;
        }
        .skuImg{
          margin-top:5px ;
          margin-right:10px ;
          width: 10%;
          height: 25%;
          align-items: center;
          background: #ebebeb;
          display: flex;
          flex-wrap:wrap;
        }
        .Sku_text{
          width: auto;
        }

      }
      .number{
        margin: 30px auto;
      }

      .el-button{
        background: #fff;
        color: black;
      }
      .el-button:hover{
        background: #e9f8f5;
        color: #9ebfb2;
        border: 1px solid #beeae1;
      }

    }
  }

  .Product_desciption{
    width: 100%;
    // height: 1200px;
    .desciption{
      width: 50%;
      height: 100%;
      margin: 0 auto;
      .title{
        width: auto;
        align-items: center;
        padding: 20px;
        font-size: 30px;
        margin: 50px auto;
      }
      .text{
        width: 100%;
        height: auto;
        margin-bottom: 50px;
        .p{
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
        }
      }
      .image{
        width: 100%;
        margin: -5px auto;
      }
    }
  }
}
</style>
