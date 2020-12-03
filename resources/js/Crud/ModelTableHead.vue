<template>
    <div class="flex py-6 mb-10 bg-white font-semibold rounded-lg rounded-t-none">
        <div v-for="(field, key) in fields" class="border-none" :class="field.column_class"  @click="sortBy(key)">{{ field.head_name }}</div>
    </div>
</template>

<script>
    export default {
        props: [
            'fields'
        ],
        methods : {
            sortBy(field) {

            }
        }
    }
</script>
