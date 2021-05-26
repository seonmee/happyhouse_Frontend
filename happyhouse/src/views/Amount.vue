<template>
    <div class="bv-example-row">
        <b-row class="mt-4">
        <b-col cols="5" align="left">
            <search-bar />
            <amount-list/>
        </b-col>
        <b-col cols="7">
            <amount-graph />
        </b-col>
        </b-row>
    </div>
</template>

<script>
import SearchBar from '@/components/amount/AmountSearchBar.vue';
import AmountList from '@/components/amount/AmountList.vue';
import AmountGraph from '@/components/amount/AmountGraph.vue';
export default {
name: 'Amount',
    components: {
        SearchBar,
        AmountGraph,
        AmountList
    },
}
</script>

<style>

</style>