<template>
    <div>
        <navbar/>
        <div class="crud-container">
            <model-title>Редактирование FAQ <span class="text-blue-500" ># {{this.data.id}}</span></model-title>
            <form>
                <div class="flex">
                    <div class="w-1/2">
                        <input-form-group :label="'Заголовок:'" :placeholder="'Введите заголовок'" :name="'title'" v-model="form.title"/>
                        <textarea-form-group :label="'Текст:'" :placeholder="'Введите текст'" :name="'body'" v-model="form.body"/>
                    </div>
                </div>
                <div class="flex mt-4">
                    <button-cancel class="mr-4"></button-cancel>
                    <button-save @click.native="update(form)" ></button-save>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import Navbar from '@/Crud/Navbar'
    import ModelTitle from '@/Crud/ModelTitle'
    import InputFormGroup from '@/Crud/InputFormGroup'
    import TextareaFormGroup from '@/Crud/TextareaFormGroup'
    import ButtonCancel from '@/Crud/ButtonCancel'
    import ButtonSave from '@/Crud/ButtonSave'

    export default {
        props : [
            'data'
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
            Navbar,
            ModelTitle,
            InputFormGroup,
            TextareaFormGroup,
            ButtonCancel,
            ButtonSave
        },
        mounted() {
            this.form = Object.assign({}, this.data);
        },
        methods : {
            update: function (q) {
                console.log(this.form.body)
                q._method = 'PUT';
                this.$inertia.post('/posts/' + q.id, q)
            },
        }
    }
</script>
