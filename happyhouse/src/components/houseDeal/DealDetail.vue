<template>
<b-container v-if="deal.jibun" class="bv-example-row mt-2 ml-2">
        <b-row>
        <b-col
            ><h3>{{ deal.name }}</h3></b-col
        >
        </b-row>
        <b-row class="mb-2 mt-1">
        <b-col><img src="@/assets/apt.png" alt=""/></b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-alert show variant="danger"
                >거래 금액 : {{ (deal.dealAmount.replace(',', '') * 10000) | price }}원</b-alert
                >
            </b-col>
        </b-row>

        <b-row>
        <b-col>
            <b-alert show variant="primary">아파트/주택 명 : {{ deal.name }}</b-alert>
        </b-col>
            <b-row>
            <b-col>
                <b-alert show variant="warning">층수 : {{ deal.floor }}층</b-alert>
            </b-col>
            </b-row>
        </b-row>
        <b-row>
        <b-col>
            <b-alert show variant="info">법정동 : {{ deal.dong }}</b-alert>
        </b-col>
        </b-row>
        <b-row>
        <b-col>
            <b-alert show variant="secondary">건축년도 : {{ deal.buildYear }}</b-alert>
        </b-col>
            <b-row>
            <b-col>
                <b-alert show variant="secondary">거래 일자 : {{ deal.dealYear }}/ {{ deal.dealMonth }}/ {{ deal.dealDay }}</b-alert>
            </b-col>
            </b-row>
        </b-row>
    <b-button variant="outline-primary" @click="goBack">이전</b-button>
</b-container>
<b-container v-else class="bv-example-row mt-3">
    <b-row>
    <b-col><b-alert show>거래 정보를 불러오지 못했습니다.</b-alert></b-col>
    </b-row>
</b-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'DealDetail',
    created(){ 
        console.log("detail 화면!!");
    },
    computed: {
        ...mapGetters('deal',{
            deal : 'getDeal'
        }),
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    },
    filters: {
        price(value) {
        if (!value) return value;
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },
    },
}
</script>

<style>

</style>