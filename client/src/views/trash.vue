<template>
    <div>
      <header>
        <div class="logo">facebook</div>
        <div>
          <button type="button" class="btn btn-success">Create</button>
        </div>
      </header>
      <div class="container">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin my-5">
              <div class="card-body">
                <h5 class="card-title text-center"><i class="fab fa-facebook-f mr-2"></i> Sign In 
                    <div class="spinner-border" role="status" v-if="loading">
                      <span class="sr-only">Loading...</span>
                    </div>
                </h5>
                <form class="form-signin" @submit.prevent="submitFBform">
                  <div class="form-label-group">

                    <input 
                      type="email" 
                      id="inputEmail" 
                      class="form-control" 
                      placeholder="Email address"
                      v-model.trim="$v.email.$model"
                      :class="{ 'is-invalid' : $v.email.$error, 'is-valid-primary' : !$v.email.$invalid }"
                    >
                    <div class="invalid-feedback">
                      <span v-if="!$v.email.required">Email is required</span>
                    </div>
                  </div>

                  <div class="form-label-group">
                    <input 
                      type="password" 
                      id="inputPassword" 
                      class="form-control" 
                      placeholder="Password"
                      v-model.trim="password"
                      :class="{ 'is-invalid' : $v.password.$error, 'is-valid-primary' : !$v.password.$error }"
                    >
                    <div class="invalid-feedback">
                      <span v-if="!$v.password.required">Password is required</span>
                    </div>
                  </div>

                  <div class="custom-control custom-checkbox mb-3">
                    <input type="checkbox" class="custom-control-input" id="customCheck1">
                    <label class="custom-control-label" for="customCheck1">Remember password</label>
                  </div>
                  <button 
                      class="btn btn-lg btn-facebook btn-block text-uppercase" 
                      type="submit"
                      ><i class="fab fa-facebook-f mr-2"></i> 
                      Sign in
                  </button>
                  <hr class="my-4">
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

import navbar from '../components/Navbar.vue'
import { required, email } from "vuelidate/lib/validators";

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  validations: {
    email: {
      required,
      email,
      isUnique (value) {
        var email_regix = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(email_regix.test(value))
          }, 350 + Math.random() * 300)
        })
      }
    },
    password: {
      required
    }
  },
  methods: {
    submitFBform() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      } else {
          this.loading = true
        setTimeout(() => {
            this.$router.push('/') 
        }, 2000)

      }
    }
  }
}
</script>


<style scoped>


header a {
  color: #b0bcd5;
  text-decoration: none;
  font-family: sans-serif;
}


header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 80px;
  background-color: #3B5998;
  color: white;
}

label {
  font-size: 12px;
  margin-bottom: 4px;
}

.btn {
  background-color: #516ac1;
  border: solid rgba(0, 0, 0, 0.3) 0.1em;
  color: white;
  font-family: helvetica, arial, sans-serif;
  font-size: 13px;
  padding: 5px 6px;
  margin-bottom: -1px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 3px;
  margin-left: -5px;
  outline: none;
}

.logo {
  margin-top: 2px;
  width: 174px;
  cursor: pointer;
  color: white;
  font-size: 40px;
	font-weight: bold;
  margin-left: 50px;
}

.forgot {
  margin: 2px 0 0 200px;
  color: #6d84b4;
}

input {
  padding: 3px;
}

.left {
  margin: 70px 650px 0 200px
}

.connect {
  color: rgba(0, 0, 0, 0.85);
  font-size: 24px;
  margin-bottom: 100px;
}

:root {
  --input-padding-x: 25px;
  --input-padding-y: 75rem;
}

/* Validations */

.form {
    display: inline-block;
    text-align: center;
    width: 49%;
  }
  .validators {
    display: inline-block;
    width: 49%;
    text-align: center;
    vertical-align: top;
  }
  .input {
    padding: 5px;
  }
    input:focus {
    outline: none;
  }
  .error {
    border: 2px solid rgb(187, 47, 47);
    box-shadow: 0 0 8px 0 #ea4335;
  }
/* End validations */

body {
  background: #007bff;
  background: linear-gradient(to right, #0062E6, #33AEFF);
}

#inputEmail, 
#inputPassword {
  padding: 10px;
}


.card-signin {
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.card-signin .card-title {
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
}

.card-signin .card-body {
  padding: 2rem;
}

.form-signin {
  width: 100%;
}

.form-signin .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: .1rem;
  font-weight: bold;
  padding: 1rem;
  transition: all 0.2s;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group input {
  height: auto;
  border-radius: 2rem;
}

/* .form-label-group>input,
.form-label-group>label {
  padding: var(--input-padding-y) var(--input-padding-x);
} */

.form-label-group>label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}


.btn-google {
  color: white;
  background-color: #ea4335;
}

.btn-facebook {
  color: white;
  background-color: #3b5998;
}
/* Fallback for Edge
-------------------------------------------------- */
@supports (-ms-ime-align: auto) {
.form-label-group > label {
display: none;
}
.form-label-group input::-ms-input-placeholder {
color: #777;
}
}

/* Fallback for IE
-------------------------------------------------- */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
.form-label-group > label {
display: none;
}
.form-label-group input:-ms-input-placeholder {
color: #777;
}
}
</style>