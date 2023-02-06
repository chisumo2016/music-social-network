<template>
  <div>
    <div class="mx-auto py-4">
      <div class="flex flex-wrap font-bold text-gray-100">
        <div class="text-gray-900 text-xl">Songs</div>
        <div class="bg-green-500 w-full h-1"></div>

        <div
            v-if="userStore.id == route.params.id"
            class="w-full mt-4">
          <RouterLinkButton
              class="ml-3"
              btnText="Delete Song"
              color="red"
              url="/account/delete-song"
          />
          <RouterLinkButton
              btnText="Add Song"
              color="green"
              url="/account/add-song"
          />
        </div>
      </div>
    </div>
    <div class="pb-4">
      <SongPlayer/>
    </div>
  </div>
</template>

<script setup>
import RouterLinkButton from "@/components/global/RouterLinkButton";
import SongPlayer from "@/components/partials/profile/SongPlayer";
import {useUserStore} from "@/Store/user-store";
import {useRoute} from "vue-router";

import {onMounted} from "vue";
import {useSongStore} from "@/Store/song-store"; //../../../s

const userStore = useUserStore()
const songStore = useSongStore()
const route =useRoute()

onMounted(async () =>{
  await songStore.fetchVideosByUserId(route.params.id)
})
</script>

<style scoped>

</style>