<template>
  <section class="section-product">
    <ul class="product-list">
      <li class="product-list-item" v-for="product in products" :key="product.id">
        <article class="product-item">
          <h2 class="product-title">{{product.title}}</h2>
          <img class="product-image" :src="product.thumbnail" :alt="product.title">
          <p><data :value="product.price">{{product.price}}</data>$</p>
          <button type="button" >Add to Cart</button>
        </article>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapState, mapActions } from 'vuex';

@Options({
  props: {
  },
  computed: {
    ...mapState({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
      products: (state: any) => state.products.all,
    },
    // eslint-disable-next-line function-paren-newline
    ),
  },
})
export default class Products extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.section-product {
  background: blue;
  display: flex;
}
.product-image {
  width: 250px;
  height: 250px;
}
.product-title {
  font-size: 1em;
}
.product-item {
  background-color: green;
}
.product-list {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  float: right;
}
.product-list-item {
  width: 250px;
  margin: 2px;
}
li {
  display: flex;
}
</style>
