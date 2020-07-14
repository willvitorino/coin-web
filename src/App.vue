<template>
  <div id="app">
    <div class="global">
      <div class="menu" v-if="$route.name != 'login'" >
        <left-menu />
      </div>
      <div class="content">
        <router-view />
        <div class="footer text-monospace text-muted">
          Desenvolvido por <a target="_blank" href="http://github.com/willvitorino" >William Vitorino</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    leftMenu: () => import('./components/LeftMenu')
  },
  data () {
    return { }
  }
}

</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/bootstrap';
  @import 'node_modules/bootstrap-vue/src/index.scss';

  * {
    margin: 0;
    padding: 0;
  }
  #app {
    height: 100vh;
    > .global {
      display: flex;
      flex-direction: row;

      width: 100%;
      height: 100vh;

      overflow-y: hidden;
      > .menu {
        width: 5rem;
        height: 100%;
        background-color: var(--info);
      }
      > .content {
        height: 100%;
        width: 100%;
        overflow-y: scroll;
        background-color: whitesmoke;

        > .footer {
          width: 100%;
          padding: 0.25rem 1rem;
          border-top: solid lightgray thin;
          text-align: right;
        }
      }
    }
  }
</style>
