/**
* Wednesday 2022/11/9 09:52:36
* author: francesca
* email: 575525869@qq.com
* src/components/Counter.vue
*/
<template>
  <div class="count">
    sum: {{ this.$store.state.sum }}
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="5">5</option>
      <option value="10">10</option>
    </select>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="incrementOrigin">incrementOrigin 当前求和为奇数再加</button>
    <button @click="incrementAsync">incrementAsync 等一等再加</button>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'Counter',
  data() {
    return {
      num: 100,
    }
  },
  methods: {
    increment() {
      return this.$store.dispatch( 'add', this.num )
    },
    decrement() {
      return this.$store.commit( 'Reduce', this.num )
    },
    incrementOrigin() {
      this.$store.dispatch( 'addOrigin', this.num )
    },
    incrementAsync() {
      this.$store.dispatch( 'addAsync', this.num )
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
