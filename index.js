var nav = $("#main-nav");
$(document).on("scroll", function (e) {
    var top = $(this).scrollTop();
    if (top > 40)
        nav.removeClass("navbar-expand-y");
    else
        nav.addClass("navbar-expand-y");
});