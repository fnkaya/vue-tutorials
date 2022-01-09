<template>
  <div>
    <Header />
    <div class="product-container">
      <Product
          v-for="product in products"
          :key="product.id"
          :product="product" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import {getProductList} from "@/utils/api";
import Product from "@/components/Product";

export default {
  name: "ProductListingPage",
  components: {
    Product,
    Header
  },
  data() {
    return {
      products: []
    }
  },
  async mounted() {
    this.products = await getProductList();
  }
}
</script>

<style scoped>
.product-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>