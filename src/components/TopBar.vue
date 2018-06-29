<template>
  <div class="topbar">
    <div class="logo">乐享御味</div>
    <div class="menu">
      <ul>
        <router-link to="/">
        <li :class="viewName=='index'? 'selected':''">
            <div>首页</div>
            <div class="sub">HOME</div>
        </li>
        </router-link>
        <router-link to="/products">
        <li :class="viewName=='products'? 'selected':''">
            <div>乐享新品</div>
            <div class="sub">NEW PRODUCTS</div>
        </li>
        </router-link>
        <router-link to="/news">
        <li :class="viewName=='news'? 'selected':''">
            <div>新闻资讯</div>
            <div class="sub">NEWS</div>
        </li>
        </router-link>
        <router-link to="/sales">
        <li :class="viewName=='sales'? 'selected':''">
            <div>销售合作</div>
            <div class="sub">SALES&COOPERATION</div>
        </li>
        </router-link>
        <router-link to="/about">
        <li :class="viewName=='about'? 'selected':''">
            <div>关于我们</div>
            <div class="sub">ABOUT</div>
        </li>
        </router-link>
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
