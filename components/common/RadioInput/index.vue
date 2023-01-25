<template>
  <li class="radio-input-component">
    <input
      :id="value"
      :value="value"
      :checked="isChecked"
      type="radio"
      class="radio"
      @change="changeHandler"
    />
    <label :for="value">
      <slot />
    </label>
  </li>
</template>

<script>
/**
 * @module components/common/RadioInput/index.vue
 * @desc компонент радио кнопки
 * @vue-prop {String} current - текущий выбранный радио инпут
 * @vue-prop {String} value - значение для радио инпута
 * @vue-computed {Boolean} isChecked - вычисляемое значение для радио инпута
 * @vue-event {String} changeHandler - возвращает новое значение радио инпута
 */
export default {
  name: 'RadioInput',
  model: {
    prop: 'current',
    event: 'change',
  },
  props: {
    value: {
      type: String,
      required: false,
      default: '',
    },
    current: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    isChecked() {
      return this.current === this.value
    },
  },
  methods: {
    changeHandler(event) {
      this.$emit('change', event.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.radio-input-component {
  .radio {
    margin: 0 5px 0 0;
  }
}
</style>
