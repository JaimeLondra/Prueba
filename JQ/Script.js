
//window.onload = function () {
//    pantalla = document.getElementById("screen");
//};
var isMarch = false;
var isMarch2 = false;
var acumularTime = 0;

function start() {
    if (isMarch == false) {
        timeInicial = new Date();
        control = setInterval(cronometroI, 10);
        isMarch = true;
    }
}
function start2() {
    if (isMarch2 == false) {
        timeInicial = new Date();
        control = setInterval(cronometro, 10);
        isMarch = true;
    }
}
function cronometro() {
    pantalla1 = document.getElementById("screen");
   
    timeActual = new Date();
    acumularTime = timeActual - timeInicial;
    acumularTime2 = new Date();
    acumularTime2.setTime(acumularTime);
    cc = Math.round(acumularTime2.getMilliseconds() / 10);
    ss = acumularTime2.getSeconds();
    mm = acumularTime2.getMinutes();
    hh = acumularTime2.getHours() - 18;
    if (cc < 10) {
        cc = "0" + cc;
    }
    if (ss < 10) {
        ss = "0" + ss;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }
    if (hh < 10) {
        hh = "0" + hh;
    }
    pantalla1.innerHTML = hh + " : " + mm + " : " + ss;
}

function cronometroI() {
    pantalla = document.getElementById("Sesion");
    timeActual = new Date();
    acumularTime = timeActual - timeInicial;
    acumularTime2 = new Date();
    acumularTime2.setTime(acumularTime);
    cc = Math.round(acumularTime2.getMilliseconds() / 10);
    ss = acumularTime2.getSeconds();
    mm = acumularTime2.getMinutes();
    hh = acumularTime2.getHours() - 18;
    if (cc < 10) {
        cc = "0" + cc;
    }
    if (ss < 10) {
        ss = "0" + ss;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }
    if (hh < 10) {
        hh = "0" + hh;
    }
 //   pantalla.innerHTML = hh + " : " + mm + " : " + ss;

}




function stop() {
    if (isMarch == true) {
        clearInterval(control);
        isMarch = false;
    }
}

function resume() {
    //if (isMarch == false) {
    //    timeActu2 = new Date();
    //    timeActu2 = timeActu2.getTime();
    //    acumularResume = timeActu2 - acumularTime;

    //    timeInicial.setTime(acumularResume);
    //    control = setInterval(cronometro, 10);
    //    isMarch = true;
    //}
}

function reset() {
    pantalla = document.getElementById("screen");
    pantalla2 = document.getElementById("Sesion");

    
    if (isMarch == true) {
        clearInterval(control);
        isMarch = false;
    }
    acumularTime = 0;
    pantalla.innerHTML = "00 : 00 : 00";
   

}



//(function (global, undefined) {
//    var demo = {};

//    function togglePopupModality() {
//        var wnd = getModalWindow();
//        wnd.set_modal(!wnd.get_modal());
//        setCustomPosition(wnd);

//        if (!wnd.get_modal()) {
//            document.documentElement.focus();
//        }
//    }

//    function setCustomPosition(sender, args) {
//        sender.moveTo(sender.getWindowBounds().x, 280);
//    }

//    function showDialogInitially() {
//        var wnd = getModalWindow();
//        wnd.show();
//        Sys.Application.remove_load(showDialogInitially);
//    }
//    Sys.Application.add_load(showDialogInitially);

//    function getModalWindow() { return $find(demo.modalWindowID); }

//    global.$modalWindowDemo = demo;
//    global.togglePopupModality = togglePopupModality;
//    global.setCustomPosition = setCustomPosition;
//})(window);