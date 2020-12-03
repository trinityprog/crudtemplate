<template>
    <div class="model-table">
            <div v-for="row in data" :data-item-id="row.id" class="row h-20 rounded-lg relative mb-4 pr-4 bg-white flex items-center">
                    <div
                        v-for="(value, key) in fields"
                        :class="value.column_class"
                    >
                        {{ row[key] }}
                    </div>
                    <crud-table-button-edit class="table-button-action" v-if="can_edit" :href="'/posts/' + row.id + '/edit'"/>
                    <crud-table-button-delete class="table-button-action" v-if="can_delete" @click.native="deleteModalOpen($event)"/>
            </div>
            <crud-modal-delete v-show="$parent.deleteOpen" :style="{ top : top_position + 'px'}" :id="deleteItemid"/>
            <div class="overlay fixed w-screen h-screen bg-black top-0 left-0 opacity-25 z-20" v-if="$parent.deleteOpen" @click="deleteModalClose()"></div>
        </div>
</template>

<script>
import CrudTableButtonEdit from '@/Crud/TableButtonEdit'
import CrudTableButtonDelete from '@/Crud/TableButtonDelete'
import CrudModalDelete from '@/Crud/ModalDelete'


export default {
    props : {
        'data' : Array,
        'can_edit' : Boolean,
        'can_delete' : Boolean,
        'fields' : Object
    },
    data() {
        return {
            top_position : 0,
            deleteItemid : 0
        }
    },
    methods: {
        deleteModalClose() {
            this.$parent.deleteOpen = false;
        },
        deleteModalOpen(event) {
            let row = event.target.closest('.row');
            let rect = row.getBoundingClientRect();
            this.$parent.deleteOpen = true;
            this.top_position = rect.height + rect.top;
            this.deleteItemid = row.dataset.itemId;
        }
    },
    components: {
        CrudTableButtonEdit,
        CrudTableButtonDelete,
        CrudModalDelete
    },
    mounted() {
        document.addEventListener("keydown", e => {
            if (e.keyCode == 27 && this.$parent.deleteOpen) this.$parent.deleteOpen = false;
        });
    }
}

</script>

