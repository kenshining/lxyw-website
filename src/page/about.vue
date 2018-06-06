<template>
  <div>
  	<topbar v-bind:viewName="menuSelect"></topbar>
  	about
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
      menuSelect:'about'
    }
  }
}
</script>