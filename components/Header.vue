<template>
  <div>
    <!-- Header on Big Screen -->
    <div class="_flex flex-wrap _between _header px-5">
      <ul class="_flex unstyled-list">
        <li class="mr-6">
          <nuxt-link to="/"><img src="../assets/logo.png" alt="" class="border border-size-1 bd-light" style="width:56px;"></nuxt-link>
        </li>
        <li class="mr-8"><nuxt-link to="/a-propos">À propos</nuxt-link></li>
        <li class="mr-8"><nuxt-link to="/historique">Historique</nuxt-link></li>
        <li class="mr-8"><nuxt-link to="/actualites">Actualités</nuxt-link></li>
        <li class="mr-8"><nuxt-link to="/evenements">Evénements</nuxt-link></li>
        <li class="mr-8"><nuxt-link to="/photos">Photos</nuxt-link></li>
        <li class="mr-8"><nuxt-link to="/videos">Vidéos</nuxt-link></li>
      </ul>
      <!--  -->
      <ul class="_flex unstyled-list">
        <li class="mr-8"><nuxt-link to="/blog">Blog</nuxt-link></li>
        <li class="button bg-white-hover fg-white fg-dark-hover bg-dark text-medium _box-shadow rounded _flex _font2"><a onClick="Metro.dialog.open('#contact')">
          Nous contacter <i class="far fa-arrow-right ml-2"></i>
        </a></li>
      </ul>
    </div>
    <!-- Contact us modal -->
    <div class="dialog border-radius-10" id="contact" data-role="dialog">
      <div class="dialog-content pb-0">
        <h4 class="_font2">We are looking forward to hearing from you</h4>
        <div class="my-5">
          <div class="form-group">
            <label>Your Email</label>
            <input type="email" placeholder=""/>
          </div>
          <div class="form-group">
            <label>Your Name</label>
            <input type="email" placeholder=""/>
          </div>
          <div class="form-group">
            <label>How can we help you</label>
            <textarea data-role="textarea" data-clear-button-icon="<i class='fal fa-times'></i>"></textarea>
          </div>
        </div>
      </div>
      <div class="dialog-actions border-top-none pt-0 pb-5">
        <button class="button block bg-white-hover fg-white fg-dark-hover bg-dark _box-shadow rounded _font2 js-dialog-close">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

