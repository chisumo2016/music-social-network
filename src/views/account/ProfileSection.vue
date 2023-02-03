<template>
<div class="container max-w-4xl mx-auto flex mt-10">
  <div class="w-1/3">
    <img
        class="w-full rounded-lg h-auto shadow-lg"
        :src="userStore.image"
        alt="Profile Pic"
    >
  </div>
  <div class="w-full pl-4">
    <div class="flex">
      <div class="w-1/2">
        <h1
            class="text-2xl md:text-4xl text-left text-gray-900">
          {{profileStore.firsName }} {{profileStore.lastName }}
        </h1>
        <span class="text-md text-gray-700">
          <i><b>{{profileStore.location }}</b></i>
        </span>
      </div>
      <div class="w-1/2 mt-1" v-if="userStore.id == route.params.id">
        <RouterLinkButton
            btnText="Edit Profile"
            color="green"
            url="/account/edit-profile"
        />
      </div>
    </div>
    <ProfileInfoSection/>
    <ProfileAboutSection/>
  </div>
</div>
  <SongSections/>
  <YoutubeVideosSection/>
  <PostsSection/>
</template>
<script setup>

import ProfileInfoSection from "@/components/partials/profile/ProfileInfoSection.vue";//../..
import ProfileAboutSection from "@/components/partials/profile/ProfileAboutSection";
import RouterLinkButton from "@/components/global/RouterLinkButton";
import SongSections from "@/components/partials/profile/SongSections";
import YoutubeVideosSection from "@/components/partials/profile/YoutubeVideosSection";
import PostsSection from "@/components/partials/profile/PostsSection";
import {useUserStore} from "@/Store/user-store";
import {useProfileStore} from "@/Store/profile-store";
import {onMounted} from "vue";
import {useRoute} from "vue-router";

const userStore = useUserStore()
const profileStore = useProfileStore()

const route = useRoute()

onMounted(async () =>{
  await profileStore.fetchProfileById(route.params.id)
})
</script>

<style scoped>

</style>