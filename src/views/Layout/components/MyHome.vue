<template>
  <div class="home">
    <div class="banner">
      <div class="block">
        <el-carousel height="500px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="Mask">
      <div class="Navtitle">
        <ul>
          <li v-for="item in 10" :key="item">123</li>
        </ul>
      </div>
      <div class="List">
          <div class="title">
            <span style="font-size: 20px;">分类推荐: </span>
            <span>根据你的购买记录浏览记录推荐</span>
          </div>
          <div class="conten" v-for="item in 9" :key="item">
            <div style="width: 100%; height: 100%; display: flex;">
              <div class="image" style="margin-left:10px ;">

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
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.home{
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
  .Mask{
    position: absolute;
    z-index: 999;
    top: 0;
    left: 635px;
    width: 50%;
    height: 500px;
    display: flex;
    flex-wrap: wrap;
    .Navtitle{
      width: 20%;
      height: 100%;
      // border: 1px solid black;
      background: black;
      ul{
        width: 100%;
        height: 100%;
        color: white;
        li{
          width: 100%;
          height: 10%;
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
    }
    .List{
      height: 100%;
      display: none;
      flex:1;
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
        .image{
          width: 100px;
          height: 90%;
          border: 1px solid #ccc;
          margin: 5px 0;
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
}

</style>
