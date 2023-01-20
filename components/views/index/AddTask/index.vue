<template>
  <div class="add-task-component">
    <the-input @onEnter="addTask" />
  </div>
</template>

<script>
import TheInput from "~/components/TheInput/index.vue";

/**
 * @module components/views/index/AddTask/index.vue
 * @desc компонент отображения поля ввода и взаимодействия со стором
 * @vue-computed {Number} lastID - id последней задачи
 */
export default {
  name: 'AddTask',
  components: {
    TheInput
  },
  computed: {
    lastID() {
      return this.$store.state.tasks.taskCounter
    }
  },
  methods: {
    addTask(text) {
      const task = {
        text,
        id: this.lastID,
        checked: false,
      }
      this.$store.dispatch('tasks/postTask', task)
    }
  }
};
</script>
