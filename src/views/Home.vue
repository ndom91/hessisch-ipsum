<template>
  <div class="home">
    <Header msg="Lorem Ipsum Generator, aber uff Hessisch!" />
    <Generator />
  </div>
</template>

<script lang="ts">
import Header from '/@components/Header.vue'
import Generator from '/@components/Generator.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Generator
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
