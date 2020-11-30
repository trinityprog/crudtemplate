<template>
    <div class="form-search rounded bg-gray-100 flex items-center relative">
        <input class="px-5 py-1 font-light bg-gray-100 outline-none" type="text" placeholder="Поиск" v-model="search">
        <button class="rounded bg-blue-500 h-full absolute outline-none right-0" @click="$parent.$parent.searchRequest(search)" >
            <span class="icon search mx-auto"></span>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: ''
        };
    }
}
</script>
