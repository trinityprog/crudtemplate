<template>
    <div class="model-table">
            <div v-for="(row, index) in data" :data-item-id="row.id" class="row h-20 rounded-lg relative mb-4 pr-4 bg-white flex justify-between">
                <div class="right-side flex items-center">
                    <div class="index border-r text-blue-500 border-gray-200 h-full flex items-center justify-center" :class="fields.id.column_class" :style="fields.id.column_style">
                        {{ row.id }}
                    </div>
                    <div class="text"  :class="fields.title.column_class" :style="fields.title.column_style">
                        {{ row.title}}
                    </div>
                    <div class="text"  :class="fields.body.column_class" :style="fields.body.column_style">
                        {{ row.body}}
                    </div>
                    <div class="text"  :class="fields.created_at_format.column_class" :style="fields.created_at_format.column_style">
                        {{ row.created_at_format }}
                    </div>
                </div>
                <div class="left-side flex items-center justify-end">
                    <crud-table-button-edit v-if="can_edit" :href="'/posts/' + row.id + '/edit'"/>
                    <crud-table-button-delete v-if="can_delete" @click.native="deleteModalOpen($event)"/>
                </div>
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

