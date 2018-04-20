<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#icon-${iconName}`"></use>
  </svg>
</template>

<script>
  import '../../../static/icon/iconfont'
  export default {
    //组件内部数据
    data(){
      return {}
    },
    //外部数据
    props: {
      iconName: {
        type: String,
        required: true
      },
    },
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
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>