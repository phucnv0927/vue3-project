<template>
  <admin-layout>
    <PageBreadcrumb :pageTitle="currentPageTitle" />

    <div
      class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6"
    >
      <h3 class="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">Profile</h3>
      <profile-card :user="user" />
      <personal-info-card :user="user" @save="saveProfile" />
      <address-card />
    </div>
  </admin-layout>
</template>

<script setup>
import AdminLayout from '@/components/layout/AdminLayout.vue'
import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue'
import { ref, onBeforeMount } from 'vue'
import ProfileCard from '@/components/profile/ProfileCard.vue'
import PersonalInfoCard from '@/components/profile/PersonalInfoCard.vue'
import AddressCard from '@/components/profile/AddressCard.vue'
import { authApi } from '@/api/auth'

const currentPageTitle = ref('User Profile')
const user = ref({})

onBeforeMount(async () => {
  // Fetch user data
  const response = await authApi.getProfile()
  user.value = response
})

const saveProfile = async (data) => {
  console.log(data)
}
</script>
