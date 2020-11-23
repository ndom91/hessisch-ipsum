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

  <div class="output__wrapper">
    <button
      v-if="isActive"
      @click="copyOutput"
      name="copy"
      title="Copy to Clipboard"
      class="--btn"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        height="24"
        width="24"
        stroke="#666"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
        />
      </svg>
    </button>
    <div
      class="--field"
      contenteditable
      v-html="output"
      :class="{ active: isActive }"
    ></div>
  </div>
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
    return { output: '', sentences: 0, paragraphs: 0, isActive: false }
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

      console.log('sentences:', randSentences.length)
      if (randSentences.length > 0) {
        this.isActive = true
      }
      this.output = randSentences.join(' ')
    },
    copyOutput(e) {
      navigator.clipboard
        .writeText(this.output)
        .then(() => {
          // Success!
          console.log('copied!')
        })
        .catch((err) => {
          console.log('Something went wrong', err)
        })
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
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(221, 0, 0, 1) 50%,
    rgba(255, 206, 0, 1) 100%
  );

  &:active,
  &:hover,
  &:focus {
    border: 3px solid #000;
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

.output__wrapper {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  .--btn {
    height: 50px;
    width: 50px;
    margin-left: 1rem;
    background: transparent;
    border: 4px solid #ccc;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
    }
  }

  .--field {
    border-radius: 5px;
    padding: 12px;
    width: 70%;
    text-align: left;

    &.active {
      border: 4px solid #ccc;
    }
  }
}

.inputs input[type='number'] {
  height: 2em;
  width: 4em;
  margin-right: 2rem;
}
</style>
