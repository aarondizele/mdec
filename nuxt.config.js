
export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "M.DE.C - Mouvement Debout Congolais",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "metro4:init", content: "true" },
      { name: "metro4:locale", content: "fr-FR" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdn.metroui.org.ua/v4/css/metro-all.min.css"
      }
    ],
    script: [
      { src: "https://code.jquery.com/jquery-3.3.1.min.js" },
      { src: "https://cdn.metroui.org.ua/v4/js/metro.min.js" },
      {
        src:
          "https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#333333" },
  /*
   ** Global CSS
   */
  css: ["~/styles/sf-pro.css", "~/styles/typography.css", "~/static/fontawesome/css/all.css"],
  /*
   ** Plugins to load before mounting the App
   */
  // plugins: ["~/plugins/metro.js"],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
