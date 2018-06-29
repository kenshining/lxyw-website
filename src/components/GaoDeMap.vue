<template>
　　<div id="_gaodeMap" :style="style"></div>
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
　　　　props:{	
			//里面存放的也是数据，与data里面的数据不同的是，这里的数据是从其他地方得到的数据
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
　　　　 var map = new AMap.Map('_gaodeMap', {
	        zoom:11,//级别
	        center: [this.longitude, this.latitude],//中心点坐标
	        viewMode:'3D',//使用3D视图
	        resizeEnable: true,
	    });
		var infoWindow = new AMap.InfoWindow({ //创建信息窗体
	        isCustom: true,  //使用自定义窗体
	        content:'<div>信息窗体</div>', //信息窗体的内容可以是任意html片段
	        offset: new AMap.Pixel(16, -45)
	    });
	    var onMarkerClick  =  function(e) {
	        infoWindow.open(map, e.target.getPosition());//打开信息窗体
	        //e.target就是被点击的Marker
	    } 
	    var marker = new AMap.Marker({
	         position:  [this.longitude, this.latitude]
	    })
	    map.add(marker);
	    marker.on('click',onMarkerClick);//绑定click事件
　　　　}
　　}
</script>