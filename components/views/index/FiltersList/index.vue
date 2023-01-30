<template>
  <ul class="filters-list-component">
    <filter-item
      v-for="(filter, ind) in $options.filters"
      :key="ind"
      :value="filter"
      class="item"
    />
  </ul>
</template>

<script>
import FilterItem from '~/components/views/index/FiltersList/FilterItem/index.vue'

/**
 * @module components/views/index/FiltersList/index.vue
 * @desc компонент отображения списка радио кнопок фильтра и взаимодействия со стором
 * @vue-data {Array} filters - массив фильтров
 */
export default {
  name: 'FiltersList',
  components: {
    FilterItem,
  },
  filters: ['all', 'active', 'completed'],
}
</script>

<style lang="scss" scoped>
.filters-list-component {
  display: flex;

  .item {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
}
</style>
