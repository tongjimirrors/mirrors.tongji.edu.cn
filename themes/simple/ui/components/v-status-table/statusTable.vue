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
        <td class="col-name"><a class="typo-a" :href="row.href">{{ row.name }}</a></td>
        <td class="col-updated">{{ relative(row.updateAt) }}</td>
        <td class="col-status">{{ row.status }}</td>
        <td class="col-action"><a class="typo-a" :href="`/help/${row.id}.html`">Help</a></td>
      </tr>
    </tbody>
  </u-table>
</template>
<script>
import moment from 'moment';

export default {
  name: 'v-status-table',
  data() {
    return {
      data: [
        { id: 'apache', name: 'Apache', href: '/apache-dist/', updateAt: new Date(), status: 'OK' },
        { id: 'packagist', name: 'Packagist', href: '#', updateAt: new Date(), status: 'OK' },
        { id: 'bower', name: 'Bower', href: '#', updateAt: new Date(), status: 'OK' },
        { id: 'homebrew-spec', name: 'Homebrew Spec', href: '/git/homebrew/', updateAt: new Date(), status: 'OK' },
        { id: 'homebrew-bottle', name: 'Homebrew Bottle', href: '/homebrew-bottles/', updateAt: new Date(), status: 'OK' },
        { id: 'ubuntu', name: 'Ubuntu', href: '/ubuntu/', updateAt: new Date(), status: 'OK' },
        { id: 'centos', name: 'CentOS', href: '/centos/', updateAt: new Date(), status: 'OK' },
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
