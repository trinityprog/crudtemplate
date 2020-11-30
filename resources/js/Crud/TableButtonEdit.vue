<template>
    <inertia-link :href=href class="table-button-edit h-12 w-12 cursor-pointer rounded text-white mx-1 bg-gray-100 flex items-center justify-center hover:bg-blue-400 duration-300">
        <div class="icon edit duration-300"></div>
    </inertia-link>
</template>

<script>
export default {
    props : [
        'href'
    ]
}
</script>
