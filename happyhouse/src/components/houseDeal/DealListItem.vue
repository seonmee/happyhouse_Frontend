<template>
    <b-row v-if="deal && deal.length != 0"
        class="m-1"
        @mouseover="colorChange(true)"
        @mouseout="colorChange(false)"
        :class="{ 'mouse-over-bgcolor': isColor }"
    >
    <b-col cols="2" class="text-center">
        <img src="@/assets/apt.png" class="img-list" alt="" />
    </b-col>
    <b-col cols="10" @click="chooseDeal">
        <router-link to="/main/price/dealDetail">
        [{{ this.deal.buildYear}}] {{ this.deal.name }}
        </router-link>
        </b-col>
    </b-row>
    <b-row v-else-if="rent && rent.length != 0"
        class="m-2"
        @mouseover="colorChange(true)"
        @mouseout="colorChange(false)"
        :class="{ 'mouse-over-bgcolor': isColor }"
    >
    <b-col cols="2" class="text-center">
        <img src="@/assets/apt.png" class="img-list" alt="" />
    </b-col>
    <b-col cols="10" @click="chooseRent">
        <router-link to="/main/price/rentDetail">
        [{{ this.rent.buildYear}}] {{ this.rent.name }}
        </router-link>
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
        deal: Object,
        rent: Object
    },
    methods: {
        ...mapActions('deal',['selectDeal','selectRent']),
        chooseDeal() {
            this.selectDeal(this.deal);
        },
        chooseRent() {
            this.selectRent(this.rent);
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