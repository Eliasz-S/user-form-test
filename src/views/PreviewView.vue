<template>
  <div class="preview">
    <div class="preview-user">
      <div class="preview-user__personal-data">Персональные данные</div>
      <div class="preview-user__user-name" v-if="userName && userAge">
        {{ userName }}, {{ userAge }} лет
      </div>
      <div class="preview-user__user-name" v-else>Данные отсутствуют</div>
    </div>
    <div class="preview-children">
      <div class="preview-children__header">Дети</div>
      <template v-if="profileDataStore.allChildren.length">
        <div
          v-for="child of profileDataStore.allChildren"
          :key="child.id"
          class="preview-children__info"
        >
          {{ child.name }}, {{ child.age }} лет
        </div>
      </template>
      <div class="preview-children__info" v-else>Данные отсутствуют</div>
    </div>
  </div>
</template>

<script setup>
import { useProfileDataStore } from '../stores/ProfileDataStore'

const profileDataStore = useProfileDataStore()

const userName = profileDataStore.userData.name
const userAge = profileDataStore.userData.age
</script>

<style scoped>
.preview {
  width: inherit;
  font-size: 16px;
}
.preview-user {
  margin-bottom: 60px;
}
.preview-user__personal-data {
  margin: 30px 0;
}
.preview-user__user-name {
  font-weight: 700;
}
.preview-children__header {
  margin-bottom: 20px;
}

.preview-children__info {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  padding: 10px 20px;
  width: fit-content;
  font-weight: 700;
  margin-bottom: 20px;
}
</style>
