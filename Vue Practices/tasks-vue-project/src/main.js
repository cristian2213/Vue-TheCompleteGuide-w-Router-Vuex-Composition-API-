import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// global components ...
import WrapperItems from './components/ui/forms/WrapperItems.vue';
import WrapperForm from './components/ui/forms/WrapperForm.vue';

const app = createApp(App);

app.component('wrapper-input', WrapperItems);
app.component('wrapper-form', WrapperForm);

app.use(router);
app.mount('#app');
