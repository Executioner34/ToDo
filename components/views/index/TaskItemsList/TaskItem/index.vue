<template>
  <div class="task-item-component">
    <check-box class="checkbox" :checked="complete" @click="onCheckBox" />
    <nuxt-link :to="'/todo/' + id">
      <span class="text" :class="classText">{{ textTask }}</span>
    </nuxt-link>
  </div>
</template>

<script>
import CheckBox from "~/components/CheckBox/index.vue";

/**
 * @module components/views/index/TaskItemsList/TaskItem/index.vue
 * @desc компонент задачи
 * @vue-prop {String} textTask - текст задачи
 * @vue-prop {Number} id - id задачи для роута
 * @vue-prop {Boolean} complete - выполнена или нет
 * @vue-computed {String} classText - модификатор класса для текста
 * @vue-event {Void} onCheck - эвент клика по чекбоксу
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
      default: 'Default task'
    },
    id: {
      type: String,
      required: true,
      default: '0'
    },
    complete: {
      type: Boolean,
      required: true,
      default: false,
    }
  },
  computed: {
    classText() {
      return this.complete ? 'complete' : ''
    }
  },
  methods: {
    onCheckBox() {
      this.$emit('onCheck');
    }
  }
};
</script>

<style lang="scss" scoped>
.task-item-component {
  display: flex;
  align-items: center;
  height: 30px;
  padding: 8px;

  .checkbox {
    margin-right: 12px;
  }

  .text {
    &.complete {
      text-decoration: line-through;
    }
  }
}

</style>
