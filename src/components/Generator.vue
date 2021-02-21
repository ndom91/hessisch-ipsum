<template>
  <div class="w-76 flex flex-col align-start mt-4">
    <section
      class="bg-gray-50 border-2 border-gray-50 rounded-md w-56 p-4 space-y-4"
    >
      <div class="font-bold text-xl text-center">Was willsten?</div>
      <div class="flex space-x-6 justify-center">
        <div class="flex flex-col justify-start space-y-2 w-16">
          <label for="sentences">{{
            sentences === 1 ? 'Satz' : 'Sätze'
          }}</label>
          <div>
            <input
              id="sentences"
              type="number"
              min="0"
              name="sentences"
              v-model.number="sentences"
              class="w-full bg-gray-100 p-2 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-red-100 focus:outline-none"
            />
          </div>
        </div>
        <div class="flex flex-col justify-start space-y-2 w-16">
          <label for="paragraphs">{{
            paragraphs === 1 ? 'Absatz' : 'Absätze'
          }}</label>
          <input
            id="paragraphs"
            type="number"
            min="0"
            name="paragraphs"
            v-model.number="paragraphs"
            class="w-full bg-gray-100 p-2 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-red-100 focus:outline-none"
          />
        </div>
      </div>
    </section>
    <section class="relative">
      <button
        class="w-full bg-red-200 mt-2 p-2 h-10 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-red-100 focus:outline-none disabled:cursor-default"
        @click="createOutput"
      >
        Mach hi!
      </button>
      <button
        v-if="isActive"
        @click="copyOutput"
        name="copy"
        title="Copy to Clipboard"
        v-tooltip.right="'Copy'"
        class="absolute -right-12 top-2 p-1 h-10 text-gray-300 bg-gray-50 border-2 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-100 rounded-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          stroke="currentcolor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
          />
        </svg>
      </button>
    </section>
  </div>

  <div class="container flex mx-auto w-3/4 md:w-1/2 p-4">
    <div
      class="bg-gray-50 w-full p-4 focus:outline-none rounded-md border-2 focus:ring-2 focus:ring-offset-2 focus:ring-red-100 rounded-sm"
      contenteditable
      v-html="output"
      v-if="isActive"
    ></div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useToast } from 'vue-toastification'
import Content from './content.json'

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)

export default {
  name: 'Lorem',
  props: {},
  setup() {
    const toast = useToast()
    return { toast }
  },
  data() {
    return {
      output: '',
      sentences: 0,
      paragraphs: 0,
      isActive: false
    }
  },
  methods: {
    createOutput(e) {
      if (sentences.value == 0 && paragraphs.value == 0) {
        this.toast.info('Musst was auswähle', {
          hideProgressBar: true
        })
        return
      }
      const items = Content.sentences
      const randSentences = []
      this.isActive = false

      if (sentences.value > 0 && !!paragraphs.value) {
        for (let i = 0; i < sentences.value; i++) {
          const idx = Math.floor(Math.random() * items.length)

          if (i === 0) {
            randSentences.push(capitalize(items[idx]))
          } else {
            randSentences.push(items[idx])
          }
        }
      } else if (paragraphs.value > 0 && !!sentences.value) {
        for (let i = 1; i < paragraphs.value * 6; i++) {
          const idx = Math.floor(Math.random() * items.length)

          if (i % 6 === 0) {
            randSentences.push('<br /><br />')
            randSentences.push(capitalize(items[idx]))
          } else if (i === 1) {
            randSentences.push(capitalize(items[idx]))
          } else {
            randSentences.push(items[idx])
          }
        }
      }
      this.sentences = 0
      this.paragraphs = 0

      if (randSentences.length > 0) {
        this.isActive = true
      }
      this.output = randSentences.join(' ')
    },
    copyOutput(e) {
      navigator.clipboard
        .writeText(this.output)
        .then(() => {
          this.toast.info('Kopiert!', {
            hideProgressBar: true
          })
        })
        .catch((err) => {
          this.toast.error('Failed to copy!')
          console.log('Something went wrong', err)
        })
    }
  }
}
</script>

<style>
.Vue-Toastification__toast--info {
  background-color: #f87171 !important;
  min-width: 185px !important;
}
</style>
