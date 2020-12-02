<template>
    <div class="flex justify-between p-8 bg-white rounded-lg rounded-b-none border-b border-gray-200">
        <div class="left-side flex justify-start">
            <crud-date-range class="mr-2" v-if="can_date_range" v-model="date_range" />
            <crud-form-search v-if="can_search" v-model="search" />
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
    data() {
      return {
          search : '',
          date_range : [],
      }
    },
    methods : {
        searchRequest() {
            this.$inertia.post( this.$parent.model_url + '/?search=' + this.search + '&date_range=' + this.date_range);
        }
    },
    components: {
        CrudFormSearch,
        CrudDateRange,
        CrudButtonCreate
    }
}

</script>
