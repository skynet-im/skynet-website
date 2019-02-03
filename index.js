(function () {
    var nav = $("#main-nav");
    var header = $("#home");
    $(window).on("scroll", function (e) {
        var top = $(this).scrollTop();
        if (top > 40)
            nav.removeClass("navbar-expand-y");
        else
            nav.addClass("navbar-expand-y");

        header.css('background-position-y', -(top * 0.25) + "px");
    });
})();