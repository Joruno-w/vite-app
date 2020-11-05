import {defineAsyncComponent,h} from 'vue';
import Error from "../components/Error.vue";
import Loading from "../components/Loading.vue";
import NProgress from 'nprogress';
NProgress.configure({
    trickleSpeed: 20,
    showSpinner: false,
});
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export function delay(duration) {
    if (!duration) {
        duration = getRandom(1000, 3000);
    }
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, duration);
    });
}

export function getAsyncComponent(path) {
    return defineAsyncComponent({
        loader: async ()=>{
            await delay();
            if (Math.random() < .5){
                throw new TypeError();
            }
           return import(path);
        },
        loadingComponent: Loading,
        errorComponent:{
            render(){
                return h(Error,'出错了!');
            }
        },
    });
}

export function getAsyncPage(path) {
    return defineAsyncComponent({
        loader: async ()=>{
            NProgress.start();
            await delay();
            const comp = await import(path);
            NProgress.done();
            return comp;
        },
        loadingComponent: Loading,
    });
}