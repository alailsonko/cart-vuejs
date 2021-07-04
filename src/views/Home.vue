<template>
  <div class="home">
    <CategoriesList msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CategoriesList from '@/components/CategoriesList.vue'; // @ is an alias to /src

@Options({
  components: {
    CategoriesList,
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">

</style>
