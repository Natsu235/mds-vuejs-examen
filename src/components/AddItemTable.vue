<template>
    <div class="my-3">
        <div class="form-row">
            <div class="form-group col-md-6 pr-3">
                <label for="category">Catégorie</label>
                <select class="form-control" id="category">
                    <option selected disabled hidden>-- Choisir une catégorie --</option>
                    <option>Epicerie salÃ©e</option>
                    <option>Epicerie sucrÃ©e</option>
                    <option>Produits laitiers</option>
                    <option>Fruits et LÃ©gumes</option>
                    <option>Produits mÃ©nagers</option>
                    <option>Boucherie / Charcuterie</option>
                </select>
            </div>
            <div class="form-group col-md-6 pl-3">
                <label for="product">Produit</label>
                <select class="form-control" id="product">
                    <option selected disabled hidden>-- Choisir un produit --</option>
                    <option>Test 1</option>
                    <option>Test 2</option>
                    <option>Test 3</option>
                    <option>Test 4</option>
                    <option>Test 5</option>
                </select>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6 pr-3">
                <label for="quantity">Quantité</label>
                <input type="number" class="form-control" id="quantity" value="1">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AddItemTable',
  props: ['products'],
  methods: {
  },
  computed: {
  }
}
</script>
