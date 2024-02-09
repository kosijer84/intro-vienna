export default defineNuxtConfig({
    experimental: {
        payloadExtraction: true
    },
    app: {
        head: {
            script: [{
                src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
                'data-ad-client': 'ca-pub-9931020414915431',
                async: true
            }],
            meta: [
                { name: 'theme-color', content: '#3f90ef' },
                { name: 'msapplication-navbutton-color', content: '#3f90ef' },
                { name: 'apple-mobile-web-app-status-bar-style', content: '#3f90ef' }
            ]
        }
    },
    nitro: {
        preset: 'firebase',
        output: {
            dir: '.output',
            serverDir: '.output/server',
            publicDir: '.output/public'
        }
    },
    modules: ['nuxt-gtag'],
    gtag: {
        id: 'G-MRKXCP6SFY'
    },
    devtools: {enabled: true},
    css: ['~/assets/scss/main.scss'],
    components: [{
        path: '~/components',
        pathPrefix: false,
    }],
})
