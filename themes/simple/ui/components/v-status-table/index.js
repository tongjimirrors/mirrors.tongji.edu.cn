import Component from './statusTable.vue';
import './statusTable.styl';

Component.install = function(Vue) {
  Vue.component(Component.name, Component);
};

export default Component;
