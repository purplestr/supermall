<template>
  <div class="comment" v-if="Object.keys(commentInfo).length !== 0">
    <div class="comment-title">
      <div>用户评论</div>
      <div>更多</div>
    </div>
    <div  class="comment-user">
      <div class="comment-user-img">
        <img :src="commentInfo.user.avatar" alt="">
        <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="comment-content">
        <p>{{commentInfo.content}}</p>
      </div>
      <div class="comment-date">
        <span>{{commentInfo.created | date}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="comment-img">
        <img :src="list" alt="" v-for="list in commentInfo.images" :key="list.id">
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from 'common/formatDate'
  export default {
    name: "DetailCommentInfo",
    props: {
      commentInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      date(value) {
        const date = new Date(value * 1000)
        return formatDate(date,'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped>
  .comment-title{
    display: flex;
    padding: 5px;
    line-height: 30px;
    border-bottom: 1px solid #eee;
    justify-content: space-between;
  }
  .comment-user{
    padding: 15px 5px 5px 5px;
  }
  .comment-user-img img{
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .comment-user-img span{
    display: inline-block;
    vertical-align: top;
    margin-top: 13px;
  }
  .comment-content{
    margin: 7px 0;
  }
  .comment-content p{
    line-height: 1.2em;
  }
  .comment-date span{
    margin-right: 10px;
    color: #b4b4b4;
  }
  .comment-img img{
    width: 60px;
    margin: 3px 6px 0 0;
  }
</style>
