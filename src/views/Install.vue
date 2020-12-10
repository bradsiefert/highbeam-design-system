<template>
  <div class="container-md slim-contain">
    <div class="row">
      <div class="col-sm">

        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item"><router-link to="/">Design System</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Download & Install</li>
          </ol>
        </nav>

        <h1 class="mt-4">Download & Install</h1>
        <h3>
          <span class="badge bg-highlight text-dark">Under Construction</span>
        </h3>

        <hr>

        <h2>SCSS & CSS</h2>
        <p>
          To include the Highbeam Design System into your web project, download the SCSS or CSS files below. These files
           are meant to augment
           <a target="_blank" href="https://v5.getbootstrap.com/docs/5.0/getting-started/download/">Bootstrap
           v5, and you'll need to download</a> and include it in your project. Many of the tweaks and changes
           to the framework will work with version v4 of Bootstrap, but it currently hasn't been tested with v4.
        </p>

        <p>
          If you have issues or find a bug, please open an issue on Github and we'll do our best to get them fixed.
        </p>
        <div class="d-lg-flex align-items-center text-center mb-4">
          <div>
            <button type="button" class="btn btn-primary btn-lg me-md-4 mb-3" disabled><strike>↓ Download v0 SCSS & CSS</strike></button>
          </div>
          <p>
            <span class="text-muted">Coming Soon!</span><!-- <strike>Last update: <code class="bg-transparent me-2">2020-XX-XX</code></strike> -->
          </p>
        </div>

        <!-- <h3>To include the Highbeam Design System in your project...</h3>
        <ol>
          <li>Install or include the latest version of Bootstrap 5. <a href="">More info here.</a></li>
          <li>Decide if you're using Bootstrap by either SCSS or CSS.</li>
          <li>Include </li>
        </ol> -->

        <hr>

        <h2><strike>Sketch File</strike></h2>
        <p>
          <strike>The companion file of this web app is the Highbeam Design System Sketch file. It has all of the elements
          saved as symbols to help you more quickly make design decisions or work on mockup ideas for screens.
          As changes happen to the web version of this design system, I will do my best to keep the Sketch file
          updated. A version of the Sketch file will be in repository at Github too.</strike>
        </p>
        <div class="d-lg-flex align-items-center text-center">
          <div>
            <button type="button" class="btn btn-highlight btn-lg me-md-4 mb-3" disabled><strike>↓ Download Sketch File v0</strike></button>
          </div>
          <p>
            <span class="text-muted">Coming Soon</span><!-- Last update: <code class="bg-transparent me-2">2020-09-XX</code> -->
          </p>
        </div>

        <hr>

        <GithubLink />

      </div>
    </div>
  </div> <!-- container -->
</template>
<script>
  import GithubLink from '@/components/GithubLink.vue'

  export default {
    name: 'Download & Install',
    components: {
      GithubLink
    }
  }
  </script>
