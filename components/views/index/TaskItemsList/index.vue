<template>
  <ul class="task-items-list-component">
    <li v-for="task in tasks" :key="task.id">
      <task-item
        :id="IDToString(task.id)"
        :complete="task.checked"
        :text-task="task.text"
        @onCheck="onCheckTask(task)"
      />
    </li>
  </ul>
</template>

<script>
import TaskItem from "~/components/views/index/TaskItemsList/TaskItem/index.vue";

/**
 * @module components/views/index/TaskItemsList/index.vue
 * @desc отображает список задач и работает со стором
 * @vue-computed {Array} tasks - массив задач
 */
export default {
  name: 'TaskItemsList',
  components: {
    TaskItem
  },
  computed: {
    tasks() {
      return this.$store.getters["tasks/filteredTask"]
    },
  },
  methods: {
    IDToString(num) {
      return String(num)
    },
    onCheckTask(task) {
      const {text, id, checked} = task
      this.$store.dispatch('tasks/pullTask', {text, id, checked: !checked})
    }
  }
};
</script>

