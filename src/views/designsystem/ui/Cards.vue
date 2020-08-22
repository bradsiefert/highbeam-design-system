<template>
  <div class="container skinny-contain">
    <div class="row">
      <div class="col-sm">
        <breadcrumbs :previous="{ '/': 'Home', '/designsystem': 'Design System' }" active="Cards"/>

        <h1>Cards</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus justo sed pulvinar hendrerit. Vivamus interdum sapien sapien, sit amet tempus justo lacinia ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean blandit ipsum sit amet neque varius, eget condimentum lacus egestas. Donec vulputate metus eu sagittis efficitur. Quisque dignissim nibh turpis, et maximus nibh aliquam aliquet. Quisque tempus et nunc eu malesuada. Maecenas sodales, ante vel condimentum lobortis, arcu libero faucibus augue, vel molestie ipsum dui sit amet lacus.
        </p>

        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            <h3 class="card-example-heading">Regular Cards</h3>

            <div class="row">
              <div class="col-md-6">
                <div class="card">
                  <div class="card-body">
                    <h2 class="card-title">Card Title Treatment</h2>
                    <h5 class="card-subtitle">Card Subtitle</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien quam. Sed dapibus 
                      est id enim facilisis, at posuere turpis adipiscing et intefa ung.
                    </p>
                    <a href="#" class="btn btn-primary mr-2">Card Action</a>
                    <a href="#" class="btn btn-link">Card Link</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="card card-body code-example">
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="code-example-heading">// HTML</h6>
          </div>

          <div v-highlight>
            <pre class="language-html"><code></code></pre>
          </div>
        </div> 
        <!-- End code chunk -->

        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            <h3 class="card-example-heading">Cards with Header and/or Footer</h3>

            <div class="row">
              <div class="col-md-6">
                <div class="card">
                  <div class="card-header">
                    Card Heading
                  </div>
                  <div class="card-body">
                    <h2 class="card-title">Card Title Treatment</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien quam. Sed dapibus 
                      est id enim facilisis, at posuere turpis adipiscing et intefa ung.
                    </p>
                    <a href="#" class="btn btn-primary mr-2">Card Action</a>
                    <a href="#" class="btn btn-link">Card Link</a>
                  </div>
                </div>
              </div>
            </div>

            <hr>

            <div class="row">
              <div class="col-md-6">
                <div class="card">
                  <div class="card-body">
                    <h2 class="card-title">Card Title Treatment</h2>
                    <p class="mb-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                  </ul>
                  <div class="card-body">
                    <a href="#" class="btn btn-primary mr-2">Card Action</a>
                    <a href="#" class="btn btn-link">Card Link</a>
                  </div>
                  <div class="card-footer">
                    Card Footer
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="card card-body code-example">
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="code-example-heading">// HTML</h6>
          </div>

          <div v-highlight>
            <pre class="language-html"><code></code></pre>
          </div>
        </div> 
        <!-- End code chunk -->

        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            <h3 class="card-example-heading">Cards with Image Tops</h3>

            <div class="row">
              <div class="col-md-6">

                <div class="card">
                  <img src="https://dummyimage.com/640x320/eee/dedede" class="card-img-top">
                  <div class="card-body">
                    <h2 class="card-title">Card Title Image</h2>
                    <h5 class="card-subtitle">Card Subtitle</h5>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary mr-2">Card Action</a>
                    <a href="#" class="btn btn-link">Card Link</a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
        <div class="card card-body code-example">
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="code-example-heading">// HTML</h6>
          </div>

          <div v-highlight>
            <pre class="language-html"><code></code></pre>
          </div>
        </div> 
        <!-- End code chunk -->
        
        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            <h3 class="card-example-heading">Cards with Tabs</h3>

            <div class="row">
              <div class="col-md-12">

                <div class="card text-center">
                  <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="true" href="#">Active</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                      </li>
                    </ul>
                  </div>
                  <div class="card-body">
                    <h2 class="card-title">Card Title Tabs</h2>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary mr-2">Card Action</a>
                    <a href="#" class="btn btn-link">Card Link</a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
        <div class="card card-body code-example">
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="code-example-heading">// HTML</h6>
          </div>

          <div v-highlight>
            <pre class="language-html"><code></code></pre>
          </div>
        </div> 
        <!-- End code chunk -->
        
        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            <h3 class="card-example-heading">Cards with Pills</h3>

            <div class="row">
              <div class="col-md-12">

                <div class="card text-center">
                  <div class="card-header">
                    <ul class="nav nav-pills card-header-pills">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="true" href="#">Active</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                      </li>
                    </ul>
                  </div>
                  <div class="card-body">
                    <h2 class="card-title">Card Title Pills</h2>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary mr-2">Card Action</a>
                    <a href="#" class="btn btn-link">Card Link</a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
        <div class="card card-body code-example">
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="code-example-heading">// HTML</h6>
          </div>

          <div v-highlight>
            <pre class="language-html"><code></code></pre>
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
