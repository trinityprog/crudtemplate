<template>
    <div class="form-search rounded bg-gray-100 flex items-center relative">
        <input class="px-5 py-1 font-light bg-gray-100 outline-none" type="text" placeholder="Поиск" :model="search">
        <button class="rounded bg-blue-500 h-full absolute outline-none right-0" >
            <span class="icon search"></span>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: '',
        };
    },
}
</script>
<style>
    .form-search{
        height: 50px;
        width: 310px;
    }
    .form-search input{
        width: 260px;
    }
    .form-search input::placeholder{
        color: #bababa;
        font-weight: 100;
    }
    .form-search button{
        width: 50px;
    }
    .form-search .icon{
        margin: 0 auto;
    }
</style>
