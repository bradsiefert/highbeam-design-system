<template>
  <div class="container-md slim-contain">
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
          Typography is one of the most important choices made in developing a design system. It touches nearly every user interface element. I've chosen the sans serif font <a target="_blank" href="https://fonts.google.com/specimen/Inter">Inter</a> (made by Figma's Rasmus Andersson) as the main typeface and <a target="_blank" href="https://fonts.google.com/specimen/Fira+Code">Fira Code</a> (made by Mozilla), a monospaced font, for elements like inputs, buttons, code, and some tabular data. Our work is full of data so I chose a monospaced font to show our computer science influences and to provide consistency and rhythm in our content.
        </p>

        <p>
          Both fonts are available from Google Fonts and can be included either by @import or as an @font-face.
        </p>

        <hr>

        <h2 class="mb-3">Typefaces</h2>


        <div class="font-size-1000 font-weight-bold mb-1">Inter</div>
        <div class="row">
          <div class="col-xl-8">
            <div class="mb-3"><code>$font-family-sans-serif</code></div>
            <div class="table-responsive">
              <table class="table table-sm bg-light">
                <tbody>
                  <tr>
                    <td class="border-0 px-0">
                      <span class="display-6 font-weight-normal lh-1 text-uppercase">
                        abcdefghijklmnopqrstuvwxyz
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-0 px-0">
                      <span class="display-6 font-weight-normal lh-1">
                        abcdefghijklmnopqrstuvwxyz
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-0 px-0">
                      <span class="display-6 font-weight-normal lh-1">1234567890</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="col-xl-4">
            <div class="table-responsive">
              <table class="table table-sm table-hover table-sm bg-white">
                <thead>
                  <tr class="bg-yellow-200">
                    <th scope="col">#</th>
                    <th scope="col">Weights</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>300</code></td><td><span style="font-weight: 300;">Light</span></td></tr>
                  <tr><td><code>400</code></td><td><span style="font-weight: 600;">Regular</span></td></tr>
                  <tr><td><code>600</code></td><td><span style="font-weight: 600;">Semibold</span></td></tr>
                  <tr><td><code>700</code></td><td><span style="font-weight: 700;">Bold</span></td></tr>
                  <tr><td><code>900</code></td><td><span style="font-weight: 900;">Black</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <hr>

        <div class="font-size-1000 font-weight-bold mb-1 font-monospace">Fira Code</div>
        <div class="row">
          <div class="col-xl-8">
            <div class="mb-3"><code>$font-family-sans-monospace</code></div>
            <div class="table-responsive">
              <table class="table table-sm bg-light font-monospace">
                <tbody>
                  <tr>
                    <td class="border-0 px-0">
                      <span class="display-6 font-weight-normal lh-1 text-uppercase">
                        abcdefghijklmnopqrstuvwxyz
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-0 px-0">
                      <span class="display-6 font-weight-normal lh-1">
                        abcdefghijklmnopqrstuvwxyz
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-0 px-0">
                      <span class="display-6 font-weight-normal lh-1">1234567890</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="col-xl-4">
            <div class="table-responsive">
              <table class="table table-sm table-hover bg-white font-monospace">
                <thead>
                  <tr class="bg-yellow-200">
                    <th scope="col">#</th>
                    <th scope="col">Weights</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>400</code></td><td><span style="font-weight: 400;">Regular</span></td></tr>
                  <tr><td><code>600</code></td><td><span style="font-weight: 600;">Semibold</span></td></tr>
                  <tr><td><code>700</code></td><td><span style="font-weight: 700;">Bold</span></td></tr>
                  <tr><td><code>800</code></td><td><span style="font-weight: 800;">ExtraBold</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <hr>

        <h2 class="mb-3">Type Sizing</h2>
        <p>
          Coming soon.
        </p>

        <div class="table-responsive">
          <table class="table table-hover bg-white">
            <thead>
              <tr class="bg-light">
                <th>SCSS Variable</th>
                <th>CSS Class</th>
                <th>Size</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>$font-size-000</code></td>
                <td><code>.font-size-000</code></td>
                <td>
                  <span class="font-size-000">Example copy 0123</span>
                  <br><small class="text-muted">0.625rem, 10px</small>
                </td>
              </tr>
              <tr>
                <td><code>$font-size-100</code></td>
                <td><code>.font-size-100</code></td>
                <td>
                  <span class="font-size-100">Example copy 0123</span>
                  <br><small class="text-muted">0.75rem, 12px</small>
                </td>
              </tr>
              <tr>
                <td><code>$font-size-200</code></td>
                <td><code>.font-size-200</code></td>
                <td>
                  <span class="font-size-200">Example copy 0123</span>
                  <br><small class="text-muted">0.8125rem, 13px</small>
                </td>
              </tr>
              <tr>
                <td><code>$font-size-300</code></td>
                <td><code>.font-size-300</code></td>
                <td>
                  <span class="font-size-300">Example copy 0123</span>
                  <br><small class="text-muted">0.875rem, 14px</small>
                </td>
              </tr>
              <tr>
                <td><code>$font-size-400</code></td>
                <td><code>.font-size-400</code></td>
                <td>
                  <span class="font-size-400">Example copy 0123</span>
                  <br><small class="text-muted">0.9375rem, 15px</small>
                </td>
              </tr>
              <tr>
                <td><code>$font-size-500</code></td>
                <td><code>.font-size-500</code></td>
                <td>
                  <span class="font-size-500">Example copy 0123</span>
                  <br><small class="text-muted">1rem, 16px</small>
                </td>
              </tr>
              <tr>
                <td><code>$font-size-600</code></td>
                <td><code>.font-size-600</code></td>
                <td>
                  <span class="font-size-600">Example copy 0123</span>
                  <br><small class="text-muted">1.25rem, 20px</small>
                </td>
              </tr>
              <tr>
                <td><code>$font-size-700</code></td>
                <td><code>.font-size-700</code></td>
                <td>
                  <span class="font-size-700">Example copy 0123</span>
                  <br><small class="text-muted">1.5rem, 24px</small>
                </td>
              </tr>
              <tr>
                <td><code>$font-size-800</code></td>
                <td><code>.font-size-800</code></td>
                <td>
                  <span class="font-size-800">Example copy 0123</span>
                  <br><small class="text-muted">1.75rem, 28px</small>
                </td>
              </tr>
              <tr>
                <td><code>$font-size-900</code></td>
                <td><code>.font-size-900</code></td>
                <td>
                  <span class="font-size-900">Example copy 0123</span>
                  <br><small class="text-muted">2rem, 32px</small>
                </td>
              </tr>
              <tr>
                <td><code>$font-size-1000</code></td>
                <td><code>.font-size-1000</code></td>
                <td>
                  <span class="font-size-1000">Example copy 0123</span>
                  <br><small class="text-muted">2.5rem, 40px</small>
                </td>
              </tr>
              <tr>
                <td><code>$font-size-1100</code></td>
                <td><code>.font-size-1100</code></td>
                <td>
                  <span class="font-size-1100">Example copy 0123</span>
                  <br><small class="text-muted">3rem, 48px</small>
                </td>
              </tr>
              <tr>
                <td><code>$font-size-1200</code></td>
                <td><code>.font-size-1200</code></td>
                <td>
                  <span class="font-size-1200">Example copy 0123</span>
                  <br><small class="text-muted">4rem, 56px</small>
                </td>
              </tr>
            </tbody>
          </table>
        </div>


        <hr>


        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            <h3 class="card-example-heading">Displays & Headers</h3>
            <div class="row">
              <div class="col-lg-6 mb-md-5">
                <div class="display-1 mb-2">Display 1</div>
                <div class="display-2 mb-2">Display 2</div>
                <div class="display-3 mb-2">Display 3</div>
                <div class="display-4 mb-2">Display 4</div>
                <div class="display-5 mb-2">Display 5</div>
                <div class="display-6 mb-2">Display 6</div>
              </div>
              <div class="col-lg-6 mb-md-5">
                <h1 class="mb-3">H1 Heading</h1>
                <h2 class="mb-3">H2 Heading</h2>
                <h3 class="mb-3">H3 Heading</h3>
                <h4 class="mb-3">H4 Heading</h4>
                <h5 class="mb-3">H5 Heading</h5>
                <h6 class="mb-3">H6 Heading</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="card card-body code-example">
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="code-example-heading">// HTML</h6>
          </div>

          <div v-highlight>
            <pre class="language-html"><code>&lt;div class="display-1"&gt;Display 1&lt;/div&gt;
&lt;div class="display-2"&gt;Display 2&lt;/div&gt;
&lt;div class="display-3"&gt;Display 3&lt;/div&gt;
&lt;div class="display-4"&gt;Display 4&lt;/div&gt;
&lt;div class="display-5"&gt;Display 5&lt;/div&gt;
&lt;div class="display-6"&gt;Display 6&lt;/div&gt;

&lt;h1&gt;H1 Heading&lt;/h1&gt;
&lt;h2&gt;H2 Heading&lt;/h2&gt;
&lt;h3&gt;H3 Heading&lt;/h3&gt;
&lt;h4&gt;H4 Heading&lt;/h4&gt;
&lt;h5&gt;H5 Heading&lt;/h5&gt;
&lt;h6&gt;H6 Heading&lt;/h6&gt;</code></pre>
          </div>
        </div>
        <!-- End code chunk -->

        <hr>

        <div class="card my-4">
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

