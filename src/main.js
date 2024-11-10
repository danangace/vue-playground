import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');

app.config.errorHandler = (err, instance, info) => {
  console.log(err, '<<< error main.js line 17');
  console.log(instance, '<<< error instance main.js line 18');
  console.log(info, '<<< error info main.js line 19');

  /*
    Possible value of error
    Component renders
    Event handlers
    Lifecycle hooks
    setup() function
    Watchers
    Custom directive hooks
    Transition hooks
  */
};
