<template>
  <aside class="cart-aside" :class="[isOpen ? ('open-cart-aside') : ('close-cart-aside')]" >
    <div class="cart-wrapper">

    <h2>Cart</h2>
    <button class="close-open-button" type="button" @click="handleOpenCloseCart">open/close</button>
    </div>
  </aside>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  data() {
    return {
      isOpen: true,
    };
  },
  methods: {
    handleOpenCloseCart() {
      this.isOpen = !this.isOpen;
    },
  },
})
export default class Cart extends Vue {}
</script>

<style lang="scss" scoped>
.cart-aside {
  display: flex;
  position: absolute;
  background-color: yellow;
  height: 100%;
  position: fixed;
  z-index: 999999;
}
.open-cart-aside {
  right: 0;
  width: 320px;
}
.close-cart-aside {
  right: -320px;
  width: 320px;
}
.cart-wrapper {
  display: flex;
  position: relative;
}
.close-open-button {
  position: absolute;
  width: 100px;
  left: -100px;
}
</style>
