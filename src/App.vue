<template>
  <div id="app">
    <h2>-------------------------APP------------------------</h2>
    <h3>{{ this.$store.state.count }}</h3>
    <h2>-------------------------APP: getter message------------------------</h2>
    <h3>{{ this.$store.getters.powerCount }}</h3>
    <span>
      APP filter:
    <h3>{{ this.$store.getters.moreTodosAge( 18 ) }}</h3>
    </span>
    <h3>{{ this.$store.getters.moreTodosLength }}</h3>
    <h3>{{ this.$store.getters.doneTodos }}</h3>
    <h3>{{ this.$store.getters.doneTodosCount }}</h3>
    <Counter/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import Counter from '@/components/Counter'

export default {
  components: { Counter },
}
</script>
