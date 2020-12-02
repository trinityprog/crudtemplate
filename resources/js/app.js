require('./bootstrap');



import { InertiaApp } from '@inertiajs/inertia-vue';
import Vue from 'vue';
import { InertiaProgress } from '@inertiajs/progress';

window.moment = require('moment');
window.moment.locale('ru');


Vue.use(InertiaApp)
InertiaProgress.init({
    delay: 0,

    color: '#6B9EFF',

    showSpinner: false,
})

const app = document.getElementById('app')

new Vue({
    render: (h) =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: (name) => require(`./Pages/${name}`).default,
            },
        }),
}).$mount(app);
