$(document).ready(function () {
    function checkWindowSize() {
        if ($(window).width() <= 991) {
            $("body").addClass("pad");
        } else {
            $("body").removeClass("pad");
        }
    }
    checkWindowSize();
    $(window).on("resize", checkWindowSize);
});


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


// header resize on scroll
$(document).ready(() => {
    const $header = $("#header");
    if ($header.length) {
        $(window).on("scroll", function () {
            $header.toggleClass("scroll", $(window).scrollTop() > 20);
        }).trigger("scroll");
    }
});




