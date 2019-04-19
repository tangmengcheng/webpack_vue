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
    <!-- <p>mapGetters辅助函数对象的方式getters获取list数据{{this.getters_list}}</p> -->
    <p>mapGetters辅助函数数组的方式getters获取list数据{{this.list}}</p>
    <!-- 添加路由渲染 -->
    <router-link to='/a'>A组件</router-link>
    <router-link to='/b'>B组件</router-link>
    <router-view />
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
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
    }),
    // 1. 第一种获取getters
    // ...mapGetters({
    //   getters_list: 'list'
    // })
    // 2. 第二种获取getters
    ...mapGetters([
      'list'
    ])
  },
  // 3. 第三种方式使用mapState
  // computed:mapState({
  //   // arr: state => state.list
  //   arr: 'list'
  // }),
  // 3. 第三种方式使用mapGetters
  // computed:mapGetters({
  //   list: 'list'
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

