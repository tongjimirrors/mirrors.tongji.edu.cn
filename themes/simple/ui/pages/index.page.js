import Vue from 'vue';
import { NamedPage } from '../misc/PageLoader';
import StatusTable from '../components/v-status-table';

const page = new NamedPage('index', () => {
  new Vue({
    el: '#statusTableMount',
    render: h => h(StatusTable),
  });
});

export default page;
