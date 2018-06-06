<template>
  <div class="topbar">
    <div class="logo">乐享御味</div>
    <div class="menu">
      <ul>
        <li :class="viewName=='home'? 'selected':''">
          <router-link to="/">
            <div>首页</div>
            <div class="sub">HOME</div>
          </router-link>
        </li>
        <li :class="viewName=='products'? 'selected':''">
          <router-link to="/products">
            <div>乐享新品</div>
            <div class="sub">NEW PRODUCTS</div>
          </router-link>
        </li>
        <li :class="viewName=='news'? 'selected':''">
          <router-link to="/news">
            <div>新闻资讯</div>
            <div class="sub">NEWS</div>
          </router-link>
        </li>
        <li :class="viewName=='sales'? 'selected':''">
          <router-link to="/sales">
            <div>销售合作</div>
            <div class="sub">SALES&COOPERATION</div>
          </router-link>
        </li>
        <li :class="viewName=='about'? 'selected':''">
          <router-link to="/about">
            <div>关于我们</div>
            <div class="sub">ABOUT</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topbar',
  props: {
    viewName:{
      type:String,
      required:true
    }
  },
  methods:{
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.router-link-active {
    text-decoration: none;
}
.router-link-exact-active{
    color: #FFF;
}
a:-webkit-any-link{
   color: #FFF;
   text-decoration: none;
}
</style>
