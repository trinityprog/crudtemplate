<template>
    <div>
        <crud-navbar/>
        <div class="crud-container">
            <crud-model-title count="1239">Коды</crud-model-title>
            <crud-model-actions can_search can_date_range can_create ></crud-model-actions>
            <crud-model-table-head :fields="fields" />
            <crud-message-action v-if="flash.message" >{{ flash.message }}</crud-message-action>
            <crud-model-table :data="posts.data" :fields="fields" can_edit can_delete />
            <crud-pagination :links="posts.links" />
        </div>
    </div>
</template>

<script>
    import CrudNavbar from '@/Crud/Navbar'
    import CrudModelTitle from '@/Crud/ModelTitle'
    import CrudMessageAction from '@/Crud/MessageAction'
    import CrudModelActions from '@/Crud/ModelActions'
    import CrudModelTableHead from '@/Crud/ModelTableHead'
    import CrudModelTable from '@/Crud/ModelTable'
    import CrudPagination from '@/Crud/Pagination'

    export default {
        props : [
            'posts',
            'message',
            'flash'
        ],
        data() {
            return {
                model_url : 'posts',
                deleteOpen : false,
                fields : {
                    id : {
                        head_name : "#ID",
                        column_class : "index border-r text-blue-500 font-medium border-gray-200 h-full flex items-center justify-center text-center w-20"
                    },
                    title : {
                        head_name : "Заголовок",
                        column_class : "ml-8 w-3/12"
                    },
                    body : {
                        head_name : "Текст",
                        column_class : "ml-8 w-3/12"
                    },
                    created_at_format : {
                        head_name : "Дата создания",
                        column_class : "ml-8 w-2/12"
                    }
                }
            }
        },
        components: {
            CrudNavbar,
            CrudModelTitle,
            CrudMessageAction,
            CrudModelActions,
            CrudModelTableHead,
            CrudModelTable,
            CrudPagination
        },
        mounted () {
            this.$root.$on('deleteItem', (id) => {
                this.$inertia.post(this.model_url + '/' + id, {
                    _method : 'DELETE'
                })
                this.deleteOpen = false;
            })
        }
    }
</script>
