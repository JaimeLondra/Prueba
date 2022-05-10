(function (global, undefined) {
    var widthTextBox, heightTextBox, leftTextBox, topTextBox;

    function OpenHistorialLlamadas() {
        var width = 900;
        var height = 400;
        var left = 400;
        var top = 400;
        radopen("HistorialLLamadas.aspx", "Hitorial", width, height, left, top);
    }


    function OpenEstadosNoDisp() {
        var width = 400;
        var height = 410;
        var left = 400;
        var top = 400;
        radopen("EstadosNoDisponible.aspx", "Estados", width, height, left, top);
    }


    function OpenChatSup() {
        var width = 450;
        var height = 480;
        var left = 600;
        var top = 200;
        radopen("ChatSupervisor.aspx", "Chat", width, height, left, top);
    }


    function OpenHistorialNoDisp() {
        var width = 700;
        var height = 400;
        var left = 400;
        var top = 400;
        radopen("HistorialNoDisponible.aspx", "Historial ", width, height, left, top);
    }


    function OpenLllamadaManual() {
        //var width = 1105;
        //var height = 980;
        //var left = 600;
        //var top = 150;
        //radopen("Marcacion.aspx", "Marcacion", width, height, left, top);
        
        var x = document.getElementById("Marcacion");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
        }
     
        
    }
    
    function OpenEnLlamada() {
        var width =1700;
        var height = 1050;
        var left = 400;
        var top = 120;
        radopen("InicioLlamada.aspx", "Marcacion", width, height, left, top);
    }

    function OpenTeclado() {
        var width = 250;
        var height = 280;
        var left = 600;
        var top = 120;
        radopen("Marcador.aspx", "Marcacion", width, height, left, top);
    }


    function OpenfinLlamada() {
        var width = 550;
        var height = 580;
        var left = 600;
        var top = 120;
        radopen("FinLlamada.aspx", "Marcacion", width, height, left, top);
    }


    function OpenTransferenciaCall() {
        var width = 1050;
        var height = 380;
        var left = 600;
        var top = 120;
        radopen("TransferenciaLlamada.aspx", "Marcacion", width, height, left, top);
    }




    global.OpenHistorialLlamadas = OpenHistorialLlamadas;
    global.OpenEstadosNoDisp = OpenEstadosNoDisp;
    global.OpenChatSup = OpenChatSup;
    global.OpenHistorialNoDisp = OpenHistorialNoDisp;
    global.OpenLllamadaManual = OpenLllamadaManual;
    global.OpenEnLlamada = OpenEnLlamada;
    global.OpenTeclado = OpenTeclado;
    global.OpenfinLlamada = OpenfinLlamada;
    global.OpenTransferenciaCall = OpenTransferenciaCall;


})(window);





