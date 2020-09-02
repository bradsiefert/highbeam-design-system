<template>
  <div class="container slim-contain">
    <div class="row">
      <div class="col-sm">

        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item"><router-link to="/">Design System</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Containers & Grid</li>
          </ol>
        </nav>

        <h1 class="mt-4">Containers & Grid</h1>
        <h3>
          <span class="badge bg-highlight text-dark mb-3">Under Construction</span>
        </h3>
        <p>
          Description coming soon.
        </p>
        
        <h3>Skinny Containers</h3>
        <p>
          Sometimes Bootstrap's <code>.container</code> is just too darn wide. Can you relate? If so, these skinny 
          containers are for you.
        </p>
        <table class="table table-hover table-bordered bg-white">
          <tbody>
            <tr>
              <td class="is-narrow">
                <code>.container</code>
              </td>
              <td>Maximum width 1200px</td>
            </tr>
            <tr>
              <td class="is-narrow">
                <code>.container</code> <code>.slim-contain</code>
              </td>
              <td>Maximum width 1024px</td>
            </tr>
            <tr>
              <td class="is-narrow">
                <code>.container</code> <code>.skinny-contain</code>
              </td>
              <td>Maximum width 800px</td>
            </tr>
            <tr>
              <td class="is-narrow">
                <code>.container</code> <code>.scrawny-contain</code>
              </td>
              <td>Maximum width 544px</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  </div> <!-- container -->
</template>

