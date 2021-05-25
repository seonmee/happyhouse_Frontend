<template>

  <div class="main">
    <!-- <img :src="require(`@/assets/title.png`)" id="_img" /> -->
    <!-- <h1>HappyHouse</h1> -->
    <b-navbar toggleable="lg" type="light" variant="warning">
      <b-navbar-brand href="#" @click="moveToMain" class="_nav"
        ><b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
      HOME </b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#" class="_nav" @click="moveToNotice"
            >공지사항</b-nav-item
          >
          <b-nav-item href="#" class="_nav" @click="moveToBoard">
            게시판</b-nav-item
          >
          <b-nav-item href="#homePrice" class="_nav" @click="moveToDeal"
            >주택거래정보</b-nav-item
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" v-if="this.getProfile == ''" @click="moveToLogin"
            >로그인</b-nav-item
          >
          <b-nav-item href="#" v-if="this.getProfile == ''" @click="moveToReg"
            >회원가입</b-nav-item
          >
          <b-nav-item href="#" v-if="this.getProfile != ''"
            ><a href="#" @click.prevent="onClickLogout">로그아웃</a></b-nav-item
          >
          <b-nav-item
            href="#"
            v-if="this.getProfile != '' && this.getProfile.rolename == 'ROLE_USER'"
            ><router-link to="/main/userinfo">내정보</router-link></b-nav-item
          >
          <b-nav-item
            href="#"
            v-if="this.getProfile != '' && this.getProfile.rolename == 'ROLE_ADMIN'"
            ><router-link to="/main/manage/usermanage">유저관리</router-link></b-nav-item
          >
          <!-- <b-nav-item
            href="#"
            v-if="this.getProfile != '' && this.getProfile.rolename == 'ROLE_USER'"
            ><a href="#" @click.prevent="myinfo">내정보</a></b-nav-item
          > -->
          <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Header',
  computed: {
    ...mapGetters(['getProfile']),
  },
  methods: {
    ...mapActions(['logout']),
    onClickLogout: function() {
      this.logout();
      this.$router.push('/');
    },
    moveToMain(){
      this.$router.push('/main/');
    },
    moveToNotice(){
      this.$router.push('/main/notice/noticeList');
    },
    moveToBoard(){
      this.$router.push('/main/board/boardList');
    },
    moveToDeal(){
      this.$router.push('/main/price');
    },
    moveToLogin(){
      this.$router.push('/main/login');
    },
    moveToReg(){
      this.$router.push('/main/register');
    }
  },
};
</script>

<style scope>
.main {
  /* margin-top: 30px; */
  font-weight: bold;
}
._nav {
  margin-right: 20px;
}
</style>
