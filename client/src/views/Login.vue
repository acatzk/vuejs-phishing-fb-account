<template>
    <div>
      <navbar></navbar>
      <card></card>
      <footer></footer>
    </div>
</template>

<script>

import Card from '@/components/Card.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { required, email } from "vuelidate/lib/validators";

export default {
  name: 'login',
  components: {
    Navbar,
    Card,
    Footer
  }
}
</script>


<style scoped>



</style>