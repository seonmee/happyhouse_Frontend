<template>
  <b-container v-if="deals && deals.length != 0" class="bv-example-row mt-1">
    <deal-list-item v-for="(deal, index) in deals" :key="index" :deal="deal" />
  </b-container>
  <b-container v-else-if="rents && rents.length != 0" class="bv-example-row mt-1">
    <deal-list-item v-for="(rent, index) in rents" :key="index" :rent="rent" />
  </b-container>
  <b-container v-else class="bv-example-row mt-1">
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
      deals: 'getDealList',
      rents: 'getRentList'
    }),
  },
}
</script>

<style scoped>

</style>