<template>
    <div class="container">
        <div class="card">
          <div class="card-body">
              <carousel></carousel>
              <div class="container">
                  <h5 class="card-title">Log In FB to access</h5>
                 <form @submit.prevent="submitFBform">
                    <div class="form-group">
                            <input 
                                type="email" 
                                class="form-control" 
                                placeholder="Email"
                                v-model.trim="$v.email.$model"
                                :class="{ 'is-invalid' : $v.email.$error, 'is-valid-primary' : !$v.email.$invalid }"
                            >
                            <input 
                                type="password" 
                                class="form-control pass" 
                                placeholder="Password"
                                style="margin-top: 5px;"
                                v-model.trim="password"
                                :class="{ 'is-invalid' : $v.password.$error, 'is-valid-primary' : !$v.password.$error }"
                            >
                    </div>
                    <button type="submit" class="form-control btn-submit">
                        <div v-if="loading">
                           <img 
                            class="img-loading"
                            src="../assets/loading.gif" 
                            alt="loading">
                        </div>
                        <div v-else>
                            Log In
                        </div>
                    </button>
                </form>
                <div class="fb-ac container">
                    <div>
                        <a href="#">Forgot account?</a>
                    </div>
                    <div>
                        <a href="#">Sign up for Facebook</a>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </div>
</template>

<script>

import Carousel from './Carousel.vue'
import { required, email } from "vuelidate/lib/validators";


export default {
    name: 'Card',
    components: {
        Carousel
    },
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

.card {
  max-width: 650px;
  margin: auto;
  position: relative;
  top: 80px;
}
.card-title {
    font-size: 20px;
    text-align: center;
    color: #1c1e21;
    font-family: Arial, Helvetica, sans-serif;
    position: relative;
    top: 10px;
}
input {
    max-width: 330px;
    margin: auto;
    line-height: 10px;
    border-radius: 1px;
    position: relative;
    top: 10px;
    font-size: 15px;
}
input:focus{
    box-shadow: none;
    border: 1px solid #ced4da;

}

.btn-submit {
    max-width: 330px;
    width: 100%;
    margin: auto;
    border: none;
    height: 43px;
    color: white;
    cursor: pointer;
    border-radius: 1px;
    background: rgb(62, 93, 160);
    font-weight: 500;
}
.btn-submit:hover{
    background: rgb(55, 82, 143);
    transition: 0.2s;
}

.fb-ac {
    display: flex;
    justify-content: center;
    align-items: center;
}
.fb-ac a{
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(62, 93, 160);
    margin: 5px;
}

.img-loading {
    width: 30px;
}


</style>