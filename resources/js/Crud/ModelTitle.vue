<template>
    <div class="model-title text-xl text-black font-bold mt-12 mb-6" >
        <slot></slot>
        <span class="text-xs text-blue-500 relative font-bold" :if="count">{{ count }}</span>
    </div>
</template>

<script>
export default {
    props : [
        'count'
    ]
}
</script>
