<template>
  <input
    v-model="data"
    type="text"
    :placeholder="placeholder"
    class="the-input-component"
    @keyup.enter="onEnter"
  >
</template>

<script>
/**
 * @module components/TheInput/index.vue
 * @desc компонент поля ввода
 * @vue-prop {String} placeholder - placeholder для инпута
 * @vue-data {String} data - текст поля инпута
 * @vue-event {String} onEnter - возвращает введенный текст по нажатию клавиши Enter
 */
export default {
  name: 'TheInput',
  props: {
    placeholder: {
      type: String,
      required: false,
      default: 'Введите текст'
    }
  },
  data() {
    return {
      data: '',
    }
  },
  methods: {
    onEnter() {
      this.$emit('onEnter', this.data)
      this.data = ''
    }
  }
};
</script>

