
var slideMenuItems = [];
var menuObj = {};
var slideMenuCtrl = {

    startMenu: function () {
        //TODO - Separar JSON????
        slideMenuItems.push({
            title: 'Compartilhar',
            id: 'share'
        });
        slideMenuItems.push({
            title: 'Avaliar',
            id: 'evaluate'
        });
        //slideMenuItems.push({
        //    title: 'Entry 2',
        //    id: 'foo'
        //});

        menuObj = {
            title: 'Alchemist App',
            items: slideMenuItems,
            x: 0,
            y: 0
        };

    },

    clickSlideMenu: function () {

        //OpenMenu  
        ContextMenu.open(menuObj,
            function (itemSelected) {
                slideMenuCtrl.registerClickSlideMenu(itemSelected);
                $('html, body').animate({ scrollTop: 0 }, 'slow');
                $("html, body").removeClass("block-scroll"); 
            }
        );


        slideMenuCtrl.registerEvents();
    },

    registerClickSlideMenu: function (itemSelected) {
        switch (itemSelected) {
            default:
            case "share":
                slideMenuCtrl.clickShare();
                break;
            case "evaluate":
                slideMenuCtrl.clickEvaluate();
                break;
        }
    },

    registerEvents() {
        //Click outside slideMenu
        $(document).on("click", "#cordova-context-menu-wrapper", function (e) {
            e.isImmediatePropagationStopped();
            $('html, body').animate({ scrollTop: 0 }, 'slow');
            $("html, body").removeClass("block-scroll");
        });

    },

    clickShare: function () {
        navigator.share({
            'title': 'Alchemist App',
            'text': 'Compartilhe com seus amigos o nosso app',
            'url': 'http://www.alchemistapp.com'
        });
    },

    clickEvaluate: function () {
        window.open("https://play.google.com/store/apps/details?id=br.com.fourhoofs.fourmilk");
    },
};