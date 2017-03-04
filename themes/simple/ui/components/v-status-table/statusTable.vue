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
        <td class="col-name">{{ row.name }}</td>
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
        { id: 'apache', name: 'Apache', updateAt: new Date(), status: 'OK' },
        { id: 'packagist', name: 'Packagist', updateAt: new Date(), status: 'OK' },
        { id: 'bower', name: 'Bower', updateAt: new Date(), status: 'OK' },
        { id: 'homebrew-spec', name: 'Homebrew Spec', updateAt: new Date(), status: 'OK' },
        { id: 'homebrew-bottle', name: 'Homebrew Bottle', updateAt: new Date(), status: 'OK' },
        { id: 'ubuntu', name: 'Ubuntu', updateAt: new Date(), status: 'OK' },
        { id: 'centos', name: 'CentOS', updateAt: new Date(), status: 'OK' },
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
