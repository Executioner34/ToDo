<template>
  <input
    v-model="checked"
    class="check-box-component"
    type="checkbox"
    @click.stop="checkBoxHandler"
  />
</template>

<script>
/**
 * @module components/common/CheckBox/index.vue
 * @desc компонент чекбокса. Просто слушает событие изменения состояния чекбокса и опеващает родителя о нем
 * @vue-prop {Boolean} value - состояние чекбокса
 * @vue-data {Boolean} checked - состояние чекбокса
 * @vue-event {Boolean} update-checkbox - событие изменения чекбокса
 */
export default {
  name: 'CheckBox',
  props: {
    value: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      checked: false,
    }
  },
  mounted() {
    this.checked = this.value
  },
  methods: {
    checkBoxHandler() {
      this.$emit('update-checkbox', this.checked)
    },
  },
}
</script>
