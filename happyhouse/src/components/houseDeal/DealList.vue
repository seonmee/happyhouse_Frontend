<template>
  <b-container v-if="apts && apts.length != 0" class="bv-example-row mt-3">
    <deal-list-item v-for="(apt, index) in apts" :key="index" :apt="apt" />
  </b-container>
  <b-container v-else class="bv-example-row mt-3">
    <b-row>
      <b-col><b-alert show>거래 정보가 없습니다.</b-alert></b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
import DealListItem from '@/components/houseDeal/DealListItem.vue';

export default {
name: 'DealList',
  components: {
    DealListItem,
  },
  computed: {
    ...mapGetters('deal',{
      apts: 'getAptList'
    }),
  },
}
</script>

<style>

</style>