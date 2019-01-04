<template>
  <div id="app">
    <h1>Hello, {{ user ? user.name : 'Unknown' }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import About from './views/About.vue'
import { User } from './api/model'
import { getUser } from './api/UserApi'

@Component
export default class App extends Vue {

  private user: User = {}

  protected async mounted() {
    try {
      this.user = await getUser(123)
    } catch (e) {
      // do nothing
    }
  }
}
</script>


<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #EEEFF1;
  min-height: 100%;
}

h1 {
  margin: 0;
  padding: 0;
}
</style>
