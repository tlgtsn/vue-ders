window.addEventListener('load', () => {
  window.vue = new Vue({
    el: '#app',
    data: {
      message: 'Hello World!',
      isLoggedIn: false,
      username: 'Tolga'
    }
  })
}) 