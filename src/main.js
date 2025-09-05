import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './i18n'   // 📌 این مسیر باید وجود داشته باشه

import '@/assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)   // 📌 وصل کردن i18n

app.mount('#app')
