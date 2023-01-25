<template>
  <label class="block uppercase tracking-wide text-gray-900 text-sm font-bold">{{ label}}</label>
  <textarea
      v-model="descriptionComputed"
      :placeholder="placeholder"
      class="
          appearance-none
             block
             w-full
             bg-white
             text-gray-700
             border
             border-gray-400
             rounded
             py-3
             px-4
             leading-tight
             focus:outline-none
             focus:bg-white
             focus:border-gray-500
          "
      cols="30" rows="10">
  </textarea>
  <span v-if="error" class="text-red-500">{{ error}}</span>
</template>

<script setup>
import {computed, defineProps, defineEmits, toRefs} from 'vue';

const  emit = defineEmits(['update:description'])
const props = defineProps({
  label:String,
  description: String,
  placeholder:{type: String, default:''},
  error: String
})
const {label,description,error,placeholder} = toRefs(props);

const descriptionComputed = computed({
  get: () => description.value,
  set: (val) => emit('update:description', val)
})
</script>

<style scoped>

</style>