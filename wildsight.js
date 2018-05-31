$(document).ready(function(){
    $("#content").load("about.html");
        
    $(".nav a").click(function(){
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });
       
    $("#about").click(function(){
        $("#content").load("about.html");
    });
       
    $("#userguide").click(function(){
        $("#content").load("userguide.html");
    });
      
    $("#contact").click(function(){
        $("#content").load("contact.html");
    });
});
