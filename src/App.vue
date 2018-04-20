<template>
  <div id="app">
    <el-row :gutter="16" type="flex" justify="center">
      <el-col :span="4">
        <aside class="header-inner">
          <div class="site-brand-wrapper">
            <h1>没想好名字</h1>
            <p>请输入你的个性签名。</p>
          </div>
          <site-nav></site-nav>
        </aside>
        <aside class="sidebar-inner ">
          <site-overview></site-overview>
        </aside>
      </el-col>
      <el-col :span="12">
        <site-main></site-main>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import SiteNav from './components/SiteNav/SiteNav.vue'
  import SiteOverview from './components/SiteOverview/SiteOverview.vue'
  import SiteMain from './components/SiteMain/SiteMain.vue'
export default {
  name: 'App',
  components: {
    'site-nav': SiteNav,
    'site-overview': SiteOverview,
    'site-main': SiteMain
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  #app{
    overflow: hidden;
    /*min-width: 960px;*/
    /*max-width: 1920px;*/

  }
  .header-inner{
    margin-bottom: 10px;
    .site-brand-wrapper{
      padding: 20px 0;
      background-image: linear-gradient(to bottom, #d0edf5, #e1e5f0 100%);
      h1{
        height: 36px;
        text-align: center;
        font-size: 18px;
        line-height: 36px;
      }
      p{
        height: 28px;
        text-align: center;
        font-size: 14px;
        line-height: 28px;
      }
    }
  }






  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
