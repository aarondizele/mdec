<template>
  <div>
    <!-- Header -->
    <div class="">
      <div class="container pt-10">
        <h1 class="text-medium">Vidéos</h1>
      </div>
    </div>
    <!-- Body -->
    <div class="py-20 container">
      <div class="row">
        <div class="cell-12 cell-md-6 cell-lg-4 cell-xxl-3 mb-8" v-for="i in 20" :key="i">
          <div class="_video">
            <div class="_video-sample-2 pos-relative">
              <div class="_play-button pos-absolute pos-center"><i class="fas fa-play fa-2x fg-white"></i></div>
            </div>
            <div class="px-5 pt-3 pb-4">
              <h6 class="text-bold _font2 my-1">Video {{i}}</h6>
              <div class="_subtitle _body-1">Président Jean-Pierre Nkanku</div>
              <div class="_flex mt-1 _caption">
                <div class="_flex mr-4">
                  <i class="far fa-clock mr-1"></i> 1d
                </div>
                <div class="_flex">
                  <i class="fas fa-play mr-1"></i> 0:30
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
}
</script>

