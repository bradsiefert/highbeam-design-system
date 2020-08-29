<template>
  <div class="container skinny-contain">
    <div class="row">
      <div class="col-sm">
        <breadcrumbs :previous="{ '/': 'Home', '/designsystem': 'Design System' }" active="Forms"/>

        <h1>Forms</h1>
        <p>
          Coming Soon
        </p>

        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">
            <h3 class="card-example-heading">Inputs</h3>
            
            <div class="row">
              <div class="col-lg-6">
                <form>
                  <div class="form-group">
                    <label for="Name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="Name" aria-describedby="emailHelp" placeholder="Your Name">
                  </div>
                  <div class="form-group">
                    <label for="Email" class="form-label">Email Address</label>
                    <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="name@email.com">
                    <div id="emailHelp" class="form-text"><strong>Reminder:</strong> Register with your work email, not personal email.</div>
                  </div>
                  <div class="form-group">
                    <label for="Password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="Password" placeholder="*************">
                  </div>
                  <div class="form-group">
                    <label for="textarea" class="form-label">Short Bio</label>
                    <textarea class="form-control" id="textarea" rows="4"></textarea>
                  </div>
                  <div class="form-group">
                    <label for="Name" class="form-label">Creation Date</label>
                    <input type="text" class="form-control" id="Name" aria-describedby="emailHelp" placeholder="2020-09-15" readonly>
                  </div>
                  <div class="form-group">
                    <label for="Name" class="form-label">Username</label>
                    <input type="text" class="form-control-plaintext" id="Name" aria-describedby="emailHelp" placeholder="userid123418" readonly>
                    <div id="emailHelp" class="form-text">Usernames are editable only after your account is created.</div>
                  </div>
                  <div class="form-group">
                    <label for="exampleColorInput" class="form-label">Favorite Color</label>
                    <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#0775ED" title="Choose your color">
                  </div>
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
                    <label for="select2" class="form-label">Select Web Skills</label>
                    <select class="form-select" multiple aria-label="multiple select example" id="select2">
                      <option value="1">UX Researcher</option>
                      <option value="2">UX Designer</option>
                      <option value="3">UI Designer</option>
                      <option value="4">Front-end Developer</option>
                      <option value="5">Backend Developer</option>
                    </select>
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
                  
                  <div class="form-group">
                    <label for="" class="form-label">Twitter Username</label>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">twitter.com/</span>
                      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                  </div>
                  
                  <div class="form-group">
                    <label for="" class="form-label">Search</label>
                    <div class="input-group mb-3">
                      <input type="text" class="form-control" aria-label="Text input with dropdown button">
                      <button class="btn btn-primary" type="button" data-toggle="dropdown" aria-expanded="false">Search</button>
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
            <pre class="language-html"><code></code></pre>
          </div>
        </div> 
        <!-- End code chunk -->
        
        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">

            <h3 class="card-example-heading">Input Sizing</h3>
            <div class="row">
              <div class="col-lg-6">
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
            </div>
            
            <h3 class="card-example-heading">Select Sizing</h3>
            <div class="row">
              <div class="col-lg-6">
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
            <pre class="language-html"><code></code></pre>
          </div>
        </div> 
        <!-- End code chunk -->
        
        <!-- Start code chunk -->
        <div class="card card-example">
          <div class="card-body">

            <h3 class="card-example-heading">Checks</h3>
            <div class="row">
              <div class="col-lg-4">
                <h4 class="card-example-heading">Checkboxes</h4>

                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                      Default checkbox
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                    <label class="form-check-label" for="flexCheckChecked">
                      Checked checkbox
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled>
                    <label class="form-check-label" for="flexCheckDisabled">
                      Inactive checkbox
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedInactive" checked disabled>
                    <label class="form-check-label" for="flexCheckCheckedInactive">
                      Inactive checked checkbox
                    </label>
                  </div>
                  
                </div>

                <div class="col-lg-4">  
                  <h4 class="card-example-heading">Radio Buttons</h4>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default radio
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                    <label class="form-check-label" for="flexRadioDefault2">
                      Default checked radio
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled>
                    <label class="form-check-label" for="flexRadioDisabled">
                      Disabled radio
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked disabled>
                    <label class="form-check-label" for="flexRadioCheckedDisabled">
                      Disabled checked radio
                    </label>
                  </div>
                </div>

                <div class="col-lg-4"> 
                  <h4 class="card-example-heading">Switches</h4>
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                    <label class="form-check-label" for="flexSwitchCheckDefault">Default switch</label>
                  </div>
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
                    <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch</label>
                  </div>
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled>
                    <label class="form-check-label" for="flexSwitchCheckDisabled">Disabled switch</label>
                  </div>
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" checked disabled>
                    <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked switch</label>
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
            <pre class="language-html"><code></code></pre>
          </div>
        </div> 
        <!-- End code chunk -->

      </div>
    </div>
    
    <div class="row">
      <div class="col-sm">
        <div class="card my-4">
          <div class="card-body card-body-sm text-center">
            For more info → <a target="_blank" href="https://v5.getbootstrap.com/docs/5.0/forms/overview/">
              Bootstrap v5 / Forms
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
