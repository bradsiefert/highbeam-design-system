<template>
  <div id="app">
    <!-- <Navbar />
    <NavbarSidebar />
    <div id="content">
      Content -->
      <router-view/>
    <!-- </div> -->
  </div>
</template>

<script>
// import Navbar from '@/components/Navbar.vue'
// import NavbarSidebar from '@/components/NavbarSidebar.vue'

export default {
  name: 'Home',
  components: {
    // Navbar, NavbarSidebar
  },
  data: () => ({
    showNav: false, // This is to make the navbar open/close on mobile.
  }),
}
</script>

<style lang="scss">
</style>
