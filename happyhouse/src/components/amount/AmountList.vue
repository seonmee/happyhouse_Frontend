<template>
    <div class="ml-3 mt-3">
        <template v-if="items && items.length != 0" >
        
        <b-list-group v-if="items && items.length != 0" class="mt-1 padding-top">
            <b-list-group-item v-for="(item, index) in paginatedItems" :key="index"
            class="flex-column align-items-start"
            @mouseover="colorChange(true,index)"
            @mouseout="colorChange(false,index)"
            @click="showChart(item.name)"
            >{{item.name}} 
            </b-list-group-item>
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
import http from '@/http-common';
import { mapGetters, mapActions } from 'vuex';
export default {
name: 'AmountyList',
    data() {
        return {
        isColor: [],
        perPage: 10,
        currentPage: 1,
        totalPage: '',
        paginatedItems: this.items
        };
    },computed:{
        ...mapGetters('amount',{
            items :'getItemList',
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
        ...mapActions('amount'
            ['setDataSet']
        ),
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
        showChart(name){
            console.log(name);
            http
            .get('/aptDealAmountList/' + this.year +'/' + name)
            .then(({ data }) => { 
                this.setDataSet(data);
            })
            .catch(() => {
             alert('에러가 발생했습니다.');
            });
        },
        colorChange(flag,index) {
        this.isColor[index] = flag;
        },
    },
    mounted() {
        this.paginate(this.perPage, 0);
    },
}
</script>

<style>
.mouse-over-bgcolor {
    background-color: lightblue;
}
</style>