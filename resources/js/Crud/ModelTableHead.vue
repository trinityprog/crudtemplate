<template>
    <div class="flex py-8 bg-white rounded-lg rounded-t-none">
        <div v-for="field in fields" :class="field.column_class">{{ field.head_name }}</div>
    </div>
</template>

<script>
    export default {
        props: [
            'fields'
        ]
    }
</script>
