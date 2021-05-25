<template>
    <div class="bv-example-row">
        <b-row class="mt-4">
        <b-col cols="5" align="left">
            <search-bar />
            <router-view/>
        </b-col>
        <b-col cols="7">
            <facility-map />
        </b-col>
        </b-row>
  </div>
</template>

<script>
import SearchBar from '@/components/Facilities/FacilitySearchBar.vue';
import FacilityMap from '@/components/Facilities/FacilityMap.vue';

export default {
    name: 'HomePrice',
    components: {
        SearchBar,
        FacilityMap
    },
    data() {
    return {};
    } ,
    methods: {},
}
</script>

<style>

</style>