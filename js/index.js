$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height()){
            $(".navbar").css({"background-color":"transparent"});   
        }
        else{
            $(".navbar").css({"background-color":"white"});
        }

    })
})