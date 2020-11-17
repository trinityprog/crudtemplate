require('./bootstrap');

import { InertiaApp } from '@inertiajs/inertia-vue';
import Vue from 'vue'
import { InertiaProgress } from '@inertiajs/progress'


Vue.use(InertiaApp)
InertiaProgress.init({
    // The delay after which the progress bar will
    // appear during navigation, in milliseconds.
    delay: 0,

    // The color of the progress bar.
    color: '#6B9EFF',

    // Whether to include the default NProgress styles.
    includeCSS: true,

    // Whether the NProgress spinner will be shown.
    showSpinner: true,
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
