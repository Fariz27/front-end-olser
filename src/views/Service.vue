<template>
  <div>
    <div v-if="true">
      <section
        class="hero-wrap hero-wrap-2 js-fullheight"
        style="background-image: url('images/bg_3.jpg');"
        data-stellar-background-ratio="0.5"
        v-if="section"
      >
        <div class="overlay"></div>
        <div class="container">
          <div
            class="row no-gutters slider-text js-fullheight align-items-end justify-content-start"
          >
            <div class="col-md-9 pb-5">
              <p class="breadcrumbs">
                <span class="mr-2">
                  <a href="index.html">
                    Home
                    <i class="ion-ios-arrow-forward"></i>
                  </a>
                </span>
                <span>
                  Cars
                  <i class="ion-ios-arrow-forward"></i>
                </span>
              </p>
              <h1 class="mb-3 bread">Pilih layanan yang diperlukan</h1>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-4" v-for="(item) in data" :key="item.id">
              <div class="car-wrap rounded">
                <div
                  class="img rounded d-flex align-items-end"
                  :style="{ 'background-image': 'url(' +'http://localhost:8000/data_file/'+item.imname + ')' }"
                ></div>
                <div class="text">
                  <h2 class="mb-0">
                    <a href="car-single.html">{{item.service}}</a>
                  </h2>
                  <div class="d-flex mb-3">
                    <span class="cat">{{item.usname}}</span>
                    <p class="price ml-auto">
                      ${{item.price_range_min}}
                      <span>-</span>
                      ${{item.price_range_max}}
                    </p>
                  </div>
                  <p class="d-flex mb-0 d-block">
                    <a href="#" class="btn btn-primary py-2 mr-1">Book now</a>
                    <a href="car-single.html" class="btn btn-secondary py-2 ml-1">Details</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col text-center">
              <div class="block-27">
                <ul>
                  <li>
                    <a href="#">&lt;</a>
                  </li>
                  <li class="active">
                    <span>1</span>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">&gt;</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      section: true
    };
  },
  methods: {
    getData() {
      // let conf = { headers: { Authorization: "Bearer " + this.key } };
      // let offset = (this.currentPage - 1) * this.perPage;
      // this.loading = true;
      this.axios
        .get("/service")
        .then(response => {
          this.data = response.data.service;
          console.log(this.data);
        })
        .catch(error => {
          console.log(error);
          // this.loading = false;
          // this.$router.push({ path: "/login" });
        });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>