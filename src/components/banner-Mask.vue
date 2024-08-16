<template>
  <div class="Mask"  @mouseleave="handleMouseleave">
      <div class="Navtitle">
        <ul >
          <li @mouseenter="handleMouseenter(item.id)" v-for="item in HeaderList" :key="item.id">{{item.name}}  {{item.children[0].name}} </li>
        </ul>
      </div>
      <div class="List" v-if="Mask">
          <div class="title">
            <span style="font-size: 20px;">分类推荐: </span>
            <span>根据你的购买记录浏览记录推荐</span>
          </div>
          <div class="conten" v-for="item in recommend.goods" :key="item.id">
            <div class="contenAll">
              <div class="image" >
                <img style="width: 100%;" v-lazy="item.picture" alt="">
              </div>
              <div class="text">
                <div style="height: 50%;  word-wrap: break-word; overflow: hidden; font-size: 18px; line-height: 28px;">
                  {{item.name}}
                </div>
                <div style="height: 20%; width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #aaa;">
                  {{item.desc}}
                </div>
                <div style="font-size: 23px; color: red; margin-top: 5px;">
                  {{item.price}}
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
      // 控制遮罩 false 隐藏 | true 显示
      Mask: '',
      // 筛选好的数据
      recommend: ''
    }
  },
  props: {
    HeaderList: {
      type: [Array, String]
    }
  },
  methods: {
    // 鼠标移入事件
    handleMouseenter (id) {
      // 移入就控制Mask 显示（为true）
      this.Mask = true
      // 查找出鼠标悬停的数据
      // 使用传递的id 筛选数据中的对应的数据
      this.recommend = this.$props.HeaderList.find(item => item.id === id)
      console.log(this.recommend)
    },
    // 鼠标移出就将Mask改为false
    handleMouseleave () {
      this.Mask = false
    }
  }

}
</script>

<style lang="scss" scoped>
.Mask{
    position: absolute;
    top: 0;
    left: 25%;
    width: 50%;
    height: 100%;
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

    .List{
      // width: 30%;
      // display: flex;
      height: 100%;
      flex:1;
      z-index: 999;
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
        margin: 5px  10px;
        .contenAll{
          width: 100%;
          height: 100%;
          display: flex;
          flex-wrap:wrap;
           .image{
          width: 115px;
          height: 90%;
          // border: 1px solid #ccc;
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
