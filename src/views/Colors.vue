<template>
  <div class="container slim-contain">
    <div class="row">
      <div class="col-sm">

        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item"><router-link to="/">Design System</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Colors</li>
          </ol>
        </nav>

        <h1 class="mt-4">Colors</h1>
        <p>
          Colors bring a design to life. They tell the user which actions to take and help identify what's most 
          important. 
        </p>

        <!-- Start code chunk -->
        <div class="card card-example rounded">
          <div class="card-body">
            <h2 class="card-example-heading">Theme Colors</h2>
            <p>
              Bootstrap has these base theme colors that they use for alerts, buttons, badges, and all sorts of 
              other places throughout the framework. They're given a more abstract name like "danger" or "warning" 
              to help you remember the ways they might be used. I've added two colors to the theme: "tip" and 
              "highlight". Tip uses <code>$teal</code> and Highlight uses <code>$yellow</code>. Making these theme 
              colors makes it so there are badges, alerts, and buttons with those names available in the system. 
            </p>
            
            <p class="mb-2">
              Each color has been tweaked to better fit this design system. They're more saturated, brighter, and 
              vibrant. There are 9 different gray colors that are used quite a bit throughout the system. The 
              original grays all had blueish tints which have been updated to be pure grayscale.
            </p>
            <div class="row gx-3 mb-6">
              <div class="col-sm-6 col-lg-3">
                <div class="bg-primary p-3 mt-3"></div>
                  <small><strong>Primary</strong></small>
                  <div class="small lh-lg font-monospace text-black-50 float-right">#0775ED</div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div class="bg-info p-3 mt-3"></div>
                  <small><strong>Info</strong></small>
                  <div class="small lh-lg font-monospace text-black-50 float-right">#43BCFF</div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div class="bg-success p-3 mt-3"></div>
                <small><strong>Success</strong></small>
                <div class="small lh-lg font-monospace text-black-50 float-right">#17BE64</div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div class="bg-tip p-3 mt-3"></div>
                  <small><strong>Tip</strong></small>
                  <div class="small lh-lg font-monospace text-black-50 float-right">#10E1A3</div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div class="bg-danger p-3 mt-3"></div>
                  <small><strong>Danger</strong></small>
                  <div class="small lh-lg font-monospace text-black-50 float-right">#E74138</div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div class="bg-warning p-3 mt-3"></div>
                <small><strong>Warning</strong></small>
                <div class="small lh-lg font-monospace text-black-50 float-right">#FC9332</div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div class="bg-highlight p-3 mt-3"></div>
                  <small><strong>Highlight</strong></small>
                  <div class="small lh-lg is-monospaced text-black-50 float-right">#FFD766</div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div class="bg-light p-3 mt-3"></div>
                  <small><strong>Light</strong></small>
                  <div class="small lh-lg is-monospaced text-black-50 float-right">#FAFAFA</div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div class="bg-secondary p-3 mt-3"></div>
                  <small><strong>Secondary</strong></small>
                  <div class="small lh-lg is-monospaced text-black-50 float-right">#999999</div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div class="bg-dark p-3 mt-3"></div>
                  <small><strong>Dark</strong></small>
                  <div class="small lh-lg is-monospaced text-black-50 float-right">#333333</div>
              </div>
            </div>

            <h2 class="card-example-heading">Color Tints</h2>
            <p>
              Bootstrap v5 includes this wonderful series of color tints to the system. The "500" version of 
              colors matches the same hue and tint as the theme colors. For example, <code>$blue-500</code> is 
              the same color as <code>$primary</code> and <code>$blue</code>. Each tint is a SCSS variable 
              which can be used throughout your SCSS files. 
            </p>

            <p>
              Be sure to ensure the element has enough contrast when you use one of these colors as a text or 
              background color. You can use the CSS class <code>.text-dark</code> if you need to darken an 
              elements text to ensure it has enough contrast.
            </p>
            <div class="row gx-3 font-monospace text-center">

              <!-- Color: $blue -->
              <div class="col-sm-6 col-lg-3 mb-3">
                <div class="bg-blue-100 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$blue-100</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-blue-200 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$blue-200</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-blue-300 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$blue-300</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-blue-400 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$blue-400</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-blue-500 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$blue-500</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-blue-600 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$blue-600</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-blue-700 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$blue-700</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-blue-800 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$blue-800</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-blue-900 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$blue-900</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
              </div>
              
              <!-- Color: $cyan -->
              <div class="col-sm-6 col-lg-3 mb-3">
                <div class="bg-cyan-100 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$cyan-100</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-cyan-200 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$cyan-200</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-cyan-300 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$cyan-300</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-cyan-400 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$cyan-400</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-cyan-500 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$cyan-500</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-cyan-600 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$cyan-600</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-cyan-700 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$cyan-700</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-cyan-800 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$cyan-800</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-cyan-900 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$cyan-900</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
              </div>

              <!-- Color: $purple -->
              <div class="col-sm-6 col-lg-3 mb-3">
                <div class="bg-purple-100 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$purple-100</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-purple-200 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$purple-200</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-purple-300 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$purple-300</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-purple-400 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$purple-400</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-purple-500 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$purple-500</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-purple-600 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$purple-600</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-purple-700 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$purple-700</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-purple-800 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$purple-800</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-purple-900 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$purple-900</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
              </div>
              
              <!-- Color: $indigo -->
              <div class="col-sm-6 col-lg-3 mb-3">
                <div class="bg-indigo-100 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$indigo-100</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-indigo-200 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$indigo-200</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-indigo-300 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$indigo-300</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-indigo-400 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$indigo-400</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-indigo-500 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$indigo-500</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-indigo-600 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$indigo-600</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-indigo-700 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$indigo-700</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-indigo-800 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$indigo-800</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-indigo-900 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$indigo-900</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
              </div>

              <!-- Color: $pink -->
              <div class="col-sm-6 col-lg-3 mb-3">
                <div class="bg-pink-100 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$pink-100</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-pink-200 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$pink-200</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-pink-300 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$pink-300</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-pink-400 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$pink-400</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-pink-500 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$pink-500</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-pink-600 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$pink-600</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-pink-700 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$pink-700</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-pink-800 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$pink-800</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-pink-900 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$pink-900</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
              </div>
              
              <!-- Color: $red -->
              <div class="col-sm-6 col-lg-3 mb-3">
                <div class="bg-red-100 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$red-100</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-red-200 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$red-200</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-red-300 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$red-300</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-red-400 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$red-400</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-red-500 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$red-500</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-red-600 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$red-600</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-red-700 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$red-700</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-red-800 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$red-800</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-red-900 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$red-900</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
              </div>
              
              <!-- Color: $red -->
              <div class="col-sm-6 col-lg-3 mb-3">
                <div class="bg-orange-100 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$orange-100</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-orange-200 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$orange-200</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-orange-300 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$orange-300</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-orange-400 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$orange-400</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-orange-500 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$orange-500</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-orange-600 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$orange-600</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-orange-700 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$orange-700</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-orange-800 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$orange-800</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-orange-900 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$orange-900</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
              </div>
              
              <!-- Color: $yellow -->
              <div class="col-sm-6 col-lg-3 mb-3">
                <div class="bg-yellow-100 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$yellow-100</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-yellow-200 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$yellow-200</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-yellow-300 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$yellow-300</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-yellow-400 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$yellow-400</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-yellow-500 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$yellow-500</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-yellow-600 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$yellow-600</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-yellow-700 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$yellow-700</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-yellow-800 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$yellow-800</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-yellow-900 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$yellow-900</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
              </div>

              <!-- Color: $teal -->
              <div class="col-sm-6 col-lg-3 mb-3">
                <div class="bg-teal-100 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$teal-100</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-teal-200 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$teal-200</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-teal-300 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$teal-300</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-teal-400 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$teal-400</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-teal-500 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$teal-500</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-teal-600 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$teal-600</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-teal-700 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$teal-700</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-teal-800 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$teal-800</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-teal-900 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$teal-900</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
              </div>
              
              <!-- Color: $green -->
              <div class="col-sm-6 col-lg-3 mb-3">
                <div class="bg-green-100 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$green-100</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-green-200 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$green-200</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-green-300 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$green-300</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-green-400 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$green-400</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-green-500 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$green-500</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-green-600 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$green-600</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-green-700 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$green-700</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-green-800 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$green-800</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-green-900 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$green-900</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
              </div>
              
              <!-- Color: $gray -->
              <div class="col-sm-6 col-lg-3 mb-3">
                <div class="bg-gray-100 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$gray-100</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-gray-200 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$gray-200</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-gray-300 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$gray-300</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-gray-400 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$gray-400</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-gray-500 py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$gray-500</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-gray-600 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$gray-600</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-gray-700 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$gray-700</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-gray-800 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$gray-800</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-gray-900 py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$gray-900</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
              </div>
              
              <!-- Color: $gray -->
              <div class="col-sm-6 col-lg-3 mb-3">
                <div class="bg-white py-2 px-3 mb-0 text-dark">
                  <h3 class="h4 lh-lg mb-0">$white</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
                <div class="bg-black py-2 px-3 mb-0 text-white">
                  <h3 class="h4 lh-lg mb-0">$black</h3>
                  <!-- <span class="small is-monospaced">#000000</span> -->
                </div>
              </div>

            </div>
          </div>
        </div>
        <!-- End code chunk -->

      </div>
    </div>
  </div> <!-- container -->
</template>

