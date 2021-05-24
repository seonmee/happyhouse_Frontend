<template>
  <!-- <b-breadcrumb>
    <b-breadcrumb-item href="#home">
      <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
      <router-link to="/vuetest/"> HappyHouse</router-link>
    </b-breadcrumb-item>
    <b-breadcrumb-item href="/vuetest/apt"
      ><router-link to="/vuetest/apt">아파트정보</router-link></b-breadcrumb-item
    >
    <b-breadcrumb-item href="#about"
      ><router-link to="/vuetest/about">About</router-link></b-breadcrumb-item
    >
  </b-breadcrumb> -->
  <div class="main">
    <img :src="require(`@/assets/title.png`)" id="_img" />
    <!-- <h1>HappyHouse</h1> -->
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#"
        ><b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
        <router-link to="/main/" class="_nav"> HOME </router-link></b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#" class="_nav"
            ><router-link to="/main/notice/noticeList">공지사항</router-link></b-nav-item
          >
          <b-nav-item href="#" class="_nav">
            <router-link to="/main/board/boardList">게시판</router-link></b-nav-item
          >
          <b-nav-item href="#homePrice" class="_nav"
            ><router-link to="/main/price">주택거래정보</router-link></b-nav-item
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" v-if="this.getProfile == ''"
            ><router-link to="/main/login">로그인</router-link></b-nav-item
          >
          <b-nav-item href="#" v-if="this.getProfile == ''"
            ><router-link to="/main/register">회원가입</router-link></b-nav-item
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
  },
};
</script>

<style scope>
.main {
  margin-top: 30px;
}
._nav {
  margin-right: 60px;
}
</style>
