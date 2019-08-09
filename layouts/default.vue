<template>
  <div id="app">
    <Header />
    <nuxt />
    <!-- <div class="pos-absolute pos-bottom-left w-100"> -->
      <Footer />
    <!-- </div> -->
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
  components: {
    Header,
    Footer,
  }
}
</script>


<style>
html,
body,
a,
input,
textarea,
ul,
li,
select,
button,
label,
span,
div {
    font-family: 'SF Pro Text', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif!important;
}
html {
  font-family: 'SF Pro Text', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif!important;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #212121;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

#app {
  min-height:100vh;
  position: relative;
  /* padding-bottom:120px; */
}

a {
  text-decoration:none!important;
  color:inherit!important;
}

._flex {
  display: flex!important;
  flex-direction: row!important;
  align-items: center!important;
}

._between {
  justify-content: space-between;
}

.separator {
  border-bottom: 2px solid #f7f7f9;
}

.separator-top {
  border-top: 2px solid #f7f7f9;
}

._divisor {
  border-right: 2px solid #f7f7f9;
}

.separator:last-child {
  border-bottom: none;
}

._video {
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  animation: 0.7s fade-in-jsx-111736992 forwards ease 0.1s;
}

.items-list>li {
  height: 36px!important;
}

._border-corner-left {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

._image {
  height: 100%;
  width:100%;
  -webkit-object-fit: contain;
  object-fit: contain;
}

._border-corner-right {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

._video-sample {
  background-color: #000;
  height: 400px;
  width: 100%;
}

._video-sample-2 {
  background-color: #000;
  height: 200px;
  width: 100%;
}

._box-shadow {
  box-shadow: 0 4px 14px 0 rgba(0,0,0,0.12);
}

._box-shadow-hover:hover {
  box-shadow: 0 4px 14px 0 rgba(0,0,0,0.12);
}

.fg-facebook {
  color: #3B5998;
}

.fg-twitter {
  color: #00acee;
}

.fg-linkedin {
  color: #0077B5;
}

.fg-youtube {
  color: #c4302b;
}

._home {
  width: 100%;
  min-height: 500px;
  background-image: radial-gradient(rgb(215, 215, 215) 1px, transparent 1px), radial-gradient(rgb(215, 215, 215) 1px, transparent 1px);
  background-size: 50px 50px;
  background-position: 0px 0px, 25px 25px;
}

._header {
  box-shadow: rgba(0, 0, 0, 0.06) 0px 6px 20px;
  pointer-events: auto;
  background: rgba(255, 255, 255, 0.98);
}

._subtitle {
  color: #666666;
}

._font2 {
  font-family: 'SF Pro Display', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif!important;
}

._card {
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  overflow: hidden;
}

._card:hover {
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  animation: 0.7s _card forwards ease 0.1s;
}
._card-content:hover {
  transform: scale(1.1);
}

._box-sample {
  background-color: #222222;
  color: white;
  min-height: 200px;
}

._box-sample-3 {
  background-color: #222222;
  color: white;
  min-height: 400px;
}

._box-sample-2 {
  background-color: #222222;
  color: white;
  min-height: 140px;
}

._background_post {
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 18px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.65));
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.nuxt-link-active {
  font-weight: 700!important;
}

@media screen and (max-width: 767px) {
  ._divisor {
    border-right: none;
  }
}

</style>
