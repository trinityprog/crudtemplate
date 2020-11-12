<template>
    <textarea class="mt-2 pl-5 pr-2 pt-2 block rounded w-full"  @input="$emit('input', $event.target.value)" >{{ this.value }}</textarea>
</template>

<script>
export default {
    props : [
        'value'
    ]
}
</script>
<style>
    textarea{
        height: 300px;
    }
</style>

