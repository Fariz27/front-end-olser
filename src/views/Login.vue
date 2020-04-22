<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5 mx-auto">
        <div id="first" v-if="panelswitch">
          <div class="myform form">
            <div class="logo mb-3">
              <div class="col-md-12 text-center">
                <h1>Login</h1>
              </div>
            </div>
            <form action method="post" name="login">
              <div class="form-group">
                <label for="exampleInputEmail1">Alamat Email</label>
                <input
                  v-model="email"
                  type="email"
                  name="email"
                  class="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Masukan Email"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Password</label>
                <input
                  v-model="password"
                  type="password"
                  name="password"
                  id="password"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Masukan Password"
                />
              </div>
              <!-- <div class="form-group">
                <p class="text-center">
                  By signing up you accept our
                  <a href="#">Terms Of Use</a>
                </p>
              </div>-->
              <div class="col-md-12 text-center">
                <div class="btn btn-block mybtn btn-primary tx-tfm" v-on:click="login()">Login</div>
              </div>
              <div class="col-md-12">
                <div class="login-or">
                  <hr class="hr-or" />
                  <span class="span-or">or</span>
                </div>
              </div>
              <div class="col-md-12 mb-3">
                <p class="text-center">
                  <a href="javascript:void();" class="google btn mybtn">
                    <i class="fa fa-google-plus"></i> Login dengan Google
                  </a>
                </p>
              </div>
              <div class="form-group">
                <p class="text-center">
                  Belum punya akun?
                  <a
                    href="#"
                    id="signup"
                    v-on:click="panelswitch = !panelswitch"
                  >Daftar di sini</a>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div id="second" v-if="!panelswitch">
          <div class="myform form">
            <div class="logo mb-3">
              <div class="col-md-12 text-center">
                <h1>Signup</h1>
              </div>
            </div>
            <form action="#" name="registration">
              <div class="form-group">
                <label for="exampleInputEmail1">Nama</label>
                <input
                  v-model="name"
                  type="text"
                  name="firstname"
                  class="form-control"
                  id="firstname"
                  aria-describedby="emailHelp"
                  placeholder="Masukan nama lengkap"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Kontak</label>
                <input
                  v-model="contact"
                  type="number"
                  name="contact"
                  class="form-control"
                  id="contact"
                  aria-describedby="emailHelp"
                  placeholder="Masukan nomor telepon"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Alamat</label>
                <textarea-autosize
                  placeholder="Masukan alamat lengkap anda"
                  ref="myTextarea"
                  class="myform"
                  v-model="address"
                  :min-height="30"
                  :max-height="350"
                  @blur.native="onBlurTextarea"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Daftar Sebagai</label>
                <select v-model="role" type="text" name="role" class="form-control" id="lastname">
                  <option value="client">Pemakai</option>
                  <option value="partner">Penyedia</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  v-model="email"
                  type="email"
                  name="email"
                  class="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Masukan alamat telepon"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Password</label>
                <input
                  v-model="password"
                  type="password"
                  name="password"
                  id="password"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Masukan Password"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Password_Confirmation</label>
                <input
                  v-model="password_confirmation"
                  type="password"
                  name="password_confirmation"
                  id="password_confirmation"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Ulangi Password"
                />
              </div>
              <div class="col-md-12 text-center mb-3">
                <div
                  v-on:click="register()"
                  class="btn btn-block mybtn btn-primary tx-tfm"
                >Daftar Sekarang</div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <p class="text-center">
                    <a
                      href="#"
                      id="signin"
                      v-on:click="panelswitch = !panelswitch"
                    >Sudah punya akun?</a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
function resize() {
  this.style.height = "auto";
  this.style.height = `${this.scrollHeight}px`;
}
export const setResizeListeners = ($el, query) => {
  const targets = $el.querySelectorAll(query);
  targets.forEach(target => {
    target.style.height = `${target.scrollHeight}px`;
    target.addEventListener("input", resize);
  });
};
export default {
  data() {
    return {
      name: "",
      role: "client",
      address: "",
      contact: "",
      email: "",
      password: "",
      password_confirmation: "",
      message: "",
      auth: null,
      panelswitch: true
      // loading:false,
    };
  },
  methods: {
    login() {
      // this.loading = true;
      let email = this.email;
      let password = this.password;
      this.$store.dispatch("login", { email, password }).then(response => {
        this.$router.push({ path: "/service" });
      });
    },
    register() {
      let name = this.name;
      let contact = this.contact;
      let address = this.address;
      let role = this.role;
      let email = this.email;
      let password = this.password;
      let password_confirmation = this.password_confirmation;
      this.$store
        .dispatch("register", {
          name,
          role,
          contact,
          address,
          email,
          password,
          password_confirmation
        })
        .then(response => {
          this.$router.push({ path: "/service" });
        })
        .catch(err => {
          this.message = err
        });
    }
  },
  mounted() {
    this.auth = localStorage.getItem("Authorization");
    if (this.auth !== null) {
      this.$router.push({ path: "/service" });
    }
  }
};
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
body {
  padding-top: 4.2rem;
  padding-bottom: 4.2rem;
  background: rgba(0, 0, 0, 0.76);
}
a {
  text-decoration: none !important;
}
/* h1,h2,h3{
         font-family: 'Kaushan Script', cursive;
         } */
.myform {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  padding: 1rem;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 1.1rem;
  outline: 0;
  max-width: 500px;
}
.tx-tfm {
  text-transform: uppercase;
}
.mybtn {
  border-radius: 50px;
}

.login-or {
  position: relative;
  color: #aaa;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.span-or {
  display: block;
  position: absolute;
  left: 50%;
  top: -2px;
  margin-left: -25px;
  background-color: #fff;
  width: 50px;
  text-align: center;
}
.hr-or {
  height: 1px;
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}
.google {
  color: #666;
  width: 100%;
  height: 40px;
  text-align: center;
  outline: none;
  border: 1px solid lightgrey;
}
form .error {
  color: #ff0000;
}
.container {
  margin-top: 3rem;
}
</style>
<style>
body {
  background-color: #08aeea;
  background-image: linear-gradient(270deg, #08aeea 0%, #2af598 100%);
}
</style>
