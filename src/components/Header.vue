<template>
  <div class="flex flex-col space-y-4 align-center">
    <div class="mt-8">
      <div class="font-bold text-xl text-center">🇩🇪 Hessisch Ipsum</div>
    </div>
    <div class="italic text-center">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>
