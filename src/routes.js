import Login from './components/authentication/login/LoginForm.vue';
import Products from './components/products/ViewProducts.vue';
import CreateProduct from './components/products/forms/CreateProduct.vue';

export default [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/products',
        name : 'products',
        component: Products,
        // children : [
        //     {
        //         path : 'create',
        //         component : CreateProduct
        //     }
        // ]
    },
    {
        path: '/products/create',
        component: CreateProduct,
        // children : [
        //     {
        //         path : 'create',
        //         component : CreateProduct
        //     }
        // ]
    },
    {
        path: '/',
        name: 'home'
    }

];
