<template>
  <div v-if="sku">
    <div class="sku"  v-for="item in sku" :key="item.id" >
      <div class="skutext" >{{item.name}}</div>
      <div style=" align-items: center; height: 100%; display: flex; flex-wrap: wrap; width: 100%;">
        <div class="skuImg"  v-for="(val,sum) in item.values" :key="sum">
          <img class="image" :class={border:val.selected} @click="changeSelectedStatus(item,val)" style="width: 40px; height: 100%;" v-if="val.picture" :src="val.picture" alt=""  >
          <div class="Text"  :class={border:val.selected}  v-else @click="changeSelectedStatus(item,val)" >{{val.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  props: {
    // 接收传递的数据
    sku: {
      type: [Object, Array]
    },
    skus: {
      type: [Object, Array]
    }
  },
  created () {
    console.log(this.$props.skus)
  },
  mounted () {
    if (this.$props.skus) {
      this.getPathMap()
    }
  },
  methods: {
    // 切换选择状态
    changeSelectedStatus (item, val) {
      // item:是同排数据
      // val:是点击项
      // 判断
      if (val.selected) {
        // 再次点击时这位取消 取消为false
        val.selected = false
      } else {
        // 先全部取消在 独自添加

        // 先全部取消
        item.values.forEach(val => {
          val.selected = false
        })
        // 独自添加
        val.selected = true
      }
    },
    getPathMap () {
      const effectiveSkus = this.$props.skus.filter(sku => sku.inventory > 0)
      console.log(effectiveSkus)

      // effectiveSkus.forEach(sku => {
      //   const selectedValArr = sku.specs.map(val => val.valueName)
      //   console.log(selectedValArr)
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
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
      width: auto;
      height: 25%;
      align-items: center;
      background: #ebebeb;
      display: flex;
      flex-wrap:wrap;
      img{
        border: 1px solid #ebebeb;
      }
      .Text{
        width: 100%;
        height: 100%;
        padding: 5px;
        border: 1px solid #ebebeb;
      }
      .border{
        border: 1px solid #ccc;
      }
    }

    .Sku_text{
      width: auto;
    }
      }
</style>
