<template>
  <div class="box">
      <h2>The count: {{ count }}</h2>

      <p>
        <button @click="count += 20">Increment</button>
      </p>
  </div>
</template>

<script>
export default {

  data() {
    return {
      count: 0
    }
  }
}
</script>

<style>
.box {
  background: grey;
  padding: 10px;
  border: 1px solid red;
  margin-bottom: 10px;
}
</style>
