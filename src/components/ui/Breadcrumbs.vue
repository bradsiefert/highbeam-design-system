<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li 
        class="breadcrumb-item"
        v-for="path in previousPaths" :key="path"
      >
        <router-link :to="path">{{ previous[path] }}</router-link>
      </li>

      <li class="breadcrumb-item active" aria-current="page">{{ active }}</li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: {
    active: String,
    previous: Object,
  },
  computed: {
    previousPaths () {
      if (!this.previous) {
        return []
      }

      return Object.keys(this.previous)
    }
  }
}
</script>
