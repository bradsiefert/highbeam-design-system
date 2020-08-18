<template>
  <div id="navigation">

    <!-- <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="navbar-brand">
        <router-link to="/">
          <img src="@/assets/images/highbeam-logomark.svg" alt="">
        </router-link>
      </div>
    </nav> -->

    <nav class="navbar navbar-expand-lg navbar-dark">
      <!-- Toggler -->
      <button 
        class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebarSmallCollapse" 
        aria-controls="sidebarSmallCollapse" aria-expanded="false" aria-label="Toggle navigation"
        @click="showNav = !showNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Brand -->
      <a class="navbar-brand" href="/">
        <img src="@/assets/images/highbeam-logomark.svg" alt="">
      </a>


      <!-- Toggle -->
      <button 
        class="navbar-toggler" type="button" data-toggle="collapse" data-target="#offcanvas" 
        aria-controls="offcanvas" aria-expanded="false" aria-label="Toggle navigation"
        @click="showOffcanvas = !showOffcanvas"
      >
        Sidebar
      </button>


      <div class="navbar-collapse offcanvas-collapse" id="offcanvas" :class="{ 'show': showOffcanvas }">
        <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <a class="nav-link" aria-current="page" href="#">Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Notifications</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Switch account</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-expanded="false">Settings</a>
            <ul class="dropdown-menu" aria-labelledby="dropdown01">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control mr-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>

      <!-- Collapse -->
      <div class="navbar-collapse collapse " id="sidebarSmallCollapse" :class="{ 'show': showNav } ">
        <ul class="navbar-nav">
          <li class="nav-item">
            <g-link class="nav-link" rel="noopener" to="/portfolio">Design Portfolio</g-link>
          </li>
          <li class="nav-item">
            <g-link class="nav-link" rel="noopener" to="https://bradleysiefert.com">Photography</g-link>
          </li>
          <li class="nav-item">
            <g-link class="nav-link" rel="noopener" to="/siri-shortcuts">Siri Shortcuts</g-link>
          </li>
          <li class="nav-item">
            <g-link class="nav-link" rel="noopener" to="/blog">Blog</g-link>
          </li>
          <li class="nav-item">
            <g-link class="nav-link" rel="noopener" to="/about">About</g-link>
          </li>
          <li class="nav-item">
            <g-link class="nav-link" rel="noopener" to="/contact">Contact</g-link>
          </li>
        </ul>
      </div>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data: () => ({
    showNav: false, // This is to make the navbar open/close on mobile.
    showOffcanvas: false, // This is to make the offcanvas menu open/close on mobile.
  }),
}
</script>

<style lang="scss" scoped>
</style>
