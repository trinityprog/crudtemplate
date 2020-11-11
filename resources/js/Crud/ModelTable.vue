<template>
        <div class="model-table">
            <div v-for="row in data" :data-item-id="row.id" class="row rounded relative mb-4 pr-4 bg-white flex justify-between">
                <div class="right-side flex items-center">
                    <div class="index border-r text-blue-500 border-gray-200 h-full text-center flex items-center justify-center">
                        {{ row.id }}
                    </div>
                    <div class="text ml-8" >
                        {{ row.title}}
                    </div>
                    <div class="text ml-8" >
                        {{ row.body}}
                    </div>
                </div>
                <div class="left-side flex items-center justify-end">
                    <table-button-edit v-if="can_edit" :href="'/posts/' + row.id + '/edit'"/>
                    <table-button-delete v-if="can_delete" @click.native="deleteModalOpen($event)"/>
                </div>
            </div>
            <modal-delete v-show="deleteOpen" :style="{ top : top_position + 'px'}" :modal_name="modal_name" :id="item_id"/>
            <div class="overlay fixed w-screen h-screen bg-black top-0 left-0 opacity-25" v-if="deleteOpen" @click="deleteModalClose()"></div>
        </div>
</template>

<script>
import TableButtonEdit from '@/Crud/TableButtonEdit'
import TableButtonDelete from '@/Crud/TableButtonDelete'
import ModalDelete from '@/Crud/ModalDelete'
export default {
    props : {
        'data' : Array,
        'can_edit' : Boolean,
        'can_delete' : Boolean
    },
    data() {
        return {
            deleteOpen : false,
            modal_name: 'Код',
            item_id: null,
            delete_modal_top: 0,
            top_position : 0
        }
    },
    methods: {
        deleteModalOpen(event) {
            let row = event.target.closest('.row');
            let rect = row.getBoundingClientRect();
            this.deleteOpen = true;
            this.top_position = rect.height + rect.top;
            this.item_id = row.dataset.itemId;
        },
        deleteModalClose() {
            this.deleteOpen = false;
        },
        delete(data) {
            data._method = 'DELETE';
            this.$inertia.post('/posts/' + data.id, data)
            this.deleteModalClose();
        }
    },
    components: {
        TableButtonEdit,
        TableButtonDelete,
        ModalDelete
    },
    mounted() {
        document.addEventListener("keydown", e => {
            if (e.keyCode == 27 && this.deleteOpen) this.deleteOpen = false;
        });
    }
}

</script>
<style>
    .model-table .row{
        height: 94px;
    }
    .model-table .row .index{
        width: 94px;
    }
    .model-table .row .text{
        max-width: 400px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        -webkit-box-orient: vertical;
    }
</style>

