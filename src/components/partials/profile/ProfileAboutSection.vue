<template>
  <div class="py-2 ">
    <p class="text-gray-900 text-lg">About Me</p>
    <p class="text-md md:text-lg text-gray-600 leading-normal">
      {{ profileStore.description}}
    </p>
  </div>
</template>

<script setup>
//import {useUserStore} from "@/Store/user-store"; //../.../.../
//const userStore = useUserStore()
import {useProfileStore} from "@/Store/profile-store";

const profileStore = useProfileStore()
</script>

<style scoped>

</style>