<template>
    <div class="container">
        <div class="row mt-3 mb-3">
            <div class="card col-xs-6 col-sm-6 col-md-4 col-lg-4 mb-2 px-0 mx-1"
                v-for="product in products"
                v-bind:key='product.id'>
                <div class="card-body">
                    <img class="img-fluid card-img-top"  v-bind:src="product.image" v-bind:alt="product.name">
                    <h4 class="card-title text-center">{{product.name}}</h4>
                    <p>{{product.price}}</p>
                    <p>{{product.availability ? 'Available':'Sold Out'}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data (){
        return {
            products : []
        }
    },
    methods : {
        getProducts : function (){
            axios
            .get('products')
            .then((response)=>{
                let data = response.data;
                let products = data.data;
                
                this.products = products;

                console.log(this.products);

            })
            .catch((error)=>{

            });
        }
    },
    created() {
        console.log('beforeUpdate!')
        this.getProducts();
    },
}
</script>

<style scoped>

</style>
