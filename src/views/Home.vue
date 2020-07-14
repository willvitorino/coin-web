<template>
  <section class="container-fluid">
    <div class="row my-3">
      <div class="col">
        <span class="h3">HOME PAGE</span>
      </div>
    </div>
    <div v-for="(coin, index) in coins" :key="index" class="card text-white bg-info m-3 w-25">
      <div class="card-header"> {{ coin.name }} </div>
      <div class="card-body">
        <h5 class="card-title"> {{ coin.symbol }} </h5>
        <p class="card-text"> {{ coin.first_historical_data }} </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      coins: [{ name: 'coin', symbol: 'C$', first_historical_data: '' }]
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$http.get('/v1/cryptocurrency/map').then(
        res => {
          this.coins = res.data
        }
      )
    }
  }
}
</script>
