<template>
    <table class="table my-3">
        <thead class="thead-dark">
            <tr>
                <th scope="col"><a href="#" v-on:click.prevent="orderByCategory()">Catégorie <i class="fas fa-chevron-down"></i></a></th>
                <th scope="col"><a href="#" v-on:click.prevent="orderByProduct()">Produit <i class="fas fa-chevron-down"></i></a></th>
                <th scope="col"><a href="#" v-on:click.prevent="orderByQuantity()">Quantité <i class="fas fa-chevron-down"></i></a></th>
                <th scope="col"><a href="#" v-on:click.prevent="orderByPrice()">Prix <i class="fas fa-chevron-down"></i></a></th>
                <th class="bg-white border-white"></th>
            </tr>
        </thead>
        <tbody>
            <BasketTableItem 
                v-for="(item, index) in orderedItems" 
                :key="index" 
                :index="index" 
                :item="item">
            </BasketTableItem>
            <tr>
                <td id="totalPrice" class="font-weight-bold"><i class="fas fa-chevron-right mr-2"></i> Prix total : {{ showCartPrice }} €</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import BasketTableItem from './BasketTableItem.vue'
import _ from 'lodash'

export default {
  name: 'BasketTable',
  components: {
    BasketTableItem
  },
  props: ['basket'],
  data() {
      return {
          sortType: 'default',
          isReversed: false
      }
  },
  methods: {
    // Réorganisation du panier par 'catégorie'
    orderByCategory() {
      this.sortType = 'category';
      if (this.isReversed)
        this.isReversed = false;
      else
        this.isReversed = true;
    },
    // Réorganisation du panier par 'produit'
    orderByProduct() {
      this.sortType = 'libelle';
      if (this.isReversed)
        this.isReversed = false;
      else
        this.isReversed = true;
    },
    // Réorganisation du panier par 'quantité'
    orderByQuantity() {
      this.sortType = 'quantity';
      if (this.isReversed)
        this.isReversed = false;
      else
        this.isReversed = true;
    },
    // Réorganisation du panier par 'prix'
    orderByPrice() {
      this.sortType = 'priceOnlyOne';
      if (this.isReversed)
        this.isReversed = false;
      else
        this.isReversed = true;
    }
  },
  computed: {
    // Affiche le prix total du panier
    showCartPrice() {
      let totalPrice = 0;
      for(let item of this.orderedItems) {
        totalPrice += item.priceOnlyOne * item.quantity;
      }
      return Number.parseFloat(totalPrice).toFixed(2);
    },
    // Réorganise la liste des articles du panier
    orderedItems() {
      if (this.sortType === 'category') {
        return _.orderBy(this.basket, 'category', (this.isReversed ? 'asc' : 'desc'));
      }
      else if (this.sortType === 'libelle') {
        return _.orderBy(this.basket, 'libelle', (this.isReversed ? 'asc' : 'desc'));
      }
      else if (this.sortType === 'quantity') {
        return _.orderBy(this.basket, 'quantity', (this.isReversed ? 'asc' : 'desc'));
      }
      else if (this.sortType === 'priceOnlyOne') {
        return _.orderBy(this.basket, 'priceOnlyOne', (this.isReversed ? 'asc' : 'desc'));
      }
      else
        return _.orderBy(this.basket, 'id');
    }
  }
}
</script>

<style scoped>
  a {
    color: #fff;
    text-decoration: none;
  }
  a:hover
  {
    color:#fff;
    text-decoration:none;
    cursor:pointer;
  }
</style>
