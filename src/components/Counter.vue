/**
* Wednesday 2022/11/9 09:52:36
* author: francesca
* email: 575525869@qq.com
* src/components/Counter.vue
*/
<template>
  <div class="count">
    {{ this.$store.state.count }}
    <button @click="addBtn">add</button>
    <button @click="reduceBtn">reduce</button>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'Counter',
  computed: {
    doneTodosCount() {
      return this.$store.state.todos.filter( todo => todo.done ).length
    },
  },
  methods: {
    ...mapMutations( [ 'addCount', 'reduceCount' ] ),
    ...mapActions( [ 'asyncReduce' ] ),
    addBtn() {
      this.addCount( 10 )
    },
    // reduceBtn() {
    //   this.reduceCount()
    // },
    reduceBtn() {
      this.asyncReduce()
    },
  },
  // =====commit=====
  // methods: {
  //   addBtn() {
  //     this.$store.commit( 'addCount', 10 )
  //   },
  //   reduceBtn() {
  //     this.$store.commit( 'reduceCount' )
  //   },
  // },
}
</script>

<style lang="scss" scoped>

</style>
