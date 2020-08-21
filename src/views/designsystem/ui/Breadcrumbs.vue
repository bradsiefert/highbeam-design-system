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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus justo sed pulvinar hendrerit. 
          Vivamus interdum sapien sapien, sit amet tempus justo lacinia ut.
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
            <h6 class="mr-2">// Script</h6>
            <button class="btn btn-dark btn-sm btn-code" v-clipboard:copy="script">Copy</button>
          </div>

          <div v-highlight>
            <pre class="user-select-all language-javascript"><code>{{ script }}</code></pre>
          </div>
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="mr-2">// Template</h6>
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
