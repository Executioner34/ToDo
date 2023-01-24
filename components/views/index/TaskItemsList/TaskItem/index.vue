<template>
  <li class="task-item-component">
    <a class="link" @click="onLink">
      <button ref="toggle" class="btn btn--complete" @click="toggleHandler">
        {{ iconButton }}
      </button>
      <span class="text" :class="classText">{{ textTask }}</span>
      <button ref="delete" class="btn" @click="deleteHandler">❌</button>
    </a>
  </li>
</template>

<script>
/**
 * @module components/views/index/TaskItemsList/TaskItem/index.vue
 * @desc компонент задачи
 * @vue-prop {String} textTask - текст задачи
 * @vue-prop {Number} id - id задачи для роута
 * @vue-prop {Boolean} complete - выполнена или нет
 * @vue-computed {String} classText - модификатор класса для текста
 * @vue-computed {String} iconButton - иконка для кнопки
 * @vue-event {Void} toggle-complete - эвент клика по кнопке переключения статуса задачи
 * @vue-event {Void} delete - эвент клика по кнопке удаления задачи
 */
export default {
  name: 'TaskItem',
  props: {
    textTask: {
      type: String,
      required: true,
      default: 'Default task',
    },
    id: {
      type: String,
      required: true,
      default: '0',
    },
    complete: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    classText() {
      return this.complete ? 'complete' : ''
    },
    iconButton() {
      return this.complete ? '✅' : '⬜'
    },
  },
  methods: {
    onLink(event) {
      const isAnyButton =
        event.target === this.$refs.button || event.target === this.$refs.toggle
      if (isAnyButton) {
        return
      }
      this.$router.push(`/todo/${this.id}`)
    },
    toggleHandler() {
      this.$emit('toggle-complete')
    },
    deleteHandler() {
      this.$emit('delete')
    },
  },
}
</script>

<style lang="scss" scoped>
.task-item-component {
  .link {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 10px;
    cursor: pointer;
  }

  .text {
    flex-grow: 1;
    &.complete {
      text-decoration: line-through;
    }
  }

  .btn {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: none;
    background-color: #fff;
    &--complete {
      margin-right: 10px;
    }
  }
}
</style>
