<template>
　　<div id="_qqMap" :style="style"></div>
</template>
<script>
　　export default{
　　　　data(){
　　　　　　return{
　　　　　　　　style:{
　　　　　　　　　　width:'100%',
　　　　　　　　　　height:this.height+'px'
　　　　　　　　}
　　　　　　}
　　　　},
　　　　props:{	//里面存放的也是数据，与data里面的数据不同的是，这里的数据是从其他地方得到的数据
　　　　　　height:{
　　　　　　　　type:Number,
　　　　　　　　default:500
　　　　　　},
　　　　　　longitude:{

		   },	//定义经度
　　　　　　latitude:{

		   }	//定义纬度
　　　　},
　　　　mounted(){

			var myLatlng = new qq.maps.LatLng(this.longitude,this.latitude);
			var myOptions = {
			    zoom: 8,
			    center: myLatlng,
			    mapTypeId: qq.maps.MapTypeId.ROADMAP
			}
			var map = new qq.maps.Map(document.getElementById("_qqMap"), myOptions);

		}
　　}
</script>