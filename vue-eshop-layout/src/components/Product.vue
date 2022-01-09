<template>
  <div class="product-card">
    <span class="favorite-button"
          :style="[checkIsFavorite ? {'color': 'lightcoral'} : {'color': 'dimgrey'}]">
      <font-awesome-icon icon="heart" @click="addToFavorites"/>
    </span>
    <img :src="data.image" :alt="data.description">
    <span>{{ data.name }}</span>
    <span>{{ data.description }}</span>
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
.product-card{
  padding: 8px;
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
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
.product-card > a {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  color: white;
  background-color: lightskyblue;
  text-decoration: none;
  margin-top: auto;
}
</style>