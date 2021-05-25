<template>
    <b-container>
        <b-form-textarea
            id="textarea"
            v-model="text"
            placeholder="댓글을 입력하세요."
            rows="3"
            max-rows="6"
        ></b-form-textarea>
        <b-row>
            <b-col class = "mt-1" align="right">
                <b-button variant="warning" @click="regComment">등록</b-button>
            </b-col>
        </b-row>
        <b-list-group v-if="items && items.length != 0" class="mt-1 padding-top">
            <b-list-group-item v-for="(item, index) in items" :key="index" :item="item">
            <b-row>
            <b-col cols="3" align="left">
                {{item.userid}}
            </b-col>
            </b-row>
            <b-row class="d-flex w-100 justify-content-between">
                <div class="mb-1 ml-2">{{item.content}}</div>
                <div v-if="item.userid==id">
                    <b-dropdown variant="warning" size="sm">
                        <b-dropdown-item href="#">수정</b-dropdown-item>
                        <b-dropdown-item href="#">삭제</b-dropdown-item>
                    </b-dropdown>
                </div>
            </b-row>
            <b-row>
                <div class="ml-2">
                    <small>{{item.created_at}}</small>
                </div>
            </b-row>
            </b-list-group-item>
        </b-list-group>
        <b-container v-else class="mt-1 padding-top">
            <b-row>
            <b-col><b-alert show>댓글을 입력해 주세요!!</b-alert></b-col>
            </b-row>
        </b-container>
    </b-container>


    
</template>

<script>
import http from '@/http-common';
import {mapGetters} from 'vuex';
export default {
    name:'conmment',
    props: ['bid'],
    created() {
        console.log(this.bid);
        http
        .get('/comments/'+this.bid)
        .then((response) => {
            this.items = response.data;
        })
        .catch(() => {
            console.log('댓글 불러오기 실패.');
        }); 
    },
    data() {
        return {
            text:'',
            items:[],
            id: this.profile.userid
        }
    },methods: {
       
    },computed:{
        ...mapGetters({
            profile: 'getProfile'
        })
    }
}
</script>

<style scoped>

</style>