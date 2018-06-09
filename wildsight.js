$(document).ready(function(){
    var pageToLoad = window.location.href.split("#")[1];
    if (typeof pageToLoad == 'undefined')
        pageToLoad = "about";
        
    $("#" + pageToLoad).addClass("active");

    $("#content").load(pageToLoad + ".html");
            
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
    
    $("#privacy").click(function(){
        $("#content").load("privacy.html");
    });
});
