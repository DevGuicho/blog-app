import { createApp } from 'vue';
import App from '@/apps/website/MainLayout.vue';
import router from '@/routers/website';
import store from '@/stores';

import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.use(store);
app.use(vuetify);
app.use(router);

app.mount('#app');
