/**
* Wednesday 2022/11/9 09:52:36
* author: francesca
* email: 575525869@qq.com
* src/components/Counter.vue
*/
<template>
  <div class="count">
    {{ this.$store.state.count }}
    <button @click="btn">btn</button>
    <button @click="addBtn">add</button>
    <button @click="reduceBtn">reduce</button>
    <h2>-------------------------Counter: getter message------------------------</h2>
    <h3>{{ this.$store.getters.powerCount }}</h3>
    <span>
      filter:
    <h3>{{ this.$store.getters.moreTodosAge( 20 ) }}</h3>
    </span>
    <h3>{{ this.$store.getters.moreTodosLength }}</h3>
    <h3>{{ this.$store.getters.doneTodos }}</h3>
    <h3>{{ this.$store.getters.doneTodosCount }}</h3>
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
  mounted() {
    this.btn()
  },
  methods: {
    btn() {
      console.log( 'this.$store.getters.doneTodos', this.$store.getters.doneTodos )
      console.log( 'this.$store.getters.doneTodosCount', this.$store.getters.doneTodosCount )
    },
    ...mapMutations( [ 'addCount', 'reduceCount' ] ),
    ...mapActions( [ 'asyncReduce' ] ),
    addBtn() {
      this.addCount( 10 )
    },
    // reduceBtn() {
    //   this.reduceCount()
    // },
    // reduceBtn() {
    //   this.asyncReduce()
    // },
    // ======使用 dispatch 触发 Action 函数======
    reduceBtn() {
      this.$store.dispatch( 'asyncReduce' )
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
