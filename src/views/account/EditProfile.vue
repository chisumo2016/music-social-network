<template>

  <div id="EditProfile" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">
    <div class="text-gray-900 text-xl">Edit Profile </div>
    <div class="bg-green-500 w-full h-1"></div>
    <CropperModal
      v-if="showModal"
      :minAspectRatioProp="{width: 8, height: 8}"
      :maxAspectRatioProp="{width: 8, height:8}"
      @croppedImageData="setCroppedImageData"
      @showModal="showModal = false"
    />
    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <TextInput
            label="First Name"
            placeholder="John"
            v-model:input="firstName"
            inputType="text"
            :error="errors.first_name ? errors.first_name[0] : ''"
        />
      </div>
      <div class="w-full md:w-1/2 px-3">
        <TextInput
            label="Last Name"
            placeholder="Doe"
            v-model:input="lastName"
            inputType="text"
            :error="errors.last_name ? errors.last_name[0] : ''"
        />
      </div>
    </div>
    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <TextInput
            label="Location"
            placeholder="Reading"
            v-model:input="location"
            inputType="text"
            :error="errors.location ? errors.location[0] : ''"
        />
      </div>
    </div>
    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <DisplayCropperButton
            label="Profile Image"
            btnText="Update Profile Image"
            @showModal ="showModal = true"
        />
      </div>
    </div>

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <CroppedImage
            label="Cropped Image"
            :image="'http://music-social-network-api.test/images/users/' + image"
        />
      </div>
    </div>
    {{ 'http://music-social-network-api.test/images/users/' + image }}
    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full  px-3">
        <TextArea
            label="Description"
            placeholder="Please enter some information here"
            v-model:description="description"
            :error="errors.description ? errors.description[0] : ''"
        />
      </div>
    </div>
    <div class="flex flex-wrap mt-8 mb-6">
      <div class="w-full px-3">
        <SubmitFormButton
            btnText="Update Profile"
            @click="updateUser"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import TextInput from "@/components/global/TextInput";
import {onMounted, ref} from "vue";
import DisplayCropperButton from "@/components/global/DisplayCropperButton";
import TextArea from "@/components/global/TextArea";
import SubmitFormButton from "@/components/global/SubmitFormButton";
import CropperModal from "@/components/global/CropperModal";
import CroppedImage from "@/components/global/CroppedImage";
//import { useProfileStore } from "@/Store/profile/profile-store";
import { useUserStore } from "@/Store/user-store";
import axios from "axios";
import {useRouter} from "vue-router";
//import router from "@/router";

const firstName = ref(null);
const lastName = ref(null);
const location = ref(null);
const description = ref(null);
const showModal = ref(false)
let imageData = null
let   image = ref(null)
const  errors = ref([])

const router = useRouter()
//const profileStore = useProfileStore()
const userStore = useUserStore()


onMounted(() => {
    firstName.value  = userStore.firstName    || null
    lastName.value   = userStore.lastName     || null
    location.value   = userStore.location     || null
    description.value = userStore.description || null
     image.value = userStore.image || null
})

const setCroppedImageData = (data) =>{
  imageData = data
  image.value = data.imageUrl
}

const updateUser = async () =>{
  errors.value = []

  /**Form Data Object*/
  let data = new FormData() ;

  data.append('first_name' , firstName.value || '')
  data.append('last_name' ,  lastName.value || '')
  data.append('location' ,    location.value || '')
  data.append('description' , description.value || '')

  if(imageData){
    data.append('image' , imageData.file || '')
    data.append('height' ,imageData.height || '')
    data.append('width' , imageData.width || '')
    data.append('left' ,  imageData.left || '')
    data.append('top' ,   imageData.top || '')
  }

  //console.log(data)
  try {
      await axios.post('users/' + userStore.id  + '?_method=PUT', data)

      await userStore.fetchUser()

       router.push('/account/profile/')

  }catch (e) {
    errors.value = e.response.data.errors;
  }
}
</script>

<style scoped>
</style>