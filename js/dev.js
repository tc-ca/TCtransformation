
        $(function(){
            
            
            
            'use strict';
            $.urlParam = function(name){
                var results = new RegExp('[?&]' + name + '=([^&#]*)').exec(window.location.href);
                if (results){
                    return results[1];
                }
            }
            
            
            // test for info box2
            var infoxBox2Height=0;
        
            $('.info-box2').each(function(i, obj) {
                
                console.log(obj);
            
                 var currentHeight=$(this).height();
                 
                 if(currentHeight>infoxBox2Height) {
                     infoxBox2Height=currentHeight;
                     
                 }
                 
                // alert(infoxBox2Height);
   
            });
            
            $('.info-box2').css('height',infoxBox2Height + 'px');
            
            
             // end test for info box2
                        
            
            function hideEn() {
  var x = document.getElementsByTagName()("en");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
               
} 
     
        
        

