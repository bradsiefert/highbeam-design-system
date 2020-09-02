<template>
  <div class="container skinny-contain">
    <div class="row">
      <div class="col-sm">
        <breadcrumbs :previous="{ '/': 'Home', '/designsystem': 'Design System' }" active="List Groups"/>

        <h1>List Groups</h1>
        <p>
          List groups are a secondary or tertiary way to navigate or collect data. They can sit inside or outside of cards.
        </p>
        
        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">

            <div class="row gx-3">
              <div class="col-xl-4 col-lg-6">
                <div class="list-group mb-3">
                  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                    Dealerships
                  </a>
                  <a href="#" class="list-group-item list-group-item-action">Locations</a>
                  <a href="#" class="list-group-item list-group-item-action">Vehicles</a>
                  <a href="#" class="list-group-item list-group-item-action">Employees</a>
                  <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">
                    Admin Account
                  </a>
                </div>
              </div>
              
              <div class="col-xl-4 col-lg-6">
                <div class="list-group">
                  <label class="list-group-item">
                    <input class="form-check-input mr-2" type="checkbox" value="">I have worked in technology.
                  </label>
                  <label class="list-group-item">
                    <input class="form-check-input mr-2" type="checkbox" value="">I have worked in automotive.
                  </label>
                  <label class="list-group-item">
                    <input class="form-check-input mr-2" type="checkbox" value="">I have worked in medicine.
                  </label>
                  <label class="list-group-item">
                    <input class="form-check-input mr-2" type="checkbox" value="">I have worked in fintech.
                  </label>
                  <label class="list-group-item">
                    <input class="form-check-input mr-2" type="checkbox" value="">I have worked in law.
                  </label>
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
            <pre class="language-html"><code>&lt;div class="list-group"&gt;
  &lt;a href="#" class="list-group-item list-group-item-action active" aria-current="true"&gt;
    Dealerships
  &lt;/a&gt;
  &lt;a href="#" class="list-group-item list-group-item-action"&gt;Locations&lt;/a&gt;
  &lt;a href="#" class="list-group-item list-group-item-action"&gt;Vehicles&lt;/a&gt;
  &lt;a href="#" class="list-group-item list-group-item-action"&gt;Employees&lt;/a&gt;
  &lt;a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true"&gt;
    Admin Account
  &lt;/a&gt;
&lt;/div&gt;

// Checkboxes
&lt;div class="list-group"&gt;
  &lt;label class="list-group-item"&gt;
    &lt;input class="form-check-input mr-2" type="checkbox" value=""&gt;I have worked in technology.
  &lt;/label&gt;
  &lt;label class="list-group-item"&gt;
    &lt;input class="form-check-input mr-2" type="checkbox" value=""&gt;I have worked in automotive.
  &lt;/label&gt;
  &lt;label class="list-group-item"&gt;
    &lt;input class="form-check-input mr-2" type="checkbox" value=""&gt;I have worked in medicine.
  &lt;/label&gt;
  &lt;label class="list-group-item"&gt;
    &lt;input class="form-check-input mr-2" type="checkbox" value=""&gt;I have worked in fintech.
  &lt;/label&gt;
  &lt;label class="list-group-item"&gt;
    &lt;input class="form-check-input mr-2" type="checkbox" value=""&gt;I have worked in law.
  &lt;/label&gt;
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
            For more info → <a target="_blank" href="https://v5.getbootstrap.com/docs/5.0/components/list-group/">
              Bootstrap v5 / List Groups
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
