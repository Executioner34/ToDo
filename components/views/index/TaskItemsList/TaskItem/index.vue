<template>
  <li class="task-item-component">
    <nuxt-link :to="path" class="link">
      <check-box :checked="complete" class="checkbox" @click.native.stop="checkBoxHandler"/>
      <span class="text" :class="classText">{{ textTask }}</span>
      <button ref="delete" class="btn" @click.stop.prevent="deleteHandler">❌</button>
    </nuxt-link>
  </li>
</template>

<script>
import CheckBox from "~/components/common/CheckBox/index.vue";

/**
 * @module components/views/index/TaskItemsList/TaskItem/index.vue
 * @desc компонент задачи
 * @vue-prop {String} textTask - текст задачи
 * @vue-prop {Number} id - id задачи для роута
 * @vue-prop {Boolean} complete - выполнена или нет
 * @vue-computed {String} classText - модификатор класса для текста
 * @vue-computed {String} path - динамический путь до страницы задачи
 * @vue-event {Void} checkBoxHandler - эвент изменения статуса задачи
 * @vue-event {Void} delete - эвент клика по кнопке удаления задачи
 */
export default {
  name: 'TaskItem',
  components: {
    CheckBox
  },
  props: {
    textTask: {
      type: String,
      required: true,
      default: 'Default task',
    },
    id: {
      type: String,
      required: true,
      default: '',
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
    path() {
      return '/todo/' + this.id
    }
  },
  methods: {
    checkBoxHandler() {
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

  .checkbox {
    margin-right: 10px;
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
  }
}
</style>
