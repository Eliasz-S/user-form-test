<template>
  <div class="form">
    <h2 class="form__h2">Персональные данные</h2>
    <MyInput type="text" placeholder="Имя" v-model="userData.name" />
    <MyInput type="text" placeholder="Возраст" v-model="userData.age" />
    <div class="add">
      <div class="add__text">
        <h4>Дети (макс. 5)</h4>
      </div>
      <div class="add__button">
        <MyAddButton v-if="childrenData.length < 5" @click="addChildEntry">
          <span class="add__plus">+</span> Добавить ребенка
        </MyAddButton>
      </div>
    </div>
    <template v-if="childrenData.length">
      <FormChildrenComponent
        v-for="child of childrenData"
        :key="child.id"
        :id="child.id"
        @edit-child-data="editChildData"
        @delete-child-entry="deleteChildEntry"
      />
    </template>
    <div class="save-button">
      <MySaveButton @click="saveData">Сохранить</MySaveButton>
    </div>
  </div>
</template>

<script setup>
import MyInput from '@/components/UI/MyInput.vue'
import MyAddButton from '@/components/UI/MyAddButton.vue'
import MySaveButton from '@/components/UI/MySaveButton.vue'
import FormChildrenComponent from '@/components/FormChildrenComponent.vue'
import { ref } from 'vue'
import { useProfileDataStore } from '../stores/ProfileDataStore.js'

const profileDataStore = useProfileDataStore()

const userData = ref({
  name: '',
  age: ''
})

const childrenData = ref([])

const addChildEntry = () => {
  const newChild = {
    id: Date.now(),
    name: '',
    age: ''
  }
  childrenData.value.push(newChild)
}

const editChildData = (data) => {
  const childDataToEdit = childrenData.value.find((child) => child.id === data.id)
  Object.assign(childDataToEdit, data)
}

const deleteChildEntry = (id) => {
  childrenData.value = childrenData.value.filter((child) => child.id !== id)
}

const saveData = () => {
  profileDataStore.userData = { ...userData.value }

  const childrenToAdd = childrenData.value.filter((child) => child.name.length && child.age.length)
  profileDataStore.allChildren = childrenToAdd

  userData.value = {
    name: '',
    age: ''
  }
  childrenData.value = []
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.form__h2 {
  margin: 20px 0;
}

.add {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
}

.add__plus {
  font-size: 30px;
}

.add__button {
  width: 200px;
}

.save-button {
  width: 120px;
}
</style>
