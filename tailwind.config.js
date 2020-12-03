const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [],

    theme: {
        extend: {
            fontFamily: {
                sans: ["-apple-system", "system-ui", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
                serif: ["Georgia", "Times New Roman", "Times", "serif"],
                mono: ["Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
                display: ["-apple-system", "system-ui", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
                body: ["-apple-system", "system-ui", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"]
            },
        },
        colors : {
            black : '#000',
            white : '#fff',
            gray : {
                '100' : '#F6F6F6',
                '200' : '#EEEEEE',
                '300' : '#A2A2A2',
                "500" : '#878787',
                "700" : '#5E5E5E',
                "900" : '#161616',
            },
            yellow: {
                '100' : '#FFED4B',
                '200' : '#94881E'
            },
            blue: {
                '400' : '#6B9EFF',
                '500' : '#4A84F2'
            },
            green: {
                '500' : '#67D085',
                '600' : '#18AF5E'
            },
            red: {
                '400' : '#F55C5C',
                '500' : '#E53636'
            }

        }
    },

    variants: {
        opacity: ['responsive', 'hover', 'focus', 'disabled'],
    },

    plugins: [],
};
