<template>
    <div class="input-form-group mb-6" >
        <label :for="name">{{ this.label }}</label>
        <textarea class="mt-2 pl-5 pr-2 pt-2 block rounded w-full" type="text" :placeholder="placeholder" :name="name" :id="name">{{ this.value }}</textarea>
<!--        <textarea class="mt-2 pl-5 pr-2 block rounded w-full" type="text" :name="name" :id="name">{{ this.placeholder }}</textarea>-->
    </div>
</template>

<script>
export default {
    props : [
        'label',
        'placeholder',
        'name',
        'value'
    ]
}
</script>
<style>
    .input-form-group textarea{
        height: 300px;
    }
</style>

