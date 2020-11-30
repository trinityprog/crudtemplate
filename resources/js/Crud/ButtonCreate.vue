<template>
    <div>
        <inertia-link :href="this.href" class="button-create cursor-pointer px-8 rounded flex items-center justify-center text-white bg-green-500 h-full">
            Добавить
            <div class="icon plus ml-4"></div>
        </inertia-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            href : this.$parent.$parent.model_url + '/create'
        }
    }
}
</script>
