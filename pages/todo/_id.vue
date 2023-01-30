<template>
  <div class="todo-page-component">
    <h2>{{ taskText }}</h2>
  </div>
</template>

<script>
/**
 * @module pages/todo/_id.vue
 * @desc страница задачи
 * @vue-computed {String} taskText - получаем текст задачи из стора
 */
export default {
  name: 'TodoPage',
  middleware: ['todoPage'],
  computed: {
    taskText() {
      return this.$store.getters['tasks/textTask'](
        Number(this.$route.params.id)
      )
    },
  },
}
</script>
