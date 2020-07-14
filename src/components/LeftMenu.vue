<template>
  <div class="left-menu">
    <router-link v-for="(item, i) in items" :key="i" :to="item.to" :class="item.class" >
      <b-icon class="h3 mb-0" :icon="item.icon"></b-icon>
      <small>  </small>
    </router-link>
    <b-dropdown id="dropdown-dropup" dropup variant="info" class="menu">
      <template v-slot:button-content>
        <b-avatar variant="light" ></b-avatar>
      </template>
      <b-dropdown-item href="#/login">Sair</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          text: 'Home',
          icon: 'house-door-fill',
          to: '/',
          class: 'item border-light text-light mt-3 mb-2'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .left-menu {
    background-color: var(--info);
    width: 5rem;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
      > .item > small {
        transition-duration: 0.25s;
        opacity: 1;
      }
    }

    > .active {
      border-bottom: solid var(--light) 3px;
    }

    > .item {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > small {
        opacity: 0;
        transition-duration: 0.25s;
      }

      &:hover {
        border-bottom: solid var(--light) 2px;
      }
    }

    > .menu {
      margin-top: auto;
      margin-bottom: 1rem;
    }
  }
</style>
