<template>
  <div>
    <!-- Header -->
    <div class="separator _home">
      <div class="container py-20">
        <div class="row">
          <div class="cell-12 cell-md-7">
            <p class="fg-blue text-medium">M.DE.C</p>
            <h1 class="text-bold">Mouvement Debout Congolais</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis magnam recusandae exercitationem vero aliquid impedit quidem saepe, pariatur, itaque quas iste natus dolore eius praesentium atque suscipit eligendi excepturi doloremque.</p>
            <!--  -->
            <button class="button bg-white-hover fg-white fg-dark-hover bg-dark _box-shadow rounded _flex my-5 _subheading _font2 text-medium">
              Lire plus
              <i class="far fa-arrow-right ml-3"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Body 1 -->
    <div class="separator bg-light">
      <div class="container py-20">
        <div class="mx-10-md">
          <div class="_video">
            <div class="_video-sample pos-relative">
              <div class="_play-button pos-absolute pos-center"><i class="fas fa-play fa-2x fg-white"></i></div>
            </div>
            <div class="p-5">
              <div style="font-size:30px;" class="text-bold _font2">Présentation du parti - M.DE.C</div>
              <div class="_subtitle">Président Jean-Pierre Nkanku</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Body 2 -->
    <div class="separator">
      <div class="container py-10">
        <div class="_flex _between">
          <h2 class="text-bold _font2">Actualités</h2>
          <a href="" class="button bg-dark-hover rounded fg-white-hover _box-shadow-hover link _caption text-bold text-upper _flex">
            Voir tout
            <i class="far fa-arrow-right ml-2"></i>
          </a>
        </div>
        <div class="row my-15">
          <div class="cell-12 cell-md-6 cell-xxl-4 mb-10 pr-5" v-for="i in 10" :key="i">
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
        <div class="_flex flex-justify-center">
          <button class="button bg-white-hover fg-white fg-dark-hover bg-dark _box-shadow rounded _flex my-5">Voir plus <i class="far fa-angle-down _title ml-2"></i></button>
        </div>
      </div>
    </div>
    <!-- Body 3 -->
    <div class="separator bg-light">
      <div class="container py-10">
        <div class="_flex _between">
          <h2 class="text-bold _font2">Vidéos</h2>
          <a href="" class="button bg-dark-hover rounded fg-white-hover _box-shadow-hover link _caption text-bold text-upper _flex">
            Voir tout
            <i class="far fa-arrow-right ml-2"></i>
          </a>
        </div>
        <div class="row my-15">
          <div class="cell-12 cell-md-6 cell-lg-4 mb-10" v-for="x in 9" :key="x">
            <div class="_video">
              <div class="_video-sample-2 pos-relative">
                <div class="_play-button pos-absolute pos-center"><i class="fas fa-play fa-2x fg-white"></i></div>
              </div>
              <div class="px-5 pt-3 pb-4">
                <h6 class="text-bold _font2 my-1">Video {{x}}</h6>
                <div class="_subtitle _body-1">Président Jean-Pierre Nkanku</div>
                <!--  -->
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
        <div class="_flex flex-justify-center">
          <button class="button bg-white-hover fg-white fg-dark-hover bg-dark _box-shadow rounded _flex my-5">Voir plus <i class="far fa-angle-down _title ml-2"></i></button>
        </div>
      </div>
    </div>
    <!-- Body 4 -->
    <div class="separator">
      <div class="container py-10">
        <div class="_flex _between">
          <h2 class="text-bold _font2">Evénements</h2>
          <a href="" class="button bg-dark-hover rounded fg-white-hover _box-shadow-hover link _caption text-bold text-upper _flex">
            Voir tout
            <i class="far fa-arrow-right ml-2"></i>
          </a>
        </div>
        <div class="row my-15">
          <div class="cell-12 cell-md-6 cell-lg-4 cell-xxl-3 mb-5" v-for="n in 9" :key="n">
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
        <div class="_flex flex-justify-center">
          <button class="button bg-white-hover fg-white fg-dark-hover bg-dark _box-shadow rounded _flex my-5">Voir plus <i class="far fa-angle-down _title ml-2"></i></button>
        </div>
      </div>
    </div>
    <!-- Body 5 -->
    <div class="separator bg-dark fg-white">
      <div class="container py-10">
        <div class="row">
          <div class="cell-12 cell-md-6 cell-lg-7">
            <h4 class="text-medium _font2">Rester au courant des actualités du parti</h4>
            <p class="">Abonnez-vous à notre newsletter pour recevoir quotidiennement nos actualités par SMS ou depuis votre email.</p>
          </div>
          <div class="cell-12 cell-md-6 cell-lg-4 offset-md-1 pos-relative">
            <ul class="app-bar-present pos-absolute pos-top-left bg-transparent" data-role="materialtabs" data-fixed-tabs="true">
                <li class="fg-white"><a href="#sms">SMS</a></li>
                <li class="fg-white"><a href="#email">Email</a></li>
            </ul>
            <div style="margin-top:65px">
                <div id="sms">
                  <div  class="d-flex flex-column flex-align-center">
                    <div class="row">
                      <div class="cell-3 p-0">
                        <select data-role="select" class="_border-corner-left border-none">
                        <option value="1">+243</option>
                        <option value="2">+242</option>
                      </select>
                      </div>
                      <div class="cell-9 p-0">
                        <input type="text" data-role="input" placeholder="000-000-000" class="_border-corner-right border-none" data-clear-button-icon="<i class='fal fa-times'></i>">
                      </div>
                    </div>
                    <button class="button block bg-dark-hover fg-dark fg-white-hover bg-white _box-shadow rounded _flex my-3 _font2">S'inscrire</button>
                  </div>
                </div>
                <div id="email">
                  <div  class="d-flex flex-column flex-align-center">
                    <input type="text" placeholder="Email" class="border-radius-8 border-none">
                    <button class="button block bg-dark-hover fg-dark fg-white-hover bg-white _box-shadow rounded _flex my-3 _font2">S'inscrire</button>
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
import Logo from '~/components/Logo.vue'

export default {
  head: {
    title: 'M.DE.C - Mouvement Debout Congolais'
  },
  components: {
    Logo
  }
}
</script>

<style>
</style>
