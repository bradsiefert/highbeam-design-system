<template>
  <div>

    <nav class="navbar navbar-dark navbar-expand fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="@/assets/images/highbeam-logo.svg" alt="Logo for Highbeam">
        </a>

        <form class="mx-2 my-auto d-inline w-100">
          <div class="input-group">
            <input type="text" class="form-control rounded-pill" placeholder="Search...">
          </div>
        </form>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link d-none d-sm-block" target="_blank" href="https://fontawesome.com/icons?d=gallery">
            <font-awesome-icon :icon="['fab', 'font-awesome']" /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link d-none d-sm-block" target="_blank" href="https://v5.getbootstrap.com/docs/">
              <font-awesome-icon :icon="['fab', 'bootstrap']" />
            </a>
          </li>
        </ul>
      </div>  
    </nav>

    <div class="ds-layout">
      <div class="ds-sidebar">
        <div class="ds-sidebar-header">Design System</div>
          <a class="list-group-item active" href="/designsystem/">Overview</a>
          <a class="list-group-item" href="/designsystem/framework">Framework</a>
          <a class="list-group-item" href="/designsystem/grid">Container & Grid</a>
          <a class="list-group-item" href="/designsystem/colors">Colors</a>
          <a class="list-group-item" href="/designsystem/typography">Typography</a>
          <a class="list-group-item" href="/designsystem/icons">Icons</a>

          <div class="ds-sidebar-header">Data Components</div>
          <a class="list-group-item" href="/designsystem/data/graphs">Graphs <span class="badge rounded-pill bg-warning text-dark">Coming Soon</span></a>
          <a class="list-group-item" href="/designsystem/data/metrics">Metrics <span class="badge rounded-pill bg-warning text-dark">Coming Soon</span></a>
          <a class="list-group-item" href="/designsystem/data/tables">Tables</a>

          <div class="ds-sidebar-header">Components</div>
          <a class="list-group-item" href="/designsystem/components/alerts/">Alerts</a>
          <a class="list-group-item" href="/designsystem/components/badges/">Badges</a>
          <a class="list-group-item" href="/designsystem/components/breadcrumbs/">Breadcrumbs</a>
          <a class="list-group-item" href="/designsystem/components/buttons/">Buttons</a>
          <a class="list-group-item" href="/designsystem/components/cards/">Cards</a>
          <a class="list-group-item" href="/designsystem/components/collapse/">Collapse</a>
          <a class="list-group-item" href="/designsystem/components/forms/">Forms</a>
          <a class="list-group-item" href="/designsystem/components/listgroups/">List Group</a>
          <a class="list-group-item" href="/designsystem/components/pagination/">Pagination</a>
          <a class="list-group-item" href="/designsystem/components/progressbar/">Progress Bar</a>
          <a class="list-group-item" href="/designsystem/components/tabbar/">Tab Bar</a>
          <a class="list-group-item" href="/designsystem/components/toasts/">Toasts</a>
          <a class="list-group-item" href="/designsystem/components/tooltips/">Tooltips</a>
      </div> <!-- ds-sidebar -->

      <div class="ds-content">
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <h1>Overview</h1>
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
    </div> <!-- ds-layout -->

  </div> <!-- div -->
</template>
