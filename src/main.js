import Vue from 'vue';
import App from './App.vue';
import ReSubMenu from '@/components/TreeMenu/ReSubMenu';
Vue.component('ReSubMenu', ReSubMenu)
import {
  Message,
  Button,
  Tree,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Table,
  TableColumn,
  Container,
  Header,
  Aside,
  Main,
  Cascader,
  Menu,
  Submenu,
  // SubMenu,
  MenuItem
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;
Vue.use(Tree);
Vue.use(Dropdown);
Vue.use(Table);
Vue.use(Button);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(TableColumn);
Vue.use(Cascader);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.prototype.$message = Message;
new Vue({
  render: (h) => h(App),
  components: { ReSubMenu }

}).$mount('#app');
