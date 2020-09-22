<template>
  <div class="container-md slim-contain">
    <div class="row">
      <div class="col-sm">
        <breadcrumbs :previous="{ '/': 'Home', '/designsystem': 'Design System' }" active="Pagination"/>

        <h1>Pagination</h1>
        <p>
          Coming soon.
        </p>

        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            <h3 class="card-example-heading">Pagination Sizing</h3>
            <nav aria-label="Page Navigation Small">
              <ul class="pagination pagination-sm">
                <li class="page-item disabled"><a class="page-link" href="#">Prev</a></li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
              </ul>
            </nav>

            <nav aria-label="Page Navigation Regular">
              <ul class="pagination">
                <li class="page-item disabled"><a class="page-link" href="#">Prev</a></li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
              </ul>
            </nav>

            <nav aria-label="Page Navigation Large">
              <ul class="pagination pagination-lg">
                <li class="page-item disabled"><a class="page-link" href="#">Prev</a></li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
              </ul>
            </nav>

          </div>
        </div>
        <div class="card card-body code-example">
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="code-example-heading">// HTML</h6>
          </div>

          <div v-highlight>
            <pre class="language-html"><code>&lt;nav aria-label="Page Navigation Small"&gt;
  &lt;ul class="pagination pagination-sm"&gt;
    &lt;li class="page-item disabled"&gt;&lt;a class="page-link" href="#"&gt;Prev&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item active"&gt;&lt;a class="page-link" href="#"&gt;1&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;2&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;3&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;Next&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;


&lt;nav aria-label="Page Navigation Regular"&gt;
  &lt;ul class="pagination"&gt;
    &lt;li class="page-item disabled"&gt;&lt;a class="page-link" href="#"&gt;Prev&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item active"&gt;&lt;a class="page-link" href="#"&gt;1&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;2&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;3&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;Next&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;


&lt;nav aria-label="Page Navigation Large"&gt;
  &lt;ul class="pagination pagination-lg"&gt;
    &lt;li class="page-item disabled"&gt;&lt;a class="page-link" href="#"&gt;Prev&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item active"&gt;&lt;a class="page-link" href="#"&gt;1&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;2&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;3&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;Next&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</code></pre>
          </div>
        </div>
        <!-- End code chunk -->

      </div>
    </div>

    <div class="row">
      <div class="col-sm">
        <div class="card my-4">
          <div class="card-body card-body-sm text-center">
            For more info → <a target="_blank" href="https://v5.getbootstrap.com/docs/5.0/components/pagination/">
              Bootstrap v5 / Pagination
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
