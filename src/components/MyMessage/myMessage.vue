<template>
  <transition>
    <div class="box" :style="{ top: top + 'px' }" v-if="visible">{{ title }}</div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      title: '我是一条消息',
      visible: false,
      top: null
    }
  },
  mounted() {
    // this.visible = true
    setTimeout(() => {
      this.visible = false    
      this.top -= this.$el.offsetHeight
    },2000)
  }
}
</script>

<style>
.box {
    width: 300px;
    padding: 15px;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    background-color: red;
    border-radius: 10px;
    color: #fff;
}
.v-enter,.v-leave-to {
  opacity: 0;
  transform: translate(-50%,-40px);
}
.v-enter-active,.v-leave-active {
  transition: all .5s ease-in-out;
}

</style>