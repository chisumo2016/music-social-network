<template>
  <label class="block uppercase tracking-wide text-gray-900 text-sm font-bold">{{ label}}</label>
      <div>
        <button
            @click="$emit('showModal', true)"
            class="
             mt-2
             inline-block
             bg-green-700
             hover:bg-green-700
             font-bold
             text-white
             no-underline
             px-4
             py-3
              ">
          {{btnText}}
        </button>
      </div>
</template>

<script setup>
import {defineProps, toRefs} from 'vue';

const props = defineProps({ btnText : String ,label:String})
const {btnText ,label} = toRefs(props);

</script>

<style scoped>

</style>