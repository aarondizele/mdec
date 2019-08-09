<template>
  <div>
    <!-- Header -->
    <div class="">
      <div class="container pt-10">
        <h1 class="text-medium">Evénements</h1>
      </div>
    </div>
    <!-- Body -->
    <div class="py-20 container">
      <div class="row">
        <div class="cell-12 cell-md-6 cell-lg-4 cell-xxl-3 mb-8" v-for="n in 20" :key="n">
            <div class="pos-relative _box-sample border-radius-10 _card p-5">
              <h5 class="pos-absolute pos-top-left _font2 px-5 py-3">Event {{n}}</h5>
              <div class="_background_post">
                <div class="_flex _body-1">
                  <span class="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </span>
                  Kinshasa, RDC
                </div>
                <div class="_flex _caption">
                  <span class="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  </span>
                  20/08/2019</div>
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

