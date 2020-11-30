<template>
    <div>
        <crud-navbar/>
        <div class="crud-container">
            <crud-model-title>Создание FAQ</crud-model-title>
            <form>
                <div class="flex">
                    <div class="w-1/2">
                        <div class="mb-6">
                            <crud-label for="title" value="Заголовок :" />
                            <crud-input :class="{ 'border-red-400 border' : this.errors.body }" class="errors.title ? " id="title" placeholder="Введите заголовок" name="title" v-model="form.title" />
                            <crud-input-error v-if="errors.title" :message="errors.title[0]" class="mt-2" />
                        </div>
                        <div class="mb-6">
                            <crud-label for="body" value="Текст" />
                            <crud-textarea :class="{ 'border-red-400 border' : this.errors.body }" id="body" placeholder="Введите текст" name="body" v-model="form.body"/>
                            <crud-input-error v-if="errors.body" :message="errors.body[0]" class="mt-2" />
                        </div>
                    </div>
                </div>
                <div class="flex mt-4">
                    <crud-button-cancel class="mr-4"><inertia-link :href="'/posts'">Отменить</inertia-link></crud-button-cancel>
                    <crud-button-save @click.native="store(form)" ></crud-button-save>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import CrudNavbar from '@/Crud/Navbar'
    import CrudModelTitle from '@/Crud/ModelTitle'
    import CrudLabel from '@/Crud/Label'
    import CrudInput from '@/Crud/Input'
    import CrudInputError from '@/Crud/InputError'
    import CrudTextarea from '@/Crud/Textarea'
    import CrudButtonCancel from '@/Crud/ButtonCancel'
    import CrudButtonSave from '@/Crud/ButtonSave'

    export default {
        props : [
            'data',
            'errors'
        ],
        data() {
          return {
              form : {
                  title : null,
                  body : null
              }
          }
        },
        components: {
            CrudNavbar,
            CrudModelTitle,
            CrudLabel,
            CrudInput,
            CrudInputError,
            CrudTextarea,
            CrudButtonCancel,
            CrudButtonSave
        },
        methods : {
            store(data) {
                this.$inertia.post('/posts', data)
            }
        }
    }
</script>
