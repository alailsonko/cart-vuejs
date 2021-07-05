<template>
  <div class="home">
    <Categories msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Categories from '@/components/Categories.vue'; // @ is an alias to /src

@Options({
  components: {
    Categories,
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">

</style>
