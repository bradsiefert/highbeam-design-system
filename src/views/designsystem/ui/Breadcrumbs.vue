<template>
  <div class="container skinny-contain">
    <div class="row">
      <div class="col-sm">
        <breadcrumbs
          :previous="{ '/': 'Home', '/designsystem': 'Design System' }"
          active="Breadcrumbs"
        />

        <h1>Breadcrumbs</h1>
        <p>
          Breadcrumbs are a set of links that give you page structure and context. They should especially for sites 
          on sites with many layers of pages. For smaller sites, they can be omitted.
        </p>
        
        <div class="card card-example">
          <div class="card-body">
            <breadcrumbs active="Home" />
            <breadcrumbs :previous="{ '/': 'Home' }" active="Active Page"/>
            <breadcrumbs :previous="{ '/': 'Home', '/designsystem': 'Design System' }" active="Breadcrumbs"/>
          </div>
        </div>
        
        <!-- Start code chunk -->
        <div class="card card-body code-example">
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="code-example-heading">// Script</h6>
            <button class="btn btn-dark btn-sm btn-code" v-clipboard:copy="script">Copy</button>
          </div>

          <div v-highlight>
            <pre class="user-select-all language-javascript"><code>{{ script }}</code></pre>
          </div>
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="code-example-heading">// Template</h6>
            <button class="btn btn-dark btn-sm btn-code" v-clipboard:copy="template">Copy</button>
          </div>

          <div v-highlight>
            <pre class="user-select-all language-html"><code>{{ template }}</code></pre>
          </div>
        </div>
      </div> 
      <!-- End code chunk -->

    </div>
  </div> <!-- div.container -->
</template>

<script>
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export default {
  components: {
    Breadcrumbs
  },
  data () {
    return {
      script: 'import Breadcrumbs from \'@/components/ui/Breadcrumbs\'',
      template: '<breadcrumbs\n  :previous="{ \'/\': \'Home\', \'/designsystem\': \'Design System\' }"\n  active="Breadcrumbs"\n/>'
    }
  } 
}
</script>
