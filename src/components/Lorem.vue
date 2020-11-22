<template>
  <div class="inputs">
    <section class="__selection">
      <h3>Was willsten?</h3>
      <div class="--wrapper">
        <label for="sentences">Sentences</label>
        <div>
          <input
            id="sentences"
            type="number"
            min="0"
            name="sentences"
            v-model.number="sentences"
          />
        </div>
        <div>
          <label for="paragraphs">Paragraphs</label>
          <input
            id="paragraphs"
            type="number"
            min="0"
            name="paragraphs"
            v-model.number="paragraphs"
          />
        </div>
      </div>
    </section>
    <section>
      <button :disabled="disabled" class="btn-child" @click="createOutput">
        Generate
      </button>
    </section>
  </div>
  <div class="output" contenteditable v-html="output"></div>
</template>

<script>
import { ref, computed } from 'vue'
import Content from './content.json'

// // After you create app
// window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)

export default {
  name: 'Lorem',
  props: {},
  data() {
    return { output: '' }
  },
  methods: {
    createOutput(e) {
      const items = Content.sentences
      const randSentences = []

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

      console.log('r', randSentences.join(' '))

      this.output = randSentences.join(' ')
    }
  }
}
</script>

<style lang="scss">
.btn-child {
  padding: 10px 20px;
  margin-top: 2rem;
  width: 15rem;
  border: 3px solid #bfbfbf;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition: all 250ms ease-in-out;
  background-color: #fff;

  &:active,
  &:hover,
  &:focus {
    border: 3px solid #00a073;
  }
}

.inputs {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
  max-width: 960px;
  width: 100%;

  .__selection {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .--wrapper {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
}
#sentences,
#paragraphs {
  margin-left: 0.5rem;
}
.inputs input[type='number'] {
  height: 2em;
  width: 4em;
  margin-right: 2rem;
}
.output {
  margin-top: 4rem;
  padding: 12px;
  width: 70%;
  text-align: left;
}
</style>
