import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { surveyPlugin } from 'survey-vue3-ui'
import { surveyCreatorPlugin } from 'survey-creator-vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(surveyPlugin)
app.use(surveyCreatorPlugin)

app.mount('#app')
