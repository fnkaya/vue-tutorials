<template>
  <div>
    <Header :favoritesCount="favorites.length"
            @searchKeywordChanged="searchKeywordChanged"/>
    <div class="product-container">
      <Product
          v-for="product in filteredProducts"
          :key="product.id"
          :data="product"
          :favorites="favorites"
          :isFavorite="isFavorite"
          @addToFavorites="addToFavorites"/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Product from "@/components/Product";
import {getProductList} from "@/utils/api";
import {LOCAL_STORAGE_FAVORITES} from "@/constants";

export default {
  name: "ProductListingPage",
  components: {
    Product,
    Header
  },
  data() {
    return {
      products: [],
      favorites: [],
      searchKeyword: ""
    }
  },
  methods: {
    addToFavorites(productId) {
      if (!this.favorites.includes(productId)) {
        this.favorites.push(productId);
      } else {
        this.favorites = [ ...this.favorites.filter(pId => pId !== productId) ];
      }

      if (!this.favorites.length) {
        localStorage.removeItem(LOCAL_STORAGE_FAVORITES);
      } else {
        localStorage.setItem(LOCAL_STORAGE_FAVORITES, JSON.stringify(this.favorites));
      }
    },
    isFavorite(productId) {
      return this.favorites.includes(productId);
    },
    searchKeywordChanged(keyword) {
      this.searchKeyword = keyword;
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product => product.name.toLowerCase().includes(this.searchKeyword.toLowerCase()) )
    },
  },
  created() {
    this.favorites = JSON.parse(localStorage.getItem(LOCAL_STORAGE_FAVORITES)) || [];
  },
  async mounted() {
    this.products = await getProductList();
  }
}
</script>

<style scoped>
.product-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>