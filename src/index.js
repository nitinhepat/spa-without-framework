import {Router,Routes} from './libs/router.js'


(()=>{
    const routeConfig = [
        new Routes({
        path:'detail',
        url: './views/src/views/detail.html'
    }),
    new Routes({
        path:'landing',
        url: './views/src/views/landing.html'
    },true)]
    
    new Router(routeConfig,'app');
})()