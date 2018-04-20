<template>
  <div class="site-overview ">
    <img src="./head-portrait.jpg" alt="">
    <p class="site-author-name">your name</p>
    <p class="site-description">前端小码农</p>
    <nav class="site-state">
      <div class="site-state-item">
        <span class="site-state-item-count">10</span>
        <span class="site-state-item-name">日志</span>
      </div>
      <div class="site-state-item">
        <span class="site-state-item-count">10</span>
        <span class="site-state-item-name">分类</span>
      </div>
      <div class="site-state-item">
        <span class="site-state-item-count">10</span>
        <span class="site-state-item-name">标签</span>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    //组件内部数据
    data(){
      return {}
    },
    //外部数据
    props: {},
    //组件
    components: {},
    //生命周期函数
    created(){
    },
    mounted(){
    },
    //计算属性
    computed: {},
    //监视属性
    watch: {},
    //方法
    methods: {}
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .site-overview{
    padding: 20px 10px;
    background: #fff;
    img{
      display: block;
      margin: 0 auto;
      width: 60%;
      height: 60%;
      border-radius: 50%;
    }
    p{
      text-align: center;
    }
    .site-author-name{
      margin-top: 20px;
      font-size: 14px;
      font-weight: bold;
      line-height: 28px;
      color: #222;
    }
    .site-description{
      color: #999;
      font-size: 14px;
      line-height: 32px;
    }
    .site-state{
      display: flex;
      justify-content: center;
      margin-top: 20px;
      .site-state-item{
        span{
          display: block;
          text-align: center;
          margin: 0 10px;
        }
        .site-state-item-count{
          font-size: 15px;
          font-weight: bold;
          cursor: pointer;
        }
        .site-state-item-name{
          font-size: 15px;
          color: #969896;
          cursor: pointer;
        }
      }
    }
  }
</style>