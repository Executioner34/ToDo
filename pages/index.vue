<template>
  <div class="index-page-component">
    <add-task class="add" />
    <task-items-list class="items-list" />
    <filters-list class="filters" />
  </div>
</template>

<script>
import TaskItemsList from '~/components/views/index/TaskItemsList/index.vue'
import AddTask from '~/components/views/index/AddTask/index.vue'
import FiltersList from '~/components/views/index/FiltersList/index.vue'

/**
 * @module pages/index.vue
 * @desc главная страница
 */
export default {
  name: 'IndexPage',
  components: {
    FiltersList,
    AddTask,
    TaskItemsList,
  },
  /**
   * При mounted хуке запускаем метод стора для получения массива задач
   */
  mounted() {
    this.$store.dispatch('tasks/getTasks')
  },
}
</script>

<style lang="scss" scoped>
.index-page-component {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 10px;
  border: 1px solid #bbb;
  border-radius: 5px;

  .add,
  .items-list {
    margin-bottom: 20px;
  }
}
</style>
