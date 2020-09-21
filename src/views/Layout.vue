<template>
  <div class="container slim-contain">
    <div class="row">
      <div class="col-md">

        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item"><router-link to="/">Design System</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Layout</li>
          </ol>
        </nav>

        <h1 class="mt-4">Layout</h1>
        <p class="lead">
          Web apps can require widely different layouts to accomplish different tasks. These principles help
          create elegant and responsive layouts.
        </p>

        <hr>

        <div class="row">
          <div class="col-lg-5">
            <h2>Grid System Tweaks</h2>
            <p>
              There are a number of changes that I've made to Bootstrap's Grid System. These changes are to make
              the system adhere to the 8pt grid with gutters and containers. I updated the grid's gutters to be
              2rems (32px) in between each of the grid columns. There is a gutter on the outside that is 16px
              on the left and right sides of the container.
            </p>
          </div>
          <div class="col-lg-7">
            <div class="table-responsive">
              <table class="table table-hover table-sm bg-white mb-0">
                <thead>
                  <tr class="bg-light">
                    <th scope="col">Size</th>
                    <th scope="col">Screen Breakpoints</th>
                    <th scope="col">Container Max Width</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td width="28%"><code>-xs</code></td>
                    <td><strong>0</strong></td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td width="28%"><code>-sm</code></td>
                    <td><strong>512px</strong></td>
                    <td>480px</td>
                  </tr>
                  <tr>
                    <td width="28%"><code>-md</code></td>
                    <td><strong>768px</strong></td>
                    <td>736px</td>
                  </tr>
                  <tr>
                    <td width="28%"><code>-lg</code></td>
                    <td><strong>1024px</strong></td>
                    <td>992px</td>
                  </tr>
                  <tr>
                    <td width="28%"><code>-xl</code></td>
                    <td><strong>1280px</strong></td>
                    <td>1200px</td>
                  </tr>
                  <tr>
                    <td width="28%"><code>-xxl</code></td>
                    <td><strong>1536px</strong></td>
                    <td>1440px</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <hr>

        <div class="row">
          <div class="col-lg-5">
            <h2>Skinny Containers</h2>
            <p>
              Sometimes the Bootstrap <code>.container</code> is just too darn wide. Can you relate? If so, these
              skinny containers are for you.
            </p>

          </div>
          <div class="col-lg-7">
            <div class="table-responsive">
              <table class="table table-hover bg-white mb-0">
                <thead>
                  <tr class="bg-light">
                    <th scope="col">Class</th>
                    <th scope="col">Width</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="is-narrow"><code>.container-fluid</code></td>
                    <td><strong>Full screen width</strong></td>
                  </tr>
                  <tr>
                    <td class="is-narrow"><code>.container</code></td>
                    <td>Max width <strong>1200px</strong></td>
                  </tr>
                  <tr>
                    <td class="is-narrow"><code>.container</code><code>.slim-contain</code></td>
                    <td>Max width <strong>1024px</strong></td>
                  </tr>
                  <tr>
                    <td class="is-narrow"><code>.container</code><code>.skinny-contain</code></td>
                    <td>Max width <strong>768px</strong></td>
                  </tr>
                  <tr>
                    <td class="is-narrow"><code>.container</code><code>.scrawny-contain</code></td>
                    <td>Max width <strong>512px</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <hr>

        <div class="row">
          <div class="col-lg-5">
            <h2>Responsive Grid</h2>
            <p>
              Bootstrap has a wonderful responsive grid and I didn't see any reason to change it. Wrap your content in
              a <code>.container</code> div, a <code>.row</code> div, and then however many grid columns your layout
              requires. Bootstrap's grid documentation is very comprehensive. For more information check out the
              documentation.
            </p>
          </div>
          <div class="col-lg-7">
            <div class="card card-body code-example well rounded">
              <div v-highlight>
                <pre class="language-html"><code>&lt;div class="container"&gt;
  &lt;div class="row"&gt;
    &lt;div class="col-md-6"&gt;
      One of three columns
    &lt;/div&gt;
    &lt;div class="col-md"&gt;
      One of three columns
    &lt;/div&gt;
    &lt;div class="col-md"&gt;
      One of three columns
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
              </div>
            </div>

          </div>
        </div>

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

