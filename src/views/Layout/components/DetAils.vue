<template>
  <div class="details">
    <div class="details_conten">
      <div class="Banner_DetaList">
        <div class="banner">
          <div class="maxBanner">
            <!-- {{DetaList.mainPictures}} -->
          </div>
          <div class="minBanner">
            <div class="minImg" v-for="item in DetaList.mainPictures" :key="item">
              <img style="width: 100%; height: 100%;" :src="item" alt="">
            </div>
          </div>
        </div>
        <div class="details">
          <div class="text" v-for="item in 4" :key="item">
            <p>销量人气</p>
            <p>123</p>
            <p>销量人气</p>
          </div>
        </div>
      </div>
      <div class="DetaText">
        <p style="font-size: 25px;"> {{DetaList.name}}</p>
        <p style="font-size: 15px; color: #bababa;">{{DetaList.desc}}</p>
        <p><a style="color: red; font-size: 20px;">￥{{DetaList.price}}</a> <a style="text-decoration:line-through">￥{{DetaList.oldPrice}}</a></p>
        <div class="preferential">
          <p>促销</p>
          <p>服务</p>
        </div>
        <div class="sku">
          <div class="skuImg">规格</div>
          <div class="skuImg" v-for="item in DetaList.skus" :key="item.id">
            <img style="width: 100%;" :src="item.picture" alt="">
          </div>
        </div>
        <div class="number">

        </div>
        <button>加入购物车</button>
      </div>
    </div>
  </div>
</template>

<script>
import { GetDeta } from '@/aip/AllCategories'
export default {
  data () {
    return {
      DetaList: ''
    }
  },
  methods: {
    async GetDetaList () {
      const res = await GetDeta(this.$route.params.id)
      console.log(res)
      this.DetaList = res
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
  height: 600px;
  border: 1px solid black;
  .details_conten{
    width: 50%;
    height: 100%;
    border: 1px solid black;
    margin: 0 auto;
    display: flex;
    .Banner_DetaList{
      width: 50%;
      height: 100%;
      border: 1px solid black;
      .banner{
        width: 100%;
        height: 80%;
        border: 1px solid red;
        display: flex;
        .maxBanner{
          width: 82%;
          height: 100%;
          border: 1px solid red;
        }
        .minBanner{
          width: 18%;
          height: 100%;
          border: 1px solid red;
          .minImg{
            width:100%;
            height: 20%;
            border: 1px solid red;

          }
        }
      }
      .details{
        width: 100%;
        height: 20%;
        border: 1px solid red;
        display: flex;
        .text{
          width: 20%;
          height: 100%;
          border: 1px solid red;
          text-align: center;
          align-content: center;
        }
      }
    }
    .DetaText{
      width: 50%;
      height: 100%;
      border: 1px solid black;
      line-height: 30px;
      .preferential{
        width: 100%;
        height: 20%;
        border: 1px solid black;
        font-size: 18px;
        // line-height: 50px;
        align-content: center;
        p{
          margin:10px 10px;
        }
      }
      .sku{
        width: 100%;
        height: 15%;
        border: 1px solid black;

        display: flex;
        .skuImg{
          margin-top:12px ;
          margin-right:10px ;
          width: 10%;
          height: 70%;
          align-content: center;
          text-align: center;
          border: 1px solid black;
        }
      }
    }
  }
}
</style>
