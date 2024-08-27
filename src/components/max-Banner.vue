<template>
  <div class="magnifier-container"
       @mousemove="handleMouseMove"
       @mouseleave="handleMouseLeave"
       @touchstart="handleTouchStart"
       @touchmove="handleTouchMove"
       @touchend="handleTouchEnd">
    <img
      :src="maxBanner"
      alt="Product Image"
      class="magnifier-image"
      ref="image"
      @load="setImageSize"
    />
    <div v-if="showGlass" class="magnifier-glass" :style="glassStyle"></div>
  </div>
</template>

<script>
export default {
  props: {
    maxBanner: {
      type: String,
      required: true
    },
    magnifyRatio: {
      type: Number,
      default: 3
    },
    glassSize: {
      type: Number,
      default: 200
    }
  },
  data () {
    return {
      imageSize: { width: 0, height: 0 },
      startX: 0,
      startY: 0,
      glassPosition: { x: 0, y: 0 },
      showGlass: false
    }
  },
  computed: {
    glassStyle () {
      const scale = this.magnifyRatio
      const realSize = this.glassSize / scale
      const bgX = -this.glassPosition.x * scale
      const bgY = -this.glassPosition.y * scale
      return {
        width: `${this.glassSize}px`,
        height: `${this.glassSize}px`,
        left: `${this.glassPosition.x - (this.glassSize - realSize) / 2 - 20}px`,
        top: `${this.glassPosition.y - (this.glassSize - realSize) / 2 - 20}px`,
        backgroundImage: `url(${this.maxBanner})`,
        backgroundSize: `${this.imageSize.width * scale - 650}px ${this.imageSize.height * scale - 650}px`,
        backgroundPosition: `${bgX}px ${bgY}px`,
        border: '3px solid #000',
        borderRadius: '50%',
        position: 'absolute'
        // cursor: 'none',
        // pointerEvents: 'none'
      }
    }
  },
  methods: {
    setImageSize () {
      const img = this.$refs.image
      this.imageSize = {
        width: img.naturalWidth,
        height: img.naturalHeight
      }
    },
    handleMouseMove (event) {
      this.showGlass = true
      const rect = this.$el.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top

      // 限制放大镜的移动范围
      const newX = Math.max(0, Math.min(x, this.imageSize.width - this.glassSize))
      const newY = Math.max(0, Math.min(y, this.imageSize.height - this.glassSize))

      this.glassPosition = { x: newX, y: newY }
    },
    handleMouseLeave () {
      this.showGlass = false
    },
    handleTouchStart (event) {
      if (event.touches.length === 1) {
        this.startX = event.touches[0].clientX
        this.startY = event.touches[0].clientY
        this.showGlass = true
      }
    },
    handleTouchMove (event) {
      if (event.touches.length === 1) {
        const rect = this.$el.getBoundingClientRect()
        const touchX = event.touches[0].clientX - rect.left
        const touchY = event.touches[0].clientY - rect.top

        // 计算移动距离
        const dx = touchX - this.startX
        const dy = touchY - this.startY

        // 更新起始点
        this.startX = touchX
        this.startY = touchY

        // 更新放大镜位置
        let newX = this.glassPosition.x + dx / 2
        let newY = this.glassPosition.y + dy / 2

        // 限制放大镜的移动范围
        newX = Math.max(0, Math.min(newX, this.imageSize.width - this.glassSize))
        newY = Math.max(0, Math.min(newY, this.imageSize.height - this.glassSize))

        this.glassPosition = { x: newX, y: newY }
      }
    },
    handleTouchEnd () {
      // 可以在这里添加一些结束触摸时的处理，比如隐藏放大镜（如果需要的话）
      // 但由于我们已经在 move 事件中处理显示逻辑，这里通常不需要额外处理
      // 除非有特殊的交互需求
    },
    // 可以在这里添加更多的方法或生命周期钩子
    mounted () {
      // 确保图片加载完成后，放大镜的初始位置和大小是正确的
      this.$nextTick(() => {
        this.setImageSize()
      })
    }
  }
}
</script>

<style scoped>
.magnifier-container {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.magnifier-image {
  display: block;
  width: 100%; /* 或者具体尺寸，根据实际需求 */
  height: auto;
}

</style>
