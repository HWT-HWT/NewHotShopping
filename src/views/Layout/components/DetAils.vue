<template>
  <div class="details">
    <div class="details_conten">
      <div class="Banner_DetaList">
        <div class="banner">
          <div class="maxBanner">
            <maxBanner :maxBanner=maxBanner></maxBanner>
          </div>
          <div class="minBanner">
            <div class="minImg" @click="MinImg(item)" v-for="item in DetaList.mainPictures" :key="item">
              <img style="width: 100%; height: 100%; margin-bottom: 4px;" :src="item" alt="">
            </div>
          </div>
        </div>
        <div class="details">
          <div class="text">
            <p>销量人气</p>
            <p style="margin: 10px auto; color: red;">{{DetaList.salesCount}}</p>
            <p style="color: #666666;">销量人气</p>
          </div>
          <div class="text">
            <p>商品评价</p>
            <p style="margin: 10px auto; color: red;">{{DetaList.videoScale}}</p>
            <p style="color: #666666;">查看评价</p>
          </div>
          <div class="text">
            <p>收藏人气</p>
            <p style="margin: 10px auto; color: red;">{{DetaList.collectCount}}</p>
            <p style="color: #666666;">收藏商品</p>
          </div>
          <div class="text">
            <p>品牌信息</p>
            <p style="margin: 10px auto; color: red;">{{DetaList.brand?.name}}</p>
            <p style="color: #666666;">品牌主页</p>
          </div>
        </div>
      </div>
      <div class="DetaText">
        <p style="font-size: 25px;"> {{DetaList.name}}</p>
        <p style="font-size: 15px; margin:10px auto ; color: #bababa;">{{DetaList.desc}}</p>
        <p><a style="color: red; font-size: 20px;">￥{{DetaList.price}}</a> <a style="text-decoration:line-through">￥{{DetaList.oldPrice}}</a></p>
        <div class="preferential">
          <p>促销 <a href="">12月好物放送,APP领卷购买120元</a></p>
          <p>服务 <a href="">无忧退货 快熟退款 免费包邮 点击了解</a></p>
        </div>

        <Sku v-if="DetaList" :sku = DetaList  @SkuId:data="GetSkuId"  ></Sku>

        <div class="number">
          <el-input-number v-model="num" @change="handleChange" :min="1" :max="DetaList.inventory" label="描述文字"></el-input-number>
        </div>

        <el-button type="info" plain @click="AddCart">加入购物车</el-button>
      </div>
    </div>

    <div class="Product_desciption">
      <div class="desciption">
        <div class="title">
          商品详情
        </div>
        <div class="text" >
          <div style="width: auto; height: 50%; display: flex; padding: 20px;" v-for="item in properties" :key="item.id">
              <div style="width: 20%;">{{item.name}}</div>
              <div style="flex: 1;">{{item.value}}</div>
          </div>
        </div>
        <div class="image" v-for="item in pictures" :key="item.id" >
          <img style="width: 100%; height: 100%;" v-lazy="item">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sku from '@/components/MySku.vue'
import { GetDeta } from '@/aip/AllCategories'
import { GetAddCart } from '@/aip/cart'
import maxBanner from '@/components/max-Banner.vue'
export default {
  data () {
    return {
      // 商品详情数据
      DetaList: '',
      // 储存大图
      maxBanner: '',
      // 商品数量
      num: 1,
      // 商品文字详情
      properties: '',
      // 商品照片详情
      pictures: '',
      // 选中的商品的的ID
      SkuId: ''
    }
  },
  methods: {
    // 发起商品详情数据
    async GetDetaList () {
      const res = await GetDeta(this.$route.params.id)
      // 将sku添加selected
      res.specs.forEach(item => {
        item.values.forEach(val => {
          val.selected = false
        })
      })
      this.DetaList = res
      // 将小图第一张照片当大图
      this.maxBanner = res.mainPictures[0]
      // 商品详情的文字详情
      this.properties = res.details.properties
      // 商品照片详情
      this.pictures = res.details.pictures
    },
    // 小图控制大图
    MinImg (minimg) {
      // 点击小图修改大图的照片
      // console.log(minimg)
      this.maxBanner = minimg
    },
    // 点击数量加减时在下面操作
    handleChange (value) {
      console.log(value)
    },
    // 加入购物车
    async AddCart () {
      // 没有登录在下面操作
      if (!localStorage.getItem('token')) {
        this.$notify({
          title: '请重新登录',
          message: '未登录或登录时间过长',
          type: 'warning'
        })
        // 跳转登录页
        return this.$router.push('/login')
      } else {
        if (this.SkuId) {
          console.log(this.SkuId, this.num)
          const res = await GetAddCart(this.SkuId, this.num)
          console.log(res)
          this.$message({
            message: '加入成功',
            type: 'success'
          })
        } else {
          this.$message({
            message: '请选择商品规格',
            type: 'warning'
          })
        }
      }
    },
    // 子元素传递的商品id
    GetSkuId (data) {
      this.SkuId = data[0].id
    }

  },
  created () {
    // 发起商品数据函数
    this.GetDetaList()
  },
  components: {
    Sku,
    maxBanner
  }
}
</script>

<style lang="scss" scoped>
.details{
  width: 100%;
  .details_conten{
    width: 50%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    margin-bottom: 40px;
    .Banner_DetaList{
      width: 50%;
      height: 100%;
      margin-right:40px ;
      .banner{
        width: 100%;
        height: 80%;
        display: flex;
        .maxBanner{
          width: 91%;
          height: 91%;
          // padding: 20px
          // border: 1px solid black;
        }
        .minBanner{
          width: 18%;
          height: 100%;
          .minImg{
            width:80%;
            height: 20%;
            // border: 1px solid red;
            margin:0 auto;
            margin-bottom:8px ;
            // padding: 2px;
          }
        }
      }
      .details{
        width: 100%;
        height: 20%;
        // border: 1px solid red;
        display: flex;
        .text{
          width: 20%;
          height: 60%;
          border-right: 1px solid #e4e4e4;
          margin-top:20px ;
          text-align: center;
          align-content: center;
          p{
            color: #999999;
          }
        }
      }
    }
    .DetaText{
      width: 40%;
      height: 100%;

      line-height: 30px;
      .preferential{
        width: 100%;
        height: 20%;

        font-size: 18px;
        background: #f5f5f5;
        align-content: center;
        p{
          margin:10px 10px;
        }
      }

      .number{
        margin: 30px auto;
      }

      .el-button{
        background: #fff;
        color: black;
      }
      .el-button:hover{
        background: #e9f8f5;
        color: #9ebfb2;
        border: 1px solid #beeae1;
      }

    }
  }

  .Product_desciption{
    width: 100%;
    // height: 1200px;
    .desciption{
      width: 50%;
      height: 100%;
      margin: 0 auto;
      .title{
        width: auto;
        align-items: center;
        padding: 20px;
        font-size: 30px;
        margin: 50px auto;
      }
      .text{
        width: 100%;
        height: auto;
        margin-bottom: 50px;
        .p{
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
        }
      }
      .image{
        width: 100%;
        margin: -5px auto;
      }
    }
  }
}
</style>
