<template>
  <div id="app">
  	<topbar v-bind:viewName="menuSelect"></topbar>
  	<transition :name="transitionName" mode="out-in">
    	 <keep-alive><router-view></router-view></keep-alive>
	</transition>
  </div>
</template>

<script>
import topbar from '@/components/TopBar'
export default {
  name: 'App',
  components: {
    topbar
  },
  data(){
    return {
        transitionName:'fade',
        menuSelect:''
    }
  },
  watch: {
	    $route(to, from) {
	      console.log(to);
	      this.menuSelect = to.name;
	    }
	}
}
</script>

<style lang="scss">
  @import "./style/style";

.fade-enter-active,
.fade-leave-active{
    will-change: transform;
    transition: all .3s;
}
.fade-enter {
    opacity:100;
    filter:alpha(opacity=100);
}
.fade-leave-active {
    opacity:0;
    filter:alpha(opacity=0);
}
</style>
