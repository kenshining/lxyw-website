<template>
  <div>
    <div class="about">
      <!-- <div class="line">
        <baiduMap :height="height" :longitude="longitude" :latitude="latitude"></baiduMap>
      </div> -->
      <div class="bg">
        <div class="line">
          <div class="title">管理团队- GROUP</div>
          <div class="members">
            <div class="member" v-for="member in members">
                <img :src="member.img">
                <div class="discription">
                  <span class="t">{{member.enname}} ({{member.title}})</span>
                  <label class="fline"></label>
                  <span class="n">{{member.introduction}}</span>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-odd">
        <div class="line">
          <div class="title">联系我们 - CONTACT</div>
          <div class="contact">
            <div class="m">
              <!-- <qqMap :height="height" :longitude="longitude" :latitude="latitude"></qqMap> -->
              <baiduMap :height="height" :longitude="longitude" :latitude="latitude"></baiduMap>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script type="text/javascript">
  import baiduMap from '@/components/BaiDuMap.vue';
  import qqMap from '@/components/QQMap.vue';
  export default {
  components: {
    qqMap,
    baiduMap
  },
  data(){
    return {
      menuSelect:'about',
      height:300,
      longitude:116.332085,
      latitude:39.888827,
      members:[
        {name:'李中星',img:'./static/img/t2.jpg',enname:'Frank Li',title:'董事长',introduction:'dfsafdsafdsafsdafsd'},
        {name:'李中星',img:'./static/img/t3.jpg',enname:'Frank Li',title:'董事长',introduction:'dfsafdsafdsafsdafsd'},
        {name:'李中星',img:'./static/img/t4.jpg',enname:'Frank Li',title:'董事长',introduction:'dfsafdsafdsafsdafsd'},
        {name:'李中星',img:'./static/img/t4.jpg',enname:'Frank Li',title:'董事长',introduction:'dfsafdsafdsafsdafsd'},
        {name:'李中星',img:'./static/img/t4.jpg',enname:'Frank Li',title:'董事长',introduction:'dfsafdsafdsafsdafsd'}
      ]
    }
  },
  mounted () {  
    //console.log($(".member"));
  }
}
</script>
<style scoped>
  
</style>