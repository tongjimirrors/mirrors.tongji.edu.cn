<template>
  <div class="section__table-container">
    <table :class="[
      'data-table',
      'with-grid-padding',
      'section__table-header',
      this.class,
    ]">
      <slot name="colgroup"></slot>
      <slot name="thead"></slot>
    </table>
    <table :class="[
      'data-table',
      'with-grid-padding',
      this.class,
    ]">
      <slot name="colgroup"></slot>
      <slot name="tbody"></slot>
    </table>
  </div>
</template>
<script>
export default {
  name: 'u-table',
  props: {
    class: {
      type: String,
    },
  },
}
</script>
