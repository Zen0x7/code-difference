Nova.booting((Vue, router, store) => {
  Vue.component('index-code-difference', require('./components/IndexField'))
  Vue.component('detail-code-difference', require('./components/DetailField'))
  Vue.component('form-code-difference', require('./components/FormField'))
})
