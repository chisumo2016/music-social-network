<template>
  <TopNavigation/>
<div id="AccountView" class="max-w-4xl mx-auto">
   <router-view></router-view>
</div>
  <FooterSection/>
</template>
<script setup>
import FooterSection from "@/components/structure/FooterSection";
import TopNavigation from "@/components/structure/TopNavigation";
</script>
<style lang="scss">
#AccountView{
  min-height: 70vh;
}
</style>
