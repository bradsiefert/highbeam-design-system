<template>
  <div class="container-md slim-contain">
    <div class="row">
      <div class="col-sm">
        <breadcrumbs :previous="{ '/': 'Home', '/designsystem': 'Design System' }" active="Cards"/>

        <h1>Cards</h1>
        <p>
          Description coming soon.
        </p>
        
        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            <h3 class="card-example-heading">Card Box Options</h3>
            <div class="card mb-3">
              <div class="card-body card-body-sm">
                Default
              </div>
            </div>

            <div class="card well mb-3">
              <div class="card-body card-body-sm">
                Well
              </div>
            </div>

            <div class="card raised mb-3">
              <div class="card-body card-body-sm">
                Raised
              </div>
            </div>
          </div>
        </div>
        <div class="card card-body code-example">
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="code-example-heading">// HTML</h6>
          </div>

          <div v-highlight>
            <pre class="language-html"><code>&lt;div class="card"&gt;
  &lt;div class="card-body"&gt;
    Default
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="card well"&gt;
  &lt;div class="card-body"&gt;
    Well
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="card raised"&gt;
  &lt;div class="card-body"&gt;
    Raised
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
          </div>
        </div> 
        <!-- End code chunk -->

        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            <h3 class="card-example-heading">Regular Card</h3>

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
                    <a href="#" class="btn btn-primary me-2">Card Action</a>
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
            <pre class="user-select-all language-html"><code>&lt;div class="card"&gt;
  &lt;div class="card-body"&gt;
    &lt;h2 class="card-title"&gt;Card Title Treatment&lt;/h2&gt;
    &lt;h5 class="card-subtitle"&gt;Card Subtitle&lt;/h5&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien quam. Sed dapibus 
      est id enim facilisis, at posuere turpis adipiscing et intefa ung.
    &lt;/p&gt;
    &lt;a href="#" class="btn btn-primary me-2"&gt;Card Action&lt;/a&gt;
    &lt;a href="#" class="btn btn-link"&gt;Card Link&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
          </div>
        </div> 
        <!-- End code chunk -->

        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            <h3 class="card-example-heading">Card with Header and/or Footer</h3>

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
                    <a href="#" class="btn btn-primary me-2">Card Action</a>
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
                    <a href="#" class="btn btn-primary me-2">Card Action</a>
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
            <pre class="user-select-all language-html"><code>&lt;div class="card"&gt;
  &lt;div class="card-header"&gt;
    Card Heading
  &lt;/div&gt;
  &lt;div class="card-body"&gt;
    &lt;h2 class="card-title"&gt;Card Title Treatment&lt;/h2&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien quam. Sed dapibus 
      est id enim facilisis, at posuere turpis adipiscing et intefa ung.
    &lt;/p&gt;
    &lt;a href="#" class="btn btn-primary me-2"&gt;Card Action&lt;/a&gt;
    &lt;a href="#" class="btn btn-link"&gt;Card Link&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
          </div>
          
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="code-example-heading">// HTML</h6>
          </div>

          <div v-highlight>
            <pre class="user-select-all language-html"><code>&lt;div class="card"&gt;
  &lt;div class="card-header"&gt;
    Card Heading
  &lt;/div&gt;
  &lt;div class="card-body"&gt;
    &lt;h2 class="card-title"&gt;Card Title Treatment&lt;/h2&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien quam. Sed dapibus 
      est id enim facilisis, at posuere turpis adipiscing et intefa ung.
    &lt;/p&gt;
    &lt;a href="#" class="btn btn-primary me-2"&gt;Card Action&lt;/a&gt;
    &lt;a href="#" class="btn btn-link"&gt;Card Link&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
          </div>
        </div> 
        <!-- End code chunk -->

        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            <h3 class="card-example-heading">Card with Image Tops</h3>

            <div class="row">
              <div class="col-md-6">

                <div class="card">
                  <img src="https://dummyimage.com/640x320/eee/dedede" class="card-img-top">
                  <div class="card-body">
                    <h2 class="card-title">Card Title Image</h2>
                    <h5 class="card-subtitle">Card Subtitle</h5>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary me-2">Card Action</a>
                    <a href="#" class="btn btn-link">Card Link</a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
        <div class="card card-body code-example">
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="user-select-all code-example-heading">// HTML</h6>
          </div>

          <div v-highlight>
            <pre class="user-select-all language-html"><code>&lt;div class="card"&gt;
  &lt;img src="https://dummyimage.com/640x320/eee/dedede" class="card-img-top"&gt;
  &lt;div class="card-body"&gt;
    &lt;h2 class="card-title"&gt;Card Title Image&lt;/h2&gt;
    &lt;h5 class="card-subtitle"&gt;Card Subtitle&lt;/h5&gt;
    &lt;p&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
    &lt;a href="#" class="btn btn-primary me-2"&gt;Card Action&lt;/a&gt;
    &lt;a href="#" class="btn btn-link"&gt;Card Link&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
          </div>
        </div> 
        <!-- End code chunk -->
        
        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            <h3 class="card-example-heading">Card with Tabs</h3>

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
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Inactive</a>
                      </li>
                    </ul>
                  </div>
                  <div class="card-body">
                    <h2 class="card-title">Card Title Tabs</h2>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary me-2">Card Action</a>
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
            <pre class="user-select-all language-html"><code>&lt;div class="card text-center"&gt;
  &lt;div class="card-header"&gt;
    &lt;ul class="nav nav-tabs card-header-tabs"&gt;
      &lt;li class="nav-item"&gt;
        &lt;a class="nav-link active" aria-current="true" href="#"&gt;Active&lt;/a&gt;
      &lt;/li&gt;
      &lt;li class="nav-item"&gt;
        &lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;
      &lt;/li&gt;
      &lt;li class="nav-item"&gt;
        &lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;
      &lt;/li&gt;
      &lt;li class="nav-item"&gt;
        &lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;
      &lt;/li&gt;
      &lt;li class="nav-item"&gt;
        &lt;a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"&gt;Inactive&lt;/a&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  &lt;div class="card-body"&gt;
    &lt;h2 class="card-title"&gt;Card Title Tabs&lt;/h2&gt;
    &lt;p&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
    &lt;a href="#" class="btn btn-primary me-2"&gt;Card Action&lt;/a&gt;
    &lt;a href="#" class="btn btn-link"&gt;Card Link&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
          </div>
        </div> 
        <!-- End code chunk -->
        
        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            <h3 class="card-example-heading">Card with Pills</h3>

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
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Inactive</a>
                      </li>
                    </ul>
                  </div>
                  <div class="card-body">
                    <h2 class="card-title">Card Title Pills</h2>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary me-2">Card Action</a>
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
            <pre class="user-select-all language-html"><code>&lt;div class="card text-center"&gt;
  &lt;div class="card-header"&gt;
    &lt;ul class="nav nav-pills card-header-pills"&gt;
      &lt;li class="nav-item"&gt;
        &lt;a class="nav-link active" aria-current="true" href="#"&gt;Active&lt;/a&gt;
      &lt;/li&gt;
      &lt;li class="nav-item"&gt;
        &lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;
      &lt;/li&gt;
      &lt;li class="nav-item"&gt;
        &lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;
      &lt;/li&gt;
      &lt;li class="nav-item"&gt;
        &lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;
      &lt;/li&gt;
      &lt;li class="nav-item"&gt;
        &lt;a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"&gt;Inactive&lt;/a&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  &lt;div class="card-body"&gt;
    &lt;h2 class="card-title"&gt;Card Title Pills&lt;/h2&gt;
    &lt;p&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
    &lt;a href="#" class="btn btn-primary me-2"&gt;Card Action&lt;/a&gt;
    &lt;a href="#" class="btn btn-link"&gt;Card Link&lt;/a&gt;
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
            For more info → <a target="_blank" href="https://v5.getbootstrap.com/docs/5.0/components/card/">Bootstrap v5 / Cards</a>
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
