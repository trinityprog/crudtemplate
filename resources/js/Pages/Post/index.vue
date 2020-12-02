<template>
    <div>
        <crud-navbar/>
        <div class="crud-container">
            <crud-model-title count="1239">Коды</crud-model-title>
            <crud-model-actions can_search can_date_range can_create ></crud-model-actions>
            <crud-model-table-head :fields="fields" />
            <crud-message-action v-if="flash.message" >{{ flash.message }}</crud-message-action>
            <crud-model-table :data="data" :fields="fields" can_edit can_delete />
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

    export default {
        props : [
            'data',
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
                        column_class : "text-center"
                    },
                    title : {
                        head_name : "Заголовок",
                        column_class : "ml-8 w-20"
                    },
                    body : {
                        head_name : "Текст",
                        column_class : "ml-8"
                    },
                    created_at_format : {
                        head_name : "Дата создания",
                        column_class : "ml-8"
                    },
                }
            }
        },
        components: {
            CrudNavbar,
            CrudModelTitle,
            CrudMessageAction,
            CrudModelActions,
            CrudModelTableHead,
            CrudModelTable
        },
        methods : {
            deleteItem(id) {
                this.$inertia.post(this.model_url + '/' + id, {
                    _method : 'DELETE'
                })
                this.deleteOpen = false;
            }
        }
    }
</script>
