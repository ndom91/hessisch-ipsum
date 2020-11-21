<template>
  <button :disabled="disabled" class="btn-child" @click="handleClick">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    text: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, ctx) {
    const { disabled } = props
    const { emit } = ctx
    const handleClick = () => {
      !disabled && emit('onClick')
    }
    return {
      handleClick
    }
  }
}
</script>

<style>
.btn-child {
  margin-top: 30px;
  padding: 3px 10px;
  border: 1px solid #bfbfbf;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
}
.btn-child:active,
.btn-child:focus {
  border: 1px solid #00a073;
}
</style>
