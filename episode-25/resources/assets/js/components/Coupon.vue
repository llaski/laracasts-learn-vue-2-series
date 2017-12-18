<template>
  <input type="text" :value="value" @input="updateCode($event.target.value)" ref="input">
</template>

<script>
export default {
  props: ['value'],

  data() {
    return {
      invalidCodes: [
        'ALLFREE'
      ]
    }
  },

  methods: {
    updateCode(code) {

      if (this.invalidCodes.includes(code)) {
        alert('Coupon is no longer valid')

        this.$refs.input.value = code = ''
      }

      this.$emit('input', code)
    }
  }
}
</script>
