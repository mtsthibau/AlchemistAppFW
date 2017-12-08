
var navBarCtrl = {

    startNavBar: function () {
        var logoLink = "index.html";
        var logoImg = "images/mentalAlchemist.gif";
        var logoWidth = "37";
        var logoHeight = "100";

        var navBar = "<nav class='navbar is-fixed-top' role='navigation' aria-label='main navigation'>" +
                        "<div class='navbar-brand' >" +
                            "<a class='navbar-item' href='" + logoLink + "'>" +
                            "<img src='" + logoImg + "' width='" + logoWidth + "' height='" + logoHeight + "'>" +
                            "</a>" +
                            "<button class='button navbar-burger' id='btnSlideMenu'>" +
                                "<span></span>" +
                                "<span></span>" +
                                "<span></span>" +
                            "</button>" +
                        "</div>" +
                    "</nav >";

        $("#alcNavbar").html(navBar);

        this.registerEvents();
    },


    registerEvents: function () {

        $(document).on("click", "#btnSlideMenu", function (e) {
            e.stopImmediatePropagation();
            slideMenuCtrl.clickSlideMenu();
            $("html, body").addClass("block-scroll");
        });

    },

};