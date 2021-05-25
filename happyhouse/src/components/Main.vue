<template>
  <div>
    <div id="_backgroundImage">
      <b-container id ="searchBox" class="bv-example-row">
        <b-row class="_mainSearch">
          <b-col>
            <search-bar />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-row>
            <b-col>
              <strong>news</strong>
            </b-col>
            <b-col>
              <b-button variant="link">더보기</b-button>
            </b-col>
          </b-row>
          <div>
            <b-table hover :items="news"></b-table>
          </div>
        </b-col>
        <b-col>
          <b-row>
            <b-col>
              <strong>공지사항</strong>
            </b-col>
            <b-col>
              <b-button variant="link" @click="moveNoticeList">더보기</b-button>
            </b-col>
          </b-row>
          <div>
            <b-table
              hover
              :items="notices"
              :per-page="5"
              :fields="noticefield"
              @row-clicked="moveNotice"
            ></b-table>
          </div>
        </b-col>
        <b-col>
          <b-row>
            <b-col>
              <strong>게시판</strong>
            </b-col>
            <b-col>
              <b-button variant="link" @click="moveBoardList">더보기</b-button>
            </b-col>
          </b-row>
          <div>
            <b-table
              hover
              :items="boards"
              :per-page="5"
              :fields="boardfield"
              @row-clicked="moveBoard"
            ></b-table>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SearchBar from '@/components/houseDeal/HomeDealSearchBar.vue';
import http from '@/http-common';
export default {
  name: 'Main',
  components: {
    SearchBar,
  },
  data() {
    return {
      news: [
        { 뉴스기사: '실거주자 세부담 줄이고...', 언론사: '조선비즈' },
        { 뉴스기사: '국힘표 부동산 대책…', 언론사: '매일경제' },
        { 뉴스기사: '부동산특위서 엇갈린 종부세...', 언론사: '한겨례' },
        { 뉴스기사: '부동산원, 도시재생...', 언론사: '칸' },
        { 뉴스기사: '與 "6월 전 매듭"…부동산...', 언론사: '연합뉴스' },
      ],
      boards: {},
      boardfield: [
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
      ],
      notices: {},
      noticefield: [
        {
          key: 'nid',
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
      ],
    };
  },
  methods: {
    moveBoard(boards) {
      console.log(boards.bid);
      this.$router.push({
        path: `/main/board/detail/${boards.bid}`,
      });
    },
    moveBoardList() {
      this.$router.push('/main/board/boardlist');
    },
    moveNotice(notices) {
      this.$router.push({
        path: `/main/notice/detail/${notices.nid}`,
      });
    },
    moveNoticeList() {
      this.$router.push('/main/notice/noticelist');
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
          this.boards = response.data;
        }
      })
      .catch(() => {
        console.log('게시글 불러오기 실패.');
      });

    http
      .get('/notice')
      .then((response) => {
        console.log(response);
        if (response.data == '') {
          alert('공지글이 없습니다');
        } else {
          this.notices = response.data;
        }
      })
      .catch(() => {
        console.log('공지글 불러오기 실패.');
      });
  },
};
</script>

<style scope>
#_backgroundImage {
  background: url('../assets/main_background.png') no-repeat; 
  background-size: cover;
  height: 500px;
}
#searchBox{
  width: 60%;
  position: relative;
  top: 40%;
}
</style>
