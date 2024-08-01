<template>
  <div class="list">
      <div class="title">
        <span style="font-size: 24px;"><slot name="title">人气推荐</slot> </span>
        <span style="font-size: 15px; color: #aaa5af;"><slot name="text">人气推荐 品质靠谱</slot></span>
      </div>

      <div class="conten">
        <slot name="commodity">
        </slot>
      </div>
    </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
.list{
  width: 50%;
  height: 500px;
  background: #fff;
  margin: 0 auto;
  .title{
    width: 90%;
    height: 20%;
    align-content: center;
    margin: 0 auto;
  }
  .conten{
    width: 90%;
    height: 60%;
    margin: 0 auto;
  }
}
</style>
