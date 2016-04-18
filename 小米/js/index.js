 window.onload=function(){
 	var anniu=getClass('anniu')[0].getElementsByTagName("div")
 	var img=getClass('window')[0].getElementsByTagName("img")
 	var lis=getClass('buchong')[0].getElementsByTagName("li")
 	var kuang=getClass('boxbottomright',getClass('xuanxiang1')[0])
 	var las=getClass('buchong1')[0].getElementsByTagName("li")
 	var kuangs=getClass('boxbottomright',getClass('xuankuang2')[0])
 	var lac=getClass('buchong2')[0].getElementsByTagName("li")
 	var kuangc=getClass('boxbottomright',getClass('xuankuang3')[0])
   
 	function hanshu(name,xuanxiang){
 	 for(var i=0;i<name.length;i++){
             name[i].index=i
         name[i].onmouseover=function(){
               
               for(var j=0;j<xuanxiang.length;j++){
                  xuanxiang[j].style.display="none";
                 
               }
               xuanxiang[this.index].style.display="block"
              
      }
  }
}
  
  hanshu(lis,kuang)
  hanshu(las,kuangs)
  hanshu(lac,kuangc)

      var mingxing=getClass("mx2");
      var sum=0;
      mingxing[0].style.display="block";
    setInterval(function(){
      sum++;
      if(sum>1){
      	sum=0;
      }
      for(var i=0;i<mingxing.length;i++){
      	mingxing[i].style.display="none";
      }
        mingxing[sum].style.display="block";
        
        },5000)


var fl=getClass("sile")
var arr=[];
var h=document.documentElement.clientHeight
for(var i=0;i<fl.length;i++){
   arr.push(fl[i].offsetTop)
     }
window.onscroll=function(){
    var obj=document.body.scrollTop?document.body:document.documentElement;
     var stop=obj.scrollTop

  for(var i=0;i<fl.length;i++){
    var aa=fl[i].getElementsByTagName("img")
         if(stop+h>=arr[i]){
          for(var j=0;j<aa.length;j++){
            aa[j].src=aa[j].getAttribute("asrc")
          }
        }
       }
   }
   onscroll()

 

 




  var imgbox=getClass("banner")[0]
 var boximg=getClass("window")[0]
 var img=boximg.getElementsByTagName("a")
  var imgW=parseInt(getStyle(boximg,"width"))
 var btn=getClass("anniu")[0]
 var btns=btn.getElementsByTagName("div")
 var ldianji=getClass("gundongzuo")[0]
 var rdianji=getClass("gundongyou")[0]
 var now=0;                  //当前图片的下标
 var next=0;                     //下一张图片的下标
 img[0].style.left=0               
  var t=setInterval(lunbo,2000)
  	function lunbo(){
 	next++;
 	if(next==img.length){
 		next=0
 	}
  img[next].style.left=imgW+"px"
  animate(img[now],{left:-imgW},300)
  animate(img[next],{left:0},300)
  btns[next].className="hot"
   btns[now].className=""
   now=next;
}
imgbox.onmouseover=function(){
	clearInterval(t)
}
imgbox.onmouseout=function(){
	t=setInterval(lunbo,2000)
}
rdianji.onclick=function(){
	lunbo()
}
ldianji.onclick=function(){

	next--;
 	if(next==-1){
 		next=img.length-1
 	}
  img[next].style.left=imgW+"px"
  animate(img[now],{left:-imgW},300)
  animate(img[next],{left:0},300)
  btns[next].className="hot"
   btns[now].className=""
   now=next;

}

for(var i=0;i<img.length;i++){
	btns[i].index=i;
    btns[i].onclick=function(){
       img[this.index].style.left=imgW+"px"
       animate(img[now],{left:-imgW},300)
       animate(img[this.index],{left:0},300)
       btns[now].className=""
       btns[this.index].className="hot"    
       now=next=this.index;
    }

}



  

}


      
 