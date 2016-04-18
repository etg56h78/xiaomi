function getClass(classname,obj){
   	var obj=obj||document
   	if(document.getElementsByClassName!=undefined){
   		return obj.getElementsByClassName(classname)
   	}
   	else{
   		var arr=[];
   		var a=obj.getElementsByTagName('*');
   		for(var i=0;i<a.length;i++){
             if(getcheck(a[i].className,className)){
   			arr.push(a[i]);
   		}
   		return arr;
   		}
   		
   	}
   }
   function getcheck(oldClass,newClass){
      var arr=oldClass.split(" ");
      for(i=0;i<arr.length;i++){
        if(arr[i]==newClass){
         return true;
        }
     }
      return false;
   }


   function text(obj,val){
      if(val==undefined){
         if(obj.innerText){
            return obj.innerText;
         }else{
            return obj.Content;
         }
      }else{
         if(obj.innerText==val){
            obj.innerText=val;
         }else{
            obj.Content=val;
         }
      }
   }


   function getStyle(obj,attr){
     if(obj.currentStyle){
      return obj.currentStyle[attr];
     }else{
      return getComputedStyle(obj,null)[attr];
     }
   }