<template>
  <div class="list">
      <div class="title">
        <span style="font-size: 30px;"><slot name="title">人气推荐</slot> </span>
        <span style="font-size: 15px; color: #aaa5af;"><slot name="text">人气推荐 品质靠谱</slot></span>
      </div>

      <div class="conten" >
        <slot name="commodity">
        </slot>
      </div>
    </div>
</template>

<script>

export default {
  methods: {
    btn () {
      console.log(123)
    }
  }
}
</script>

<style lang="scss" scoped>
.list{
  width: 50%;
  height: auto;
  background: #fff;
  margin: 0 auto;
  .title{
    width: 90%;
    height: 50%;
    // border: 1px solid black;
    align-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .conten{
    width: 100%;
    height: 80%;
    margin: 0 auto;
    // border: 1px solid black;
  }
}
</style>
