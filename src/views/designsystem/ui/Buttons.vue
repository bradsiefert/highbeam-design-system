<template>
  <div class="container skinny-contain">
    <div class="row">
      <div class="col-sm">
        <breadcrumbs :previous="{ '/': 'Home', '/designsystem': 'Design System' }" active="Buttons"/>

        <h1>Buttons</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus justo sed pulvinar hendrerit. 
          Vivamus interdum sapien sapien, sit amet tempus justo lacinia ut.
        </p>
        
        <!-- start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            <!-- <h3>Plain Buttons</h3> -->
            <button type="button" class="mr-1 btn btn-primary">Primary</button>
            <button type="button" class="mr-1 btn btn-secondary">Secondary</button>
            <button type="button" class="mr-1 btn btn-success">Success</button>
            <button type="button" class="mr-1 btn btn-danger">Danger</button>
            <button type="button" class="mr-1 btn btn-warning">Warning</button>
            <button type="button" class="mr-1 btn btn-info">Info</button>
            <button type="button" class="mr-1 btn btn-light">Light</button>
            <button type="button" class="mr-1 btn btn-dark">Dark</button>
            <button type="button" class="mr-1 btn btn-link">Link</button>
          </div>
        </div>
        <div class="card card-body code-example">
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="mr-2">// HTML</h6>
            <!-- <button class="btn btn-dark btn-sm btn-code" disabled>Copy</button> -->
          </div>

          <div v-highlight>
            <pre class="user-select-all language-html"><code></code></pre>
          </div>
        </div> 
        <!-- end code chunk -->

      </div>
    </div>
  </div> <!-- div.container -->
</template>

<script>
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export default {
  components: {
    Breadcrumbs
  }
}
</script>
