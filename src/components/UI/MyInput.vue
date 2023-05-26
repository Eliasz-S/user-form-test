<template>
  <input class="input" v-model="value" />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
    default: ''
  }
})
const emit = defineEmits(['update:modelValue'])
const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<style scoped>
.input {
  width: 100%;
  height: 56px;
  border: 1px solid #f1f1f1;
  margin: 10px 0;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 10px;
  font-size: 14px;
}
.input:focus {
  outline: 2px solid rgb(207, 50, 207);
  border: none;
}
</style>
