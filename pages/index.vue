<template>
  <div class="index-page-component">
  </div>
</template>

<script>

/**
 * @module pages/index.vue
 * @desc главная страница
 */
export default {
  name: 'IndexPage',
  mounted() {
    this.$store.dispatch('tasks/getTasks')
  },

}
</script>

<style lang="scss" scoped>
.index-page-component {

}
</style>
