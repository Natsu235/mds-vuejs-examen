<template>
    <div class="my-3">
        <div class="form-row">
            <div class="form-group col-md-6 px-3">
                <label for="category">Catégorie</label>
                <select class="form-control" id="category" v-model="category">
                    <option value="" selected disabled hidden>-- Choisir une catégorie --</option>
                    <option 
                        v-for="(product, index) in allProducts" 
                        :value="index" 
                        :key="index"> 
                        {{ product.category }}
                    </option>
                </select>
            </div>
            <div class="form-group col-md-6 px-3" v-if="category != ''">
                <label for="product">Produit</label>
                <select class="form-control" id="product" 
                    v-model="product" 
                    :disabled="category == ''">
                    <option value="" selected disabled hidden>-- Choisir un produit --</option>
                    <option 
                        v-for="(product, index) in allProducts[category].products" 
                        :value="index" 
                        :key="index"> 
                        {{ product.libelle }}
                    </option>
                </select>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6 px-3" v-if="category != ''">
                <label for="quantity">Quantité</label>
                <input type="number" min="1" class="form-control" id="quantity" value="1" 
                    v-model="quantity" 
                    :disabled="category == ''">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AddItemTable',
  props: ['allProducts'],
  data() {
    return {
      category: '', // Correspond au message du placeholder [-- Choisir une catégorie --]
      product:  '', // Correspond au message du placeholder [-- Choisir un produit --]
      quantity: 1   // La quantité du produit par défaut
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>
