import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  actions: {
    login(userData: any) {
      userData.fullName = `${userData.lastName} ${userData.firstName}`
      this.user = userData
    },
    logout() {
      this.user = null
    }
  }
})
