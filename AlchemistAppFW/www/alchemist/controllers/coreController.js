var socket = "";

var coreCtrl = {

    startAlchemistApp: function (aEvent) {

        this.socketConf();
        //Start Components
        slideMenuCtrl.startMenu();
        navBarCtrl.startNavBar();
        bodyCtrl.startBody();
        footerCtrl.startFooter();
    },

    socketConf: function () {
        //Definindo socket de notificações do server
        socket = io('http://localhost:4555', { transports: ['websocket', 'polling', 'flashsocket'] });

        ////Listener para o evento notificacao que definimos no server.js
        //socket.on('notificacao', function (data) {
        //    //localNotificationCtrl.simpleNotify(data.message);
        //    navigator.notification.alert(data.message, null, "Notificação!", ["Ok"]);

        //    //Trabalhar com data recebido
        //});
    },
}