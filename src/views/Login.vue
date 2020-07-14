<template>
  <section id="section-login" class="container">
    <div class="row my-3">
      <div class="col text-center">
        <span class="h1">Nome do Sistema</span>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-lg"></div>
      <div class="col">
        <div class="card text-center border-info">
          <div class="card-header bg-info text-white">
            Entrar
          </div>
          <div class="card-body">
            <input
              type="text"
              id="inputUsername"
              class="form-control my-1"
              placeholder="Nome de Usuário"
              :class="{
                'border-danger': $v.state.username.required && $v.state.username.$invalid,
                'border-success': $v.state.username.required && !$v.state.username.$invalid,
              }"
              v-model="state.username"
            />
            <input
              type="password"
              name="inputPassword"
              id="inputPassword"
              class="form-control my-1"
              :class="{
                'border-danger': $v.state.password.required && $v.state.password.$invalid,
                'border-success': $v.state.password.required && !$v.state.password.$invalid,
              }"
              placeholder="Senha"
              v-model="state.password"
              @keypress.enter="doLogin"
            />
          </div>
          <div class="card-footer text-muted">
            <button
              :disabled="$v.$invalid"
              class="btn btn-info"
              @click="doLogin"
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
      <div class="col-lg"></div>
    </div>
  </section>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      state: {
        username: '',
        password: ''
      }
    }
  },
  validations: {
    state: {
      username: {
        required,
        minLength: minLength(4)
      },
      password: {
        required,
        minLength: minLength(4)
      }
    }
  },
  mounted () {
    localStorage.removeItem('access')
  },
  methods: {
    doLogin () {
      /** Sua regra de login aqui */
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="scss" scoped>
.border-danger:focus {
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}
.border-success:focus {
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}
</style>
