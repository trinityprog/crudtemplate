<template>
    <div class="flex justify-between mb-16 p-8 bg-white rounded">
        <div class="left-side flex justify-start">
            <crud-form-search v-if="can_search" />
            <crud-date-range v-if="can_date_range" />
        </div>
        <div class="right-side flex justify-end">
            <crud-button-create v-if="can_create" />
        </div>
    </div>
</template>

<script>
import CrudFormSearch from '@/Crud/FormSearch'
import CrudDateRange from '@/Crud/DateRange'
import CrudButtonCreate from '@/Crud/ButtonCreate'
export default {
    props : {
        'can_search' : Boolean,
        'can_date_range' : Boolean,
        'can_create' : Boolean
    },
    components: {
        CrudFormSearch,
        CrudDateRange,
        CrudButtonCreate
    }
}

</script>
