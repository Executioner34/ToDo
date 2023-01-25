<template>
  <ul class="task-items-list-component">
    <task-item
      v-for="task in tasks"
      :id="task.id"
      :key="task.id"
      :complete="task.checked"
      :text-task="task.text"
      @toggle-complete="toggleCompleteTask(task)"
      @delete="deleteTask(task.id)"
    />
  </ul>
</template>

<script>
import TaskItem from '~/components/views/index/TaskItemsList/TaskItem/index.vue'

/**
 * @module components/views/index/TaskItemsList/index.vue
 * @desc отображает список задач и работает со стором
 * @vue-computed {Array} tasks - массив задач
 */
export default {
  name: 'TaskItemsList',
  components: {
    TaskItem,
  },
  computed: {
    tasks() {
      return this.$store.getters['tasks/filteredTasks']
    },
  },
  methods: {
    /**
     * метод получает на вход объект задачи, меняет поле checked на противоположное и
     * передает методу в сторе этот оюъект задачи.
     */
    toggleCompleteTask(task) {
      const { text, id, checked } = task
      this.$store.dispatch('tasks/pullTask', { text, id, checked: !checked })
    },
    /**
     * метод получает на вход id задачи и передает методу в сторе этот id для удаления задачи
     */
    deleteTask(id) {
      this.$store.dispatch('tasks/deleteTask', id)
    },
  },
}
</script>

<style lang="scss" scoped>
.task-items-list-component {
  width: 100%;
}
</style>
