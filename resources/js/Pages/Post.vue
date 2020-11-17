<template>
    <div>
        <crud-navbar/>
        <div class="crud-container">
            <crud-model-title count="1239">Коды</crud-model-title>
            <crud-model-actions can_search can_create ></crud-model-actions>
            <crud-message-action v-if="flash.message" >{{ flash.message }}</crud-message-action>
            <crud-model-table :data="data" can_edit can_delete />
        </div>
    </div>
</template>

<script>
    import CrudNavbar from '@/Crud/Navbar'
    import CrudModelTitle from '@/Crud/ModelTitle'
    import CrudMessageAction from '@/Crud/MessageAction'
    import CrudModelActions from '@/Crud/ModelActions'
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
                deleteOpen : false
            }
        },
        components: {
            CrudNavbar,
            CrudModelTitle,
            CrudMessageAction,
            CrudModelActions,
            CrudModelTable
        },
        methods : {
            deleteItem(id) {
                this.$inertia.post(this.model_url + '/' + id, {
                    _method : 'DELETE'
                })
                this.deleteOpen = false;
            },
            searchRequest(search) {
                this.$inertia.post( this.model_url + '/?search=' + search)
            }
        }
    }
</script>
