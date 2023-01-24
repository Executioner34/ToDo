<template>
  <div class="default-layout-component">
    <nuxt />
  </div>
</template>

<script>
/**
 * @module layouts/default.vue
 * @desc обёртка по умолчанию
 */
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="scss" scoped>
.default-layout-component {
  max-width: 1366px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}
</style>
