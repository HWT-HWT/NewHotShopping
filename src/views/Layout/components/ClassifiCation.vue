<template>
  <div class="ClassifiCation">
    <div class="banner">
      <div class="block">
        <el-carousel height="500px" >
          <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img style="width: 100%;height: 100%;" class="small" :src="item.imgUrl" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <div class="All-Categories" >
      <div class="Categories">
        <div class="title">
           全部分类
        </div>
        <div class="content">
          <ProductList :goods="AtHomee.children || AtHome.children" :Istrue="true"></ProductList>
        </div>
      </div>
    </div>

    <div class="All-Categories" v-for="item in AtHomee.children || AtHome.children" :key="item.id">
      <div class="Categories">
        <div class="title">
          {{item.name}}
        </div>
        <div class="content">
          <ProductList :goods="item.goods"></ProductList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getBanner } from '@/aip/Home'
import { GetAtHome } from '@/aip/AllCategories'
import ProductList from '@/components/Product-list.vue'
export default {
  data () {
    return {
      bannerList: '',
      AtHome: ''
    }
  },
  created () {
    this.GetBannerList()
    this.GetAtHomeList()
  },
  methods: {
    async GetBannerList () {
      const res = await getBanner()
      this.bannerList = res
    },
    async GetAtHomeList () {
      const res = await GetAtHome(this.$route.params.id)
      console.log(res)
      this.AtHome = res
    }
  },
  components: {
    ProductList
  },
  props: {
    AtHomee: {
      type: [Object, String]
    }
  }
}
</script>

<style lang="scss" scoped>
  .ClassifiCation{
    width: 100%;
    // height: 1000px;
    // border: 1px solid black;
    background: #f5f5f5;
    .banner{
      position: relative;
      margin-bottom:20px;
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
    .All-Categories{
      width: 100%;
      height: 100%;
      .Categories{
        width: 50%;
        background: #fff;
        margin: 0 auto;
        .title{
          width: 100%;
          height: 100px;
          text-align: center;
          align-content: center;
          font-size: 30px;
        }
        .content{
          width: 100%;
          // height: 700px;
          padding: 20px;
          margin: 20px auto;
        }
      }
    }
  }
</style>
