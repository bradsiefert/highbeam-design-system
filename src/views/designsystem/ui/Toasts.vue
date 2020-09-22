<template>
  <div class="container-md slim-contain">
    <div class="row">
      <div class="col-sm">
        <breadcrumbs :previous="{ '/': 'Home', '/designsystem': 'Design System' }" active="Toasts"/>

        <h1>Toasts</h1>
        <p>
          Toasts are an in app communication notification to the user. They are more discrete than alerts, they can 
          be stacked on top if there are multiple notifications, and they give information about the recent event.
        </p>
        
        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">

            <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
              <div class="toast-header">
                <span class="mr-auto">Login Successful</span>
                <small>8 mins ago</small>
                <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="toast-body">
                Welcome to Highbeam! <a href="#">Let's do a quick tutorial.</a>
              </div>
            </div>

          </div>
        </div>
        <div class="card card-body code-example">
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="code-example-heading">// HTML</h6>
          </div>

          <div v-highlight>
            <pre class="user-select-all language-html"><code>&lt;div class="toast" role="alert" aria-live="assertive" aria-atomic="true"&gt;
  &lt;div class="toast-header"&gt;
    &lt;span class="mr-auto"&gt;Login Successful&lt;/span&gt;
    &lt;small&gt;8 mins ago&lt;/small&gt;
    &lt;button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close"&gt;
      &lt;span aria-hidden="true"&gt;&times;&lt;/span&gt;
    &lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="toast-body"&gt;
    Welcome to Highbeam! &lt;a href="#"&gt;Let's do a quick tutorial.&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
          </div>
        </div> 
        <!-- End code chunk -->

      </div>
    </div>
    
    <div class="row">
      <div class="col-sm">
        <div class="card my-4">
          <div class="card-body card-body-sm text-center">
            For more info → <a target="_blank" href="https://v5.getbootstrap.com/docs/5.0/components/toasts/">
              Bootstrap v5 / Toasts
            </a>
          </div>
        </div>
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
