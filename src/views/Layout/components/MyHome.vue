<template>
  <div class="home">
    <div class="banner">
      <div class="block">
        <el-carousel height="500px" >
          <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img style="width: 100%;" class="small" :src="item.imgUrl" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <BannerMask></BannerMask>
    </div>

    <homeList>
      <template #title>
        人气推荐
      </template>
      <template #text>
        人气推荐 品质靠谱
      </template>
      <template #commodity>
        <commodity>
          <template #title>
            特惠推荐
          </template>
          <template #text>
            他们最实惠
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
        <commodity>
          <template #title>
            电动车头盔电动车头盔电动车头盔电动车头盔动车头盔电动车头盔电动车头盔
          </template>
          <template #text>
            ￥35.00
          </template>
        </commodity>
      </template>
    </homeList>
  </div>
</template>

<script>
import BannerMask from '@/components/banner-Mask.vue'
import homeList from '@/components/home-List.vue'
import commodity from '@/components/commo-Dity.vue'
import { getBanner, getHot } from '@/aip/Home'

export default {
  data () {
    return {
      bannerList: '',
      homeList: ''
    }
  },
  components: {
    BannerMask,
    homeList,
    commodity
  },
  created () {
    this.GetBannerList()
  },
  methods: {

    async GetBannerList () {
      const res = await getBanner()
      this.bannerList = res.data.result
      console.log(this.bannerList)
    },

    async GetHotList () {
      const res = await getHot()
      console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  border: 1px solid red;
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
}

</style>
