<template>
  <aside class="aside-category">
    <ul>
      <li v-for="category in categories" :key="category.id">
        <input
          type="radio"
          :id="category.id"
          name="category"
          v-model="selectedCategory"
          v-on:change="handleChooseCategory"
          :value="category.id"
        />
        {{ category.name }}
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapState, mapActions } from 'vuex';

@Options({
  props: {
    msg: String,
  },
  data() {
    return {
      selectedCategory: 'all-categories',
    };
  },
  computed: {
    ...mapState({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
      categories: (state: any) => state.categories.all,
    },
    // eslint-disable-next-line function-paren-newline
    ),
  },
  created() {
    this.$store.dispatch('categories/getAllCategories');
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleChooseCategory(e: any): void {
      this.$store.dispatch('products/getAllProducts', e.target.value);
    },
  },
})
export default class Categories extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.aside-category {
  background: red;
  display: flex;
}
li {
  display: flex;
}
</style>
