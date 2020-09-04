<template>
  <div class="container slim-contain">
    <div class="row">
      <div class="col-sm">

        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item"><router-link to="/">Design System</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Typography</li>
          </ol>
        </nav>

        <h1 class="mt-4">Typography</h1>
        <h3>
          <span class="badge bg-highlight text-dark mb-3">Under Construction</span>
        </h3>
        <p>
          Coming soon.
        </p>
        
        <hr>
        
        <h2 class="mb-3">Typefaces</h2>

        <div class="mb-3"><code>$font-family-sans-serif</code></div>
        <div class="display-3">Inter</div>
        <div class="table-responsive">
          <table class="table table-sm table-hover">
            <tbody>
              <tr>
                <td class="border-0 px-0">
                  <span class="display-6 lh-1 text-uppercase">
                    abcdefghijklmnopqrstuvwxyz
                  </span>
                </td>
              </tr>
              <tr>
                <td class="border-0 px-0">
                  <span class="display-6 lh-1">
                    abcdefghijklmnopqrstuvwxyz
                  </span>
                </td>
              </tr>
              <tr>
                <td class="border-0 px-0">
                  <span class="display-6 lh-1">1234567890</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <hr>
        
        <div class="mb-3"><code>$font-family-sans-monospace</code></div>
        <div class="display-3 font-monospace">Fira Code</div>
        <div class="table-responsive">
          <table class="table table-sm table-hover font-monospace">
            <tbody>
              <tr>
                <td class="border-0 px-0">
                  <span class="display-6 lh-1 text-uppercase">
                    abcdefghijklmnopqrstuvwxyz
                  </span>
                </td>
              </tr>
              <tr>
                <td class="border-0 px-0">
                  <span class="display-6 lh-1">
                    abcdefghijklmnopqrstuvwxyz
                  </span>
                </td>
              </tr>
              <tr>
                <td class="border-0 px-0">
                  <span class="display-6 lh-1">1234567890</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="table-responsive">
          <table class="table table-sm table-hover table-sm bg-white">
            <thead>
              <tr class="bg-light">
                <th scope="col">#</th>
                <th scope="col">Size (in rems)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>-0</code></td><th scope="row">0</th></tr>
            </tbody>
          </table>
        </div>


        <hr>
        
        <div class="card well my-4">
          <div class="card-body card-body-sm text-center">
            For more info → <a target="_blank" href="https://v5.getbootstrap.com/docs/5.0/content/typography/">
              Bootstrap v5 / Typography
            </a>
          </div>
        </div>

      </div>
    </div>
  </div> <!-- container -->
</template>

