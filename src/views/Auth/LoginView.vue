<template>
  <div id="Register">
    <div class="w-full p-6 flex justify-center items-center items-center">
      <div class="w-full max-w-xs">
        <div class="bg-black p-8 shadow rounded mb-6 ">
          <h1 class="mb-6 text-lg text-gray-100 font-thin">Let's get rocking</h1>
          <div class="mb-4">
            <TextInput
                label="Email"
                :labelColor="false"
                placeholder="doe@gmail.com"
                v-model:input="email"
                inputType="text"
                :error="errors.email ? errors.email[0] : ''"
            />
          </div>
          <div class="mb-4">
            <TextInput
                label="Password"
                :labelColor="false"
                placeholder="Password123"
                v-model:input="password"
                inputType="password"
                :error="errors.password ? errors.password[0] : ''"
            />
          </div>
          <button
              class="
            block
            w-full
            bg-green-500
            text-white
             rounded-sm
             py-3
             text-sm
             tracking-wide"
              @click="login"
              type="submit">
            Login
          </button>
        </div>
        <p class="text-center text-md text-gray-900">
          Don't have an account yet
          <router-link to="register" class="text-blue-500 no-underline hover:underline">
            Register
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import TextInput from "@/components/global/TextInput.vue";//../
import {ref} from "vue";
import axios from  "axios"
import {useUserStore} from "@/Store/user-store"; //../
import {useProfileStore} from "@/Store/profile-store"; //../
import {useSongStore} from "@/Store/song-store"; //../
import {usePostStore} from "@/Store/post-store"; //../
import {useVideoStore} from "@/Store/video-store";
import {useRouter} from "vue-router"; //../


const email   = ref(null)
const password = ref(null)
const errors = ref([])

const userStore = useUserStore()
const profileStore = useProfileStore()
const songStore = useSongStore()
const postStore = usePostStore()
const videoStore = useVideoStore()
const router = useRouter()

const login = async  () => {
    errors.value = []

  try {
      let res = await axios.post('http://music-social-network-api.test/api/login',{
      //let res = await axios.post('api/login',{
          email: email.value,
          password: password.value
      })
      console.log(res)

    userStore.setUserDetails(res)
    await profileStore.fetchProfileById(userStore.id)
    await songStore.fetchSongsByUserId(userStore.id)
    await postStore.fetchPostsByUserId(userStore.id)
    await videoStore.fetchVideosByUserId(userStore.id)

    router.push('account/profile/' + userStore.id)

  }catch (e) {
    errors.value = e.response.data.errors
  }
}

</script>

<style scoped>

</style>