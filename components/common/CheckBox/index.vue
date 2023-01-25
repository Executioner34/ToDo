<template>
  <input
    :checked="checked"
    class="check-box-component"
    type="checkbox"
    @change="checkBoxHandler"
  />
</template>

<script>
/**
 * @module components/common/CheckBox/index.vue
 * @desc компонент чекбокса. Просто слушает событие изменения состояния чекбокса и опеващает родителя о нем
 * @vue-prop {Boolean} checked - состояние чекбокса
 * @vue-event {Void} click - событие изменения чекбокса
 */
export default {
  name: 'CheckBox',
  props: {
    checked: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  methods: {
    checkBoxHandler() {
      this.$emit('click')
    }
  }
};
</script>

