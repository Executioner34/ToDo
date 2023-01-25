<template>
  <ul class="filters-list-component">
    <radio-input
      v-for="item in filters"
      :key="item"
      v-model="selectedFilter"
      :value="item"
      class="item"
    >
      {{ item }}
    </radio-input>
  </ul>
</template>

<script>
import RadioInput from '~/components/common/RadioInput/index.vue'

/**
 * @module components/views/index/FiltersList/index.vue
 * @desc компонент отображения списка радио кнопок фильтра и взаимодействия со стором
 * @vue-data {Array} filters - массив фильтров
 * @vue-data {String} selectedFilter - выбранный фильтр
 */
export default {
  name: 'FiltersList',
  components: {
    RadioInput,
  },
  data() {
    return {
      selectedFilter: 'all',
      filters: ['all', 'active', 'completed'],
    }
  },
  watch: {
    selectedFilter: function (newName, oldName) {
      this.selectedFilter = newName
      this.$store.commit('tasks/SET_SELECTED_FILTER', newName)
    },
  },
  mounted() {
    this.$store.commit('tasks/SET_SELECTED_FILTER', this.selectedFilter)
  },
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
