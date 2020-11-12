<template>
    <div class="message-action rounded border-4 mb-8 border-gray-200 text-green-600 flex items-center" >
        <div class="icon check"></div><slot></slot>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
    .message-action{
        height: 50px;
        padding-left: 38px;
    }
    .message-action .check{
        background: #18AF5E;
        margin-right: 20px;
        width: 12px;
        height: 10px;
    }
</style>
