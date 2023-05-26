import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProfileDataStore = defineStore('profileDataStore', () => {
  const userData = ref({})

  const allChildren = ref([])

  return { userData, allChildren }
})
