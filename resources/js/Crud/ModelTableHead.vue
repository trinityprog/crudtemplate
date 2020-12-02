<template>
    <div class="flex py-8 mb-10 bg-white rounded-lg rounded-t-none">
        <div v-for="(field, key) in fields" :class="field.column_class" :style="field.column_style" @click="sortBy(key)">{{ field.head_name }}</div>
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
