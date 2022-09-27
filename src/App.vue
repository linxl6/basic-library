<template>
  <div>
    <div>
      <img src="./assets/logo.png">
    </div>
    <div>Hello</div>
    <a-button>按钮</a-button>
  </div>
</template>
<script>
import {defineComponent} from 'vue'
export default defineComponent({
  name:'TestApp'
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
