<template>
  <div class="flex flex-col mt-8 container w-3/4 md:w-1/2 mx-auto">
    <div class="text-red-500 font-bold text-xl p-4">About</div>
    <section class="space-y-6 mt-4 mx-auto">
      <div class="bg-gray-100 rounded-md p-6">
        <div class="text-red-500 font-bold">What is this?</div>
        <div>
          This is another Lorem Ipsum generator, but with a twist! This time
          <i>uff Hessisch</i>. Meaning, in the Hessian dialect spoken around
          Frankfurt, Germany! This was very much inspired by
          <a
            target="_blank"
            rel="noreferer noopener"
            class="rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-200 border-b-2 border-red-100"
            href="https://bavaria-ipsum.de/"
            >Bavaria Ipsum 🏔️</a
          >.
        </div>
      </div>
      <div class="bg-gray-100 border-3 border-gray-50 rounded-md p-6">
        <div class="text-red-500 font-bold">Who are you?</div>
        <div>
          My name is Nico Domino, I'm a web developer from Frankfurt. You can
          find more of my work at
          <a
            target="_blank"
            rel="noreferer noopener"
            class="rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-200 border-b-2 border-red-100"
            href="https://ndo.dev"
            >ndo.dev</a
          >
          or on my Github at
          <a
            target="_blank"
            rel="noreferer noopener"
            class="rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-200 border-b-2 border-red-100"
            href="https://github.com/ndom91"
            >@ndom91</a
          >.
        </div>
      </div>
      <div class="bg-gray-100 rounded-md p-6">
        <div class="text-red-500 font-bold">
          This is awesome! Can I buy you a coffee?
        </div>
        <div>
          You sure can! Just click
          <a
            class="rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-200 border-b-2 border-red-100"
            target="_blank"
            rel="noreferer noopener"
            href="https://buymeacoffee.com/ndom91"
            >here ☕</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue'

export default {
  name: 'About'
}
</script>
