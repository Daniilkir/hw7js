import template from './template.hbs'; 
import users from './index.json'; 

const usa = document.querySelector('#app');
const markup = template(users);
usa.insertAdjacentHTML('beforeend', markup);
