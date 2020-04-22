<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
    id="ftco-navbar"
  >
    <div class="container">
      <a class="navbar-brand" href="#/">
        Ol
        <span>Ser</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#ftco-nav"
        aria-controls="ftco-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="oi oi-menu"></span> Menu
      </button>

      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <a href="#/" class="nav-link">About</a>
          </li>
          <li class="nav-item">
            <router-link to="/service" class="nav-link">Service</router-link>
          </li>
          <li class="nav-item">
            <a href="#/" class="nav-link">Pricing</a>
          </li>
          <li class="nav-item">
            <a href="#/" class="nav-link">Cars</a>
          </li>
          <li class="nav-item">
            <a href="#/" class="nav-link">Blog</a>
          </li>
          <li v-if="isLoggedIn===0" class="nav-item">
            <router-link to="/login" class="nav-link">Login / Register</router-link>
          </li>
          <li v-if="isLoggedIn===1" class="nav-item">
            <a href="#" @click="logout()" class="nav-link">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      isLoggedIn: 0
    };
  },
  methods: {
    logout: function() {
      let conf = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Authorization")
        }
      };
      let form = new FormData();
      this.axios
        .post("/logout", form, conf)
        .then(response => {
          console.log(response);
          if (response.data.logged === false || response.data.status === 0) {
            this.$store.commit("logout");
            localStorage.removeItem("Authorization");
            this.$router.push({ name: "login" });
          }
        })
        .catch(error => {console.log("error : "+error)});
    }
  },
  mounted(){
	  let conf = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Authorization")
        }
      };
	  this.axios
        .get("/login/check",conf)
        .then(response => {
          if (response.data.auth === true) {
			  this.isLoggedIn=1
			  console.log("Sudah Login");
          }else{
			  this.isLoggedIn=0
			  this.$store.commit("logout");
            	localStorage.removeItem("Authorization");
			  console.log("Belum Login"); 
		  }
        })
        .catch(error => {console.log("error : "+error)});
  }
};
</script>