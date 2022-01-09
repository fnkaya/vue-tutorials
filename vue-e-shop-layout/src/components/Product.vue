<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.description">
    <span>{{ product.name }}</span>
    <span>{{ product.description }}</span>
<!--    <router-link :to="{name: 'productDetails', params: { productId: product.id }" />-->
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: Object
  }
}
</script>

<style scoped>
.product-card{
  padding: 8px;
  width: 200px;
  display: flex;
  flex-direction: column;
}
</style>