<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HomeContent msg="F2E week2"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeContent from '@/components/HomeContent.vue'

export default {
  name: 'Home',
  components: {
    HomeContent
  }
}
</script>
