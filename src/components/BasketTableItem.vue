<template>
    <tr>
        <td>{{ item.category }}</td>
        <td>{{ item.libelle }}</td>
        <td>&times;{{ item.quantity }}</td>
        <td>{{ showItemPrice }} €</td>
        <td class="border-white text-center d-flex justify-content-center p-2">
            <a class="icon" href="#" v-on:click.prevent="updateQuantity(1)"><i class="fas fa-plus fa-2x"></i></a>
            <div class="mr-4"></div>
            <a class="icon" href="#" v-on:click.prevent="updateQuantity(-1)"><i class="fas fa-minus fa-2x"></i></a>
        </td>
    </tr>
</template>

<script>
export default {
  name: 'BasketTableItem',
  props: ['item', 'index', 'orderedItems'],
  methods: {
    // Affiche la nouvelle quantité d'un article du panier
    updateQuantity(modifier) {
      let newQuantity = this.item.quantity + modifier;
      (newQuantity < 1 ? this.item.quantity == 1 : this.item.quantity = newQuantity);
    }
  },
  computed: {
    // Affiche le prix calculé d'un article du panier
    showItemPrice() {
      let newPrice = this.item.quantity * this.item.priceOnlyOne;
      return Number.parseFloat(newPrice).toFixed(2);
    }
  }
}
</script>

<style scoped>
  .icon {
    font-size: 0.7rem;
    padding-top: 0.3rem;
  }
</style>
