<template>
    <b-row
        class="m-2"
        @mouseover="colorChange(true)"
        @mouseout="colorChange(false)"
        :class="{ 'mouse-over-bgcolor': isColor }"
    >
    <b-col cols="2" class="text-center">
        <img src="@/assets/apt.png" class="img-list" alt="" />
    </b-col>
    <b-col cols="10" @click="chooseApt">
        <router-link to="/main/price/detail">
        [{{ this.apt.buildYear}}] {{ this.apt.aptName }}
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
        apt: Object,
    },
    methods: {
        ...mapActions('deal',['selectApt']),
        chooseApt() {
            this.selectApt(this.apt);
        },
        colorChange(flag) {
        this.isColor = flag;
        },
    },
}
</script>

<style scoped>
.img-list {
  width: 50px;
}
.mouse-over-bgcolor {
  background-color: lightblue;
}
</style>