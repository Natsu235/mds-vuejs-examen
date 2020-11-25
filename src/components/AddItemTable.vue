<template>
    <div class="my-3">
        <div class="form-row">
            <div class="form-group col-md-6 pr-3">
                <label for="category">Catégorie</label>
                <select class="form-control" id="category">
                    <option value="0" selected disabled hidden>-- Choisir une catégorie --</option>
                    <option 
                        v-for="(product, index) in allProducts" 
                        :value="index + 1" 
                        :key="index + 1"> 
                        {{ product.category }}
                    </option>
                </select>
            </div>
            <div class="form-group col-md-6 pl-3">
                <label for="product">Produit</label>
                <select class="form-control" id="product">
                    <option value="0" selected disabled hidden>-- Choisir un produit --</option>
                    <option 
                        v-for="(product, index) in allProducts.products" 
                        :value="index + 1" 
                        :key="index + 1"> 
                        {{ product.libelle }}
                    </option>
                </select>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6 pr-3">
                <label for="quantity">Quantité</label>
                <input type="number" min="1" class="form-control" id="quantity" value="1">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AddItemTable',
  props: ['allProducts'],
  methods: {
  },
  computed: {
  }
}
</script>
