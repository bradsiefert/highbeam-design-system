<template>
  <div class="container skinny-contain">
    <div class="row">
      <div class="col-sm">
        <breadcrumbs :previous="{ '/': 'Home', '/designsystem': 'Design System' }" active="Badges"/>

        <h1>Badges</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus justo sed pulvinar hendrerit. 
          Vivamus interdum sapien sapien, sit amet tempus justo lacinia ut.
        </p>
        
        <!-- start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            <h3>Plain Badges</h3>
            <span class="mr-1 badge bg-primary">Primary</span>
            <span class="mr-1 badge bg-secondary">Secondary</span>
            <span class="mr-1 badge bg-success">Success</span>
            <span class="mr-1 badge bg-danger">Danger</span>
            <span class="mr-1 badge bg-warning text-dark">Warning</span>
            <span class="mr-1 badge bg-info">Info</span>
            <span class="mr-1 badge bg-light text-dark">Light</span>
            <span class="mr-1 badge bg-dark">Dark</span>
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

        <!-- start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            <h3>Badges with Buttons</h3>
            <button type="button" class="btn btn-primary">
              Notifications <span class="badge bg-light text-dark">10</span>
            </button>
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
        
        <!-- start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            <h3>Badges with Headings</h3>
            <h1>Example heading <span class="badge bg-success">New</span></h1>
            <h2>Example heading <span class="badge bg-success">New</span></h2>
            <h3>Example heading <span class="badge bg-success">New</span></h3>
            <h4>Example heading <span class="badge bg-success">New</span></h4>
            <h5>Example heading <span class="badge bg-success">New</span></h5>
            <h6>Example heading <span class="badge bg-success">New</span></h6>
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
