<template>
  <div class="app-container-component">
    <slot/>
  </div>
</template>

<script>
/**
 * @module components/general/AppContainer/index.vue
 * @desc компонент обёртки
 */
export default {
  name: 'AppContainer',
};
</script>

<style lang="scss" scoped>
.app-container-component {
  max-width: 1366px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}

</style>
