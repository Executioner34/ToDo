<template>
  <input
    v-model="text"
    type="text"
    placeholder="Введите текст"
    class="add-task-component"
    @keyup.enter="addTask"
  />
</template>

<script>
/**
 * @module components/views/index/AddTask/index.vue
 * @desc компонент отображения поля ввода и взаимодействия со стором
 * @vue-data {String} text - текст поля инпута
 * @vue-computed {Number} freeID - свободный id для новой задачи
 */
export default {
  name: 'AddTask',
  data() {
    return {
      text: '',
    }
  },
  computed: {
    freeID() {
      return this.$store.state.tasks.nextFreeID
    },
  },
  methods: {
    /**
     * Метод создает объект задачи с текстом, уникальным индификатором и состоянием отметки этой задачи.
     * После этого эту задачу передаем методу стора для добавления её в массив задач
     */
    addTask() {
      const task = {
        text: this.text,
        id: this.freeID,
        checked: false,
      }
      this.text = ''
      this.$store.dispatch('tasks/postTask', task)
    },
  },
}
</script>
