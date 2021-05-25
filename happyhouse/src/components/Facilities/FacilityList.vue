<template>
    <div class="ml-3">
        <b-card :title="items[0].category_group_name">
            <b-card-text>
                {{dong}}에 위치한 {{items[0].category_group_name}}은 {{items.length}}개 입니다.
            </b-card-text>
        </b-card>
        
        <b-list-group v-if="items && items.length != 0" class="mt-1 padding-top">
            <facility-list-item v-for="(item, index) in items" :key="index" :item="item"/>
        </b-list-group>
        <!-- <b-pagination
            v-model="currentPage"
            :total-rows="totalPage"
            :per-page="perPage"
            align="center"
            @page-click="pageClick"
            aria-controls="item-list"
        ></b-pagination> -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FacilityListItem from '@/components/Facilities/FacilityListItem.vue';

export default {
  components: { FacilityListItem },
    name: 'FacilityList',
    data() {
        return {
        perPage: 10,
        currentPage: 1,
        totalPage: '',
        searchText: '',
        selected: null,
        };
    },computed:{
        ...mapGetters('facility',{
            items :'getItemList',
            dong : 'getdong'
        })
    },
    watch:{
        items: function(){
            this.totalPage = this.items.length;
        }
    },
    methods: {
        pageClick(button, page){
            this.currentPage = page;
        }
    },
}
</script>

<style>

</style>