<template>
  <div style="background-color:white">
    <section
      class="hero-wrap hero-wrap-2 js-fullheight"
      style="background-image: url('/images/bg_3.jpg');"
      data-stellar-background-ratio="0.5"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
          <div class="col-md-9 pb-5">
            <p class="breadcrumbs">
              <span class="mr-2">
                <a href="index.html">
                  Home
                  <i class="ion-ios-arrow-forward"></i>
                </a>
              </span>
              <span>
                Service details
                <i class="ion-ios-arrow-forward"></i>
              </span>
            </p>
            <h1 class="mb-3 bread">Service Details</h1>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section ftco-car-details">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="row">
              <div>
                <h2>{{data.service}}</h2>
                <span class="subheading">{{data.usname  }} ( <b>{{data.uscontact}}</b> )</span> <br/>
                <span class="subheading">{{data.usadd  }}</span>
              </div>
            </div>
            <div class="car-details">
              <div class="img rounded">
                <TravelMap class="travel-map" />
              </div>
              <div class="text text-center">
                <span class="subheading">Cheverolet</span>
                <h2>Mercedes Grand Sedan</h2>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="row">
      		<div class="col-md d-flex align-self-stretch ">
            <div class="media block-6 services">
              <div class="media-body py-md-4">
              	<div class="d-flex mb-3 align-items-center">
	              	<div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-dashboard"></span></div>
	              	<div class="text">
		                <h3 class="heading mb-0 pl-3">
		                	Mileage
		                	<span>40,000</span>
		                </h3>
	                </div>
                </div>
              </div>
            </div>      
          </div>
          <div class="col-md d-flex align-self-stretch ">
            <div class="media block-6 services">
              <div class="media-body py-md-4">
              	<div class="d-flex mb-3 align-items-center">
	              	<div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-pistons"></span></div>
	              	<div class="text">
		                <h3 class="heading mb-0 pl-3">
		                	Transmission
		                	<span>Manual</span>
		                </h3>
	                </div>
                </div>
              </div>
            </div>      
          </div>
          <div class="col-md d-flex align-self-stretch ">
            <div class="media block-6 services">
              <div class="media-body py-md-4">
              	<div class="d-flex mb-3 align-items-center">
	              	<div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-car-seat"></span></div>
	              	<div class="text">
		                <h3 class="heading mb-0 pl-3">
		                	Seats
		                	<span>5 Adults</span>
		                </h3>
	                </div>
                </div>
              </div>
            </div>      
          </div>
          <div class="col-md d-flex align-self-stretch ">
            <div class="media block-6 services">
              <div class="media-body py-md-4">
              	<div class="d-flex mb-3 align-items-center">
	              	<div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-backpack"></span></div>
	              	<div class="text">
		                <h3 class="heading mb-0 pl-3">
		                	Luggage
		                	<span>4 Bags</span>
		                </h3>
	                </div>
                </div>
              </div>
            </div>      
          </div>
          <div class="col-md d-flex align-self-stretch ">
            <div class="media block-6 services">
              <div class="media-body py-md-4">
              	<div class="d-flex mb-3 align-items-center">
	              	<div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-diesel"></span></div>
	              	<div class="text">
		                <h3 class="heading mb-0 pl-3">
		                	Fuel
		                	<span>Petrol</span>
		                </h3>
	                </div>
                </div>
              </div>
            </div>      
          </div>
        </div>-->
        <div class="row">
          <div class="col-md-12 pills">
            <div class="bd-example bd-example-tabs">
              <div class="d-flex justify-content-center">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item">
                    <a href="#pills-manufacturer">Description</a>
                  </li>
                </ul>
              </div>

              <div class="tab-content" id="pills-tabContent">
                <div>
                  <p>{{data.description}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import TravelMap from "../components/TravelMap";
import Vue from 'vue'

export default {
  name: "App",
  components: {
    TravelMap
  },
  data(){
      return{
        data:[],
      }
  },
  mounted(){
        Vue.axios.get('http://127.0.0.1:8000/api/service/'+ this.$route.params.id +'/').then((response) => {
            console.log(response.data);
            this.data = response.data.service;
        });
  }
};
</script>

<style lang="scss" scoped>
.travel-map {
  height: 700px;
}
</style>

