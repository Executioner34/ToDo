<template>
  <ul class="filters-list-component">
    <li v-for="(item, ind) in filters" :key="ind" class="item">
      <check-box
        :value="item.name"
        :checked="activeFilter === item.name"
        type="radio"
        @click="onChange(item.name)"
      >
        {{item.name}}
      </check-box>
    </li>
  </ul>
</template>

<script>
import CheckBox from "~/components/CheckBox/index.vue";

/**
 * @module components/views/index/FiltersList/index.vue
 * @desc компонент отображения списка радио кнопок фильтра и взаимодействия со стором
 * @vue-data {String} activeFilter - какая радио кнопка активная
 * @vue-data {Array} filters - массив фильтров
 */
export default {
  name: 'FiltersList',
  components: {
    CheckBox
  },
  data() {
    return {
      activeFilter: 'all',
      filters: [
        {
          name: 'all',
          checked: true,
        },
        {
          name: 'active',
          checked: false,
        },
        {
          name: 'completed',
          checked: false,
        }
      ]
    }
  },
  mounted() {
    this.$store.commit('tasks/SET_CURRENT_FILTER', this.activeFilter)
  },
  methods: {
    onChange(name) {
      this.activeFilter = name;
      this.$store.commit('tasks/SET_CURRENT_FILTER', name)
    }
  },
};
</script>

<style lang="scss" scoped>
.filters-list-component {
  display: flex;

  .item:not(:last-child) {
    margin-right: 10px;
  }
}

</style>
