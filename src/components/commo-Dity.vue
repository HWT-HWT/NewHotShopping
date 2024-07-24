<template>
  <div class="commodity" >
          <div class="image">
            <slot name="image"></slot>
          </div>
          <div class="text">
            <p><slot name="title"></slot></p>
            <p><slot name="text"></slot></p>
          </div>
        </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .commodity{
      width: 24%;
      height: 100%;
      border: 1px solid black;
      display: inline-block;
      margin: 0 auto;
      margin-left:5px;
      transition: box-shadow 0.5s ease-in-out;
      box-shadow: none;
      .image{
        width: 100%;
        height: 75%;
        border: 1px solid black;

      }
      .text{
        font-size: 18px;
        text-align: center;
        line-height: 30px;
        p{
          width: 100%;
          height: 30px;
          overflow: hidden;
          overflow-wrap: break-word;
        }
      }
    }
    .commodity:hover{
      box-shadow:0px 5px 10px rgba(125, 125, 125, 0.6);
      margin-top:-2px ;
    }
</style>
