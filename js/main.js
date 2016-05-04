$(document).ready(function(){
	 $(".testblock").css("fontSize","20px");
	 $("#story").css("color","green");
	// $("p").css("color","green").css("font-size","30px");
     $("#story,p").css("fontWeight","bold");
      $("#flat,#flat2").css("color","#565656").css("font-size","30px");
     // $(":input").css("width","250px").css("height","50px").css("background-color","#181818");
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

// 03/05/2016

$(document).ready(function(){

   $("#b7").click(function(){$("#b8").slideUp(3000)});
   $("#b9").click(function(){$("#b8").slideDown(3000)});
     $("#b11").click(function(){$("#b12").slideToggle(3000)});
  
});

$(document).ready(function(){

   $("#b13").click(function(){
      $("div.exe").animate({fontSize:20},2000);
      $("div.exe").animate({top:220},2000);
      $("div.exe").animate({fontSize:"1em"},2000);
      $("div.exe").animate({left:320},2000);
      $("div.exe").animate({top:0,left:0},2000);
   });

});

$(document).ready(function(){

   $("#s1").click(function(){
      $("#fg1").html("<b>jQuery</b> - это JavaScript библиотека значительно упрощающая написание кода.");
   });
   $("#but2").click(function(){
      $("#par2").html("jQuery значительно облегчает взаимодействие с DOM.");
   });
   $("#but3").click(function(){
      alert($("#fg1").html());
   });
   $("#but4").click(function(){
      alert($("#par2").html());
   });

}); 

$(document).ready(function(){
  
   $("#cnop1").click(function(){
      $("#txt1").prepend("<b>jQuery</b> - это  ");
   });
   $("#cnop2").click(function(){
      $("#txt1").append(" значительно упрощающая написание кода.");
   });
   $("#cnop3").click(function(){
      $("body").append("<p>Я добавленный абзац.</p>");
   });
});

$(document).ready(function(){

   $("#dl").click(function(){
       $("#dl").wrap("<b></b>");
   });

});

$(document).ready(function(){

   $("div.df").click(function(){
       $("div.df").addClass("boxik");
   });
});

$(document).ready(function(){
   $("div.rem").click(function(){
      $("div.df").removeClass("boxik");
   });

});
