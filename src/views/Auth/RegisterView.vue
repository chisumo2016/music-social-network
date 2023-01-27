<template>
 <div id="Register">
    <div class="w-full p-6 flex justify-center items-center items-center">
      <div class="w-full max-w-xs">
        <div class="bg-black p-8 shadow rounded mb-6 ">
          <h1 class="mb-6 text-lg text-gray-100 font-thin">Let's get rocking</h1>
          <div class="mb-4">
            <TextInput
                label="First Name"
                :labelColor="false"
                placeholder="John"
                v-model:input="firstName"
                inputType="text"
                :error="errors.first_name ? errors.first_name[0] : ''"
            />
          </div>
          <div class="mb-4">
            <TextInput
                label="Last Name"
                :labelColor="false"
                placeholder="Doe"
                v-model:input="lastName"
                inputType="text"
                :error="errors.last_name ? errors.last_name[0] : ''"
            />
          </div>
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
          <div class="mb-4">
            <TextInput
                label="Confirm Password"
                :labelColor="false"
                placeholder="Password123"
                v-model:input="confirmPassword"
                inputType="password"
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
              @click="register"
              type="submit">
            Register
          </button>
        </div>
        <p class="text-center text-md text-gray-900">
          Already have an account
          <router-link to="login" class="text-blue-500 no-underline hover:underline">
            Login
          </router-link>
        </p>
      </div>
    </div>
 </div>
</template>

<script setup>
import TextInput from "@/components/global/TextInput.vue";
import {ref} from "vue";
import axios from "axios";
import {useUserStore} from "@/Store/user-store";

const firstName = ref(null)
const lastName  = ref(null)
const email     = ref(null)
const password  = ref(null)
const confirmPassword = ref(null)
const errors    = ref([])
const  userStore = useUserStore()

const register = async () => {
    errors.value  = []

    try {
      let res = await axios.post('http://music-social-network-api.test/api/register',{
        first_name  :   firstName.value,
        last_name   :   lastName.value,
        email       :   email.value,
        password    :   password.value,
        password_confirmation : confirmPassword.value,
      })
      console.log(res)

      userStore.setUserDetails(res)
    }catch (e) {
      errors.value = e.response.data.errors
    }
}
</script>

<style scoped>

</style>