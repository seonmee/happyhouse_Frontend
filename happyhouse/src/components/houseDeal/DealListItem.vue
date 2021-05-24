<template>
    <b-row v-if="deal && deal.length != 0"
        class="m-1"
        @mouseover="colorChange(true)"
        @mouseout="colorChange(false)"
        @click="chooseDeal"
        :class="{ 'mouse-over-bgcolor': isColor }"
    >
    <b-col cols="4">
        매매 {{ deal.dealAmount}} 만원
    </b-col>
    <b-col cols="5" class="text-center">
        {{ deal.name }} [ {{ deal.floor}} 층 ]
    </b-col>
    <b-col cols="3" class="text-center">
        {{ Math.round(this.deal.area/3.3057) }} 평 
    </b-col>
    </b-row>
    <b-row v-else-if="rent && rent.length != 0"
        class="m-2"
        @mouseover="colorChange(true)"
        @mouseout="colorChange(false)"
        @click="chooseRent"
        :class="{ 'mouse-over-bgcolor': isColor }"
    >
    <b-col cols="4" v-if="rent.rentMoney == 0">
        전세 {{ rent.deposit}} 만원
    </b-col>
    <b-col cols="4" v-else>
        월세 {{ rent.rentMony }} 만원 / 보증금 {{ rent.deposit }} 만원
    </b-col>
    <b-col cols="5" class="text-center">
        {{ rent.name }} [ {{ rent.floor}} 층 ]
    </b-col>
    <b-col cols="3" class="text-center">
        {{ Math.round(this.rent.area/3.3057) }} 평 
    </b-col>
    </b-row>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'DealListItem',
    data() {
        return {
        isColor: false,
        };
    },
    props: {
        deal: {},
        rent: {}
    },
    methods: {
        ...mapActions('deal',['selectDeal','selectRent']),
        chooseDeal() {
            this.selectDeal(this.deal);
            this.$router.push('/main/price/dealDetail');
        },
        chooseRent() {
            this.selectRent(this.rent);
            this.$router.push('/main/price/rentDetail');
        },
        colorChange(flag) {
        this.isColor = flag;
        },
    },
}
</script>

<style scoped>
.img-list {
    width: 100px;
}
.mouse-over-bgcolor {
    background-color: lightblue;
}
</style>