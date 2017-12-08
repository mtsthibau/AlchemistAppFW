var footerCtrl = {

    footer: "<footer class='footer is-fixed-bottom'>" +
                "<div class='container' >" +
                    "<div class='content has-text-left'>" +
                        "<p>" +
                        "   <strong>Alchemist App</strong>" +
                        "</p>" +
                    "</div>" +
                " </div>" +
            "</footer > ",


    startFooter: function () {
        $("#alcFooter").html(this.footer);
    }
}