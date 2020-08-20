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
        
        <div class="card card-body card-example">
          <breadcrumbs active="Home" />

          <breadcrumbs
            :previous="{ '/': 'Home' }"
            active="Active Page"
          />

          <breadcrumbs
            :previous="{ '/': 'Home', '/designsystem': 'Design System' }"
            active="Breadcrumbs"
          />
        </div>

        <div class="card card-body code-example">
          <button class="btn btn-primary btn-sm btn-code">Copy</button>

          <h3>Script</h3>
          <div v-highlight>
            <pre class="language-javascript"><code>
import Breadcrumbs from '@/components/ui/Breadcrumbs'
            </code></pre>
          </div>

          <h3>Template</h3>
          <div v-highlight>
            <pre class="language-html"><code>
&lt;breadcrumbs
  :previous="{ '/': 'Home', '/designsystem': 'Design System' }"
  active="Breadcrumbs"
/&gt;  
            </code></pre>
          </div>
        </div>

      </div>
    </div>
  </div> <!-- container -->
</template>

<script>
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export default {
  components: {
    Breadcrumbs
  }  
}
</script>
