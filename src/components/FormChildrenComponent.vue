<template>
  <div class="child-info">
    <div class="child-info__input">
      <MyInput type="text" placeholder="Имя" v-model="childData.name" @input="editData" />
    </div>
    <div class="child-info__input">
      <MyInput type="text" placeholder="Возраст" v-model="childData.age" @input="editData" />
    </div>
    <a class="child-info__delete" @click.stop="deleteEntry">Удалить</a>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MyInput from './UI/MyInput.vue'

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['editChildData', 'deleteChildEntry'])

const childData = ref({
  id: props.id,
  name: '',
  age: ''
})

const editData = () => {
  emit('editChildData', childData.value)
}

const deleteEntry = () => {
  emit('deleteChildEntry', childData.value.id)
}
</script>

<style scoped>
.child-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.child-info__input {
  width: 260px;
}

.child-info__delete {
  text-decoration: none;
  color: #01a7fd;
  font-size: 14px;
  cursor: pointer;
}
</style>
