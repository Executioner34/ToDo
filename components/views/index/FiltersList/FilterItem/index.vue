<template>
  <button class="filter-item-component" @click="setFilter">
    <div :class="['circle', { 'circle--active': isActive }]"></div>
    {{ value }}
  </button>
</template>

<script>
/**
 * @module components/views/index/FiltersList/FilterItem/index.vue
 * @desc компонент выбора фильтра для списка задач
 * @vue-prop {String} value - имя фильтра
 * @vue-data {String} selectedFilter - текущий выбранный фильтр из стора
 * @vue-computed {Boolean} isActive - совпадает ли имя фильтра компонента с выбранным фильтром приложения
 */
export default {
  name: 'FilterItem',
  props: {
    value: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    selectedFilter() {
      return this.$store.state.tasks.selectedFilter
    },
    isActive() {
      return this.selectedFilter === this.value
    },
  },
  methods: {
    /**
     * Метод записывает в стор имя фильтра
     */
    setFilter() {
      this.$store.commit('tasks/SET_SELECTED_FILTER', this.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.filter-item-component {
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  border: none;
  background-color: #ffffff;

  .circle {
    width: 10px;
    height: 10px;
    margin-right: 5px;
    border: 1px solid #bbb;
    border-radius: 50%;
    &--active {
      background-color: #337ef9;
    }
  }
}
</style>
