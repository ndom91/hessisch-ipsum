<template>
  <div class="view">
    <div class="w-screen h-14 p-4 bg-gray-50">
      <Nav />
    </div>
    <div id="content">
      <router-view />
    </div>
  </div>
  <div id="bg" />
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  components: {
    Nav
  }
}
</script>
