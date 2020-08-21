<template>
  <div class="container skinny-contain">
    <div class="row">
      <div class="col-sm">
        <breadcrumbs :previous="{ '/': 'Home', '/designsystem': 'Design System' }" active="Alerts"/>

        <h1>Alerts</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus justo sed pulvinar hendrerit. 
          Vivamus interdum sapien sapien, sit amet tempus justo lacinia ut.
        </p>
        
        <!-- start code chunk -->
        <div class="card card-body card-example">
          <h3>Normal Alerts</h3>
          <p>
            Vivamus interdum sapien sapien, sit amet tempus justo lacinia ut. In faucibus justo sed pulvinar hendrerit. 
          </p>
          <div class="alert alert-primary alert-dismissible fade show" role="alert">
            A simple alert message for you to check out. More info here: <a href="#" class="alert-link">Link to page...</a>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="alert alert-success alert-dismissible fade show" role="alert">
            A simple alert message for you to check out. More info here: <a href="#" class="alert-link">Link to page...</a>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="alert alert-danger alert-dismissible fade show" role="alert">
            A simple alert message for you to check out. More info here: <a href="#" class="alert-link">Link to page...</a>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="alert alert-warning alert-dismissible fade show" role="alert">
            A simple alert message for you to check out. More info here: <a href="#" class="alert-link">Link to page...</a>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="alert alert-highlight alert-dismissible fade show" role="alert">
            A simple alert message for you to check out. More info here: <a href="#" class="alert-link">Link to page...</a>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="alert alert-info alert-dismissible fade show" role="alert">
            A simple alert message for you to check out. More info here: <a href="#" class="alert-link">Link to page...</a>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="alert alert-light alert-dismissible fade show" role="alert">
            A simple alert message for you to check out. More info here: <a href="#" class="alert-link">Link to page...</a>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="alert alert-secondary alert-dismissible fade show" role="alert">
            A simple alert message for you to check out. More info here: <a href="#" class="alert-link">Link to page...</a>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="alert alert-dark alert-dismissible fade show" role="alert">
            A simple alert message for you to check out. More info here: <a href="#" class="alert-link">Link to page...</a>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
        <div class="card card-body code-example">
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="mr-2">// HTML</h6>
            <!-- <button class="btn btn-dark btn-sm btn-code" disabled>Copy</button> -->
          </div>

          <div v-highlight>
            <pre class="user-select-all language-html"><code>&lt;div class="alert alert-primary alert-dismissible fade show" role="alert"&gt;
  A simple alert message for you to check out. More info here: &lt;a href="#" class="alert-link"&gt;Link to page...&lt;/a&gt;
  &lt;button type="button" class="close" data-dismiss="alert" aria-label="Close"&gt;
    &lt;span aria-hidden="true"&gt;&times;&lt;/span&gt;
  &lt;/button&gt;
&lt;/div&gt;

&lt;div class="alert alert-success alert-dismissible fade show" role="alert"&gt;
  A simple alert message for you to check out. More info here: &lt;a href="#" class="alert-link"&gt;Link to page...&lt;/a&gt;
  &lt;button type="button" class="close" data-dismiss="alert" aria-label="Close"&gt;
    &lt;span aria-hidden="true"&gt;&times;&lt;/span&gt;
  &lt;/button&gt;
&lt;/div&gt;

&lt;div class="alert alert-danger alert-dismissible fade show" role="alert"&gt;
  A simple alert message for you to check out. More info here: &lt;a href="#" class="alert-link"&gt;Link to page...&lt;/a&gt;
  &lt;button type="button" class="close" data-dismiss="alert" aria-label="Close"&gt;
    &lt;span aria-hidden="true"&gt;&times;&lt;/span&gt;
  &lt;/button&gt;
&lt;/div&gt;

&lt;div class="alert alert-warning alert-dismissible fade show" role="alert"&gt;
  A simple alert message for you to check out. More info here: &lt;a href="#" class="alert-link"&gt;Link to page...&lt;/a&gt;
  &lt;button type="button" class="close" data-dismiss="alert" aria-label="Close"&gt;
    &lt;span aria-hidden="true"&gt;&times;&lt;/span&gt;
  &lt;/button&gt;
&lt;/div&gt;

&lt;div class="alert alert-highlight alert-dismissible fade show" role="alert"&gt;
  A simple alert message for you to check out. More info here: &lt;a href="#" class="alert-link"&gt;Link to page...&lt;/a&gt;
  &lt;button type="button" class="close" data-dismiss="alert" aria-label="Close"&gt;
    &lt;span aria-hidden="true"&gt;&times;&lt;/span&gt;
  &lt;/button&gt;
&lt;/div&gt;

&lt;div class="alert alert-info alert-dismissible fade show" role="alert"&gt;
  A simple alert message for you to check out. More info here: &lt;a href="#" class="alert-link"&gt;Link to page...&lt;/a&gt;
  &lt;button type="button" class="close" data-dismiss="alert" aria-label="Close"&gt;
    &lt;span aria-hidden="true"&gt;&times;&lt;/span&gt;
  &lt;/button&gt;
&lt;/div&gt;

&lt;div class="alert alert-light alert-dismissible fade show" role="alert"&gt;
  A simple alert message for you to check out. More info here: &lt;a href="#" class="alert-link"&gt;Link to page...&lt;/a&gt;
  &lt;button type="button" class="close" data-dismiss="alert" aria-label="Close"&gt;
    &lt;span aria-hidden="true"&gt;&times;&lt;/span&gt;
  &lt;/button&gt;
&lt;/div&gt;

&lt;div class="alert alert-secondary alert-dismissible fade show" role="alert"&gt;
  A simple alert message for you to check out. More info here: &lt;a href="#" class="alert-link"&gt;Link to page...&lt;/a&gt;
  &lt;button type="button" class="close" data-dismiss="alert" aria-label="Close"&gt;
    &lt;span aria-hidden="true"&gt;&times;&lt;/span&gt;
  &lt;/button&gt;
&lt;/div&gt;</code></pre>
          </div>

        </div> 
        <!-- end code chunk -->
        
        <!-- start code chunk -->
        <div class="card card-body card-example">
          <h3>Alerts with Content</h3>
          <div class="alert alert-danger alert-dismissible fade show mb-0" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h2 class="alert-heading">Wait a Second!</h2>
            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
            <hr>
            <a class="btn btn-danger btn-sm float-right mb-2">MORE INFO</a>
            <p class="mb-2">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
          </div>
        </div>
        <div class="card card-body code-example">
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="mr-2">// HTML</h6>
            <!-- <button class="btn btn-dark btn-sm btn-code" disabled>Copy</button> -->
          </div>

          <div v-highlight>
<pre class="user-select-all language-html">
<code>&lt;div class="alert alert-danger alert-dismissible fade show" role="alert"&gt;
  &lt;button type="button" class="close" data-dismiss="alert" aria-label="Close"&gt;
    &lt;span aria-hidden="true"&gt;&times;&lt;/span&gt;
  &lt;/button&gt;
  &lt;h2 class="alert-heading"&gt;Wait a Second!&lt;/h2&gt;
  &lt;p&gt;Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.&lt;/p&gt;
  &lt;hr&gt;
  &lt;a class="btn btn-danger btn-sm float-right mb-2"&gt;MORE INFO&lt;/a&gt;
  &lt;p class="mb-2"&gt;Whenever you need to, be sure to use margin utilities to keep things nice and tidy.&lt;/p&gt;
&lt;/div&gt;</code></pre>
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
  },
  data () {
    return {
      // script: 'import Breadcrumbs from \'@/components/ui/Breadcrumbs\'',
      // template: '<breadcrumbs\n  :previous="{ \'/\': \'Home\', \'/designsystem\': \'Design System\' }"\n  active="Breadcrumbs"\n/>'
    }
  } 
}
</script>
