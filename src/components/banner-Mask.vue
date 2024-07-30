<template>
  <div class="Mask">
      <div class="Navtitle">
        <ul>
          <li v-for="item in HeaderList" :key="item.id">{{item.name}}  {{item.children[0].name}} </li>
        </ul>
      </div>
      <div class="List">
          <div class="title">
            <span style="font-size: 20px;">分类推荐: </span>
            <span>根据你的购买记录浏览记录推荐</span>
          </div>
          <div class="conten" v-for="item in HeaderList" :key="item.id">
            <div class="contenAll">
              <div class="image" >

              </div>
              <div class="text">
                <div style="height: 50%;  word-wrap: break-word; overflow: hidden; font-size: 18px; line-height: 28px;">
                  暖腰暖腹暖胃,新艾暖宫带暖腰
                </div>
                <div style="height: 20%; width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #aaa;">
                  暖腰暖腹暖胃,新艾暖宫带暖腰暖腰暖腹暖胃,新艾暖宫带暖腰暖腰暖腹暖胃,新艾暖宫带暖腰
                </div>
                <div style="font-size: 23px; color: red; margin-top: 5px;">
                  ￥35.00
                </div>
              </div>
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
    HeaderList: {
      type: [Array, String]
    }
  }

}
</script>

<style lang="scss" scoped>
.Mask{
    position: absolute;
    // z-index: 999;
    top: 0;
    left: 635px;
    width: 50%;
    height: 500px;
    display: flex;
    flex-wrap: wrap;
    .Navtitle{
      width: 20%;
      height: 100%;
      background: black;
      z-index: 999;
      ul{
        width: 100%;
        height: 100%;
        color: white;
        li{
          width: 100%;
          height: 11%;
          display: inline-block;
          text-align: center;
          align-content: center;
        }
      }
    }
    li:hover{
      background: #ccc;
    }
    .Navtitle:hover ~.List{
      display: block;
      z-index: 999;
    }
    .List{
      height: 100%;
      flex:1;
      display: none;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.5);
      overflow: hidden;
      .title{
        width: 100%;
        height: 60px;
        line-height: 65px;
        margin: 0 20px;
        color: black;
      }
      .conten{
        width: 30%;
        height: 25%;
        border: 1px solid #e8e6e6;
        background: #fff;
        display: inline-block;
        margin: 5px  15px;
        .contenAll{
          width: 100%;
          height: 100%;
          display: flex;
           .image{
          width: 100px;
          height: 90%;
          border: 1px solid #ccc;
          margin: 5px 5px;
        }

        }

        .text{
          flex: 1;
          height: 90%;
          // border: 1px solid #ccc;
          margin: 5px 10px;
          overflow: hidden;
        }
      }
      .conten:hover{
        background: #e8e6e6;
      }
    }
  }
</style>
