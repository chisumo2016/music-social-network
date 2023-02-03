<template>

  <div
      v-if="post"
      class="container mx-auto max-w-4xl py-6 px-3">
    <div class="text-gray-900 text-xl">Post By  /  {{ post.id}}</div>
    <div class="bg-green-500 w-full h-1 mb-4"></div>
<!--    https://via.placeholder.com/50-->
    <div class="mx-auto">
      <div class="my-4">
        <div class="flex  items-center py-2">
          <img :src="userStore.userImage(post.user.image)" class="rounded-full" width="50">
          <div class="ml-2 font-bold text-2xl">{{ post.user.first_name }}  {{ post.user.last_name }}</div>
        </div>
          <img :src="postStore.postImage(post.image)" alt="" class="w-full">
        <div class="p-4">
          <p class="text-3xl font-bold hover:text-gray-700 pb-4">{{ post.title}}</p>
          <p class="p-2 text-lg">Event Location : {{ post.location}} </p>
          <p class="pb-6">
            {{ post.user.description }}
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>

import {onMounted, ref} from "vue";
import axios from "axios";
import {useRoute} from "vue-router";
import {usePostStore} from "@/Store/post-store";
import {useUserStore} from "@/Store/user-store";

const route = useRoute()
const postStore = usePostStore()
const userStore = useUserStore()
let post = ref(null)

onMounted(async  () =>{
  await getPostById()
})
const getPostById = async () =>{
  try {
    let res = await axios.get('http://music-social-network-api.test/api/posts/' + route.params.id)
    post.value = res.data
  }catch (e) {
    console.log(e)
  }
}
</script>

<style scoped>

</style>