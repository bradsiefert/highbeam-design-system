<template>
  <div class="container-md slim-contain">
    <div class="row">
      <div class="col-sm">
        <breadcrumbs :previous="{ '/': 'Home', '/designsystem': 'Design System' }" active="Forms"/>

        <h1>Forms</h1>
        <p>
          Form inputs are the way the user provides information to the system. The controls should be explained in 
          plain language where necessary and laid out in a way that is easily consumable for the user. There are 
          validation classes and pseudo classes available to ensure the proper data is inputed.
        </p>

        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            <h3 class="card-example-heading">Inputs</h3>

            <div class="row">
              <div class="col-lg-6">
                <form>
                  <div class="form-group">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Your Name">
                  </div>

                  <div class="form-group">
                    <label for="Email" class="form-label">Email Address</label>
                    <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="name@email.com">
                    <div id="emailHelp" class="form-text"><strong>Reminder:</strong> Register with your work email, not personal email.</div>
                  </div>

                  <div class="form-group">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="*************">
                  </div>

                  <div class="form-group">
                    <label for="textarea" class="form-label">Short Bio</label>
                    <textarea class="form-control" id="textarea" rows="4"></textarea>
                  </div>

                  <div class="form-group">
                    <label for="creation-date" class="form-label">Creation Date</label>
                    <input type="text" class="form-control" id="creation-date" aria-describedby="" placeholder="2020-09-15" readonly>
                  </div>

                  <div class="form-group">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control-plaintext" id="username" aria-describedby="" placeholder="userid123418" readonly>
                    <div id="emailHelp" class="form-text">Usernames are editable only after your account is created.</div>
                  </div>

                  <div class="form-group">
                    <label for="customFile" class="form-label">Upload Photo</label>
                    <div class="form-file">
                      <input type="file" class="form-file-input" id="customFile">
                      <label class="form-file-label" for="customFile">
                        <span class="form-file-text">Choose photo...</span>
                        <span class="form-file-button">Browse</span>
                      </label>
                    </div>
                  </div>

                  <div class="form-group mb-1">
                    <label for="volume" class="form-label">Volume</label>
                    <input type="range" class="form-range" id="volume">
                  </div>

                  <div class="form-group">
                    <label for="favoritecolor" class="form-label">Favorite Color</label>
                    <input type="color" class="form-control form-control-color" id="favoritecolor" value="#0775ED" title="Choose your color">
                  </div>

                  <h4 class="card-example-heading">Input Add Ons</h4>
                  <div class="form-group">
                    <label for="twitter" class="form-label">Twitter Username</label>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="twitter">twitter.com/</span>
                      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="skills" class="form-label">Add Skills</label>
                    <div class="input-group mb-3">
                      <input type="text" class="form-control" id="skills" aria-label="Text input with dropdown button">
                      <button class="btn btn-primary" type="button" data-toggle="dropdown" aria-expanded="false">Add Skill</button>
                    </div>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>
        <div class="card card-body code-example">
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="code-example-heading">// HTML</h6>
          </div>

          <div v-highlight>
            <pre class="language-html"><code>&lt;div class="form-group"&gt;
  &lt;label for="name" class="form-label"&gt;Name&lt;/label&gt;
  &lt;input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Your Name"&gt;
&lt;/div&gt;

&lt;div class="form-group"&gt;
  &lt;label for="Email" class="form-label"&gt;Email Address&lt;/label&gt;
  &lt;input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="name@email.com"&gt;
  &lt;div id="emailHelp" class="form-text"&gt;&lt;strong&gt;Reminder:&lt;/strong&gt; Register with your work email, not personal email.&lt;/div&gt;
&lt;/div&gt;

&lt;div class="form-group"&gt;
  &lt;label for="password" class="form-label"&gt;Password&lt;/label&gt;
  &lt;input type="password" class="form-control" id="password" placeholder="*************"&gt;
&lt;/div&gt;

&lt;div class="form-group"&gt;
  &lt;label for="textarea" class="form-label"&gt;Short Bio&lt;/label&gt;
  &lt;textarea class="form-control" id="textarea" rows="4"&gt;&lt;/textarea&gt;
&lt;/div&gt;

&lt;div class="form-group"&gt;
  &lt;label for="creation-date" class="form-label"&gt;Creation Date&lt;/label&gt;
  &lt;input type="text" class="form-control" id="creation-date" aria-describedby="" placeholder="2020-09-15" readonly&gt;
&lt;/div&gt;

&lt;div class="form-group"&gt;
  &lt;label for="username" class="form-label"&gt;Username&lt;/label&gt;
  &lt;input type="text" class="form-control-plaintext" id="username" aria-describedby="" placeholder="userid123418" readonly&gt;
  &lt;div id="emailHelp" class="form-text"&gt;Usernames are editable only after your account is created.&lt;/div&gt;
&lt;/div&gt;

&lt;div class="form-group"&gt;
  &lt;label for="customFile" class="form-label"&gt;Upload Photo&lt;/label&gt;
  &lt;div class="form-file"&gt;
    &lt;input type="file" class="form-file-input" id="customFile"&gt;
    &lt;label class="form-file-label" for="customFile"&gt;
      &lt;span class="form-file-text"&gt;Choose photo...&lt;/span&gt;
      &lt;span class="form-file-button"&gt;Browse&lt;/span&gt;
    &lt;/label&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="form-group mb-1"&gt;
  &lt;label for="volume" class="form-label"&gt;Volume&lt;/label&gt;
  &lt;input type="range" class="form-range" id="volume"&gt;
&lt;/div&gt;

&lt;div class="form-group"&gt;
  &lt;label for="favoritecolor" class="form-label"&gt;Favorite Color&lt;/label&gt;
  &lt;input type="color" class="form-control form-control-color" id="favoritecolor" value="#0775ED" title="Choose your color"&gt;
&lt;/div&gt;

&lt;h4 class="card-example-heading"&gt;Input Add Ons&lt;/h4&gt;
&lt;div class="form-group"&gt;
  &lt;label for="twitter" class="form-label"&gt;Twitter Username&lt;/label&gt;
  &lt;div class="input-group mb-3"&gt;
    &lt;span class="input-group-text" id="twitter"&gt;twitter.com/&lt;/span&gt;
    &lt;input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="form-group"&gt;
  &lt;label for="skills" class="form-label"&gt;Add Skills&lt;/label&gt;
  &lt;div class="input-group mb-3"&gt;
    &lt;input type="text" class="form-control" id="skills" aria-label="Text input with dropdown button"&gt;
    &lt;button class="btn btn-primary" type="button" data-toggle="dropdown" aria-expanded="false"&gt;Add Skill&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
          </div>
        </div> 
        <!-- End code chunk -->
        
        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">

            <h3 class="card-example-heading">Selects</h3>
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group">
                  <label for="select1" class="form-label">Gender (optional)</label>
                  <select class="form-select" aria-label="Default select example" id="select1">
                    <option selected>Choose gender identity...</option>
                    <option value="1">Man</option>
                    <option value="2">Woman</option>
                    <option value="3">Non-binary</option>
                    <option value="4">Prefer Not to Answer</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="exampleDataList" class="form-label">Company Office Location</label>
                  <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search locations...">
                  <datalist id="datalistOptions">
                    <option value="San Francisco" />
                    <option value="New York" />
                    <option value="Seattle" />
                    <option value="Los Angeles" />
                    <option value="Chicago" />
                  </datalist>
                </div>
              </div>
              
              <div class="col-lg-6">
                <div class="form-group">
                  <label for="select2" class="form-label">Select Web Skills</label>
                  <select class="form-select" multiple aria-label="multiple select example" id="select2" style="min-height: 128px;">
                    <option value="1">UX Researcher</option>
                    <option value="2">UX Designer</option>
                    <option value="3">UI Designer</option>
                    <option value="4">Front-end Developer</option>
                    <option value="5">Backend Developer</option>
                    <option value="6">DevOps Engineer</option>
                  </select>
                </div> 
              </div>

            </div>

          </div>
        </div>
        <div class="card card-body code-example">
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="code-example-heading">// HTML</h6>
          </div>

          <div v-highlight>
            <pre class="language-html"><code>// Select
&lt;div class="form-group"&gt;
  &lt;label for="select1" class="form-label"&gt;Gender (optional)&lt;/label&gt;
  &lt;select class="form-select" aria-label="Default select example" id="select1"&gt;
    &lt;option selected&gt;Choose gender identity...&lt;/option&gt;
    &lt;option value="1"&gt;Man&lt;/option&gt;
    &lt;option value="2"&gt;Woman&lt;/option&gt;
    &lt;option value="3"&gt;Non-binary&lt;/option&gt;
    &lt;option value="4"&gt;Prefer Not to Answer&lt;/option&gt;
  &lt;/select&gt;
&lt;/div&gt;

// Datalist Select
&lt;div class="form-group"&gt;
  &lt;label for="exampleDataList" class="form-label"&gt;Company Office Location&lt;/label&gt;
  &lt;input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search locations..."&gt;
  &lt;datalist id="datalistOptions"&gt;
    &lt;option value="San Francisco" /&gt;
    &lt;option value="New York" /&gt;
    &lt;option value="Seattle" /&gt;
    &lt;option value="Los Angeles" /&gt;
    &lt;option value="Chicago" /&gt;
  &lt;/datalist&gt;
&lt;/div&gt;

// Multi-select
&lt;div class="form-group"&gt;
  &lt;label for="select2" class="form-label"&gt;Select Web Skills&lt;/label&gt;
  &lt;select class="form-select" multiple aria-label="multiple select example" id="select2" style="min-height: 128px;"&gt;
    &lt;option value="1"&gt;UX Researcher&lt;/option&gt;
    &lt;option value="2"&gt;UX Designer&lt;/option&gt;
    &lt;option value="3"&gt;UI Designer&lt;/option&gt;
    &lt;option value="4"&gt;Front-end Developer&lt;/option&gt;
    &lt;option value="5"&gt;Backend Developer&lt;/option&gt;
    &lt;option value="6"&gt;DevOps Engineer&lt;/option&gt;
  &lt;/select&gt;
&lt;/div&gt;</code></pre>
          </div>
        </div> 
        <!-- End code chunk -->

        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">

            <h3 class="card-example-heading">Checks</h3>
            <div class="row">
              <div class="col-lg-4">
                <h4 class="mt-2">Checkboxes</h4>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">Default Checkbox</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                  <label class="form-check-label" for="flexCheckChecked">Checked Checkbox</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled>
                  <label class="form-check-label" for="flexCheckDisabled">Inactive Checkbox</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedInactive" checked disabled>
                  <label class="form-check-label" for="flexCheckCheckedInactive">Inactive Checked Checkbox</label>
                </div>
              </div>

              <div class="col-lg-4">  
                <h4 class="mt-2">Radio Buttons</h4>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                  <label class="form-check-label" for="flexRadioDefault1">Default Radio</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                  <label class="form-check-label" for="flexRadioDefault2">Default Checked Radio</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled>
                  <label class="form-check-label" for="flexRadioDisabled">Disabled Radio</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked disabled>
                  <label class="form-check-label" for="flexRadioCheckedDisabled">Disabled Checked Radio</label>
                </div>
              </div>

              <div class="col-lg-4"> 
                <h4 class="mt-2">Switches</h4>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                  <label class="form-check-label" for="flexSwitchCheckDefault">Default Switch</label>
                </div>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
                  <label class="form-check-label" for="flexSwitchCheckChecked">Checked Switch</label>
                </div>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled>
                  <label class="form-check-label" for="flexSwitchCheckDisabled">Disabled Switch</label>
                </div>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" checked disabled>
                  <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled Checked Switch</label>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="card card-body code-example">
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="code-example-heading">// HTML</h6>
          </div>

          <div v-highlight>
            <pre class="language-html"><code>// Checkboxes
&lt;div class="form-check"&gt;
  &lt;input class="form-check-input" type="checkbox" value="" id="check1"&gt;
  &lt;label class="form-check-label" for="check1"&gt;Default checkbox&lt;/label&gt;
&lt;/div&gt;
&lt;div class="form-check"&gt;
  &lt;input class="form-check-input" type="checkbox" value="" id="check2" checked&gt;
  &lt;label class="form-check-label" for="check2"&gt;Checked checkbox&lt;/label&gt;
&lt;/div&gt;
&lt;div class="form-check"&gt;
  &lt;input class="form-check-input" type="checkbox" value="" id="check3" disabled&gt;
  &lt;label class="form-check-label" for="check3"&gt;Inactive checkbox&lt;/label&gt;
&lt;/div&gt;
&lt;div class="form-check"&gt;
  &lt;input class="form-check-input" type="checkbox" value="" id="check4" checked disabled&gt;
  &lt;label class="form-check-label" for="check4"&gt;Inactive checked checkbox&lt;/label&gt;
&lt;/div&gt;

// Radio Buttons
&lt;div class="form-check"&gt;
  &lt;input class="form-check-input" type="radio" name="" id="radio1"&gt;
  &lt;label class="form-check-label" for="radio1"&gt;Default radio&lt;/label&gt;
&lt;/div&gt;
&lt;div class="form-check"&gt;
  &lt;input class="form-check-input" type="radio" name="" id="radio2" checked&gt;
  &lt;label class="form-check-label" for="radio2"&gt;Default checked radio&lt;/label&gt;
&lt;/div&gt;
&lt;div class="form-check"&gt;
  &lt;input class="form-check-input" type="radio" name="" id="radio3" disabled&gt;
  &lt;label class="form-check-label" for="radio3"&gt;Disabled radio&lt;/label&gt;
&lt;/div&gt;
&lt;div class="form-check"&gt;
  &lt;input class="form-check-input" type="radio" name="" id="radio4" checked disabled&gt;
  &lt;label class="form-check-label" for="radio4"&gt;Disabled checked radio&lt;/label&gt;
&lt;/div&gt;

// Switches
&lt;div class="form-check form-switch"&gt;
  &lt;input class="form-check-input" type="checkbox" id="switch1"&gt;
  &lt;label class="form-check-label" for="switch1"&gt;Default switch&lt;/label&gt;
&lt;/div&gt;
&lt;div class="form-check form-switch"&gt;
  &lt;input class="form-check-input" type="checkbox" id="switch2" checked&gt;
  &lt;label class="form-check-label" for="switch2"&gt;Checked switch&lt;/label&gt;
&lt;/div&gt;
&lt;div class="form-check form-switch"&gt;
  &lt;input class="form-check-input" type="checkbox" id="switch3" disabled&gt;
  &lt;label class="form-check-label" for="switch3"&gt;Disabled switch&lt;/label&gt;
&lt;/div&gt;
&lt;div class="form-check form-switch"&gt;
  &lt;input class="form-check-input" type="checkbox" id="switch4" checked disabled&gt;
  &lt;label class="form-check-label" for="switch4"&gt;Disabled checked switch&lt;/label&gt;
&lt;/div&gt;</code></pre>
          </div>
        </div> 
        <!-- End code chunk -->

        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">

            <div class="row">
              <div class="col-lg-6">
                <h3 class="card-example-heading">Input Sizing</h3>
                <form>
                  <div class="form-group">
                    <label for="form-small" class="form-label">Name</label>
                    <input type="text" class="form-control form-control-sm" id="form-small" placeholder="Your Name">
                  </div>

                  <div class="form-group">
                    <label for="form-regular" class="form-label">Name</label>
                    <input type="text" class="form-control" id="form-regular" placeholder="Your Name">
                  </div>

                  <div class="form-group">
                    <label for="form-large" class="form-label">Name</label>
                    <input type="text" class="form-control form-control-lg" id="form-large" placeholder="Your Name">
                  </div>
                </form>
              </div>

              <div class="col-lg-6">
                <h3 class="card-example-heading">Select Sizing</h3>
                <form>
                  <div class="form-group">
                    <label for="exampleColorInput" class="form-label">Gender (optional)</label>
                    <select class="form-select form-select-sm" aria-label="Default select example" id="">
                      <option selected>Choose gender identity...</option>
                      <option value="1">Man</option>
                      <option value="2">Woman</option>
                      <option value="3">Non-binary</option>
                      <option value="4">Prefer Not to Answer</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="exampleColorInput" class="form-label">Gender (optional)</label>
                    <select class="form-select" aria-label="Default select example" id="">
                      <option selected>Choose gender identity...</option>
                      <option value="1">Man</option>
                      <option value="2">Woman</option>
                      <option value="3">Non-binary</option>
                      <option value="4">Prefer Not to Answer</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="exampleColorInput" class="form-label">Gender (optional)</label>
                    <select class="form-select form-select-lg" aria-label="Default select example" id="">
                      <option selected>Choose gender identity...</option>
                      <option value="1">Man</option>
                      <option value="2">Woman</option>
                      <option value="3">Non-binary</option>
                      <option value="4">Prefer Not to Answer</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
        <div class="card card-body code-example">
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="code-example-heading">// HTML</h6>
          </div>

          <div v-highlight>
            <pre class="language-html"><code>// Inputs
&lt;div class="form-group"&gt;
  &lt;label for="form-small" class="form-label"&gt;Name&lt;/label&gt;
  &lt;input type="text" class="form-control form-control-sm" id="form-small" placeholder="Your Name"&gt;
&lt;/div&gt;

&lt;div class="form-group"&gt;
  &lt;label for="form-regular" class="form-label"&gt;Name&lt;/label&gt;
  &lt;input type="text" class="form-control" id="form-regular" placeholder="Your Name"&gt;
&lt;/div&gt;

&lt;div class="form-group"&gt;
  &lt;label for="form-large" class="form-label"&gt;Name&lt;/label&gt;
  &lt;input type="text" class="form-control form-control-lg" id="form-large" placeholder="Your Name"&gt;
&lt;/div&gt;

// Selects
&lt;div class="form-group"&gt;
  &lt;label for="gender" class="form-label"&gt;Gender (optional)&lt;/label&gt;
  &lt;select class="form-select form-select-sm" aria-label="Default select example" id="gender"&gt;
    &lt;option selected&gt;Choose gender identity...&lt;/option&gt;
    &lt;option value="1"&gt;Man&lt;/option&gt;
    &lt;option value="2"&gt;Woman&lt;/option&gt;
    &lt;option value="3"&gt;Non-binary&lt;/option&gt;
    &lt;option value="4"&gt;Prefer Not to Answer&lt;/option&gt;
  &lt;/select&gt;
&lt;/div&gt;

&lt;div class="form-group"&gt;
  &lt;label for="gender" class="form-label"&gt;Gender (optional)&lt;/label&gt;
  &lt;select class="form-select" aria-label="Default select example" id="gender"&gt;
    &lt;option selected&gt;Choose gender identity...&lt;/option&gt;
    &lt;option value="1"&gt;Man&lt;/option&gt;
    &lt;option value="2"&gt;Woman&lt;/option&gt;
    &lt;option value="3"&gt;Non-binary&lt;/option&gt;
    &lt;option value="4"&gt;Prefer Not to Answer&lt;/option&gt;
  &lt;/select&gt;
&lt;/div&gt;

&lt;div class="form-group"&gt;
  &lt;label for="gender" class="form-label"&gt;Gender (optional)&lt;/label&gt;
  &lt;select class="form-select form-select-lg" aria-label="Default select example" id="gender"&gt;
    &lt;option selected&gt;Choose gender identity...&lt;/option&gt;
    &lt;option value="1"&gt;Man&lt;/option&gt;
    &lt;option value="2"&gt;Woman&lt;/option&gt;
    &lt;option value="3"&gt;Non-binary&lt;/option&gt;
    &lt;option value="4"&gt;Prefer Not to Answer&lt;/option&gt;
  &lt;/select&gt;
&lt;/div&gt;</code></pre>
          </div>
        </div> 
        <!-- End code chunk -->
        
        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            
            <h3 class="card-example-heading">Validation</h3>
            <div class="row">
              <div class="col-lg-6">
                <form>
                  <div class="form-group">
                    <label for="form-invalid" class="form-label">Email Address</label>
                    <input type="email" class="form-control is-invalid" id="form-invalid" placeholder="name@emailcom">
                  </div>

                  <div class="form-group">
                    <label for="form-valid" class="form-label">Email Address</label>
                    <input type="email" class="form-control is-valid" id="form-valid" placeholder="name@email.com">
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
        <div class="card card-body code-example">
          <div class="d-flex flex-row align-items-center justify-content-between">
            <h6 class="code-example-heading">// HTML</h6>
          </div>

          <div v-highlight>
            <pre class="language-html"><code>&lt;div class="form-group"&gt;
  &lt;label for="form-invalid" class="form-label"&gt;Email Address&lt;/label&gt;
  &lt;input type="email" class="form-control is-invalid" id="form-invalid" placeholder="name@emailcom"&gt;
&lt;/div&gt;

&lt;div class="form-group"&gt;
  &lt;label for="form-valid" class="form-label"&gt;Email Address&lt;/label&gt;
  &lt;input type="email" class="form-control is-valid" id="form-valid" placeholder="name@email.com"&gt;
&lt;/div&gt;</code></pre>
          </div>
        </div> 
        <!-- End code chunk -->

      </div>
    </div>
    

    <div class="card my-4">
      <div class="card-body card-body-sm text-center">
        For more info → <a target="_blank" href="https://v5.getbootstrap.com/docs/5.0/forms/overview/">
          Bootstrap v5 / Forms
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
