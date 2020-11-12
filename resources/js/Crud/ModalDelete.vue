<template>
    <div class="modal-delete rounded fixed bg-white p-12 z-10">
        <div class="mb-4" >Удалить {{ modal_name }} <span class="text-blue-500">#{{ id }}</span> ?</div>
        <div class="flex justify-between">
            <crud-button-cancel class="bg-gray-100" @click.native="deleteModalClose()" ></crud-button-cancel>
            <crud-button-delete @click.native="deleteItem()" ></crud-button-delete>
        </div>
    </div>
</template>

<script>
import CrudButtonCancel from '@/Crud/ButtonCancel'
import CrudButtonDelete from '@/Crud/ButtonDelete'

export default {
    props : [
        'modal_name',
        'id'
    ],
    methods: {
        deleteModalClose() {
            this.$parent.deleteModalClose()
        },
        deleteItem() {
            this.$parent.delete({id: this.id})
        }
    },
    components: {
        CrudButtonCancel,
        CrudButtonDelete
    }
}
</script>
<style scoped>
    .modal-delete{
        width: 420px;
        right: 2.5%;
    }
    .modal-delete:after{
        content: "";
        position: absolute;
        bottom: 100%;
        right: 30px;
        border-width: 0 15px 15px 15px;
        border-color: transparent transparent white transparent;
    }
    .modal-delete button{
        width: 48%;
    }
    .modal-delete .button-delete{
        padding: 0;
    }
</style>
