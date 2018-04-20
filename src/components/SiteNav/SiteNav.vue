<template>
  <nav class="site-nav">
    <ul>
      <li><site-icon iconName="shouye-copy"/><span>首页</span></li>
      <li><site-icon iconName="fenlei"/><span>分类</span></li>
      <li><site-icon iconName="guidangxiangmu"/><span>归档</span></li>
      <li><site-icon iconName="biaoqian"/><span>标签</span></li>
      <li><site-icon iconName="chakanxiangce"/><span>相册</span></li>
      <li><site-icon iconName="xiazai15"/><span>搜索</span></li>
    </ul>
  </nav>
</template>

<script>
  import SiteIcon from '../SiteIcon/SiteIcon.vue'
  export default {
    //组件内部数据
    data(){
      return {}
    },
    //外部数据
    props: {},
    //组件
    components: {
      "site-icon": SiteIcon
    },
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
  .site-nav{
    padding: 20px 20px;
    background: #fff;
    ul>li{
      font-size: 14px;
      line-height: 32px;
      cursor: pointer;
      span{
        display: inline-block;
        margin-left: 10px;
        color: #555;
      }
    }
    ul>li:hover>span{
      color: black;
    }
  }
</style>