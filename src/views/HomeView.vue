<template>
  <div class="home">
    <CounterView/>
    <GettersView/>
  </div>
</template>

<script>
// @ is an alias to /src
import GettersView from '@/components/Getters'
import CounterView from '@/components/Counter'

export default {
  name: 'HomeView',
  components: {
    CounterView,
    GettersView,
  },
}
</script>
