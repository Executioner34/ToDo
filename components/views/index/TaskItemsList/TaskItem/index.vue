<template>
  <li class="task-item-component">
    <nuxt-link :to="path" class="link">
      <check-box
        :value="complete"
        class="checkbox"
        @update-checkbox="checkBoxHandler"
      />
      <span :class="['text', { 'text--complete': isCompleted }]">{{
        textTask
      }}</span>
      <button type="button" class="btn" @click.self.prevent="deleteHandler">
        ❌
      </button>
    </nuxt-link>
  </li>
</template>

<script>
import CheckBox from '~/components/common/CheckBox/index.vue'

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
    CheckBox,
  },
  props: {
    textTask: {
      type: String,
      required: true,
      default: 'Default task',
    },
    id: {
      type: Number,
      required: true,
      default: 0,
    },
    complete: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    isCompleted() {
      return this.complete ? 'complete' : ''
    },
    path() {
      return '/todo/' + this.id
    },
  },
  methods: {
    checkBoxHandler(value) {
      const data = {
        text: this.textTask,
        id: this.id,
        checked: value,
      }
      this.$emit('toggle-complete', data)
    },
    deleteHandler() {
      this.$emit('delete', this.id)
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
    &--complete {
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
