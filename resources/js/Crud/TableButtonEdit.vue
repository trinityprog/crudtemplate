<template>
    <div>
        <inertia-link :href=href class="table-button-edit cursor-pointer rounded text-white mx-1 bg-gray-100 flex items-center justify-center hover:bg-blue-400 duration-300">
            <div class="icon edit duration-300"></div>
        </inertia-link>
    </div>
</template>

<script>
export default {
    props : [
        'href'
    ]
}
</script>
<style>
    .table-button-edit{
        height: 50px;
        width: 50px;
    }
    .table-button-edit .icon{
        background-color: #6B9EFF;
    }
    .table-button-edit:hover .icon{
        background-color: #fff;
    }
</style>
