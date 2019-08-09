<template>
  <div>
    <!-- Header -->
    <div class="">
      <div class="container pt-10">
        <h1 class="text-medium">Photos</h1>
      </div>
    </div>
    <!-- Body -->
    <div class="py-20 container">
      <div class="row">
        <div class="cell-12 cell-md-6 cell-lg-4 cell-xl-3 mb-8" v-for="i in 20" :key="i">
          <div class="pos-relative border-radius-8" style="height:260px;background:#333">
            <img
              :src="`https://picsum.photos/890/800/?${2 * i + 10}`"
              alt
              class="rounded widget--borderless w-100 border-radius-8"
              style="height:260px;-webkit-object-fit:cover;object-fit:cover;"
              @click="onShowLightbox(`https://picsum.photos/890/800/?${2 * i + 10}`)"
            >
            <div class="_background_post">
              <div class="_body-1 mb-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
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

