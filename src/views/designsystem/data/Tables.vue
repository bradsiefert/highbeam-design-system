<template>
  <div class="container-md slim-contain">
    <div class="row">
      <div class="col-sm">
        <breadcrumbs :previous="{ '/': 'Home', '/designsystem': 'Design System' }" active="Tables"/>

        <h1>Tabs</h1>
        <h3>
          <span class="badge bg-highlight text-dark">Under Construction</span>
        </h3>
        <p>
          Coming Soon
        </p>

        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            <h3 class="card-example-heading"> </h3>

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

        <!-- <div class="table-responsive">
          <table class="table table-hover table-data table-bordered">
            <thead>
              <tr class="bg-light">
                <th class="text-left" scope="col">Logo</th>
                <th class="text-left" scope="col">Make</th>
                <th class="text-left" scope="col">Model</th>
                <th scope="col">Stock #</th>
                <th scope="col">Days on Lot</th>
                <th scope="col">% Still on Lot</th>
                <th scope="col">Model Ave. <br>Days on Lot</th>
                <th scope="col">Model Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center"></td>
                <td class="text-left">Chrysler</td>
                <td class="text-left">Pacifica</td>
                <td>M20107</td>
                <td>299</td>
                <td>9</td>
                <td>125</td>
                <td>38</td>
              </tr>
              <tr>
                <td class="text-center"></td>
                <td class="text-left">Chrysler</td>
                <td class="text-left">Pacifica</td>
                <td>M20107</td>
                <td>299</td>
                <td>9</td>
                <td>125</td>
                <td>38</td>
              </tr>
            </tbody>
          </table>
        </div> -->

        <!-- Start code chunk -->
        <!-- <div class="card card-example">
          <div class="card-body">
            <h3 class="card-example-heading"> </h3>

          </div>
        </div>
        <div class="card card-body code-example">
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="code-example-heading">// HTML</h6>
          </div>

          <div v-highlight>
            <pre class="language-html"><code></code></pre>
          </div>
        </div> -->
        <!-- End code chunk -->

      </div>
    </div>

    <!-- <div class="row">
      <div class="col-sm">
        <div class="card my-4">
          <div class="card-body card-body-sm text-center">
            For more info → <a target="_blank" href="https://v5.getbootstrap.com/docs/5.0/content/tables/">
              Bootstrap v5 / Tables
            </a>
          </div>
        </div>
      </div>
    </div> -->

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
