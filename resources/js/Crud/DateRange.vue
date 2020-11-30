<template>
    <div class="date-range">
        <date-picker v-model="value" type="date" value-type="format" range format="DD.MM.YYYY" placeholder="Выберите дату"></date-picker>
    </div>
</template>

<script>

import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/locale/ru.js';


export default {
    data() {
        return {
            value: []
        };
    },
    components: { DatePicker }
}
</script>

