<template>
    <div class="ml-3 mt-3">
        <template v-if="items && items.length != 0" >
        
        <b-list-group v-if="items && items.length != 0" class="mt-1 padding-top">
            <b-list-group-item v-for="(item, index) in items" :key="index" @click="showChart">{{item.name}}</b-list-group-item>
        </b-list-group>
        <b-pagination class="mt-2"
            v-model="currentPage"
            :total-rows="getTotPage"
            :per-page="perPage"
            align="center"
            @change="onPageChanged"
        ></b-pagination>
        </template>
        <template v-else>
            <b-row>
                <b-col><b-alert show variant="warning">one. 동네를 선택해주세요!</b-alert></b-col>
            </b-row>
            <b-row>
                <b-col><b-alert show variant="warning">two. 년도를 선책해주세요!</b-alert></b-col>
            </b-row>
        </template>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';
export default {
name: 'AmountyList',
    data() {
        return {
        perPage: 10,
        currentPage: 1,
        totalPage: '',
        paginatedItems: this.items
        };
    },computed:{
        ...mapGetters('amount',{
            items :'getItemList',
            dong : 'getdong',
            year : 'getYear'
        })
        , getTotPage(){
            return this.items.length;
        }
    },
    watch:{
        items:function(){
            this.onPageChanged(1);
            this.currentPage =1;
        }
    },
    methods: {
        paginate(page_size, page_number) {
            let itemsToParse = this.items;
            this.paginatedItems = itemsToParse.slice(
                page_number * page_size,
                (page_number + 1) * page_size
            )
        },
        onPageChanged(page) {
            this.paginate(this.perPage, page - 1);
        },
        showChart(){
            
        }
    },
    mounted() {
        this.paginate(this.perPage, 0);
    },
}
</script>

<style>

</style>