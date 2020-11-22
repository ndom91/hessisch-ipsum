<template>
  <div class="home">
    <HelloWorld msg="Lorem Ipsum Generator, but uff Hessisch!" />
    <Lorem />
  </div>
</template>

<script lang="ts">
import HelloWorld from '/@components/HelloWorld.vue'
import Lorem from '/@components/Lorem.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Lorem
  }
}
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 960px;
}
</style>
