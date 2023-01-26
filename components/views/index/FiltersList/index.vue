<template>
  <ul class="filters-list-component">
    <radio-input
      v-for="item in filters"
      :key="item"
      v-model="activeFilter"
      :label="item"
      class="item"
    />
  </ul>
</template>

<script>
import RadioInput from '~/components/common/RadioInput/index.vue'

/**
 * @module components/views/index/FiltersList/index.vue
 * @desc компонент отображения списка радио кнопок фильтра и взаимодействия со стором
 * @vue-data {Array} filters - массив фильтров
 * @vue-data {String} activeFilter - data для выбранного фильтра из стора
 * @vue-computed {String} selectedFilter - выбранный фильтр
 */
export default {
  name: 'FiltersList',
  components: {
    RadioInput,
  },
  data() {
    return {
      activeFilter: '',
      filters: ['all', 'active', 'completed'],
    }
  },
  computed: {
    selectedFilter() {
      return this.$store.state.tasks.selectedFilter
    }
  },
  watch: {
    activeFilter(newName) {
      this.$store.commit('tasks/SET_SELECTED_FILTER', newName)
    },
  },
  mounted() {
    this.activeFilter = this.selectedFilter
  }
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
