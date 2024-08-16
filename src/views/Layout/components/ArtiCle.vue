<template>
  <div class="article" >
    <div class="content">
      <product :goods="AtHomeGoodsList.items"></product>
    </div>
  </div>
</template>

<script>
import product from '@/components/Product-list.vue'
import { GetAtHomeGoods } from '@/aip/AllCategories'
export default {
  data () {
    return {
      AtHomeGoodsList: ''
    }
  },
  components: {
    product
  },
  created () {
    this.GetAtHomeGoodsList()
  },
  methods: {
    // 发起请求:首页商品数据
    async GetAtHomeGoodsList () {
      const res = await GetAtHomeGoods(this.$route.params.id, 1)
      console.log(res)
      this.AtHomeGoodsList = res
    }

  }

}
</script>

<style lang="scss" scoped>
.article{
  width: 100%;
  // border: 1px solid black;
  margin-top: 10px;
  overflow-y: auto;
  .content{
    width: 50%;
    height: 100%;
    margin: 0 auto;
  }
}
</style>
