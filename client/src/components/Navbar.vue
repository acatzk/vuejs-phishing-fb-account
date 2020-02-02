<template>
    <div>  
      <nav class="navbar navbar-expand-lg navbar-light nav-style">
        <div class="container">
          <div class="row">
            <div class="col-6">
              <a class="navbar-brand logo navbar-text">facebook</a>
            </div>
            <div class="col-6">
              <button class="btn-block btn btn-success btn-sm btn-account">Create New Account</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
</template>

<script>

export default {
    name: 'navbar',
}
</script>


<style scoped>
/* NAVIGATION */
.logo {
    width: 174px;
    cursor: pointer;
    color: white;
    font-size: 40px;
    font-weight: bold;
    position: relative;
    left: 50px;
    text-shadow: 0 0 4px rgba(161, 161, 161, 0.5);
}
.nav-style {
  background-color: #3B5998;
  color: white !important;
  border-bottom: 1px solid rgb(42, 63, 107);
  height: 82px !important;
}

.btn-account {
  background: #42b72a !important;
  position: relative;
  top: 25px;
  left: 34px;
  width: 150px;
  height: 31px;
  font-style: sans-serif;
  font-weight: 500;
}
/* NAVIGATION END */
</style>