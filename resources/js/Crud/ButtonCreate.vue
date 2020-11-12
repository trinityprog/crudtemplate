<template>
    <div>
        <inertia-link :href="this.href" class="button-create cursor-pointer px-8 rounded flex items-center justify-center text-white bg-green-500">
            Добавить
            <div class="icon plus"></div>
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
<style>
    .button-create{
        height: 50px;
    }
    .button-create .icon{
        margin-left: 1.6rem;
    }
</style>
