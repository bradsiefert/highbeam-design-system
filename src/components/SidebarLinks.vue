<template>
  <div>
    <div class="ds-sidebar-header">Design System</div>
    <router-link class="nav-link active" to="/designsystem/">Overview</router-link>
    <router-link class="nav-link" to="/designsystem/framework">Framework</router-link>
    <router-link class="nav-link" to="/designsystem/grid">Container & Grid</router-link>
    <router-link class="nav-link" to="/designsystem/colors">Colors</router-link>
    <router-link class="nav-link" to="/designsystem/typography">Typography</router-link>
    <router-link class="nav-link" to="/designsystem/icons">Icons</router-link>

    <div class="ds-sidebar-header">Data Components</div>
    <router-link class="nav-link" to="/designsystem/data/graphs">Graphs <span class="badge rounded-pill bg-highlight text-dark">Coming Soon</span></router-link>
    <router-link class="nav-link" to="/designsystem/data/metrics">Metrics <span class="badge rounded-pill bg-highlight text-dark">Coming Soon</span></router-link>
    <router-link class="nav-link" to="/designsystem/data/tables">Tables</router-link>

    <div class="ds-sidebar-header">UI Components</div>
    <router-link class="nav-link" to="/designsystem/ui/alerts/">Alerts</router-link>
    <router-link class="nav-link" to="/designsystem/ui/badges/">Badges</router-link>
    <router-link class="nav-link" to="/designsystem/ui/breadcrumbs/">Breadcrumbs</router-link>
    <router-link class="nav-link" to="/designsystem/ui/buttons/">Buttons</router-link>
    <router-link class="nav-link" to="/designsystem/ui/cards/">Cards</router-link>
    <router-link class="nav-link" to="/designsystem/ui/collapse/">Collapse</router-link>
    <router-link class="nav-link" to="/designsystem/ui/forms/">Forms</router-link>
    <router-link class="nav-link" to="/designsystem/ui/listgroups/">List Group</router-link>
    <router-link class="nav-link" to="/designsystem/ui/pagination/">Pagination</router-link>
    <router-link class="nav-link" to="/designsystem/ui/progressbar/">Progress Bar</router-link>
    <router-link class="nav-link" to="/designsystem/ui/tabbar/">Tab Bar</router-link>
    <router-link class="nav-link" to="/designsystem/ui/toasts/">Toasts</router-link>
    <router-link class="nav-link" to="/designsystem/ui/tooltips/">Tooltips</router-link>
  </div>
</template>

<script>
export default {
  name: 'SidebarLinks',
}
</script>

<style lang="css" scoped>
</style>
