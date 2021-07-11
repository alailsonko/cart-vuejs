<template>
  <div class="home">
    <Categories />
    <Products />
    <Cart />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Categories from '@/components/Categories.vue';
import Products from '@/components/Products.vue';
import Cart from '@/components/Cart.vue';

@Options({
  components: {
    Categories,
    Products,
    Cart,
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.home {
    display: flex;
    justify-items: flex-start;
    border: 1px solid red;
}
</style>
