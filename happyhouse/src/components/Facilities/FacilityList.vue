<template>
    <div>
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
    }
}
</script>

<style>

</style>