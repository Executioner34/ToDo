<template>
  <li class="radio-input-component">
    <input
      :id="label"
      v-model="model"
      :value="label"
      type="radio"
      class="radio"
      @change="handleChange"
    />
    <label :for="label">
      {{ label }}
    </label>
  </li>
</template>

<script>
/**
 * @module components/common/RadioInput/index.vue
 * @desc компонент радио кнопки
 * @vue-prop {String} checked - пропс для v-model родителя
 * @vue-prop {String} label - значение для радио инпута
 * @vue-data {String} model - текущий выбранный радио инпут
 * @vue-event {String} changeHandler - возвращает новое значение радио инпута
 */
export default {
  name: 'RadioInput',
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    label: {
      type: String,
      required: false,
      default: '',
    },
    checked: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      model: ''
    }
  },
  watch: {
    checked(newValue) {
      this.model = newValue
    }
  },
  mounted() {
    this.model = this.checked
  },
  methods: {
    handleChange() {
      this.$emit('change', this.model)
    }
  }
}
</script>

<style lang="scss" scoped>
.radio-input-component {
  .radio {
    margin: 0 5px 0 0;
  }
}
</style>
