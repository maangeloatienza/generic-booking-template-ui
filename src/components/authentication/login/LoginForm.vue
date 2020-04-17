 
<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col col-xs-12 col-sm-12 col-md-6 col-lg-6  mt-5 pt-5">
                <form >
                    <div class="text-center mb-4">
                        <img class="mb-4" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
                        <h1 class="h3 mb-3 font-weight-normal">Web App Branding</h1>
                    </div>

                    <div class="form-label-group">
                        <label for="inputEmail">Username</label>
                        <input
                            type="text"
                            id="inputEmail"
                            class="form-control"
                            placeholder="Username"
                            v-model="user.username"
                            required
                            autofocus>
                    </div>

                    <div class="form-label-group">
                        <label for="inputPassword">Password</label>
                        <input
                            type="password"
                            id="inputPassword"
                            class="form-control"
                            placeholder="Password"
                            v-model="user.password"
                            required>
                    </div>
                    
                    <div class="mt-3">
                        <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click.prevent="handleSubmit()">Sign in</button>
                        <p class="mt-5 mb-3 text-muted text-center">&copy; 2020</p>
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
            user : {
                username : null,
                password : null
            }
        }
    },
    methods : {
        handleSubmit : function (){

            axios
            .post('user/login',this.user)
            .then((response)=>{
                let data = response.data;


                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.data));
                

                if(localStorage.getItem('token')!= null){
                    this.$router.go('/');
                }

            })
            .catch((error)=>{
                console.log(error);
            });
            // axios.get('users')
            // .then((response)=>{
            //     console.log(response.data);
            // })
            // .catch((error)=>{
            //     console.log(error);
            // })
        }
    }
}

</script>

<style scoped>

</style>