<template>
<div>
  <b-row class="mt-1 ml-2"> 
    <b-col align="left">
    <b-button-group>
      <b-button variant="info" value="apart" @click="setType">아파트</b-button>
      <b-button variant="info" value="house" @click="setType">빌라</b-button>
      <b-button variant="info" value="office" @click="setType">오피스텔</b-button>
    </b-button-group>
    </b-col>
    <b-col algin="right">
      <b-button-group>
      <b-button variant="info" value="deal" @click="setPay">매매</b-button>
      <b-button variant="info" value="rent" @click="setPay">전세</b-button>
      <b-button variant="info" value="deposit" @click="setPay">월세</b-button>
    </b-button-group>
    </b-col>
  </b-row>
    <b-row class="mt-1 mb-1 ml-2">
      <b-col cols="4" align="left">
      <b-form-select v-model="sidoCode" @change="setGungu">
        <option selected>도/광역시</option>
        <option v-for="(sido, index) in sidoList" :key="index" :value="sido.cityCode">{{sido.city}}</option>
      </b-form-select>
      </b-col>
      <b-col cols="3" align="left">
      <b-form-select v-model="gunguCode" @change="setDong">
          <option value="title">군</option>
          <option v-for="(gungu, index) in gunguList" :key="index" :value="gungu.guCode">{{gungu.gu}}</option>
      </b-form-select>
      </b-col>
      <b-col cols="3" align="left">
      <b-form-select v-model="dong">
          <option value="title">동</option>
          <option v-for="(dong, index) in dongList" :key="index" :value="dong.dong">{{dong.dong}}</option>
      </b-form-select>
    </b-col>
    <b-col cols="2" align="left">
      <b-button variant="outline-primary" @click="sendKeyword">검색</b-button>
    </b-col>
  </b-row>
</div>
</template>

<script>
import { mapActions } from 'vuex';
import http from '@/http-common';

export default {
  name: 'SearchBar',
  data() {
    return {
      sidoList: [],
      gunguList: [],
      dongList: [],
      sidoCode: '',
      gunguCode: '',
      dong: '',
      type: '',
      pay: '',
      paramList: []
    };
  },
  created(){
    http
    .get('/apart/sido')
    .then(({ data }) => {
      this.sidoList = data;
    })
    .catch(() => {
      alert('에러가 발생했습니다.');
    });
  },
  methods: {
    ...mapActions('deal',['getAptDealList','getAptRentList','getHomeDealList','getHomeRentList','getOfficeDealList','getOfficeRentList']),
    sendKeyword() {
      /* 아파트 */
      if (this.sidoCode && this.type == 'apart'&& this.pay == 'deal') { // 매매
        this.paramList = [this.gunguCode, this.dong, 1];
        this.getAptDealList(this.paramList);
      }else if (this.sidoCode && this.type == 'apart'&& this.pay == 'rent') { // 월세 
        this.paramList = [1, this.gunguCode, this.dong, 1];
        this.getAptRentList(this.paramList);
      }else if (this.sidoCode && this.type == 'apart'&& this.pay == 'deposit') { // 전세
        this.paramList = [2, this.gunguCode, this.dong, 1];
        this.getAptRentList(this.paramList);
      }
      /* 연립 다세대 */
      else if (this.sidoCode && this.type == 'house'&& this.pay == 'deal') { // 매매
        this.paramList = [this.gunguCode, this.dong, 1];
        this.getHomeDealList(this.paramList);
      }else if (this.sidoCode && this.type == 'house'&& this.pay == 'rent') { // 월세 
        this.paramList = [1, this.gunguCode, this.dong, 1];
        this.getHomeRentList(this.paramList);
      }else if (this.sidoCode && this.type == 'house'&& this.pay == 'deposit') { // 전세
        this.paramList = [2, this.gunguCode, this.dong, 1];
        this.getHomeRentList(this.paramList);
      }
       /* 오피스텔 */
      else if (this.sidoCode && this.type == 'office'&& this.pay == 'deal') { // 매매
        this.paramList = [this.gunguCode, this.dong, 1];
        this.getOfficeDealList(this.paramList);
      }else if (this.sidoCode && this.type == 'office'&& this.pay == 'rent') { // 월세 
        this.paramList = [1, this.gunguCode, this.dong, 1];
        this.getOfficeRentList(this.paramList);
      }else if (this.sidoCode && this.type == 'office'&& this.pay == 'deposit') { // 전세
        this.paramList = [2, this.gunguCode, this.dong, 1];
        this.getOfficeRentList(this.paramList);
      }
    },
    setType: function(event) {
      var thisBtn = event.currentTarget;
      thisBtn.classList.add('active');
      let sibling  = thisBtn.parentNode.firstChild;

      while (sibling) {
        if (sibling.nodeType === 1 && sibling !== thisBtn) {
          sibling.classList.remove('active');
        }
        sibling = sibling.nextSibling;
      }
      this.type = event.currentTarget.value;
    },
    setPay: function(event) {
      var thisBtn = event.currentTarget;
      thisBtn.classList.add('active');
      let sibling  = thisBtn.parentNode.firstChild;

      while (sibling) {
        if (sibling.nodeType === 1 && sibling !== thisBtn) {
          sibling.classList.remove('active');
        }
        sibling = sibling.nextSibling;
      }
      this.pay = event.currentTarget.value;
    },
    setGungu(){
      console.log(this.sidoCode);
      http
      .get('/apart/gu/' + this.sidoCode)
      .then(({ data }) => {
      this.gunguList = data;
    })
      .catch(() => {
      alert('에러가 발생했습니다.');
    });
    },
    setDong(){
      http
      .get('/apart/dong/' + this.gunguCode)
      .then(({ data }) => {
      this.dongList = data;
    })
      .catch(() => {
      alert('에러가 발생했습니다.');
    });
    }
  },
}
</script>

<style>

</style>