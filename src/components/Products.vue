<template>
  <section class="section-product">
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }}
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapState, mapActions } from 'vuex';

@Options({
  props: {
    msg: String,
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
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.section-category {
  background: blue;
  display: flex;
}
li {
  display: flex;
}
</style>
