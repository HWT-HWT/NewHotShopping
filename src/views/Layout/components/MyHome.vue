<template>
  <div class="home" v-if="homeList">
    <div class="banner">
      <div class="block">
        <el-carousel height="500px" >
          <el-carousel-item v-for="item in bannerList" :key="item.id" >
            <img style="width: 100%; height: 100%;" class="small" :src="item.imgUrl" alt="">
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
        <commodity  v-for="item in NewList" :key="item.id" >
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
          <span style="font-size: 30px;">{{item.name}}</span>
        </div>
        <div class="commodity">
          <div class="MaxCommodity">
            <img style="width: 100%; height: 100%;" v-lazy="item.picture" alt="">
          </div>
          <div class="MinCommodity" >
            <productList :goods="item.goods"></productList>
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
import productList from '@/components/Product-list.vue'
import { getBanner, getHot, getNew, getBrand, getHeader, getGoods } from '@/aip/Home'

export default {
  data () {
    return {
      // 首页轮播图
      bannerList: '',
      // 首页数据
      homeList: '',
      // 新鲜好物数据
      NewList: '',
      // Mask数据
      HeaderList: '',
      // 首页商品列表
      GoosList: ''
    }
  },
  components: {
    BannerMask,
    homeList,
    commodity,
    productList
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
    // 获取banner大图
    async GetBannerList () {
      const res = await getBanner()
      this.bannerList = res
    },
    //  获取人气推荐数据
    async GetHotList () {
      const res = await getHot()
      this.homeList = res
    },
    //  获取新品好物数据
    async GetNewList () {
      const res = await getNew()
      this.NewList = res
    },
    //  获取首页商品列表数据
    async GetBrandList () {
      const res = await getBrand()
      // console.log(res)
      this.BrandList = res
    },
    // 遮罩层Mask数据
    async GetHeaderList () {
      const res = await getHeader()
      this.HeaderList = res
      // console.log(this.HeaderList)
    },
    // 首页商品列表数据
    async GetGoodsList () {
      const res = await getGoods()
      this.GoosList = res
      // console.log(res)
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
    // border: 1px solid black;
    margin: 100px auto;
    .content{
      width: 50%;
      height: 100%;
      // border: 1px solid black;
      margin: 0 auto;
      .title{
        width: 100%;
        height: 10%;
        align-content: center;
        margin: 30px auto;
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
        }
      }
    }
  }
}

</style>
