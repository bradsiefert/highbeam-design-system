<template>
  <div>
    <Navbar />

    <div class="ds-sidebar">
      <ul class="navbar-nav">
        <SidebarLinks />
      </ul>
    </div> <!-- ds-sidebar -->

    <div class="ds-content">

    </div> <!-- ds-content -->
  </div> <!-- div -->
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import SidebarLinks from '@/components/SidebarLinks.vue'

export default {
  name: 'Home',
  components: {
    Navbar, SidebarLinks
  },
  data: () => ({
    showOffcanvas: false, // This is to make the offcanvas menu open/close on mobile.
  }),
}
</script>