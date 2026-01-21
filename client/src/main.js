import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { useRegisterSW } from 'virtual:pwa-register/vue'

const { updateServiceWorker } = useRegisterSW({
  onNeedRefresh() {
    if (confirm('New version available. Reload?')) {
      updateServiceWorker()
    }
  }
})

const app = createApp(App)

app.use(router)

app.mount('#app')
