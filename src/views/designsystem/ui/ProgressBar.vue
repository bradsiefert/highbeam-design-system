<template>
  <div class="container-md slim-contain">
    <div class="row">
      <div class="col-sm">
        <breadcrumbs :previous="{ '/': 'Home', '/designsystem': 'Design System' }" active="Progress Bar"/>

        <h1>Progress Bar</h1>
        <p>
          Progress Bars are a way to show how far along some data point is. They're helpful for multiple step 
          registrations or showing a single kind of percentage data point that is easily derived from a total.
        </p>
        
        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            <h3 class="card-example-heading">Progress Bar</h3>
            <div class="progress mb-3">
              <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="progress mb-3">
              <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="progress mb-3">
              <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="progress mb-3">
              <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="progress mb-3">
              <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
            <hr>

            <h3 class="card-example-heading">Height, Color & Label</h3>
            <p>
              The default height of the progress bar is 8px. You can update the height of the bar by adding 
              <code>style="height: 4px;"</code> to the <code>.progress</code> surrounding div. To add a label, 
              add your copy inside the <code>.progress-bar</code> div. The color of the bar can be updated by 
              using the standard template colors like <code>.bg-info</code>.
            </p> 

            <div class="progress mb-3" style="height: 2px;">
              <div class="progress-bar bg-info" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="progress mb-3" style="height: 4px;">
              <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="progress mb-3" style="height: 16px;">
              <div class="progress-bar bg-info" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
            </div>

          </div>
        </div>
        <div class="card card-body code-example">
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="code-example-heading">// HTML</h6>
          </div>

          <div v-highlight>
            <pre class="language-html"><code>&lt;div class="progress"&gt;
  &lt;div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class="progress"&gt;
  &lt;div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class="progress"&gt;
  &lt;div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class="progress"&gt;
  &lt;div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class="progress"&gt;
  &lt;div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"&gt;&lt;/div&gt;
&lt;/div&gt;

// Sizing
&lt;div class="progress" style="height: 2px;"&gt;
  &lt;div class="progress-bar bg-info" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class="progress" style="height: 4px;"&gt;
  &lt;div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class="progress" style="height: 16px;"&gt;
  &lt;div class="progress-bar bg-info" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"&gt;75%&lt;/div&gt;
&lt;/div&gt;</code></pre>
          </div>
        </div> 
        <!-- End code chunk -->

      </div>
    </div>

    <div class="card my-4">
      <div class="card-body card-body-sm text-center">
        For more info → <a target="_blank" href="https://v5.getbootstrap.com/docs/5.0/components/progress/">
          Bootstrap v5 / Progress Bar
        </a>
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
