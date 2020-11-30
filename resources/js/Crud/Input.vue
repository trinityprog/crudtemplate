<template>
    <input class="mt-2 pl-5 pr-2 h-16 block rounded w-full" :value="value" @input="$emit('input', $event.target.value)"/>
</template>

<script>
export default {
    props : [
        'value'
    ]
}
</script>

