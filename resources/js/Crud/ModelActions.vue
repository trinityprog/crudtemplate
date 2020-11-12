<template>
    <div>
        <div class="flex justify-between mb-16 p-8 bg-white rounded">
            <div class="left-side flex justify-start">
                <crud-form-search v-if="can_search" />
            </div>
            <div class="right-side flex justify-end">
                <crud-button-create v-if="can_create" />
            </div>
        </div>
    </div>
</template>

<script>
import CrudFormSearch from '@/Crud/FormSearch'
import CrudButtonCreate from '@/Crud/ButtonCreate'
export default {
    props : {
        'can_search' : Boolean,
        'can_create' : Boolean
    },
    components: {
        CrudFormSearch,
        CrudButtonCreate
    }
}

</script>
