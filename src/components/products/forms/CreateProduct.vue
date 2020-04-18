<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col col-xs-12 col-sm-12 col-md-6 col-lg-6  mt-5 pt-5">
                <form >
                    <div class="text-center mb-4">
                        <h1 class="h3 mb-3 font-weight-normal">Create a product</h1>
                    </div>

                    <div class="form-label-group">
                        <label for="inputProductName">Product Name</label>
                        <input
                            type="text"
                            id="inputProductName"
                            class="form-control"
                            placeholder="Product name"
                            v-model="product.name"
                            required
                            autofocus>
                    </div>

                    <div class="form-label-group">
                        <label for="inputProductPrice">Price</label>
                        <input
                            type="number"
                            id="inputProductPrice"
                            class="form-control"
                            placeholder="Price"
                            v-model="product.price"
                            required>
                    </div>

                    <div class="form-label-group">
                        <label for="inputProductImage">Image</label>
                        <br/>
                        <input
                            type="file"
                            ref="file"
                            id="inputProductImage"
                            v-on:change="onUpload"
                            required>
                    </div>
                    
                    <div class="form-label-group">
                        <label for="inputProductAvailability">Availability</label><br/>
                        <input type="radio" v-on:change="onSelect($event)" v-bind:value="true"> Available
                        <input type="radio" v-on:change="onSelect($event)" v-bind:value="false"> Sold Out

                    </div>

                    <div class="mt-3">
                        <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="handleSubmit()">Create</button>
                        
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            product : {
                name : null,
                price : null,
                image : null,
                availability : false
            }
        }
    },
    methods : {
        onUpload : function(){
            let file = this.$refs.file.files[0];
            this.product.image = file;
        },
        onSelect : function(event){
            let radio = event.target.value;
            console.log(radio);
            this.product.availability = radio === 'true' ? true : false;
        },
        handleSubmit : function(){
            console.log(this.product)
            axios
            .post('products',this.product)
            .then((response)=>{
                this.$router.go('products');
            })
            .catch((error)=>{
                console.log(error);
            })
        }
    },
    handleFileUpload(){
        this.product.image = this.$refs.file.files[0];
    }

}

</script>

<style scoped>

</style>