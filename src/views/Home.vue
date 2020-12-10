<template>
  <div class="container-md slim-contain">
    <div class="row">
      <div class="col-sm">

        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item"><router-link to="/">Design System</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Overview</li>
          </ol>
        </nav>

        <h1 class="display-4 fw-bold mt-4 mb-2">
          Highbeam Design System
        </h1>
        <h2>
          <span class="badge bg-highlight text-dark mb-2">Under Construction</span>
        </h2>
        <p class="lead">
          Highbeam Design System is built by Brad Siefert and the <a target="_blank" href="https://earlybird.co">Earlybird</a>/<a target="_blank" href="https://highbeamdata.com">Highbeam</a> team. It's the design principles and user interface elements that make up our products. It's meant to be a reference guide to quickly and consistently create web apps for our clients.
        </p>

        <img src="@/assets/images/preview-image-wide.jpg" class="img-fluid my-3" alt="Highbeam Preview Image">

        <hr>
        <h2>Framework</h2>
        <p>
          This design system is built on top of <code>Bootstrap v5</code>, which is still in its alpha phase.
          There are many updates to come, but I don't think it will break much (if any) of this design
          system. I've tried my best to, if at all possible, update SCSS variables first, then write custom CSS to augment those changes. I think this will help to make updates to go more smoothly. The <code>variables-highbeam.scss</code> file has the same order of variables as Bootstrap v5's <code>variables.scss</code> file to make it easier to compare the two files.
        </p>

        <p>
          There are many ways to use a front-end framework like Bootstrap and I've tried to stay as true to the "Bootstrap way" of building components. There will be some custom classes and small differences, but overall, it should be well within the standards of someone who has used Bootstrap's framework before.
        </p>

        <p>
          I will not be copying Bootstrap's wonderful documentation line for line. I'm focusing on clearly
          defining the UI elements and components to be explained and copied for use in your web apps. Please consult Bootstrap's documentation for more information about utilities, classes, and their design principles.
        </p>

        <div class="card my-4">
          <div class="card-body card-body-sm text-center">
            For more info →
            <a target="_blank" href="https://v5.getbootstrap.com/docs/5.0/getting-started/introduction/">
              Bootstrap v5 / Documentation
            </a>
          </div>
        </div>

        <h2 class="mb-3">Release Notes</h2>
        <div class="mb-4">
          <h4 class="d-inline-block me-2 mb-1">Version 1</h4>
          <code class="bg-transparent me-2">2020-XX-XX</code>
          <p class="small">
            Initial commit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus justo sed pulvinar
            hendrerit. Vivamus interdum sapien sapien, sit amet tempus justo lacinia ut. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>

        <GithubLink />

      </div>
    </div>
  </div> <!-- container -->
</template>

<script>
import GithubLink from '@/components/GithubLink.vue'

export default {
  name: 'Home',
  components: {
    GithubLink
  }
}
</script>
