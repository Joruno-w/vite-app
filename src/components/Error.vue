<template>
    <div class="error">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Error"
    }
</script>

<style scoped>
    .error{
        color: #f40;
    }
</style>