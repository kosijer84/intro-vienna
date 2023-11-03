export default defineNuxtConfig({
    app: {
        head: {
            script: [{
                src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
                'data-ad-client': 'ca-pub-9931020414915431',
                async: true
            }],
        }
    },
    nitro: {
        preset: 'firebase'
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
