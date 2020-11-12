<template>
    <input class="mt-2 pl-5 pr-2 block rounded w-full" :value="value" @input="$emit('input', $event.target.value)"/>
</template>

<script>
export default {
    props : [
        'value'
    ]
}
</script>
<style>
    input{
        height: 60px;
    }
</style>

