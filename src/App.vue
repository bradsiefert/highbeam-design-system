<template>
  <div id="wrap">
    <Navbar />
    <NavbarSidebar />
    <div id="content">
      Content
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import NavbarSidebar from '@/components/NavbarSidebar.vue'

export default {
  name: 'Home',
  components: {
    Navbar, NavbarSidebar
  }
}
</script>

<style lang="scss">
</style>
