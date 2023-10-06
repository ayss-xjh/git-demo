<template>
  <div id="app">
    <button @click="showMyMessage">点我出现myMessage</button>
    <!-- <myMessage /> -->
    <slotTest>
      <template #text>
        <h1>我不好</h1>
      </template>
    </slotTest>
  </div>
</template>

<script>
import slotTest from './components/SlotTest/slotTest.vue'
export default {
  name: 'App',
  components: {
    // myMessage
    slotTest
  },
  methods: {
    showMyMessage() {
      this.$prompt.open({
        title: '你好'
      })
    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
