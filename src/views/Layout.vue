<template>
  <div class="container slim-contain">
    <div class="row">
      <div class="col-sm">

        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item"><router-link to="/">Design System</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Layout</li>
          </ol>
        </nav>

        <h1 class="mt-4">Layout</h1>
        <h3>
          <span class="badge bg-highlight text-dark mb-3">Under Construction</span>
        </h3>
        <p>
          Description coming soon.
        </p>

        <hr>

        <div class="row">
          <div class="col-xl-5">
            <h2>Skinny Containers</h2>
            <p>
              Sometimes Bootstrap's <code>.container</code> is just too darn wide. Can you relate? If so, these 
              skinny containers are for you. Each container has a 2rem (32px) gutter on the outside.
            </p>
          </div>  
          <div class="col-xl-7">
            <table class="table table-hover bg-white mb-0">
              <tbody>
                <tr>
                  <td class="is-narrow">
                    <code>.container</code>
                  </td>
                  <td>Maximum width <strong>1280px</strong></td>
                </tr>
                <tr>
                  <td class="is-narrow">
                    <code>.container</code> <code>.slim-contain</code>
                  </td>
                  <td>Maximum width <strong>1024px</strong></td>
                </tr>
                <tr>
                  <td class="is-narrow">
                    <code>.container</code> <code>.skinny-contain</code>
                  </td>
                  <td>Maximum width <strong>800px</strong></td>
                </tr>
                <tr>
                  <td class="is-narrow">
                    <code>.container</code> <code>.scrawny-contain</code>
                  </td>
                  <td>Maximum width <strong>544px</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <hr>

        <!-- Start code chunk -->
        <!-- <div class="card card-example">
          <div class="card-body">

          </div>
        </div>

        <div class="card card-body code-example">
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="code-example-heading">// HTML</h6>
          </div>

          <div v-highlight>
            <pre class="language-html"><code></code></pre>
          </div>
        </div>  -->
        <!-- End code chunk -->
        
        <div class="card well my-4">
          <div class="card-body card-body-sm text-center">
            For more info → <a target="_blank" href="https://v5.getbootstrap.com/docs/5.0/layout/grid/">
              Bootstrap v5 / Layout
            </a>
          </div>
        </div>

      </div>
    </div>
  </div> <!-- container -->
</template>

