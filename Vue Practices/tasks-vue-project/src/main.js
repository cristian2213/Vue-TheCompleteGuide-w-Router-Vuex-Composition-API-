import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import WrapperItems from './components/ui/forms/WrapperItems.vue';
import WrapperForm from './components/ui/forms/WrapperForm.vue';
import Footer from './components/ui/footer/Footer.vue';

const app = createApp(App);

// global components ...
app.component('wrapper-input', WrapperItems);
app.component('wrapper-form', WrapperForm);
app.component('footer-component', Footer);

app.use(router);
app.mount('#app');
