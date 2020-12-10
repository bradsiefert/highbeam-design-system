<template>
  <div id="app">
    <Navbar />

    <div class="ds-sidebar">
      <ul class="navbar-nav">
        <SidebarLinks />
      </ul>
    </div> <!-- ds-sidebar -->

    <div class="ds-content">
      <router-view/>
    </div> <!-- ds-content -->
  </div> <!-- #app -->
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import SidebarLinks from '@/components/SidebarLinks.vue'

export default {
  name: 'Home',
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Highbeam Design System',
    // all titles will be injected into this template
    titleTemplate: '%s | Overview'
  },
  components: {
    Navbar, SidebarLinks
  },
  data: () => ({
    showOffcanvas: false, // This is to make the offcanvas menu open/close on mobile.
  })
}
</script>
