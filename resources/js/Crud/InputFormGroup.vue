<template>
    <div class="input-form-group mb-6" >
        <label :for="name">{{ this.label }}</label>
        <input class="mt-2 pl-5 pr-2 block rounded w-full" :placeholder="placeholder" type="text" :name="name" :id="name" :value="value"/>
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
    .input-form-group input{
        height: 60px;
    }
</style>

