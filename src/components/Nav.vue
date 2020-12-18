<template>
  <nav class="w-full flex justify-between align-center px-8">
    <div>
      <b>Hessisch Ipsum</b>
    </div>
    <div class="flex">
      <div class="mx-4">
        <router-link
          class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-100 rounded-sm"
          to="/"
        >
          Home</router-link
        >
      </div>
      <div class="mx-4">
        <router-link
          class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-100 rounded-sm"
          to="/about"
        >
          About</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>
