<template>
  <input
    v-model="model"
    class="check-box-component"
    type="checkbox"
    @click.stop="checkBoxHandler"
  />
</template>

<script>
/**
 * @module components/common/CheckBox/index.vue
 * @desc компонент чекбокса. Просто слушает событие изменения состояния чекбокса и опеващает родителя о нем
 * @vue-prop {Boolean} checked - состояние чекбокса
 * @vue-data {Boolean} model - состояние чекбокса
 * @vue-event {Boolean} update-checkbox - событие изменения чекбокса
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
  data() {
    return {
      model: false,
    }
  },
  mounted() {
    this.model = this.checked
  },
  methods: {
    checkBoxHandler(ev) {
      this.$emit('update-checkbox', ev.target.checked)
    }
  },
};
</script>

