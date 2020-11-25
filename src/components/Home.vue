<template>
  <div>
    <div class="nav d-block">
      <div class="container pl-5 pb-3 d-flex">
        <img class="logo" alt="Vue logo" src="../assets/logo.png">
        <div class="pr-3"></div>
        <h1>Examen de VueJS</h1>
      </div>
      <div class="sec-divider"></div>
    </div>
    <br>
    <div class="container">
      <div id="cart" class="p-3 m-3">
        <h2 class="text-left pb-3"><i class="fas fa-shopping-cart mr-2"></i> Mon panier</h2>
        <h4 class="text-grey">« Je prépare mon panier pour la semaine. »</h4>
        <br>
        <form>
          <BasketTable :basket="basket"></BasketTable>
          <div class="d-flex justify-content-end pt-5">
            <button type="submit" class="btn btn-primary w-25 mr-2" v-on:click.prevent="confirmOrder()">Valider</button>
            <button type="button" class="btn btn-secondary w-25" v-on:click.prevent="emptyCart()">Annuler</button>
          </div>
        </form>
      </div>
      <br>
      <div class="sec-divider my-4"></div>
      <br>
      <div id="addItem" class="p-3 m-3">
        <h2 class="text-left"><i class="fas fa-plus mr-2"></i> Ajouter un produit</h2>
        <br>
        <form>
          <AddItemTable :allProducts="products"></AddItemTable>
          <div class="d-flex justify-content-end py-5">
            <button type="submit" class="btn btn-primary w-25 mr-2">Ajouter</button>
            <button type="button" class="btn btn-secondary w-25">Réinitialiser</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import BasketTable from './BasketTable.vue'
import AddItemTable from './AddItemTable.vue'

export default {
  name: 'Home',
  components: {
    BasketTable,
    AddItemTable
  },
  data() {
    return {
      basket: [
          {
              id: 1,
              category: "Epicerie salé",
              libelle: "Moutarde",
              quantity: 4,
              priceOnlyOne: 1.40
          },
          {
              id: 2,
              category: "Fruits et Légumes",
              libelle: "Bananes",
              quantity: 1,
              priceOnlyOne: 1.99
          },
          {
              id: 3,
              category: "Produits laitiers",
              libelle: "Yaourts au citron",
              quantity: 6,
              priceOnlyOne: 1.14
          }
      ],
      products: [
          {
              category: "Epicerie salé",
              products: [
                  {
                      libelle: "Moutarde",
                      price: 2.45
                  },
                  { 
                      libelle: "Ketchup",
                      price: 4.87
                  },
                  {
                      libelle: "Herbes de Provence",
                      price: 1.78
                  },
                  {
                      libelle: "Mayonnaise",
                      price: 2.98
                  }, 
                  {
                      libelle: "Curry",
                      price: 5.76
                  }, 
                  {
                      libelle: "Huile d'olive",
                      price: 4.23
                  }
              ]
          },
          {
              category: "Epicerie sucré",
              products: [
                  {
                      libelle: "Biscuits au chocolat",
                      price: 2.45
                  },
                  { 
                      libelle: "Céréales",
                      price: 4.87
                  },
                  {
                      libelle: "Bonbons",
                      price: 1.78
                  },
                  {
                      libelle: "Chocolats",
                      price: 2.98
                  }, 
                  {
                      libelle: "Confiture",
                      price: 5.76
                  }, 
                  {
                      libelle: "Pâte à tartiner",
                      price: 4.23
                  }
              ]
          },
          {
              category: "Produits laitiers",
              products: [
                  {
                      libelle: "Fromage de chèvre",
                      price: 2.45
                  },
                  { 
                      libelle: "Yaourts au citron",
                      price: 4.87
                  },
                  {
                      libelle: "Emmental",
                      price: 1.78
                  },
                  {
                      libelle: "Comté",
                      price: 2.98
                  }, 
                  {
                      libelle: "Lait écrémé",
                      price: 5.76
                  }, 
                  {
                      libelle: "Oeufs",
                      price: 4.23
                  }
              ]
          },
          {
              category: "Fruits et Légumes",
              products: [
                  {
                      libelle: "Bananes",
                      price: 2.45
                  },
                  { 
                      libelle: "Oranges",
                      price: 4.87
                  },
                  {
                      libelle: "Concombre",
                      price: 1.78
                  },
                  {
                      libelle: "Tomates",
                      price: 2.98
                  }, 
                  {
                      libelle: "Pommes de terre",
                      price: 5.76
                  }, 
                  {
                      libelle: "Framboises",
                      price: 4.23
                  }
              ]
          },
          {
              category: "Produits ménagers",
              products: [
                  {
                      libelle: "Eponge",
                      price: 2.45
                  },
                  { 
                      libelle: "Papier toilette",
                      price: 4.87
                  },
                  {
                      libelle: "Mouchoirs",
                      price: 1.78
                  },
                  {
                      libelle: "Liquide vaisselle",
                      price: 2.98
                  }, 
                  {
                      libelle: "Lessive",
                      price: 5.76
                  }, 
                  {
                      libelle: "Papier aluminium",
                      price: 4.23
                  }
              ]
          },
          {
              category: "Boucherie / Charcuterie",
              products: [
                  {
                      libelle: "Saucisson",
                      price: 2.45
                  },
                  { 
                      libelle: "Tranches de jambon",
                      price: 4.87
                  },
                  {
                      libelle: "Poulet rôti",
                      price: 1.78
                  },
                  {
                      libelle: "Côtes de porc",
                      price: 2.98
                  }, 
                  {
                      libelle: "Steak haché",
                      price: 5.76
                  }, 
                  {
                      libelle: "Escalopes de dinde",
                      price: 4.23
                  }
              ]
          },
      ]
    }
  },
  methods: {
    confirmOrder() {
      console.log('La commande a bien été prise en compte.');
    },
    emptyCart() {
      this.basket = [];
      console.log('Le panier a été vidé.');
    }
  }
}
</script>

<style scoped>
  .nav {
    padding: 1.5rem;
  }
  .logo {
    width: 50px;
    height: 50px;
  }
  .sec-divider {
    border-bottom: 1px solid #373a3c;
  }
  .text-gray {
    color: #373a3c !important;
  }
  .bg-gray {
    color: #fff !important;
    background-color: #373a3c !important;
  }
  .text-grey {
    color: grey !important;
  }
  .bg-grey {
    color: #fff !important;
    background-color: grey !important;
  }
</style>
