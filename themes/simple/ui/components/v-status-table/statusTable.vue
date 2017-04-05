<template>
  <u-table class="status-table">
    <colgroup slot="colgroup">
      <col class="col-name">
      <col class="col-updated">
      <col class="col-status">
      <col class="col-action">
    </colgroup>
    <thead slot="thead">
      <tr>
        <th class="col-name">Name</th>
        <th class="col-updated">Last Update</th>
        <th class="col-status">Status</th>
        <th class="col-action">&nbsp;</th>
      </tr>
    </thead>
    <tbody slot="tbody">
      <tr v-for="row in data">
        <td class="col-name"><a class="typo-a" :href="row.uri">{{ row.name }}</a></td>
        <td class="col-updated">{{ relative(row.lastSucceededAt) }}</td>
        <td class="col-status"><span v-if="row.lastExitCode == 0">Ok</span><span v-else>Error</span></td>
        <td class="col-action"><!--<a class="typo-a" :href="`/help/${row.id}.html`">Help</a>--></td>
      </tr>
    </tbody>
  </u-table>
</template>
<script>
import moment from 'moment';

export default {
  name: 'v-status-table',
  created() {
    this.$http.get('https://mirrors.tongji.edu.cn/status').then(res => {
      this.data = res.body
    }, err => {
      console.error(err);
    });
  },
  data() {
    return {
      data: [
        { id: 'apache', name: 'Apache', uri: '/apache-dist/', lastSucceededAt: new Date(), "lastExitCode": 0 },
        { id: 'packagist', name: 'Packagist', uri: '#', lastSucceededAt: new Date(), "lastExitCode": 0 },
        { id: 'bower', name: 'Bower', uri: '#', lastSucceededAt: new Date(), "lastExitCode": 0 },
        { id: 'homebrew-spec', name: 'Homebrew Spec', uri: '/git/homebrew/', lastSucceededAt: new Date(), "lastExitCode": 0 },
        { id: 'homebrew-bottle', name: 'Homebrew Bottle', uri: '/homebrew-bottles/', lastSucceededAt: new Date(), "lastExitCode": 0 },
        { id: 'ubuntu', name: 'Ubuntu', uri: '/ubuntu/', lastSucceededAt: new Date(), "lastExitCode": 0 },
        { id: 'centos', name: 'CentOS', uri: '/centos/', lastSucceededAt: new Date(), "lastExitCode": 0 },
      ],
    };
  },
  methods: {
    relative(date) {
      return moment(date).toNow();
    },
  },
}
</script>
