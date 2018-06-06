<template>
  <div>
  	<topbar v-bind:viewName="menuSelect"></topbar>
  	sales
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
      menuSelect:'sales'
    }
  }
}
</script>