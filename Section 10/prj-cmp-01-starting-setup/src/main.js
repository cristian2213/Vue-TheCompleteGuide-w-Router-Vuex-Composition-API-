import { createApp } from 'vue';

// main component
import App from './App.vue';

// path components
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';

const app = createApp(App);

// globals components
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.mount('#app');
