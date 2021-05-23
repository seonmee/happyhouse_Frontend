<template>
  <div>
    <h1>게시판</h1>
    <!-- <div class="search_box  form-group row">
      <select class="form-control col-sm-1" v-model="searchType">
        <option value="title">제목</option>
        <option value="content">내용</option>
      </select>
      <input class="form-control-plaintext col-sm-6" type="text" name="name" v-model="searchName" />
      <b-button class="_writebtn" @click="writeBoard">검색</b-button>
    </div> -->
    <div class="search">
      <b-input-group>
        <b-input-group-prepend>
          <b-form-select v-model="selected" class="mb-3">
            <!-- This slot appears above the options from 'options' prop -->
            <template #first>
              <b-form-select-option :value="null">-- 선택 --</b-form-select-option>
            </template>

            <!-- These options will appear after the ones from 'options' prop -->
            <b-form-select-option value="title">제목</b-form-select-option>
            <b-form-select-option value="content">내용</b-form-select-option>
          </b-form-select>
        </b-input-group-prepend>
        <b-form-input type="text" v-model="searchText"></b-form-input>
        <b-input-group-append>
          <b-button variant="outline-secondary" @click="searchBoard">검색</b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
    <b-table
      striped
      hover
      :items="items"
      :current-page="currentPage"
      :fields="fields"
      @row-clicked="rowClick"
    ></b-table>
    <b-button class="_writebtn" @click="writeBoard">글쓰기</b-button>
    <b-pagination
      v-model="currentPage"
      :total-rows="totalPage"
      :per-page="perPage"
      align="center"
      @page-click="nextList"
    ></b-pagination>
  </div>
</template>

<script>
import http from '@/http-common';
export default {
  name: 'BoardList',
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      totalPage: '',
      searchText: '',
      selected: null,
      fields: [
        {
          key: 'bid',
          label: '번호',
        },
        {
          key: 'title',
          label: '제목',
        },
        {
          key: 'userid',
          label: '글쓴이',
        },
        {
          key: 'created_at',
          label: '작성일',
        },
      ],
      items: {},
    };
  },
  methods: {
    nextList(button, page) {
      console.log(page);
      http
        .get('/board/', {
          params: {
            currentPage: page,
          },
        })
        .then((response) => {
          console.log(response);
          if (response.data == '') {
            alert('게시글이 없습니다');
          } else {
            this.items = response.data;
          }
        })
        .catch(() => {
          console.log('게시글 불러오기 실패.');
        });
    },
    rowClick(item) {
      console.log(item.bid);
      this.$router.push({
        path: `/main/board/detail/${item.bid}`,
      });
    },
    writeBoard() {
      this.$router.push('/main/board/write');
    },
    searchBoard() {
      if (this.selected == null) {
        alert('선택해주세요');
        return;
      }
      if (this.searchText == '') {
        alert('내용을 입력해주세요');
        return;
      }
      http
        .get('/board/', {
          params: {
            key: this.selected,
            word: this.searchText,
          },
        })
        .then((response) => {
          console.log(response);
          if (response.data == '') {
            alert('게시글이 없습니다');
          } else {
            this.items = response.data;
          }
        })
        .catch(() => {
          console.log('게시글 불러오기 실패.');
        });

      http
        .get('/board/total/', {
          params: {
            key: this.selected,
            word: this.searchText,
          },
        })
        .then((response) => {
          console.log(response);
          if (response.data.count != -1) {
            console.log(response.data);
            this.totalPage = response.data.count;
          } else {
            alert('불러오기 실패');
          }
        })
        .catch(() => {
          console.log('게시글 불러오기 실패.');
        });
    },
  },
  mounted() {
    http
      .get('/board')
      .then((response) => {
        console.log(response);
        if (response.data == '') {
          alert('게시글이 없습니다');
        } else {
          this.items = response.data;
        }
      })
      .catch(() => {
        console.log('게시글 불러오기 실패.');
      });

    http
      .get('/board/total')
      .then((response) => {
        console.log(response);
        if (response.data.count != -1) {
          console.log(response.data);
          this.totalPage = response.data.count;
        } else {
          alert('불러오기 실패');
        }
      })
      .catch(() => {
        console.log('게시글 불러오기 실패.');
      });
  },
};
</script>

<style>
._writebtn {
  margin-right: 20px;
  float: right;
}
.search {
  padding-left: 80%;
}
</style>
