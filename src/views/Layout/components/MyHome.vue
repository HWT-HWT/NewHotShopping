<template>
  <div class="home">
    <div class="banner">
      <div class="block">
        <el-carousel height="500px" >
          <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img style="width: 100%; " class="small" :src="item.imgUrl" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <BannerMask :HeaderList="HeaderList"></BannerMask>
    </div>

    <homeList>
      <template #title>
        人气推荐
      </template>
      <template #text>
        人气推荐 品质靠谱
      </template>
      <template #commodity>
        <commodity v-for="item in homeList" :key="item.id">
          <template #image>
            <img style="width: 100%; height: 100%;" :src="item.picture" alt="">
          </template>
          <template #title>
            {{ item.title }}
          </template>
          <template #text>
            {{ item.alt }}
          </template>
        </commodity>
      </template>
    </homeList>

    <homeList>
      <template #title>
        新鲜好物
      </template>
      <template #text>
        新鲜出炉 品质靠谱
      </template>
      <template #commodity>
        <commodity  v-for="item in NewList" :key="item.id">
          <template #image>
            <img style="width: 100%; height: 100%;" :src="item.picture" alt="">
          </template>
          <template #title>
            {{item.desc}}
          </template>
          <template #text >
            <p style="color: red;">{{'￥'+item.price}}</p>
          </template>
        </commodity>
      </template>
    </homeList>

    <div  class="Product"  v-for="item in GoosList" :key="item.id">
      <div class="content">
        <div class="title">
          <span style="font-size: 25px;">{{item.name}}</span>
        </div>
        <div class="commodity">
          <div class="MaxCommodity">
            <img style="width: 100%; height: 100%;" :src="item.picture" alt="">
          </div>
          <div class="MinCommodity" >
            <div class="Commodity_Content"  v-for="index in item.goods" :key="index.id">
              <div class="image">
                <img style="width: 100%; height: 100%;" :src="index.picture" alt="">
              </div>
              <div class="text">
                <p>{{index.name}}</p>
                <p>{{index.desc}}</p>
                <p style="color: red;">{{'￥'+index.price}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import BannerMask from '@/components/banner-Mask.vue'
import homeList from '@/components/home-List.vue'
import commodity from '@/components/commo-Dity.vue'
import { getBanner, getHot, getNew, getBrand, getHeader, getGoods } from '@/aip/Home'

export default {
  data () {
    return {
      bannerList: '',
      homeList: '',
      NewList: '',
      BrandList: '',
      HeaderList: '',
      GoosList: ''
    }
  },
  components: {
    BannerMask,
    homeList,
    commodity
  },
  created () {
    this.GetBannerList()
    this.GetHotList()
    this.GetNewList()
    this.GetBrandList()
    this.GetHeaderList()
    this.GetGoodsList()
  },
  methods: {

    async GetBannerList () {
      const res = await getBanner()
      this.bannerList = res
    },

    async GetHotList () {
      const res = await getHot()
      this.homeList = res
    },
    async GetNewList () {
      const res = await getNew()

      this.NewList = res
    },
    async GetBrandList () {
      const res = await getBrand()
      this.BrandList = res
    },
    async GetHeaderList () {
      const res = await getHeader()
      this.HeaderList = res
      console.log(this.HeaderList)
    },
    async GetGoodsList () {
      const res = await getGoods()
      this.GoosList = res
      console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  background: #fff;
  .banner{
    position: relative;
    .block{
      width: 50%;
      margin: 0 auto;
      .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
        text-align: center;
      }

      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }

      .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
      }
    }
  }

  .Product{
    width: 100%;
    height: 600px;
    .content{
      width: 44%;
      height: 100%;
      margin: 0 auto;
      .title{
        width: 100%;
        height: 10%;
        align-content: center;

      }
      .commodity{
        width: 100%;
        height: 90%;
        display: flex;

        .MaxCommodity{
          width: 20%;
          height: 100%;
          margin: 0 auto;
        }
        .MinCommodity{
          width: 80%;
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          .Commodity_Content{
            width: 22%;
            margin: 0 auto;
            height: 45%;
            transition: box-shadow 0.5s ease-in-out;
            background: #fff;
            .image{
              width: 70%;
              height: 60%;
              margin: 0 auto;
            }
            .text{
              width: 80%;
              height: 40%;
              margin: 0 auto;
              text-align: center;
              align-content: center;
              p{
                overflow: hidden;
                text-overflow: ellipsis;
                height: 30%; white-space: nowrap;
              }
            }
          }
          .Commodity_Content:hover{
            box-shadow:0px 5px 10px rgba(125, 125, 125, 0.5);
            margin-top:-2px ;
          }
        }
      }
    }
  }
}

</style>
