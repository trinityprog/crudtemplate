<template>
    <div>
        <div class="table-button-delete cursor-pointer rounded text-white mx-1 bg-gray-100 flex items-center justify-center hover:bg-red-400 duration-300">
            <div class="icon delete duration-300"></div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>
<style>
    .table-button-delete{
        height: 50px;
        width: 50px;
    }
    .table-button-delete .icon{
        background-color: #989898;
    }
    .table-button-delete:hover .icon{
        background-color: #fff;
    }
</style>
