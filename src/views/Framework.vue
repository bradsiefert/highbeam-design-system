<template>
  <div class="container skinny-contain">
    <div class="row">
      <div class="col-sm">

        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item"><router-link to="/">Design System</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Framework</li>
          </ol>
        </nav>

        <h1 class="mt-4">Framework</h1>
        <p>
          This design system is built on top of <code>Bootstrap v5.0.0</code>, which is still the it's alpha phase. There are 
          likely to be more updates to come, but I don't think it will break much (if any) of this design system. 
          I've tried my best to, if at all possible, update SCSS variables first, then write custom CSS to augment 
          those changes. I think this will help to make updates to go more smoothly. The <code>variables-highbeam.scss</code> 
          file has the same order of variables as Bootstrap v5's <code>variables.scss</code> file to make it easier to compare 
          the two files.
        </p>
      </div>
    </div>
  </div> <!-- container -->
</template>

