<template>
  <div class="check-box-component">
    <template v-if="isCheckBox">
      <input :type="type" :checked="checked" @click="onClick">
    </template>

    <template v-else>
      <input
        :id="value"
        :type="type"
        :checked="checked"
        :name="value"
        class="radio"
        @click="onClick"
      >
      <label :for="value">
        <slot/>
      </label>
    </template>
  </div>
</template>

<script>
/**
 * @module components/CheckBox/index.vue
 * @desc компонент чекбокса или радио инпута в зависимости от пропса
 * @vue-prop {Boolean} checked - отмечен чекбокс или нет
 * @vue-prop {String} type - тип инпута. Checkbox или radio
 * @vue-prop {String} value - значение для радио инпута
 * @vue-computed {Boolean} isCheckBox - для условной отрисовки типа инпута
 * @vue-event {Void} onClick - событие клика по чекбоксу или радио
 */
export default {
  name: 'CheckBox',
  props: {
    checked: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      required: false,
      default: 'checkbox',
      validator: (value) => ['checkbox', 'radio'].includes(value)
    },
    value: {
      type: String,
      required: false,
      default: 'all',
    }
  },
  computed: {
    isCheckBox() {
      return this.type === 'checkbox'
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
};
</script>

<style lang="scss" scoped>
.check-box-component {
  display: flex;
  align-items: center;

  .radio {
    margin: 0 5px 0 0;
  }
}
</style>
