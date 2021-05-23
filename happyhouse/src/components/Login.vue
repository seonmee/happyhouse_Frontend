<template>
  <div id="main_wrap">
    <div id="middle_wrap">
      <div id="content_wrap">
        <div
          style="
            width: 502px;
            height: 166px;
            margin-left: auto;
            margin-right: auto;
            position: relative;
            top: 100px;
          "
        >
          <div class="login_title_warp">
            <div style="margin-top: 12px;">
              <h2>HAPPY HOUSE 로그인</h2>
            </div>
          </div>
          <div id="login_wrap">
            <form class="login" @submit.prevent="login(userid, password)">
              <table class="content_table" style="width: 75%;">
                <colgroup>
                  <col style="width: 30%;" />
                  <col style="width: 70%;" />
                </colgroup>
                <tbody>
                  <tr>
                    <th style="background-color: #eeeeee; color: #3e5fba;">
                      아이디
                    </th>
                    <td>
                      &nbsp;
                      <input
                        type="text"
                        id="_userid"
                        name="id"
                        value
                        data-msg="ID를"
                        size="30"
                        title="아이디"
                        required
                        v-model="userid"
                        placeholder="아이디를 입력하세요."
                        style="border: 1px solid #dddddd;"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th style="background-color: #eeeeee; color: #3e5fba;">
                      패스워드
                    </th>
                    <td>
                      &nbsp;
                      <input
                        type="password"
                        id="_pwd"
                        name="pwd"
                        value
                        required
                        v-model="password"
                        placeholder="패스워드를 입력하세요."
                        size="30"
                        title="패스워드"
                        style="border: 1px solid #dddddd;"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" style="height: 50px; text-align: center;">
                      <b-button type="submit" variant="primary">로그인</b-button>
                      &nbsp;&nbsp;
                      <b-button variant="outline-info" @click="findPwd">비밀번호 찾기</b-button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
#login_wrap {
  margin: auto;
}
#login_wrap th {
  font-weight: bold;
}
#main_wrap {
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px;
}

.login_title_warp {
  margin: auto;
  width: 500px;
  color: #ffffff;
  text-align: center;
  background-color: #3e5fba;
  border: solid 1px #efefef;
  font-weight: bold;
  height: 60px;
}
</style>

<script>
// import { AUTH_REQUEST } from '../store/actions/auth'
// import http2 from '../http-common2'
// import http3 from '../http-common3'
import http from '@/http-common';
import { mapActions } from 'vuex';
export default {
  name: 'login',
  data() {
    return {
      userid: '',
      password: '',
      submitted: false,
      profile: [],
    };
  },
  methods: {
    ...mapActions(['getLogin']),
    login: function(userid, password) {
      //model에 바인딩된 데이터 모두 ==> this
      // const { usernameOrEmail, password } = this
      // this.$store
      //   .dispatch(AUTH_REQUEST, { usernameOrEmail, password })
      //   .then(() => {
      //     this.$router.push('/')
      //   })
      // if (this.userid != null && this.password != null) this.getLogin({ userid, password });
      // else alert('입력바람');
      if (this.userid != null && this.password != null) {
        http
          .post('/user/login', {
            userid: userid,
            password: password,
          })
          .then((response) => {
            console.log(response.data);
            if (response.data == '') {
              alert('로그인 실패.');
            } else {
              this.profile = response.data;
              this.getLogin(this.profile);
              this.$router.push('/');
            }
          })
          .catch(() => {
            console.log('로그인 실패.');
          });
      } else alert('입력바람');
    },
    findPwd() {
      this.$router.push('/main/findPw');
    },
  },
};
</script>
