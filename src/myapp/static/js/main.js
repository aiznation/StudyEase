// mobile menu button
$(document).ready(() => {
    $(".menu-btn").click(() => $("#header").toggleClass("open"));
    $(".menu-btn").click(() => $("#header .logo").toggleClass("open"));

    $(window).resize(() => {
        if ($(window).width() > 991) {
            $("#header").removeClass("open").css("left", "");
            $("#header .logo").removeClass("open").css("width", "");
        } 
    });
});

