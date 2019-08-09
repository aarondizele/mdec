<template>
  <div>
    <!-- Header -->
    <div class="">
      <div class="container pt-10">
        <h1 class="text-medium">Actualités</h1>
      </div>
    </div>
    <!-- Body -->
    <div class="py-20 container">
      <div class="row">
        <div class="cell-12 cell-md-6 cell-xxl-4 mb-8 pr-5" v-for="i in 20" :key="i">
          <div class="row border-bottom border-size-2 bd-light pb-4">
              <div class="cell-12 cell-md-4 mb-5 mb-0-md">
                <div class="_box-sample-2 border-radius-5 pos-relative">
                  <!-- <div class="pos-absolute pos-top-left m-4 border-radius-1 bg-white fg-dark px-1 _caption text-medium">Catégorie</div> -->
                  <div class="_background_post"></div>
                </div>
              </div>
              <div class="cell-12 cell-md-7 pos-relative px-5 px-2-md">
                <!-- Title -->
                <div class="_font2 mb-1 _subheading text-medium">Title of post {{i}}</div>
                <!-- Author -->
                <div class="_body-1 _flex mb-1">
                  <span class="mr-1">
                    <svg viewBox="64 64 896 896" data-icon="user" width="14" height="14" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg>
                  </span>
                  Publié par Aron Dizele
                </div>
                <!-- Body -->
                <p class="_body-1 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit ...</p>
                <!-- Action -->
                <div class="pos-bottom-left">
                  <div class="_flex _between _caption">
                    <div class="d-flex flex-row flex-align-center">
                      <span class="mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      </span>
                      10/08/2019
                    </div>
                    <nuxt-link :to="`/article/${i}`" class="_flex text-medium">
                      Read
                      <i class="far fa-angle-right ml-2"></i>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onShowLightbox() {

    }
  }
}
</script>

