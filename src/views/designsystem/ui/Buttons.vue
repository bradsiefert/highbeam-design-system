<template>
  <div class="container skinny-contain">
    <div class="row">
      <div class="col-sm">
        <breadcrumbs :previous="{ '/': 'Home', '/designsystem': 'Design System' }" active="Buttons"/>

        <h1>Buttons</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus justo sed pulvinar hendrerit. 
          Vivamus interdum sapien sapien, sit amet tempus justo lacinia ut.
        </p>
        
        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            <h3 class="card-example-heading">Regular Buttons</h3>
            <button type="button" class="mr-1 btn btn-primary">Primary</button>
            <button type="button" class="mr-1 btn btn-info">Info</button>
            <button type="button" class="mr-1 btn btn-success">Success</button>
            <button type="button" class="mr-1 btn btn-tip">Tip</button>
            <button type="button" class="mr-1 btn btn-danger">Danger</button>
            <button type="button" class="mr-1 btn btn-warning">Warning</button>
            <button type="button" class="mr-1 btn btn-highlight">Highlight</button>
            <button type="button" class="mr-1 btn btn-light">Light</button>
            <button type="button" class="mr-1 btn btn-secondary">Secondary</button>
            <button type="button" class="mr-1 btn btn-dark">Dark</button>
            <button type="button" class="mr-1 btn btn-link">Link</button>
          </div>
        </div>
        <div class="card card-body code-example">
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="code-example-heading">// HTML</h6>
          </div>

          <div v-highlight>
            <pre class="language-html"><code>&lt;button type="button" class="btn btn-primary"&gt;Primary&lt;/button&gt;
&lt;button type="button" class="btn btn-info"&gt;Info&lt;/button&gt;
&lt;button type="button" class="btn btn-success"&gt;Success&lt;/button&gt;
&lt;button type="button" class="btn btn-tip"&gt;tip&lt;/button&gt;
&lt;button type="button" class="btn btn-danger"&gt;Danger&lt;/button&gt;
&lt;button type="button" class="btn btn-warning"&gt;Warning&lt;/button&gt;
&lt;button type="button" class="btn btn-highlight"&gt;Highlight&lt;/button&gt;
&lt;button type="button" class="btn btn-light"&gt;Light&lt;/button&gt;
&lt;button type="button" class="btn btn-secondary"&gt;Secondary&lt;/button&gt;
&lt;button type="button" class="btn btn-dark"&gt;Dark&lt;/button&gt;
&lt;button type="button" class="btn btn-link"&gt;Link&lt;/button&gt;</code></pre>
          </div>
        </div> 
        <!-- End code chunk -->
        
        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            <h3 class="card-example-heading">Outline Buttons</h3>
            <button type="button" class="mr-1 btn btn-outline-primary">Primary</button>
            <button type="button" class="mr-1 btn btn-outline-info">Info</button>
            <button type="button" class="mr-1 btn btn-outline-success">Success</button>
            <button type="button" class="mr-1 btn btn-outline-tip">Tip</button>
            <button type="button" class="mr-1 btn btn-outline-danger">Danger</button>
            <button type="button" class="mr-1 btn btn-outline-warning">Warning</button>
            <button type="button" class="mr-1 btn btn-outline-highlight">Highlight</button>
            <button type="button" class="mr-1 btn btn-outline-light">Light</button>
            <button type="button" class="mr-1 btn btn-outline-secondary">Secondary</button>
            <button type="button" class="mr-1 btn btn-outline-dark">Dark</button>
          </div>
        </div>
        <div class="card card-body code-example">
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="code-example-heading">// HTML</h6>
          </div>

          <div v-highlight>
            <pre class="language-html"><code>&lt;button type="button" class="btn btn-outline-primary"&gt;Primary&lt;/button&gt;
&lt;button type="button" class="btn btn-outline-info"&gt;Info&lt;/button&gt;
&lt;button type="button" class="btn btn-outline-success"&gt;Success&lt;/button&gt;
&lt;button type="button" class="btn btn-outline-tip"&gt;tip&lt;/button&gt;
&lt;button type="button" class="btn btn-outline-danger"&gt;Danger&lt;/button&gt;
&lt;button type="button" class="btn btn-outline-warning"&gt;Warning&lt;/button&gt;
&lt;button type="button" class="btn btn-outline-highlight"&gt;Highlight&lt;/button&gt;
&lt;button type="button" class="btn btn-outline-light"&gt;Light&lt;/button&gt;
&lt;button type="button" class="btn btn-outline-secondary"&gt;Secondary&lt;/button&gt;
&lt;button type="button" class="btn btn-outline-dark"&gt;Dark&lt;/button&gt;
&lt;button type="button" class="btn btn-outline-link"&gt;Link&lt;/button&gt;</code></pre>
          </div>
        </div> 
        <!-- End code chunk -->

        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            <h3 class="card-example-heading">Inactive Buttons</h3>
            <button type="button" class="mr-1 btn btn-primary" disabled>Primary</button>
            <button type="button" class="mr-1 btn btn-info" disabled>Info</button>
            <button type="button" class="mr-1 btn btn-success" disabled>Success</button>
            <button type="button" class="mr-1 btn btn-tip" disabled>Tip</button>
            <button type="button" class="mr-1 btn btn-danger" disabled>Danger</button>
            <button type="button" class="mr-1 btn btn-warning" disabled>Warning</button>
            <button type="button" class="mr-1 btn btn-highlight" disabled>Highlight</button>
            <button type="button" class="mr-1 btn btn-light" disabled>Light</button>
            <button type="button" class="mr-1 btn btn-secondary" disabled>Secondary</button>
            <button type="button" class="mr-1 btn btn-dark" disabled>Dark</button>
            <button type="button" class="mr-1 btn btn-link" disabled>Link</button>
          </div>
        </div>
        <div class="card card-body code-example">
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="code-example-heading">// HTML</h6>
          </div>

          <div v-highlight>
            <pre class="language-html"><code>&lt;button type="button" class="btn btn-primary" disabled&gt;Primary&lt;/button&gt;
&lt;button type="button" class="btn btn-info" disabled&gt;Info&lt;/button&gt;
&lt;button type="button" class="btn btn-success" disabled&gt;Success&lt;/button&gt;
&lt;button type="button" class="btn btn-tip" disabled&gt;tip&lt;/button&gt;
&lt;button type="button" class="btn btn-danger" disabled&gt;Danger&lt;/button&gt;
&lt;button type="button" class="btn btn-warning" disabled&gt;Warning&lt;/button&gt;
&lt;button type="button" class="btn btn-highlight" disabled&gt;Highlight&lt;/button&gt;
&lt;button type="button" class="btn btn-light" disabled&gt;Light&lt;/button&gt;
&lt;button type="button" class="btn btn-secondary" disabled&gt;Secondary&lt;/button&gt;
&lt;button type="button" class="btn btn-dark" disabled&gt;Dark&lt;/button&gt;
&lt;button type="button" class="btn btn-link" disabled&gt;Link&lt;/button&gt;</code></pre>
          </div>
        </div> 
        <!-- End code chunk -->
        
        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            <h3 class="card-example-heading">Button Sizes</h3>
            <button type="button" class="mr-1 btn btn-xl btn-primary">Button XL</button>
            <button type="button" class="mr-1 btn btn-lg btn-primary">Button LG</button>
            <button type="button" class="mr-1 btn btn-primary">Button</button>
            <button type="button" class="mr-1 btn btn-sm btn-primary">Button SM</button>
            <button type="button" class="mr-1 btn btn-xs btn-primary">Button XS</button>
          </div>
        </div>
        <div class="card card-body code-example">
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="code-example-heading">// HTML</h6>
          </div>

          <div v-highlight>
            <pre class="user-select-all language-html"><code>&lt;button type="button" class="btn btn-xl btn-primary"&gt;Button XL&lt;/button&gt;
&lt;button type="button" class="btn btn-lg btn-primary"&gt;Button LG&lt;/button&gt;
&lt;button type="button" class="btn btn-primary"&gt;Button&lt;/button&gt;
&lt;button type="button" class="btn btn-sm btn-primary"&gt;Button SM&lt;/button&gt;
&lt;button type="button" class="btn btn-xs btn-primary"&gt;Button XS&lt;/button&gt;</code></pre>
          </div>
        </div> 
        <!-- End code chunk -->
        
        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            <h3 class="card-example-heading">Button Groups</h3>
            <div class="btn-group">
              <a href="#" class="btn btn-primary active">Active Link</a>
              <a href="#" class="btn btn-primary">Link</a>
              <a href="#" class="btn btn-primary">Link</a>
            </div>
            
            <hr>

            <div class="btn-group">
              <a href="#" class="btn btn-outline-dark active">Active Link</a>
              <a href="#" class="btn btn-outline-dark">Link</a>
              <a href="#" class="btn btn-outline-dark">Link</a>
            </div>
          </div>
        </div>
        <div class="card card-body code-example">
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="code-example-heading">// HTML</h6>
          </div>

          <div v-highlight>
            <pre class="language-html"><code>&lt;div class="btn-group"&gt;
  &lt;a href="#" class="btn btn-primary active"&gt;Active Link&lt;/a&gt;
  &lt;a href="#" class="btn btn-primary"&gt;Link&lt;/a&gt;
  &lt;a href="#" class="btn btn-primary"&gt;Link&lt;/a&gt;
&lt;/div&gt;

&lt;div class="btn-group"&gt;
  &lt;a href="#" class="btn btn-outline-dark active"&gt;Active Link&lt;/a&gt;
  &lt;a href="#" class="btn btn-outline-dark"&gt;Link&lt;/a&gt;
  &lt;a href="#" class="btn btn-outline-dark"&gt;Link&lt;/a&gt;
&lt;/div&gt;</code></pre>
          </div>
        </div> 
        <!-- End code chunk -->
        
        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            <h3 class="card-example-heading">Button Dropdowns</h3>
            
            <h4>Single Dropdown</h4>
            <div class="dropdown">
              <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                Dropdown Button
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>

            <hr>

            <h4>Split Dropdown</h4>
            <div class="btn-group">
              <button type="button" class="btn btn-tip">Action</button>
              <button type="button" class="btn btn-tip dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card card-body code-example">
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="code-example-heading">// HTML</h6>
          </div>

          <div v-highlight>
            <pre class="language-html"><code>&lt;div class="dropdown"&gt;
  &lt;button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false"&gt;
    Dropdown Button
  &lt;/button&gt;
  &lt;ul class="dropdown-menu" aria-labelledby="dropdownMenuButton"&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;

&lt;div class="btn-group"&gt;
  &lt;button type="button" class="btn btn-info"&gt;Action&lt;/button&gt;
  &lt;button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false"&gt;
    &lt;span class="sr-only"&gt;Toggle Dropdown&lt;/span&gt;
  &lt;/button&gt;
  &lt;ul class="dropdown-menu"&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;hr class="dropdown-divider"&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Separated link&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</code></pre>
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
