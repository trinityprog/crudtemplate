<template>
        <button type="button" class="button-cancel rounded cursor-pointer text-gray-500 bg-white hover:text-gray-900">
            <slot></slot>
        </button>
</template>

<script>
export default {}
</script>
<style>
    .button-cancel *{
        height: 50px;
        line-height: 50px;
        display: inline-block;
        padding-left: 3rem;
        padding-right: 3rem;
    }
</style>
