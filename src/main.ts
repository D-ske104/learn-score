import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createI18n } from 'vue-i18n'
import ja from './locales/ja.json'
import en from './locales/en.json'


const i18n = createI18n({
  legacy: false,
  locale: 'ja',
  messages: {
    ja,
    en
  }
})

createApp(App).use(i18n).mount('#app')
