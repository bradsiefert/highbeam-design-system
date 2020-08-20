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
    <router-link class="nav-link" to="/designsystem/data/graphs">Graphs <span class="badge rounded-pill bg-warning text-dark">Coming Soon</span></router-link>
    <router-link class="nav-link" to="/designsystem/data/metrics">Metrics <span class="badge rounded-pill bg-warning text-dark">Coming Soon</span></router-link>
    <router-link class="nav-link" to="/designsystem/data/tables">Tables</router-link>

    <div class="ds-sidebar-header">UI Components</div>
    <router-link class="nav-link" to="/designsystem/components/alerts/">Alerts</router-link>
    <router-link class="nav-link" to="/designsystem/components/badges/">Badges</router-link>
    <router-link class="nav-link" to="/designsystem/ui/breadcrumbs/">Breadcrumbs</router-link>
    <router-link class="nav-link" to="/designsystem/components/buttons/">Buttons</router-link>
    <router-link class="nav-link" to="/designsystem/components/cards/">Cards</router-link>
    <router-link class="nav-link" to="/designsystem/components/collapse/">Collapse</router-link>
    <router-link class="nav-link" to="/designsystem/components/forms/">Forms</router-link>
    <router-link class="nav-link" to="/designsystem/components/listgroups/">List Group</router-link>
    <router-link class="nav-link" to="/designsystem/components/pagination/">Pagination</router-link>
    <router-link class="nav-link" to="/designsystem/components/progressbar/">Progress Bar</router-link>
    <router-link class="nav-link" to="/designsystem/components/tabbar/">Tab Bar</router-link>
    <router-link class="nav-link" to="/designsystem/components/toasts/">Toasts</router-link>
    <router-link class="nav-link" to="/designsystem/components/tooltips/">Tooltips</router-link>
  </div>
</template>

<script>
export default {
  name: 'SidebarLinks',
}
</script>

<style lang="css" scoped>
</style>
