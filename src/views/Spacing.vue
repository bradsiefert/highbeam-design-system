<template>
  <div class="container-md slim-contain">
    <div class="row">
      <div class="col-sm">

        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item"><router-link to="/">Design System</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Spacing</li>
          </ol>
        </nav>

        <h1 class="mt-4 mb-3">Spacing</h1>
        <div class="row">
          <div class="col-lg-6 col-xl-8">
            <p>
              To be honest I've found the number of Bootstrap's spacers to be lacking. I need many more options than
              the few they offered. I took their 6 spaces and increased it them to 12 which I've found dramatically
              helps the flexibility of spacing elements.
            </p>

            <p>
              These spacers can be used in the same way as Bootstrap's original spacers, on both margin and padding,
              and can be used in single or multiple directions. Consult Bootstrap's spacing documentation for more
              information about usage.
            </p>

            <p>
              These spacers can be used with both margin <code>m*</code> and padding <code>p*</code> in all directions:
            </p>

            <ul>
              <li><code>t*</code> for top</li>
              <li><code>r*</code> for right</li>
              <li><code>b*</code> for bottom</li>
              <li><code>l*</code> for left</li>
              <li><code>x*</code> horizontally for both left and right</li>
              <li><code>y*</code> vertically for both top and bottom</li>
            </ul>
          </div>
          <div class="col-lg-6 col-xl-4">
            <table class="table table-sm table-hover text-center bg-white font-monospace">
              <thead>
                <tr class="bg-yellow-300">
                  <th scope="col">#</th>
                  <th scope="col">Size (in rems)</th>
                  <th scope="col">Pixels</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><code>-0</code></td><td><strong>0</strong></td><td>0px</td></tr>
                <tr><td><code>-1</code></td><td><strong>0.25</strong></td><td>4px</td></tr>
                <tr><td><code>-2</code></td><td><strong>0.5</strong></td><td>8px</td></tr>
                <tr><td><code>-3</code></td><td><strong>1</strong></td><td>16px</td></tr>
                <tr><td><code>-4</code></td><td><strong>1.5</strong></td><td>24px</td></tr>
                <tr><td><code>-5</code></td><td><strong>2</strong></td><td>32px</td></tr>
                <tr><td><code>-6</code></td><td><strong>3</strong></td><td>48px</td></tr>
                <tr><td><code>-7</code></td><td><strong>4</strong></td><td>64px</td></tr>
                <tr><td><code>-8</code></td><td><strong>5</strong></td><td>80px</td></tr>
                <tr><td><code>-9</code></td><td><strong>6</strong></td><td>96px</td></tr>
                <tr><td><code>-10</code></td><td><strong>8</strong></td><td>128px</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="card my-4">
          <div class="card-body card-body-sm text-center">
            For more info → <a target="_blank" href="https://v5.getbootstrap.com/docs/5.0/utilities/spacing/">
              Bootstrap v5 / Spacing
            </a>
          </div>
        </div>

      </div>
    </div>
  </div> <!-- container -->
</template>

