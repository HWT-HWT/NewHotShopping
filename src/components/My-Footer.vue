<template>
  <div class="footerTitle">
    <div class="conten">
      <slot name="title"></slot>
      <div class="ioce">
         <slot name="customer"></slot>
         <slot name="bug"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footerTitle{
  width: 100%;
  text-align: center;
  padding: 20px;
  // border: 1px solid black;
  .conten{
    width: 100%;
    height: auto;
    margin: 20px auto;
    // border: 1px solid black;
    .ioce{
      width: 100%;
      // height: 100%;
      display: flex;
      margin:  0 auto;
      margin-top:10px ;
      padding: 10px;
      // border: 1px solid;
      .i{
        align-content: center;
        width: 100px;
        height: 100px;
        border: 1px solid black;
        margin-left: 10px;
      }
      .ihover:hover{
        opacity: 0.5;
      }
    }
  }
}
</style>
