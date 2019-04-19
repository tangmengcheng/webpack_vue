<template>
  <div>
    hello world
    {{this.$store.state.count}}
    {{this.$store.getters.count}}
    <button @click='change'>点击改变State</button>
    <button @click='asyncChange'>点击异步改变State</button>
  </div>
</template>

<script>
export default {
  methods: {
    change () {
      this.$store.commit('ADD_COUNT', 10)
    },
    asyncChange () {
      this.$store.dispatch('add', 20)
    }
  }
}
</script>

<style>
</style>

