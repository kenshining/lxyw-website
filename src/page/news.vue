<template>
  <div>
  	<topbar v-bind:viewName="menuSelect"></topbar>
  	news
  </div>
</template>
<script type="text/javascript">
  import topbar from '@/components/TopBar'
  export default {
  components: {
    topbar
  },
  data(){
    return {
      menuSelect:'news'
    }
  }
}
</script>