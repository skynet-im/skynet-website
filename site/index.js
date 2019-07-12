(function () {
    var nav = $("#main-nav");
    var header = $("#home");
    $(window).on("scroll", function (e) {
        var top = $(this).scrollTop();
        if (top > 40)
            nav.removeClass("navbar-expand-y");
        else
            nav.addClass("navbar-expand-y");

        // Do not use the slow parallax effect on mobile phones as it produces glitches
        // because mobile browsers use that "cool" disappearing search bar and that is messing
        // up the "scrollTop" value.
        if (window.outerWidth > 768)
            header.css('background-position-y', -(top * 0.25) + "px");
    });
})();