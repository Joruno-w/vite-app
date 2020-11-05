<template>
    <div class="container">
        <div class="block">
            <h2>区域1</h2>
            <p>
                <button @click="show = true">打开朦层</button>
                <Teleport to="body" v-if="show">
                    <Modal>
                        <button @click="show = false">关闭蒙层</button>
                    </Modal>
                </Teleport>
            </p>
        </div>
        <div class="block mid">
            <h2>区域2</h2>
        </div>
        <div class="block big"><h2><Block3 /></h2></div>
        <div class="block big"><h2>区域4</h2></div>
        <div class="block mid"><h2><Block5 /></h2></div>
        <div class="block"><h2>区域6</h2></div>
    </div>
</template>

<script>
    import {ref} from 'vue';
    import {getAsyncComponent} from "../util";
    import Modal from "../components/Modal.vue";
    const Block3 = getAsyncComponent('../components/Block3.vue');
    const Block5 = getAsyncComponent('../components/Block5.vue');
    export default {
        name: "Home",
        components: {Modal, Block5, Block3},
        setup(){
            const showRef = ref(false);
            return{
                show: showRef,
            }
        }
    }
</script>

<style scoped>
    .container {
        display: flex;
        width: 1000px;
        margin: 0 auto;
        flex-wrap: wrap;
        padding: 0 50px;
        justify-content: space-between;
    }
    .block {
        width: 200px;
        margin: 15px;
        height: 250px;
        border: 1px solid #ebebeb;
        border-radius: 3px;
        box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
        0 2px 4px 0 rgba(232, 237, 250, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .mid {
        width: 300px;
    }
    .big {
        width: 400px;
    }
</style>