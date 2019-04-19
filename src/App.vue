<template>
  <div>
    hello world
    {{this.$store.state.count}}
    {{this.$store.getters.count}}
    <button @click='change'>点击改变State</button>
    <button @click='asyncChange'>点击异步改变State</button>
    <ul>
      <li v-for="(item, index) in arr" :key='index'>
        <h1>{{item.name}}</h1>
        <h2>{{item.age}}</h2>
      </li>
    </ul>
    <table border>
      <tr>
        <td>姓名</td>
        <td>年龄</td>
      </tr>
      <tr v-for="(item, index) in arr" :key="index">
        <td>{{item.name}}</td>
        <td>{{item.age}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  created () {
    // console.log(this.list)
  },
  computed: {
    // 1.如果获取的数据和state名称相同可以直接使用数组的方式
    // ...mapState([
    //   'list'
    // ])
    // 2. 如果获取的数据不想和state中的名称相同的话就用对象的形式
    ...mapState({
      arr: 'list'
    })
  },
  // 3. 第三种方式使用mapState
  // computed:mapState({
  //   // arr: state => state.list
  //   arr: 'list'
  // }),
  methods: {
    change () {
      this.$store.commit('ADD_COUNT', 10)
    },
    asyncChange () {
      this.$store.dispatch('add', 20)
    }
  }
}
</script>

<style>
</style>

