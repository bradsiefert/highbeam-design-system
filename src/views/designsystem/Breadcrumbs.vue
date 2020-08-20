<template>
  <div class="container skinny-contain">
    <div class="row">
      <div class="col-sm">

        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item"><router-link to="/">Design System</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Breadcrumbs</li>
          </ol>
        </nav>

        <h1>Breadcrumbs</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus justo sed pulvinar hendrerit. 
          Vivamus interdum sapien sapien, sit amet tempus justo lacinia ut.
        </p>
        
        <div class="card card-body card-example">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">Home</li>
            </ol>
          </nav>

          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Active Page</li>
            </ol>
          </nav>

          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item"><a href="/">Design System</a></li>
              <li class="breadcrumb-item active" aria-current="page">Active Page</li>
            </ol>
          </nav>
        </div>

        <div class="card card-body code-example">
          <button class="btn btn-primary btn-sm btn-code">Copy</button>
          <pre><code>Code goes here.</code></pre>
        </div>

      </div>
    </div>
  </div> <!-- container -->
</template>

