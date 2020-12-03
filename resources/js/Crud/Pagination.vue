<template>
    <div class="flex items-center justify-end mb-10 mt-8">
        <template v-for="(link, key) in links">
            <div v-if="link.url === null" :key="key" class="rounded-full pagination-arrow cursor-pointer relative" :class="{ 'next' : link.label === 'Next &raquo;' }"></div>
            <inertia-link v-else :key="key" class="px-4 py-3 pagination-link cursor-pointer relative" :class="{ 'text-blue-500': link.active, 'text-hide' : link.label === 'Next &raquo;' || link.label === '&laquo; Previous', 'next' : link.label === 'Next &raquo;' }" :href="link.url">{{ link.label }}</inertia-link>
        </template>
    </div>
</template>

<script>
    export default {
        props: {
            links: Array,
        },
    }
</script>
