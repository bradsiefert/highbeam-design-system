<template>
  <div class="container skinny-contain">
    <div class="row">
      <div class="col-sm">

        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item"><router-link to="/">Design System</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Spacing</li>
          </ol>
        </nav>

        <h1 class="mt-4">Spacing</h1>
        <p>
          To be honest I've found Bootstrap's spacers to be lacking. I need many more options than the few they 
          offered. I took their 6 spaces and increased it them to 12 which I've found dramatically helps the 
          flexibility of spacing elements.
        </p>
        
        <p>
          These spacers can be used in the same way as Bootstrap's original spacers, on both margin and padding, 
          and can be used in single or multiple directions. Consult Bootstrap's spacing documentation for more 
          information about usage.
        </p>

        <div class="row">
          <div class="col-lg-6 col-xl-4">
            <table class="table table-sm table-hover table-bordered rounded text-center bg-white">
              <thead>
                <tr class="bg-highlight">
                  <th scope="col">#</th>
                  <th scope="col">Size (in rems)</th>
                  <th scope="col">Pixels</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>12</td><th scope="row">16</th><td>256px</td></tr>
                <tr><td>11</td><th scope="row">12</th><td>192px</td></tr>
                <tr><td>10</td><th scope="row">8</th><td>128px</td></tr>
                <tr><td>9</td><th scope="row">6</th><td>96px</td></tr>
                <tr><td>8</td><th scope="row">5</th><td>80px</td></tr>
                <tr><td>7</td><th scope="row">4</th><td>64px</td></tr>
                <tr><td>6</td><th scope="row">3</th><td>48px</td></tr>
                <tr><td>5</td><th scope="row">2</th><td>32px</td></tr>
                <tr><td>4</td><th scope="row">1.5</th><td>24px</td></tr>
                <tr><td>3</td><th scope="row">1</th><td>16px</td></tr>
                <tr><td>2</td><th scope="row">0.5</th><td>8px</td></tr>
                <tr><td>1</td><th scope="row">0.25</th><td>4px</td></tr>
                <tr><td>0</td><th scope="row">0</th><td>0px</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        
        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            <!-- <h3 class="card-example-heading">Plain Badges</h3> -->

              <div class="bg-light d-inline-block mb-3 border text-center p-1">
              &nbsp;
              </div>
              <div class="text-dark">
                0.25rem <small class="font-weight-bold">(256px)</small>
              </div>

              <!-- <div class="bg-light d-inline-block mb-3 border text-center p-15">
                <div class="text-dark">
                  15rem<br>
                  <small class="font-weight-bold">(256px)</small>
                </div>
              </div>
              
              <div class="bg-light d-inline-block mb-3 border text-center p-14">
                <div class="text-dark">
                  14rem<br>
                  <small class="font-weight-bold">(256px)</small>
                </div>
              </div>

              <div class="bg-light d-inline-block mb-3 border text-center p-13">
                <div class="text-dark">
                  13rem<br>
                  <small class="font-weight-bold">(256px)</small>
                </div>
              </div> -->


          </div>
        </div>
        <!-- End code chunk -->

      </div>
    </div>
  </div> <!-- container -->
</template>

