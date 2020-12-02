<template>
    <div class="form-search rounded bg-gray-100 flex items-center relative">
        <input id="search" class="px-5 py-1 font-light bg-gray-100 outline-none" type="text" placeholder="Поиск" v-model="search">
        <button class="rounded bg-blue-500 h-full absolute outline-none right-0" @click="$parent.searchRequest()" >
            <span class="icon search mx-auto"></span>
        </button>
        <label for="search" class="label-top absolute left-0 text-gray-300 text-xs pb-1">За указанный период</label>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search : ""
        }
    },
    watch: {
        search(newVal) {
            this.$emit("input", newVal);
        }
    }
}
</script>
