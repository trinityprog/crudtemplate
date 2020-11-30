<template>
    <div class="modal-delete rounded fixed bg-white p-12 z-30">
        <div class="mb-4" >Удалить <span class="text-blue-500">#{{ id }}</span> ?</div>
        <div class="flex justify-between">
            <crud-button-cancel class="bg-gray-100 mr-2" @click.native="$parent.deleteModalClose()" >Отменить</crud-button-cancel>
            <crud-button-delete class="ml-2" @click.native="$parent.$parent.deleteItem(id)" ></crud-button-delete>
        </div>
    </div>
</template>

<script>
import CrudButtonCancel from '@/Crud/ButtonCancel'
import CrudButtonDelete from '@/Crud/ButtonDelete'

export default {
    props : [
        'id'
    ],
    components: {
        CrudButtonCancel,
        CrudButtonDelete
    }
}
</script>
