<template>
  <nav class="navbar navbar-dark navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/images/highbeam-logo.svg" alt="Logo for Highbeam">
      </router-link>

      <button 
        class="navbar-toggler" type="button" data-toggle="collapse" data-target="#offcanvas" 
        aria-controls="offcanvas" aria-expanded="false" aria-label="Toggle navigation"
        @click="showOffcanvas = !showOffcanvas"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse offcanvas-collapse" id="offcanvas" :class="{ 'show': showOffcanvas }">
        <ul class="navbar-nav w-100">
          <form class="w-100 mx-lg-3">
            <div class="input-group">
              <input type="text" class="form-control rounded-pill" placeholder="Search...">
            </div>
          </form>
          <li class="nav-item">
            <a class="nav-link d-none d-lg-block" target="_blank" href="https://v5.getbootstrap.com/docs/">
              <font-awesome-icon :icon="['fab', 'bootstrap']" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link d-none d-lg-block" target="_blank" href="https://fontawesome.com/icons">
            <font-awesome-icon :icon="['fab', 'font-awesome']" /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link d-none d-lg-block" href="/about">
              <font-awesome-icon :icon="['fas', 'address-card']" />
            </a>
          </li>
        </ul>

        <ul class="navbar-nav mr-auto d-block d-lg-none">
          <SidebarLinks /> <!-- SidebarLinks is a component to easily update links in the nav and sidebar -->
        </ul>
      </div><!-- navbar-collapse -->
    </div><!-- container-fluid -->
  </nav><!-- navbar -->
</template>

<script>
import SidebarLinks from '@/components/SidebarLinks.vue'

export default {
  name: 'Navbar',
  components: {
    SidebarLinks
  },
  data: () => ({
    showOffcanvas: false // This is to make the offcanvas menu open/close on mobile.
  }),
}
</script>

<style lang="scss">
  @import "@/assets/scss/variables.scss";

  // Navar & Offcanvas Menu
  .navbar.navbar-dark {
    min-height: 64px;
    background-color: $black;
  }

  @media (min-width: 993px) {
    .navbar-dark .navbar-nav .nav-link {
      padding-top: 0rem;
      padding-bottom: 0rem;
      font-size: 1.67rem;
    }

    .navbar .form-control,
    .navbar .form-control:focus {
      background-color: $gray-900;
      border: 1px solid $gray-800;
      color: $gray-600;
    }
  }

  @media (max-width: 992px) {
    .offcanvas-collapse {
      position: fixed;
      top: 64px; /* Height of navbar */
      bottom: 0;
      left: 100%;
      width: 100%;
      padding: 1rem 1rem 2rem;
      overflow-y: auto;
      visibility: hidden;
      background-color: $white;
      color: $black;
      transition: transform .32s ease-in-out, visibility .32s ease-in-out;
    }

    .offcanvas-collapse.show {
      visibility: visible;
      transform: translateX(-100%);
    }

    .offcanvas-collapse .ds-sidebar-header {
      padding-left: 0;
      padding-right: 0;
    }

    .offcanvas-collapse .navbar-nav .nav-link {
      letter-spacing: -0.1px;
      line-height: 1.25rem;
      font-weight: 600;
      color: $gray-800;
      padding-left: 0;
      margin-left: 0;
      font-size: 1.125rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
  }
</style>
