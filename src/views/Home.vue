<template>
  <section class="container-fluid">
    <div class="row my-3">
      <div class="col">
        <span class="h3">HOME PAGE</span>
      </div>
    </div>
    <div class="row my-3">
      <div class="col">
        <button class="btn btn-sm btn-primary" @click="init" >GET</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {}
  },
  mounted () {
    // this.init()
  },
  methods: {
    init () {
      this.$http.get('/v1/cryptocurrency/map', { params: { CMC_PRO_API_KEY: '33b14ab7-d5c7-46b6-9ee4-49bb9222abe3' } }).then(
        res => {
          console.log(res)
        }
      )
    }
  }
}
</script>
