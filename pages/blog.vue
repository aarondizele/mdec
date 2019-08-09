<template>
  <div>
    <!-- Header -->
    <div class="separator">
      <div class="container py-10">
        <h1 class="text-medium">Blog</h1>
        <div class="_flex">
          <i class="far fa-search"></i>
          <input type="text" placeholder="Recherche article" class="border-none text-small" style="width:300px!important">
        </div>
      </div>
    </div>
    <!-- Body -->
    <div class="py-10 container">
      <div class="row">
        <div class="cell-12 cell-md-8">
          <ul class="unstyled-list">
            <li class="separator py-4 mb-4 px-5 px-0-md" v-for="i in 10" :key="i">
              <div class="_subtitle _caption">Tuesday, July 20th 2019</div>
              <h5 class="mt-2 mb-3 _font2">Title of post</h5>
              <div class="_body-1 _flex mb-2">
                  <span class="mr-2">
                    <svg viewBox="64 64 896 896" data-icon="user" width="14" height="14" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg>
                  </span>
                  Publié par Aron Dizele
                </div>
              <div class="_body-1 my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quia molestiae rem repudiandae maxime! Necessitatibus dolores aliquid quaerat quibusdam molestias. Dolorum eius consequuntur ad at, sunt quisquam? Optio, explicabo impedit!</div>
              <nuxt-link :to="`/article/${i}`" class="button link _font2 _body-2 _flex">
                Read more
                <i class="far fa-arrow-right ml-2"></i>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="cell-12 cell-md-4 pt-4">
          <h5 class="text-medium _font2">Articles recommandés</h5>
          <div class="my-5">
            <ul class="items-list">
              <li class="_subtitle _body-1 fg-dark-hover" v-for="y in 10" :key="y">
                <nuxt-link :to="`/article/${y}`" class="_flex">
                  <span class="mr-3"><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><g><path d="M15.8675 7.97834C15.0572 7.1679 13.8066 6.75711 12.15 6.75711C11.7993 6.75711 11.4291 6.77607 11.047 6.81319L7.05811 3.04363L8.01068 2.09131C8.18724 1.91465 8.18724 1.62843 8.01053 1.45167L6.68874 0.12968C6.51914 -0.0399715 6.21876 -0.0399715 6.04915 0.12968L0.132505 6.04678C-0.0441515 6.22344 -0.0441515 6.50966 0.132404 6.68631L1.454 8.00791C1.5389 8.09271 1.65387 8.14039 1.77389 8.14039C1.89381 8.14039 2.00888 8.09271 2.09368 8.00791L3.04635 7.05558L6.81591 11.0443C6.66342 12.6128 6.76303 14.6473 7.98081 15.8651C8.06917 15.9534 8.18489 15.9976 8.30056 15.9976C8.41632 15.9976 8.53214 15.9533 8.6205 15.8651L11.9242 12.561L14.4546 15.0917C14.5431 15.18 14.6588 15.2241 14.7746 15.2241C14.8903 15.2241 15.0062 15.1799 15.0944 15.0917C15.2711 14.915 15.2711 14.6287 15.0944 14.452L12.5638 11.9215L15.8676 8.61802C16.0442 8.44132 16.0442 8.15514 15.8675 7.97834ZM8.33027 14.8756C7.59914 13.8164 7.59483 12.1839 7.73697 10.9361C7.75198 10.8036 7.7079 10.6711 7.61625 10.5744L3.38426 6.09591C3.30031 6.00711 3.18404 5.95628 3.06191 5.95452C3.05981 5.95452 3.05761 5.95452 3.05551 5.95452C2.93559 5.95452 2.82052 6.0022 2.73572 6.08695L1.77389 7.04858L1.09188 6.36662L6.369 1.08911L7.05121 1.77157L6.08948 2.73314C6.00313 2.81969 5.9554 2.93716 5.9571 3.05959C5.95885 3.18146 6.00998 3.29813 6.09878 3.38193L10.5768 7.61357C10.6737 7.70542 10.8057 7.7496 10.9385 7.73414C11.3615 7.68596 11.7691 7.66165 12.1499 7.66165C13.3239 7.66165 14.239 7.88523 14.8785 8.32775L8.33027 14.8756Z" fill="currentColor"></path></g></svg></span>
                  Article {{y}}
                </nuxt-link>
              </li>
            </ul>
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

