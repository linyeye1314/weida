window.onload = function(){

     window.onscroll=()=>{
  if(window.scrollY>0){
     $("nav").addClass('active');
     console.log("滚动事件");
     }
    else{
     $("nav").removeClass('active')
     }
     }
    $(".navbar-nav a").click(function(){
    $(".navbar-toggler").click()
    
    })
    
    }