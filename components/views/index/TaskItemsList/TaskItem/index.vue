<template>
  <li class="task-item-component">
    <nuxt-link :to="path" class="link">
      <button class="btn btn--complete" @click.stop.prevent="toggleHandler">
        {{ iconButton }}
      </button>
      <span class="text" :class="classText">{{ textTask }}</span>
      <button ref="delete" class="btn" @click.stop.prevent="deleteHandler">❌</button>
    </nuxt-link>
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
 * @vue-computed {String} path - динамический путь до страницы задачи
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
    path() {
      return '/todo/' + this.id
    }
  },
  methods: {
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
