<template>
  <div class="container">
    <h1>회원 가입</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="userid">아이디</label>
        <input type="text" id="userid" v-model="userid" />
        <button type="button" @click="checkusername">아이디용 이름 체크</button>
      </div>
      <div>
        <label for="name">성함</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div>
        <label for="password">비밀번호</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div>
        <label for="passwordConfirm">비밀번호 확인</label>
        <input type="password" id="passwordConfirm" v-model="passwordConfirm" />
      </div>
      <div>
        <label for="email">이메일</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div>
        <label for="phone">전화번호</label>
        <input type="text" id="phone" v-model="phone" />
      </div>
      <div>
        <label for="addr">주소</label>
        <input type="text" id="addr" v-model="addr" />
      </div>
      <button type="submit">회원가입</button>
    </form>
  </div>
</template>

<script>
import http from '@/http-common';
export default {
  name: 'Register',
  data() {
    return {
      userid: '',
      name: '',
      password: '',
      passwordConfirm: '',
      email: '',
      phone: '',
      addr: '',
    };
  },
  methods: {
    checkusername() {
      if (this.userid == '') {
        alert('아이디를 입력하세요.');
        return;
      }
      http
        .get('user/' + this.userid)
        .then((response) => {
          console.log(response.data);
          if (response.data.count == true) {
            alert('사용할수있는 아이디입니다.');
          } else {
            alert('사용할 수 없는 아이디입니다.');
            this.userid = '';
          }
        })
        .catch(() => {
          alert('사용할 수 없는 아이디입니다.');
        });
    },
    submitForm() {
      if (this.userid == '') {
        alert('아이디용이름 입력하세요.');
        return;
      }
      if (this.name == '') {
        alert('이름을 입력하세요.');
        return;
      }
      if (this.email == '') {
        alert('이메일을 입력하세요.');
        return;
      }
      if (this.password == '') {
        alert('패스워드를 입력하세요.');
        return;
      }
      if (this.phone == '') {
        alert('전화번호 입력하세요.');
        return;
      }
      if (this.addr == '') {
        alert('주소를 입력하세요.');
        return;
      }

      http
        .post('/user', {
          userid: this.userid,
          username: this.name,
          password: this.password,
          email: this.email,
          number: this.phone,
          address: this.addr,
        })
        .then((response) => {
          console.log('sdffs');
          console.log(response.data);
          if (response.data.count == true || response.data.count == 'true') {
            alert('성공적으로 가입 하였습니다. 로그인 하십시오.');
            this.$router.push('/main/login');
          } else {
            alert('가입을 하지 못했습니다.');
            this.userid = '';
            this.name = '';
            this.password = '';
            this.passwordConfirm = '';
            this.email = '';
            this.phone = '';
            this.addr = '';
          }
        })
        .catch(() => {
          alert('가입을 하지 못했습니다.');
        });
    },
  },
};
</script>

<style></style>
