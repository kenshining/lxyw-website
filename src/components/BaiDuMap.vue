<template>
　　<div id="_baiduMap" :style="style"></div>
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
　　　　　　var map = new BMap.Map("_baiduMap");
　　　　　　var point = new BMap.Point(this.longitude,this.latitude);
　　　　　　map.centerAndZoom(point, 12);
			map.addControl(new BMap.NavigationControl());    
			map.addControl(new BMap.ScaleControl());    
			map.addControl(new BMap.OverviewMapControl());
			map.addControl(new BMap.MapTypeControl());
			var marker = new BMap.Marker(point);// 创建标注
			map.addOverlay(marker);

			var opts = {    
			    width : 250,     // 信息窗口宽度    
			    height: 100,     // 信息窗口高度    
			    title : "<div>北京乐享御味贸易有限公司<div><div>BeiJing LXYW Trade Co.,Ltd.<div>"  // 信息窗口标题   
			}
			var txt = "<div>地址：北京市马连道一商大厦D座502室<div>"
					+ "<div>Address：YiShang Building,Room702 MaLianDao BeiJing China</div>"
			var infoWindow = new BMap.InfoWindow(txt, opts);  // 创建信息窗口对象   
			marker.addEventListener("click",function(e){
				map.openInfoWindow(infoWindow,point);
			});
			map.openInfoWindow(infoWindow, point);// 打开信息窗口
　　　　}
　　}
</script>