<template>
  <div>

    <nav class="navbar navbar-dark navbar-expand-lg fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="@/assets/images/highbeam-logo.svg" alt="Logo for Highbeam">
        </a>

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
              <a class="nav-link d-none d-lg-block" target="_blank" href="https://fontawesome.com/icons?d=gallery">
              <font-awesome-icon :icon="['fab', 'font-awesome']" /></a>
            </li>
            <li class="nav-item">
              <a class="nav-link d-none d-lg-block" target="_blank" href="https://v5.getbootstrap.com/docs/">
                <font-awesome-icon :icon="['fab', 'bootstrap']" />
              </a>
            </li>
          </ul>

          <ul class="navbar-nav mr-auto d-block d-lg-none">
            <div class="ds-sidebar-header">Design System</div>
            <a class="nav-link active" href="/designsystem/">Overview</a>
            <a class="nav-link" href="/designsystem/framework">Framework</a>
            <a class="nav-link" href="/designsystem/grid">Container & Grid</a>
            <a class="nav-link" href="/designsystem/colors">Colors</a>
            <a class="nav-link" href="/designsystem/typography">Typography</a>
            <a class="nav-link" href="/designsystem/icons">Icons</a>

            <div class="ds-sidebar-header">Data Components</div>
            <a class="nav-link" href="/designsystem/data/graphs">Graphs <span class="badge rounded-pill bg-warning text-dark">Coming Soon</span></a>
            <a class="nav-link" href="/designsystem/data/metrics">Metrics <span class="badge rounded-pill bg-warning text-dark">Coming Soon</span></a>
            <a class="nav-link" href="/designsystem/data/tables">Tables</a>

            <div class="ds-sidebar-header">UI Components</div>
            <a class="nav-link" href="/designsystem/components/alerts/">Alerts</a>
            <a class="nav-link" href="/designsystem/components/badges/">Badges</a>
            <a class="nav-link" href="/designsystem/components/breadcrumbs/">Breadcrumbs</a>
            <a class="nav-link" href="/designsystem/components/buttons/">Buttons</a>
            <a class="nav-link" href="/designsystem/components/cards/">Cards</a>
            <a class="nav-link" href="/designsystem/components/collapse/">Collapse</a>
            <a class="nav-link" href="/designsystem/components/forms/">Forms</a>
            <a class="nav-link" href="/designsystem/components/listgroups/">List Group</a>
            <a class="nav-link" href="/designsystem/components/pagination/">Pagination</a>
            <a class="nav-link" href="/designsystem/components/progressbar/">Progress Bar</a>
            <a class="nav-link" href="/designsystem/components/tabbar/">Tab Bar</a>
            <a class="nav-link" href="/designsystem/components/toasts/">Toasts</a>
            <a class="nav-link" href="/designsystem/components/tooltips/">Tooltips</a>
          </ul>
        </div><!-- navbar-collapse -->

      </div>
    </nav><!-- navbar -->


    <div class="ds-sidebar">
      <ul class="navbar-nav">
        <div class="ds-sidebar-header">Design System</div>
        <a class="nav-link active" href="/designsystem/">Overview</a>
        <a class="nav-link" href="/designsystem/framework">Framework</a>
        <a class="nav-link" href="/designsystem/grid">Container & Grid</a>
        <a class="nav-link" href="/designsystem/colors">Colors</a>
        <a class="nav-link" href="/designsystem/typography">Typography</a>
        <a class="nav-link" href="/designsystem/icons">Icons</a>

        <div class="ds-sidebar-header">Data Components</div>
        <a class="nav-link" href="/designsystem/data/graphs">Graphs <span class="badge rounded-pill bg-warning text-dark">Coming Soon</span></a>
        <a class="nav-link" href="/designsystem/data/metrics">Metrics <span class="badge rounded-pill bg-warning text-dark">Coming Soon</span></a>
        <a class="nav-link" href="/designsystem/data/tables">Tables</a>

        <div class="ds-sidebar-header">UI Components</div>
        <a class="nav-link" href="/designsystem/components/alerts/">Alerts</a>
        <a class="nav-link" href="/designsystem/components/badges/">Badges</a>
        <a class="nav-link" href="/designsystem/components/breadcrumbs/">Breadcrumbs</a>
        <a class="nav-link" href="/designsystem/components/buttons/">Buttons</a>
        <a class="nav-link" href="/designsystem/components/cards/">Cards</a>
        <a class="nav-link" href="/designsystem/components/collapse/">Collapse</a>
        <a class="nav-link" href="/designsystem/components/forms/">Forms</a>
        <a class="nav-link" href="/designsystem/components/listgroups/">List Group</a>
        <a class="nav-link" href="/designsystem/components/pagination/">Pagination</a>
        <a class="nav-link" href="/designsystem/components/progressbar/">Progress Bar</a>
        <a class="nav-link" href="/designsystem/components/tabbar/">Tab Bar</a>
        <a class="nav-link" href="/designsystem/components/toasts/">Toasts</a>
        <a class="nav-link" href="/designsystem/components/tooltips/">Tooltips</a>
      </ul>

    </div> <!-- ds-sidebar -->

    <div class="ds-content">
      <div class="container-lg">
        <div class="row">
          <div class="col-sm">

            <nav aria-label="breadcrumb" class="mt-4">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Library</li>
              </ol>
            </nav>
            <h1 class="mt-4">Overview</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus justo sed pulvinar hendrerit. 
              Vivamus interdum sapien sapien, sit amet tempus justo lacinia ut. Pellentesque habitant morbi 
              tristique senectus et netus et malesuada fames ac turpis egestas. Aenean blandit ipsum sit amet 
              neque varius, eget condimentum lacus egestas. Donec vulputate metus eu sagittis efficitur.
            </p>
          </div>
        </div>
      </div> <!-- container -->
    </div> <!-- ds-content -->

  </div> <!-- div -->
</template>

<script>
export default {
  name: 'DesignSystem',
  data: () => ({
    showOffcanvas: false, // This is to make the offcanvas menu open/close on mobile.
  }),
}
</script>