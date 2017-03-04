import Component from './table.vue';
import './table.styl';

Component.install = function(Vue) {
  Vue.component(Component.name, Component);
};

export default Component;
