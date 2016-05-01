$(document).ready(function(){
	 $(".testblock").css("fontSize","20px");
	 $("#story").css("color","green");
	 $("p").css("color","green").css("font-size","30px");
     $("#story,p").css("fontWeight","bold");
      $("#flat,#flat2").css("color","#565656").css("font-size","30px");
      $(":input").css("width","250px").css("height","50px").css("background-color","#181818");
      $("div#wrap .part1").css("color","green").css("text-align","center");
});

$().ready(function(){

  $("#flat").click(function(){
    $(this).css("font-size","1.4em");
  });
  $("#flat2").dblclick(function(){
    $(this).css("font-size","1.4em");
    $(this).css("color","red");
  });

});

/*$(document).ready(function(){
  
   $("div").mouseover(function(){$("div").css("color","green")});
   $("div").mouseout(function(){$("div").css("color","black")});

}); */

$().ready(function(){
	$("#but1").click(function(){alert("Вы нажали один раз на первую кнопку!");});
});

/* использование event*/

$(document).ready(function(){
  
   $("#square").click(function(event){
      $("#coord").css("display","block");
      $("#x").html(event.pageX);
      $("#y").html(event.pageY);
   });

});   

$(document).ready(function(){
   
   $("#sold").click(function(){ $("#sold").fadeOut(3000)});
   $("#sold2").click(function(){ $("#sold").fadeIn(3000)});
  
});        


