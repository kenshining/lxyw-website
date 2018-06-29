<template>
  <div>
  	<div class="web_swiper">
  		<swiper :options="swiperOption"  ref="index_swiper">  
            <!-- 这部分放你要渲染的那些内容 -->  
            <swiper-slide v-for="item in items">
            	<img :src="item.img">
            </swiper-slide>  
            <!-- 这是轮播的小圆点 -->  
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>  
  	</div>
  </div>
</template>
<script type="text/javascript">
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data(){
  	return {
  		swiperOption:{
  			//是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
            notNextTick: true,
            loop:true,
            initialSlide:0,
            autoplay:{
            	delay:3000,
            	disableOnInteraction:false
            },
            speed:1000,
            effect:'fade',
            direction : 'horizontal',
            spaceBetween: 0,  
            //滑动之后回调函数
          on: {
              slideChangeTransitionEnd: function(){
                // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
              },
          },
          //左右点击
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          },
          //分页器设置         
          pagination: {
              el: '.swiper-pagination',
              clickable :true
          }
  		},
  		items:[
  			{img:'./static/img/banner.jpg'}
  			,{img:'./static/img/banner2.jpg'}
  			,{img:'./static/img/banner3.jpg'}
  		]
  	}
  },
  computed:{
 	swiper() {  
    	return this.$refs.index_swiper.swiper;  
    }
  },
  mounted () {  
    //这边就可以使用swiper这个对象去使用swiper官网中的那些方法  
    this.swiper.slideTo(0, 0, false);
    layer.msg("1111");
  }
}
</script>