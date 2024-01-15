import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { createPinia } from 'pinia'

const pinia = createPinia()

const app = createApp(App)

app.mount('#app')
app.use(pinia)
