import { createApp } from 'vue'
import App from './App.vue'

/* Router */
import router from './router'

/* Vuex */
import store from './store'

/* Bootstrap */
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


createApp(App).component('font-awesome-icon',FontAwesomeIcon).use(router).use(store).mount('#app')
