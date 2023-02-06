<template>
  <div class="w-full bg-black text-gray-100">
     <div class="
            container
            mx-auto
            max-w-4xl
            h-full
            flex-wrap
            justify-between
            items-start
            text-sm
            p-6
            pt-8
            pb-4">
       <div class="mb-4">
         <div class="mb-4 tp">
           Quick Links
         </div>
         <router-link to="/" class="block mb-2">Home</router-link>
         <router-link to="/login" class="block mb-2">Login</router-link>
         <router-link to="/register" class="block mb-2">Register</router-link>
       </div>
       <div class="mb-4">
         <div class="mb-4 text-lg underline">
           About our Company
         </div>
         <p class="leading-normal">
            234 Main Street <br>
            Reading<br>
            RG1 RG1
         </p>
         <p class="text-sm">06444 6464 3454</p>
       </div>
     </div>
    <div class="
            container
            mx-auto
            max-w-4xl
            h-full
            flex-wrap
            justify-between
            items-center
            text-sm
            py-6
            pl-6
            pr-4
         ">
        <div  class="mt-4">  &copy;2023 MSN Company . All rights reserved .</div>
<!--      pt-4 md:p-0 text-center md:text-right text-sm-->
      <div class="pt-4 md:p-0 text-right text-sm">
        <div class="no-underline hover:underline ml-4">Privacy Policy</div>
        <div class="no-underline hover:underline ml-4">Terms & Conditions</div>
        <div class="no-underline hover:underline ml-4">Contact Us</div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>

</style>