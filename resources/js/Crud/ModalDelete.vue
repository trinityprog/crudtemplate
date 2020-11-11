<template>
    <div class="modal-delete rounded absolute bg-white p-12 z-10">
        <div class="mb-4" >Удалить {{ modal_name }} <span class="text-blue-500">#{{ id }}</span> ?</div>
        <div class="flex justify-between">
            <button-cancel class="bg-gray-100" @click="deleteModalClose()" ></button-cancel>
            <button-delete @click="deleteItem()" ></button-delete>
        </div>
    </div>
</template>

<script>
import ButtonCancel from '@/Crud/ButtonCancel'
import ButtonDelete from '@/Crud/ButtonDelete'

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
        ButtonCancel,
        ButtonDelete
    },
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
