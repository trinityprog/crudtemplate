<template>
    <div class="date-range relative">
        <date-picker v-model="date_range" :input-attr="input_id" type="date" value-type="YYYY-MM-DD" range format="DD.MM.YYYY" placeholder="Выберите дату"></date-picker>
        <label for="date" class="label-top absolute left-0 text-gray-300 text-xs pb-1">За указанный период</label>
    </div>
</template>

<script>

import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/locale/ru.js';


export default {
    data() {
        return {
            date_range : [moment().format('DD.MM.YYYY'), moment().format('DD.MM.YYYY')],
            input_id : {id : "date"}
        }
    },
    watch: {
        date_range(newVal) {
            this.$emit("input", newVal);
        }
    },
    components: { DatePicker }
}
</script>

