<template>
  <div class="product-card">
    <span class="favorite-button"
          :style="[checkIsFavorite ? {'color': 'lightcoral'} : {'color': 'dimgrey'}]">
      <font-awesome-icon icon="heart" @click="addToFavorites"/>
    </span>
    <img :src="data.image" :alt="data.description">
    <span class="product-title">{{ data.name }}</span>
    <span class="product-description">{{ data.description }}</span>
    <router-link :to="{name: 'productDetails', params: { productId: data.id }}" >
      Details
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    data: Object,
    isFavorite: Function,
  },
  methods: {
    addToFavorites() {
      this.$emit('addToFavorites', this.data.id);
    },
  },
  computed: {
    checkIsFavorite() {
      return this.isFavorite(this.data.id);
    }
  }
}
</script>

<style scoped>
.product-card {
  padding: 8px;
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  cursor: pointer;
  transition: transform .5s;
}
.product-card:hover {
  transform: scale(1.15);
}
.favorite-button {
  position: absolute;
  top: 20px;
  right: 20px;
  color: dimgrey;
  transition: font-size .5s;
}
.favorite-button:hover {
  font-size: 1.5em;
}
.product-title {
  font-weight: bold;
}
.product-description {
  opacity: .5;
}
.product-card > a {
  padding: 8px 16px;
  border-radius: 8px;
  color: lightskyblue;
  background-color: white;
  border: 1px solid lightskyblue;
  text-decoration: none;
  margin-top: auto;
  transition: background-color .5s, coolor .5s, border .5s;
}
.product-card:hover > a {
  background-color: lightskyblue;
  color: white;
  border: none;
}
</style>