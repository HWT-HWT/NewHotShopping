<template>
  <div style="width: 100%; height: 100%; display:flex; flex-wrap: wrap;">
    <div class="Commodity_Content" v-for="index in goods" :key="index.id" @click="navArticli(index.id)">
      <div class="image">
        <img style="width: 100%; height: 100%;" :src="index.picture" alt="">
      </div>
        <div class="text">
          <p>{{index.name}}</p>
          <p>{{index.desc}}</p>
          <p style="color: red;" v-if="index.price">{{'￥'+index.price}}</p>
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
    goods: {
      type: [Object, Array]
    }
  },
  created () {

  },
  methods: {
    navArticli (id) {
      console.log(id)
      this.$router.push({ path: '/sbu/' + id })
    }
  }

}
</script>

<style lang="scss" scoped>
          .Commodity_Content{
            // display: flex;
            width: 20%;
            margin-top: 10px;
            margin-bottom: 10px;
            margin-left:5px;
            // height: 50%;
            transition: box-shadow 0.5s ease-in-out;
            // border: 1px solid black;
            background: #fff;
            padding: 10px;
            .image{
              width: 70%;
              height: 60%;
              margin: 10px auto;
            }
            .text{
              width: 80%;
              height: 40%;
              margin: 0 auto;
              text-align: center;
              align-content: center;
              p{
                overflow: hidden;
                text-overflow: ellipsis;
                height: 30%; white-space: nowrap;
              }
            }
          }
          .Commodity_Content:hover{
            box-shadow:0px 5px 10px rgba(125, 125, 125, 0.5);
          }
</style>
