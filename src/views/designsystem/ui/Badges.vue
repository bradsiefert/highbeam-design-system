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
        
        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            <h3>Plain Badges</h3>
            <span class="mr-1 badge bg-primary">Primary</span>
            <span class="mr-1 badge bg-info">Info</span>
            <span class="mr-1 badge bg-success">Success</span>
            <span class="mr-1 badge bg-tip text-dark">Tip</span>
            <span class="mr-1 badge bg-danger">Danger</span>
            <span class="mr-1 badge bg-warning">Warning</span>
            <span class="mr-1 badge bg-highlight text-dark">Highlight</span>
            <span class="mr-1 badge bg-light text-dark">Light</span>
            <span class="mr-1 badge bg-secondary">Secondary</span>
            <span class="mr-1 badge bg-dark">Dark</span>
          </div>
        </div>
        <div class="card card-body code-example">
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="mr-2">// HTML</h6>
          </div>

          <div v-highlight>
            <pre class="language-html">
<code>&lt;span class="badge bg-primary"&gt;Primary&lt;/span&gt;
&lt;span class="badge bg-secondary"&gt;Secondary&lt;/span&gt;
&lt;span class="badge bg-success"&gt;Success&lt;/span&gt;
&lt;span class="badge bg-danger"&gt;Danger&lt;/span&gt;
&lt;span class="badge bg-warning text-dark"&gt;Warning&lt;/span&gt;
&lt;span class="badge bg-highlight text-dark"&gt;Highlight&lt;/span&gt;
&lt;span class="badge bg-info"&gt;Info&lt;/span&gt;
&lt;span class="badge bg-light text-dark"&gt;Light&lt;/span&gt;
&lt;span class="badge bg-dark"&gt;Dark&lt;/span&gt;</code></pre>
          </div>
        </div> 
        <!-- End code chunk -->

        <!-- Start code chunk -->
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
          </div>

          <div v-highlight>
            <pre class="user-select-all language-html">
<code>&lt;button type="button" class="btn btn-primary"&gt;
  Notifications &lt;span class="badge bg-light text-dark"&gt;10&lt;/span&gt;
&lt;/button&gt;</code></pre>
          </div>
        </div> 
        <!-- End code chunk -->
        
        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            <h3>Badges with Headings</h3>
            <h1>Example Heading <span class="badge bg-success">New</span></h1>
            <h2>Example Heading <span class="badge bg-success">New</span></h2>
            <h3 class="border-0" style="padding-bottom: 0;">Example Heading <span class="badge bg-success">New</span></h3>
            <h4>Example Heading <span class="badge bg-success">New</span></h4>
            <h5>Example Heading <span class="badge bg-success">New</span></h5>
            <h6>Example Heading <span class="badge bg-success">New</span></h6>
          </div>
        </div>
        <div class="card card-body code-example">
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="mr-2">// HTML</h6>
          </div>

          <div v-highlight>
            <pre class="language-html">
<code>&lt;h1&gt;Example Heading &lt;span class="badge bg-success"&gt;New&lt;/span&gt;&lt;/h1&gt;
&lt;h2&gt;Example Heading &lt;span class="badge bg-success"&gt;New&lt;/span&gt;&lt;/h2&gt;
&lt;h3&gt;Example Heading &lt;span class="badge bg-success"&gt;New&lt;/span&gt;&lt;/h3&gt;
&lt;h4&gt;Example Heading &lt;span class="badge bg-success"&gt;New&lt;/span&gt;&lt;/h4&gt;
&lt;h5&gt;Example Heading &lt;span class="badge bg-success"&gt;New&lt;/span&gt;&lt;/h5&gt;
&lt;h6&gt;Example Heading &lt;span class="badge bg-success"&gt;New&lt;/span&gt;&lt;/h6&gt;</code></pre>
          </div>
        </div> 
        <!-- End code chunk -->

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
