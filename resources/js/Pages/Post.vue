<template>
    <div>
        <navbar/>
        <div class="crud-container">
            <model-title count="1239">Коды</model-title>
            <model-actions can_search can_create ></model-actions>
            <model-table :data="data" can_edit can_delete />
        </div>
    </div>
</template>

<script>
    import Navbar from '@/Crud/Navbar'
    import ModelTitle from '@/Crud/ModelTitle'
    import ModelActions from '@/Crud/ModelActions'
    import ModelTable from '@/Crud/ModelTable'

    export default {
        props : [
            'data'
        ],
        components: {
            Navbar,
            ModelTitle,
            ModelActions,
            ModelTable
        },
    }
</script>
