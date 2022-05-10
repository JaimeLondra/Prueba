<%@ page language="VB" autoeventwireup="false" inherits="MGestion_MasterPage, App_Web_z3ahlyik" uiculture="es" culture="es-MX" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>
<%@ Register Src="InformacionGeneral.ascx" TagName="InformacionGeneral" TagPrefix="MPCU1" %>
<%@ Register Src="InformacionFinanciera.ascx" TagName="InformacionFinanciera" TagPrefix="MPCU2" %>
<%@ Register Src="Historicos_De_Actividades.ascx" TagName="Historico_De_Actividades" TagPrefix="MPCU3" %>
<%@ Register Src="Relacionados.ascx" TagName="Relacionados" TagPrefix="MPCU4" %>
<%@ Register Src="Hist_Pagos.ascx" TagName="Hist_Pagos" TagPrefix="MPCU5" %>
<%@ Register Src="Historico_Asignacion.ascx" TagName="Hist_Asig" TagPrefix="MPCU6" %>
<%@ Register Src="InformacionAdicional.ascx" TagName="Adicional" TagPrefix="MPCU7" %>
<%@ Register Src="Negociaciones.ascx" TagName="GNegociaciones" TagPrefix="MPCU8" %>
<%@ Register Src="NegociacionesEpecialesV2.ascx" TagName="GNegociacionesEspeciales" TagPrefix="MPCU9" %>
<%@ Register Src="Documentos.ascx" TagName="Documentos" TagPrefix="MPCU10" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Mc :: Modulo Gestión</title>
    <link href="Imagenes/IcoLogo_Mc.ico" rel="Shortcut icon" />
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
    <link href="Estilos/ObjHtmlS.css" rel="stylesheet" />
    <link href="Estilos/ObjHtmlNoS.css" rel="stylesheet" />
    <link href="Estilos/ObjAjax.css" rel="stylesheet" />
    <link href="Estilos/Modal.css" rel="stylesheet" />
    <link href="Estilos/HTML.css" rel="stylesheet" />
    <link href="Estilos/MenuLateral.css" rel="stylesheet" />
<%--    <script src="FlashVersion.js"></script>obsoletoo --%>
    <script src="JQ/jquery.min.js"></script>
    <script src="JQ/jquery.timer.js"></script>
    <script src="JQ/cw-galatea-integration-api-js-bundle.min.js"></script>
    <script src="JQ/Method.js"></script>
    <script src="JQ/CORE_APIEvents.js"></script>
    <%--<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>--%>
    <script src="JQ/Script.js"> </script>
    <%-- <script>start();</script>--%>
    <script src="JQ/JavaS.js" type="text/javascript"></script>
    <%--<script src="JQ/jquery-3.5.1.min.js"></script>--%>
    <script src="JQ/CORE_API_MC.js"></script>
    <script src="https://cwmilla.nuxiba.com/agentkolob/logger.json"></script>
    <%-- <script src="JQ/PestanasMejorado.js"></script>--%>
    <script lang="javascript" type="text/javascript">
        Especial();
        var count = 180
        var timer = $.timer(
            function () {
                count--;
                if (count == -8) {
                    window.location.href = "ExpiroSesion.aspx";
                }
                else {

                    $('.count').html(count);
                    if (count <= 30) {
                        $find("MpuSession").show();
                        if (count <= 0) {
                            $('.count').html()
                        }
                    }
                }
            },
            1000,
            true
        );
        function Mover(event) {
            s = 180;
            count = 180;
            $.ajax({
                type: "POST",
                url: "MasterPage.aspx/KeepActiveSession",
                data: "{'Usuario':'" + document.getElementById('LblCat_Lo_Usuario').textContent + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: true,
                success: function (msg) {
                    if (msg.d == "Bye") {
                        window.location.href = "ExpiroSesion.aspx";
                    }
                }
            });
            Especial(document.getElementById('LblAgenda').textContent)
        };
        function Especial(V_Bandera) {
            var $list = $('#rp_list ul');
            var elems_cnt = $list.children().length;
            var $elem0 = $list.find('li:nth-child(' + (1) + ')');
            var $elem1 = $list.find('li:nth-child(' + (2) + ')');
            var $elem2 = $list.find('li:nth-child(' + (3) + ')');
            $elem0.hide();
            $elem1.hide();
            $elem2.show();
            if (V_Bandera == '11') {
                $elem0.show();
                $elem1.show();
            } else if (V_Bandera == '01') {
                $elem1.show();
            }
            else if (V_Bandera == '10') {
                $elem0.show();
            }
            var d = 200;
            $list.find('li:visible div').each(function () {
                $(this).stop().animate({
                    'marginLeft': '-50px'
                }, d += 100);
            });
            $list.find('li:visible').live('mouseenter', function () {
                $(this).find('div').stop().animate({
                    'marginLeft': '-220px'
                }, 200);
            }).live('mouseleave', function () {
                $(this).find('div').stop().animate({
                    'marginLeft': '-50px'
                }, 200);
            });
        }
    </script>
    <%--<script type="text/javascript">
        function onCallRecieved(callData) {
            if (callData.cal_key != "") {
                document.getElementById('TextoBusca').value = callData.cal_key
                document.getElementById('call_id').value = callData.call_id
                document.getElementById('phoneNumber').value = callData.phoneNumber
                document.getElementById('typeCall').value = callData.typeCall
                var boton = document.getElementById('buscarNuevo');
                boton.click();
            }
            else {
                document.getElementById('call_id').value = callData.call_id
                document.getElementById('phoneNumber').value = callData.phoneNumber
                document.getElementById('typeCall').value = callData.typeCall
                $find("MpuBuscarMarcador").show();
            }
        };

        function onDialingNumber(callOutData) {
            //if (callOutData.call_id != "") {
            alert("call_id:" + callOutData.call_id + ",callout_id:" + callOutData.callout_id + ",camID:" + callOutData.camID + ",phoneNumber:" + callOutData.phoneNumber);
            //}
        };
    </script>--%>
    <script type="text/javascript">
        $(document).ready(function () {
            $('#ControlesCall').on('click', '.vertical', function () {
                var $notas = $('#ControlesCall');
                if ($notas.hasClass('activo')) {
                    $($notas).animate({ 'right': '96%' }, 500);
                    $($notas).removeClass();
                } else {
                    $($notas).addClass('activo');
                    $($notas).animate({ 'right': '80%' }, 500);
                }
            });
        })
    </script>
    <script type="text/javascript">
        function clicTwice(btn, msg) {
            btn.value = msg;
            btn.disabled = true;
            return true;
        }
    </script>
    <script type="text/javascript">
        function disableBackButton() {
            window.history.forward();
        }
        setTimeout("disableBackButton()", 0);
    </script>
    <script type="text/javascript">
        function clickOnce(btn, msg) {
            btn.value = msg;
            btn.disabled = true;
            return true;
        }
    </script>
    <script type="text/javascript">
        function clickOnce2(btn, msg) {
            btn.value = msg;
            btn.disabled = true;
            return true;
        }
    </script>
    <style type="text/css">
        body {
            margin: 0;
            padding: 0;
        }

        .auto-style1 {
            width: 32px;
        }
    </style>
    <script type="text/javascript">
        $(document).ready(function () {
                $("form").keypress(function (e) {
                    if (e.which == 13) {
                        return false;
                    }
                });
            });
    </script>
    <style>
        #ControlesCall {
            right: 96%;
            overflow: hidden;
            position: fixed;
            top: 55%;
            width: 20%;
            z-index: 100;
        }

        /*#fijodcha {
            border-left: 2px solid #00FF99;
            border-right: 0 none #00FF99;
            border-top: 4px solid #00FF99;
            border-bottom: 1px none #00FF99;
            background-color: rgba(0, 0, 0, 0.7);
            border-image: none;
            border-radius: 15px 0 0 15px;
            box-shadow: -6px 0px 10px black;
            clear: right;
            color: #00FFFF;
            float: right;
            overflow: hidden;
            padding: 10px 0 0 10px;
            position: relative;
            top: -2147483648%;
            width: 0%;
            z-index: 100;
            left: 0px;
        }*/



        #fijodcha {
            background-color: white; /*transparent hace el fondo transpartente del panel de acciones*/
            border-color: steelblue;
            border-image: none;
            border-radius: 15px 15px 15px 15px;
            border-style: solid solid solid solid;
            border-width: 4px 0 1px 2px;
            box-shadow: 5px 5px 5px black;
            clear: right;
            color: black;
            float: left;
            overflow: hidden;
            padding: 10px 10px 10px 10px;
            position: center;
            top: 55%;
            width: 72%;
            align-content: stretch;
            z-index: 100;
            left: 0px;
        }

        .vertical {
            background-color: cornflowerblue;
            border-radius: 10px 10px 0 0;
            border-style: solid solid none solid;
            border-width: 2px;
            clear: both;
            color: white;
            cursor: pointer;
            float: right;
            font-size: 1em;
            padding: 2px;
            position: absolute;
            top: 45%;
            left: 68%;
            text-align: center;
            -ms-transform: rotate(90deg);
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
            width: 110px;
            z-index: 200;
        }

            .vertical:hover {
                font-size: 1.1em;
                font-weight: bold;
                text-decoration: underline;
            }

        .auto-style1 {
            height: 116px;
        }

        .auto-style2 {
            text-align: right;
            height: 116px;
        }
    </style>
</head>
<script type="text/javascript">

        function SearchCredit(valor) {
            var name = valor//document.getElementById("<%=TXBIDCall.ClientID%>").value;
            var request;
            if (window.XMLHttpRequest) {
                //New browsers.
                request = new XMLHttpRequest();
            }
            else if (window.ActiveXObject) {
                //Old IE Browsers.
                request = new ActiveXObject("Microsoft.XMLHTTP");
            }
            if (request != null) {
                var url = "MasterPage.aspx/SearchCredit";
                request.open("POST", url, false);
                var params = "{Creditoser: '" + name + "'}";
                request.setRequestHeader("Content-Type", "application/json");
                request.onreadystatechange = function () {
                    if (request.readyState == 4 && request.status == 200) {
                        //  alert(JSON.parse(request.responseText).d);
                        var respu = JSON.parse(request.responseText).d;
                        location.reload();
                    }
                };
                request.send(params);
            }
        }
</script>
<body onclick="Mover(event);" onload="connectToServer();"><%--Nuxiba connectToServer--%>
    <form id="FrmMasterPage" runat="server">
        <asp:HiddenField ID="HiddenInicioFila" runat="server" />
        <asp:ToolkitScriptManager ID="TKSMMaster" runat="server" CombineScripts="true" EnableScriptGlobalization="true">
        </asp:ToolkitScriptManager>
        <%----------valores kake para desarrollo--------%>
        <asp:Panel runat="server" ID="pnlMarcardorNuxibaFake" Visible="false">
            <asp:TextBox runat="server" ID="TxtFakeCredito" Text="" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <asp:CheckBox runat="server" ID="cbxFakeLlamadasalida" AutoPostBack="true" Checked="false" Text="llamada Salida Fake" CssClass="CbxDesc" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <asp:CheckBox runat="server" ID="cbxFakeLlamadaEntrada" AutoPostBack="true" Checked="false" Text="llamada Entrada Fake" CssClass="CbxDesc" />
        </asp:Panel>
        <%----------controles llamada--------%>
        <div id="ControlesCall">
            <div class="vertical">
                Controles Llamada
                                    <br />
            </div>

            <aside id="fijodcha">
                <table>
                    <tr>
                        <td style="width: 200px"><a>Controles de llamada</a></td>
                    </tr>
                </table>
                <div id="divBotonColgar">


                    <div id="Botondiv">
                        <table style="align-items: center;">
                            <caption>
                                <a>Control de Llamada</a></caption>

                            <tr>
                                <td style="width: 100px"><a>Colgar</a></td>
                                <td style="width: 100px"><a>Hold</a></td>
                                <td style="width: 100px"><a>Mute</a></td>
                            </tr>
                            <tr>
                                <td style="width: 100px">
                                    <asp:ImageButton ID="BtColgar" runat="server" OnClientClick="hangUp()" Height="50px" ImageUrl="~/Imagenes/colgar.png" Width="50px" />
                                </td>
                                <td style="width: 100px">
                                    <asp:ImageButton ID="BtHold" runat="server" OnClientClick="HoldCall()" Height="50px" ImageUrl="~/Imagenes/hold.png" Width="50px" />
                                </td>
                                <td style="width: 100px">
                                    <asp:ImageButton ID="BtMute" runat="server" OnClientClick="SetMute()" Height="50px" ImageUrl="~/Imagenes/mute.png" Width="50px" />
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="popover__wrapper">
                        <div id="Uno">
                            <div class="popover__content">
                                <div class="btn-group btn-group-lg col-xs-1 col-md-0">
                                    <div class="form-group">
                                        <label>Microfono</label>
                                        <div class="input-group col-12 mt-1">
                                            <input type="range" min="0" max="100" id="microphoneVolumeTxt" onchange="microphoneVolume();" step="any" />
                                        </div>
                                        <label>Bocina</label>
                                        <div class="input-group col-12 mt-1">
                                            <input type="range" min="0" max="100" id="speakerVolumeTxt" onchange="speakerVolume();" step="any" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="#">
                                <%--<button type="button" id="Volumen" class="btn btn-light ImgD popover__title"></button>--%>
                            </a>
                        </div>
                    </div>
                </div>
                <table>
                    <%--       <tr>
                        <td style="width: 80px">AgentBox Visible
                        </td>
                        <td style="width: 80px">AgentBox Invisible
                        </td>
                          <td style="width:100px">
                                                    ACW
                                                </td>
                    </tr>--%>
                    <%--   <tr>
                        <td style="width: 100px">
                            <asp:ImageButton ID="BtABVisi" runat="server" Height="50px" ImageUrl="~/Imagenes/Botones Visible.png" OnClientClick="BtABVisi_Click" Width="50px" />
                        </td>
                        <td style="width: 100px">
                            <asp:ImageButton ID="BtABInvi" runat="server" Height="50px" ImageUrl="~/Imagenes/AgentBox Invisible.png" OnClientClick="BtABInvi_Click" Width="50px" />
                        </td>

                        <td style="width: 100px">
                            <asp:ImageButton ID="BtACW" runat="server" Height="50px" ImageUrl="~/Imagenes/ACW.png" OnClientClick="BtACW_Click" Width="50px" Visible="false" />
                        </td>
                    </tr>--%>
                    <tr>

                        <%--<td style="width:100px">
                                               Re-Programar Llamada Predictivo
                                                </td>--%>
                    </tr>
                    <tr>
                        <%--  <td style="width:100px">
                                                   <asp:Image
                                            <td style="width:100px">
                                                    <asp:ImageButton ID="IBTRePrLlamadaPredict" runat="server"  Height="50px" ImageUrl="~/Imagenes/Programar llamada Predictivo.png" Width="50px" Visible="false"/>
                                                </td>
                                             
                                        </tr>
                                        <tr>
                                         <td style="width:100px">
                                                  Llamada Auxliar
                                                </td>--%>
                        <%--<td style="width: 100px">Transferencia
                        </td>--%>
                        <%--      <td style="width: 100px">Telefono
                        </td>--%>
                    </tr>
                    <tr>

                        <%-- <td style="width: 100px">
                            <asp:ImageButton ID="IBTTransferencia" runat="server" Height="50px" ImageUrl="~/Imagenes/Transferencia.png" Width="50px" Visible="true" />
                        </td>--%>
                        <%--  <td style="width: 100px">

                            <asp:ImageButton ID="BtDialKeys" runat="server" Height="50px" ImageUrl="~/Imagenes/Teclado DTMF.png" OnClick="BtDialKeys_Click" Width="50px" />
                            <asp:ImageButton ID="BtDialKeysClose" runat="server" Height="50px" ImageUrl="~/Imagenes/Teclado DTMF.png" OnClick="BtDialKeysClose_Click" Width="50px" Visible="false" />
                        </td>--%>
                    </tr>


                    <%--    <tr>
                        <td style="width: 100px">Ready</td>
                           <td style="width:100px">LogOut</td>
                    </tr>
                    <tr>
                        <td style="width: 100px">
                            <asp:ImageButton ID="BtReady" runat="server" Height="50px" ImageUrl="~/Imagenes/Ready.png" OnClientClick="BtReady_Click" Width="50px" />
                        </td>
                        <td style="width: 100px">
                            <asp:ImageButton ID="BtLogout" runat="server" Height="50px" ImageUrl="~/Imagenes/LogOut.png" OnClientClick="BtLogout_Click" Width="50px" Visible="false" />
                        </td>
                    </tr>--%>
                </table>

            </aside>
        </div>
        <asp:UpdatePanel ID="UpnlGral" runat="server">
            <ContentTemplate>
                <asp:UpdatePanel runat="server" ID="UpnlAgenda" EnableViewState="false">
                    <ContentTemplate>
                        <div id="rp_list" class="rp_list">
                            <ul>

                                <li>
                                    <div>
                                        <table style="width: 240px; height: 70px;">
                                            <tr>
                                                <td rowspan="2">
                                                    <img src="Imagenes/ImgAgenda.png" width="43" height="42" /></td>
                                                <td style="color: white; text-align: center">Tiene Llamadas Pendientes
                                                </td>
                                            </tr>

                                            <tr>
                                                <td style="color: white; text-align: center">
                                                    <asp:Button ID="BtnAgenda" runat="server" CssClass="Botones" Text="Ir" />
                                                </td>
                                            </tr>

                                        </table>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <table style="width: 100%; height: 70px;">
                                            <tr>
                                                <td rowspan="2">
                                                    <asp:Image runat="server" ImageUrl="Imagenes/ImgAvisos.png" ID="Image1" /></td>
                                                <td style="color: white; text-align: center">Avisos
                                                </td>
                                            </tr>

                                            <tr>
                                                <td style="color: white; text-align: center">
                                                    <asp:Button ID="BtnAvisos" runat="server" CssClass="Botones" Text="Ir" />
                                                </td>
                                            </tr>
                                        </table>

                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <table style="width: 100%; height: 70px;">
                                            <tr>
                                                <td rowspan="2">
                                                    <asp:Image runat="server" ImageUrl="Imagenes/ImgMantenimiento.png" ID="ImgMantenimiento" /></td>
                                                <td style="color: white; text-align: center">Mantenimiento
                                                </td>
                                            </tr>

                                            <tr>
                                                <td style="color: white; text-align: center">
                                                    <asp:Button ID="BtnMantenimiento" runat="server" CssClass="Botones" Text="Ir" />
                                                </td>
                                            </tr>

                                        </table>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </ContentTemplate>
                </asp:UpdatePanel>
                <div class="Pagina">
                    <table class="Table">
                        <tr>
                            <td class="auto-style1">
                                <asp:Image ID="ImgLogo_Cl" runat="server" ImageUrl="~/Imagenes/ImgLogo_Cl.png" /><asp:Label ID="LblAgenda" runat="server" Text="00" Font-Size="0px"></asp:Label>
                            </td>
                            <td class="TituloP" rowspan="2">Módulo De Gestión
                            </td>
                            <td class="Centro">
                                <asp:Image ID="ImgLogo_Ca" runat="server" ImageUrl="~/Imagenes/ImgLogo_Ca.png" />
                            </td>
                        </tr>
                        <tr>
                            <td class="auto-style1">
                                <marquee scrollamount="10" direction="left" loop="infinite" style="width: 99%">
                                    <asp:Label ID="LblPrivacidad" runat="server" CssClass="LblSesion" Text="Le recordamos que sus datos están protegidos, para mayor información consulte el aviso de privacidad en www.banamex.com/avisodeprivacidad"></asp:Label>
                                </marquee>
                            </td>
                            <td class="Derecha">
                                <div>
                                    <marquee width="80%" scrollamount="5" direction="left" loop="infinite" style="width: 66%">
                                        <asp:Label ID="LblCat_Lo_Usuario1" runat="server" CssClass="LblSesion" Text="Usuario:"></asp:Label>
                                        <asp:Label ID="LblCat_Lo_Usuario" runat="server" CssClass="LblSesion1"></asp:Label>
                                        <asp:Label ID="LblCat_Lo_Nombre1" runat="server" CssClass="LblSesion" Text="Nombre:"></asp:Label>
                                        <asp:Label ID="LblCat_Lo_Nombre" runat="server" CssClass="LblSesion1"></asp:Label>
                                        <%--<asp:Label ID="LblCAT_PE_PERFIL1" runat="server" CssClass="LblSesion" Text="Rol:"></asp:Label>
                                        <asp:Label ID="LblCAT_PE_PERFIL" runat="server" CssClass="LblSesion1"></asp:Label>--%>
                                        <asp:Label ID="LblCat_Lo_Productos1" runat="server" CssClass="LblSesion" Text="Campaña:"></asp:Label>
                                        <asp:Label ID="LblCat_Lo_Productos" runat="server" CssClass="LblSesion1"></asp:Label>
                                    </marquee>
                                    <div id="divLogin" style="display: none;">
                                        <asp:Button runat="server" ID="BtnLoginApi" Text="Conectar" OnClientClick="javascript:login(); return false;" />
                                    </div>
                                    <div id="divLogout" style="display: none;">
                                        <button class="btn btn-danger" onclick="logout()">Logout</button>
                                    </div>
                                    <input type="hidden" id="user" runat="server" />
                                    <input type="hidden" id="password" runat="server" />
                                    <asp:LinkButton ID="SESION" runat="server" Visible="true" BackColor="White"
                                        CssClass="LblMsj">Cerrar Sesión</asp:LinkButton>
                                    <br />
                                    <asp:Label runat="server" ForeColor="Black">Status</asp:Label>
                                    <asp:TextBox ID="status" runat="server" class="form-control invisible" BorderColor="Transparent" ReadOnly="true" type="text"></asp:TextBox>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <div class="Espacio">
                    </div>
                    <table class="Table">
                        <tr>
                            <td>
                                <asp:UpdatePanel runat="server" ID="UpnlBuscar">
                                    <ContentTemplate>
                                        <div class="searchdiv">
                                            <asp:Panel ID="PnlBuscar" runat="server" DefaultButton="BtnBuscar">
                                                <asp:TextBox ID="TxtBuscar" runat="server" CssClass="TxtxSearch" MaxLength="100"></asp:TextBox>
                                                <asp:Button ID="BtnBuscar" runat="server" CssClass="SearchButton" Text="Ir" />
                                                <asp:TextBoxWatermarkExtender ID="TxtBuscar_TextBoxWatermarkExtender" runat="server" Enabled="True" TargetControlID="TxtBuscar" WatermarkText="Buscar....">
                                                </asp:TextBoxWatermarkExtender>
                                                <asp:Label ID="lblcuantos" runat="server" CssClass="LblMsj"></asp:Label>
                                            </asp:Panel>
                                        </div>
                                    </ContentTemplate>
                                </asp:UpdatePanel>
                            </td>
                            <td>
                                <table>
                                    <tr>
                                        <td>

                                            <asp:ImageButton ID="ImgNext" runat="server" ImageUrl="~/Imagenes/ImgNext.png" Visible="false" />

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <asp:Label ID="lblNomFila" runat="server" ForeColor="DarkRed" Visible="false"></asp:Label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <asp:Label ID="lblFechaFila" runat="server" ForeColor="DarkRed" Visible="false"></asp:Label>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <table class="Table">
                                    <tr>
                                        <td>
                                            <asp:UpdatePanel ID="UpnlDictaminada" runat="server" Visible="false">
                                                <ContentTemplate>
                                                    <div class="Retirada">
                                                        <asp:Label ID="LblDictaminada" runat="server">Crédito Dictaminado</asp:Label>
                                                    </div>
                                                </ContentTemplate>
                                            </asp:UpdatePanel>
                                            <asp:AnimationExtender ID="AnimationExtender2" runat="server" TargetControlID="UpnlDictaminada">
                                                <Animations>
        <OnLoad>
             <Sequence>
                 <FadeOut Duration=".45" Fps="20" MinimumOpacity=".2" MaximumOpacity=".8" />
             </Sequence>
         </OnLoad>
                                                    <OnHoverOver>
                <FadeIn Duration=".25" Fps="20" MinimumOpacity=".2" MaximumOpacity=".8" />
            </OnHoverOver>
            <OnHoverOut>
                <FadeOut Duration=".25" Fps="20" MinimumOpacity=".2" MaximumOpacity=".8" />
            </OnHoverOut>

                                                </Animations>
                                            </asp:AnimationExtender>
                                            <asp:UpdatePanel ID="UpnlRetirada" runat="server" Visible="false">
                                                <ContentTemplate>
                                                    <div class="Retirada">
                                                        <asp:Label ID="LblRetiro" runat="server">Crédito Retirado</asp:Label>
                                                    </div>
                                                </ContentTemplate>
                                            </asp:UpdatePanel>
                                            <asp:AnimationExtender ID="AnimationExtender1" runat="server" TargetControlID="UpnlRetirada">
                                                <Animations>
        <OnLoad>
             <Sequence>
                 <FadeOut Duration=".45" Fps="20" MinimumOpacity=".2" MaximumOpacity=".8" />
             </Sequence>
         </OnLoad>
                                                    <OnHoverOver>
                <FadeIn Duration=".25" Fps="20" MinimumOpacity=".2" MaximumOpacity=".8" />
            </OnHoverOver>
            <OnHoverOut>
                <FadeOut Duration=".25" Fps="20" MinimumOpacity=".2" MaximumOpacity=".8" />
            </OnHoverOut>

                                                </Animations>
                                            </asp:AnimationExtender>
                                            <asp:UpdatePanel ID="UpnlGestion" runat="server" Visible="false">
                                                <ContentTemplate>
                                                    <asp:CollapsiblePanelExtender ID="CSPEGestion" runat="server" CollapseControlID="pnlcontrol_ges"
                                                        Collapsed="True" CollapsedImage="~/Imagenes/ImgMostrarG.png" CollapsedText="Mostrar Gestión"
                                                        ExpandControlID="pnlcontrol_ges" ExpandedImage="~/Imagenes/ImgOcultarG.png" ExpandedText="Ocultar Gestión"
                                                        ImageControlID="abajo" SuppressPostBack="true" TargetControlID="Pnlgestion" TextLabelID="LblGestion">
                                                    </asp:CollapsiblePanelExtender>
                                                    <asp:Panel ID="pnlcontrol_ges" runat="server" CssClass="collapsePanelHeader">
                                                        <asp:Image ID="abajo" runat="server" ImageUrl="~/Imagenes/ImgMostrarG.png" />
                                                        <asp:Label ID="LblGestion" runat="server" CssClass="LblDesc"></asp:Label>
                                                    </asp:Panel>
                                                    <asp:Panel ID="Pnlgestion" runat="server" CssClass="collapsePanel">
                                                        <table class="Table">
                                                            <tr class="Titulos">
                                                                <td>Captura De Gestión</td>
                                                                <td>Calificación Teléfonica</td>
                                                            </tr>
                                                            <tr class="Arriba" valign="top">
                                                                <td style="width: 70%" class="Arriba">
                                                                    <table>
                                                                        <tr>
                                                                            <td class="Arriba">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <asp:Label ID="LblAccion" runat="server" CssClass="LblDesc" Text="Acción"></asp:Label>
                                                                                        </td>
                                                                                        <td>
                                                                                            <asp:DropDownList ID="RblHist_Ge_Inoutbound" runat="server" CssClass="RblDesc" AutoPostBack="true">
                                                                                                <asp:ListItem Selected="True" Value="Seleccione">Seleccione</asp:ListItem>
                                                                                                <asp:ListItem Value="IN">Llamada De Entrada</asp:ListItem>
                                                                                                <asp:ListItem Value="GT">Llamada De Salida</asp:ListItem>
                                                                                                <asp:ListItem Value="NS">Seguimiento</asp:ListItem>
                                                                                                <asp:ListItem Value="GO">Otras Gestiones</asp:ListItem>
                                                                                                <asp:ListItem Value="DI">Dictamen</asp:ListItem>
                                                                                            </asp:DropDownList>
                                                                                        </td>
                                                                                        <td>&nbsp;&nbsp;&nbsp;<asp:CheckBox ID="CbxClienteMolesto" runat="server" CssClass="CbxDesc" Text="¿Cliente Molesto?" Visible="False" />
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <asp:Label ID="LblMotivo_Contacto" runat="server" CssClass="LblDesc" Text="Medio De Contacto" Visible="false"></asp:Label>
                                                                                        </td>
                                                                                        <td>
                                                                                            <asp:DropDownList ID="DdlMotivo_Contacto" runat="server" CssClass="DdlDesc" Visible="false">
                                                                                            </asp:DropDownList>
                                                                                        </td>
                                                                                        <td>&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <asp:Label ID="LblResultado_Gestion" runat="server" CssClass="LblDesc" Text="Resultado Gestión" Visible="False"></asp:Label>
                                                                                        </td>
                                                                                        <td>
                                                                                            <asp:DropDownList ID="DdlResultado_Gestion" runat="server" CssClass="TxtDesNS" Visible="False" AutoPostBack="true">
                                                                                            </asp:DropDownList>
                                                                                        </td>
                                                                                        <td>
                                                                                            <asp:DropDownList ID="DdlEscenario" runat="server" AutoPostBack="true" CssClass="TxtDesNS" Visible="False"/>
                                                                                            <asp:ImageButton ID="ImgVerRSSa" runat="server" ImageUrl="~/Imagenes/ImgVer.png" Visible="false" />
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <table>
                                                                                                <tr>
                                                                                                    <td>
                                                                                                        <asp:Label ID="LblEnviarDdv" runat="server" CssClass="LblDesc" Text="¿Enviar DDV?" Visible="False"></asp:Label>
                                                                                                    </td>
                                                                                                    <td>&nbsp;</td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                        <td>
                                                                                            <asp:DropDownList ID="DdlEnviarDdv" runat="server" CssClass="TxtDesNS" Visible="False">
                                                                                                <asp:ListItem Selected="True" Value="Seleccione">Seleccione</asp:ListItem>
                                                                                                <asp:ListItem>Si</asp:ListItem>
                                                                                                <asp:ListItem>No</asp:ListItem>
                                                                                            </asp:DropDownList>
                                                                                        </td>
                                                                                        <td>&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td colspan="3">
                                                                                            <asp:Panel runat="server" ID="PnlGO" Visible="false">
                                                                                                <table>
                                                                                                    <tr>
                                                                                                        <td>

                                                                                                            <asp:Label ID="LblCorreoGO" runat="server" CssClass="LblDesc" Text="Correo"></asp:Label>

                                                                                                        </td>
                                                                                                        <tr>
                                                                                                            <td>

                                                                                                                <asp:DropDownList ID="DdlCorreoGO" runat="server" AutoPostBack="true" CssClass="TxtDesNS">
                                                                                                                </asp:DropDownList>

                                                                                                            </td>
                                                                                                        </tr>
                                                                                                </table>
                                                                                            </asp:Panel>
                                                                                            <asp:Panel runat="server" ID="PnlNS" Visible="false">
                                                                                                <table>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <asp:Label ID="LblFechaNS" runat="server" CssClass="LblDesc" Text="Fecha"></asp:Label>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:Label ID="LblMontoNS" runat="server" CssClass="LblDesc" Text="Monto"></asp:Label>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:Label ID="LblNombreNS" runat="server" CssClass="LblDesc" Text="Nombre"></asp:Label>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <asp:TextBox ID="TxtFechaNS" runat="server" CssClass="TxtDesc" Width="103px" Enabled="False"></asp:TextBox>
                                                                                                            <asp:Image ID="ImgFechaNS" runat="server" ImageUrl="Imagenes/ImgCalendario.png" />
                                                                                                            <asp:CalendarExtender ID="TxtFechaNS_CalendarExtender" runat="server" CssClass="Calendario" Enabled="True" Format="ddMMyy" PopupButtonID="ImgFechaNS" TargetControlID="TxtFechaNS">
                                                                                                            </asp:CalendarExtender>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:TextBox ID="TxtMontoNS" runat="server" CssClass="TxtDesc" Width="103px"></asp:TextBox>
                                                                                                            <asp:FilteredTextBoxExtender ID="TxtMontoNS_FilteredTextBoxExtender" runat="server" Enabled="True" TargetControlID="TxtMontoNS" ValidChars="1234567890.">
                                                                                                            </asp:FilteredTextBoxExtender>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:TextBox ID="TxtNombreNS" runat="server" MaxLength="50" Width="225px"></asp:TextBox>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </table>
                                                                                            </asp:Panel>
                                                                                            <asp:Panel ID="PnlPV" runat="server" Visible="false">
                                                                                                <table>
                                                                                                    <tr class="Titulos">
                                                                                                        <td colspan="4">Escenario</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <asp:Label ID="LblFechaPV" runat="server" CssClass="LblDesc" Text="Fecha"></asp:Label>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:Label ID="LblMontoPV" runat="server" CssClass="LblDesc" Text="Monto"></asp:Label>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:Label ID="LblMedioPV" runat="server" CssClass="LblDesc" Text="Medio De Pago"></asp:Label>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:Label ID="LblSecPV" runat="server" CssClass="LblDesc" Text="Secuencia De Pago"></asp:Label>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <asp:TextBox ID="TxtFechaPV" runat="server" CssClass="TxtDesc" Width="103px" Enabled="False"></asp:TextBox>
                                                                                                            <asp:Image ID="ImgFechaPV" runat="server" ImageUrl="Imagenes/ImgCalendario.png" />
                                                                                                            <asp:CalendarExtender ID="TxtFechaPV_CalendarExtender" runat="server" CssClass="Calendario" Enabled="True" Format="ddMMyy" PopupButtonID="ImgFechaPV" TargetControlID="TxtFechaPV">
                                                                                                            </asp:CalendarExtender>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:TextBox ID="TxtMontoPV" runat="server" CssClass="TxtDesc" Width="103px"></asp:TextBox>
                                                                                                            <asp:FilteredTextBoxExtender ID="TxtMontoPV_FilteredTextBoxExtender" runat="server" Enabled="True" TargetControlID="TxtMontoPV" ValidChars="1234567890.">
                                                                                                            </asp:FilteredTextBoxExtender>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:TextBox ID="TxtMedioPV" runat="server" CssClass="TxtDesc" Width="103px"></asp:TextBox>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:TextBox ID="TxtSecPV" runat="server" CssClass="TxtDesc" Width="103px"></asp:TextBox>
                                                                                                            <%-- <asp:FilteredTextBoxExtender ID="TxtSecPV_FilteredTextBoxExtender" runat="server" Enabled="True" TargetControlID="TxtSecPV" ValidChars="1234567890.">
                                                                                                            </asp:FilteredTextBoxExtender>--%>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr class="Titulos">
                                                                                                        <td colspan="4">Seguimiento</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <asp:Label ID="LblFechaPV_mc" runat="server" CssClass="LblDesc" Text="Fecha"></asp:Label>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:Label ID="LblMontoPV_mc" runat="server" CssClass="LblDesc" Text="Monto"></asp:Label>
                                                                                                        </td>
                                                                                                        <td>&nbsp;</td>
                                                                                                        <td>&nbsp;</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <asp:TextBox ID="TxtFechaPV_mc" runat="server" CssClass="TxtDesc" Enabled="False" Width="103px"></asp:TextBox>
                                                                                                            <asp:CalendarExtender ID="TxtFechaPV_mc_CalendarExtender" runat="server" CssClass="Calendario" Enabled="True" Format="dd/MM/yyyy" PopupButtonID="ImgFechaPV_mc" TargetControlID="TxtFechaPV_mc">
                                                                                                            </asp:CalendarExtender>
                                                                                                            <asp:Image ID="ImgFechaPV_mc" runat="server" ImageUrl="Imagenes/ImgCalendario.png" />
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:TextBox ID="TxtMontoPV_mc" runat="server" CssClass="TxtDesc" Width="103px"></asp:TextBox>
                                                                                                            <asp:FilteredTextBoxExtender ID="TxtMontoPV_mc_FilteredTextBoxExtender" runat="server" Enabled="True" TargetControlID="TxtMontoPV_mc" ValidChars="1234567890.">
                                                                                                            </asp:FilteredTextBoxExtender>
                                                                                                        </td>
                                                                                                        <td>&nbsp;</td>
                                                                                                        <td>&nbsp;</td>
                                                                                                    </tr>
                                                                                                </table>
                                                                                            </asp:Panel>
                                                                                            <asp:Panel ID="PnlIl" runat="server">
                                                                                                <table>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <asp:Label ID="LblMotivoIl" runat="server" CssClass="LblDesc" Text="Motivo" Visible="false"></asp:Label>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <asp:DropDownList ID="DdlMotivoIl" runat="server" AutoPostBack="true" CssClass="TxtDesNS" Visible="false">
                                                                                                                <asp:ListItem Selected="True">Seleccione</asp:ListItem>
                                                                                                                <asp:ListItem>cliente extraviado</asp:ListItem>
                                                                                                                <asp:ListItem>cliente en prision</asp:ListItem>
                                                                                                            </asp:DropDownList>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </table>
                                                                                            </asp:Panel>
                                                                                            <asp:Panel runat="server" ID="PnlParentesco" Visible="false">
                                                                                                <table>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <asp:Label ID="LblParentesco" runat="server" CssClass="LblDesc" Text="Parentesco"></asp:Label>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:Label ID="LblNombre" runat="server" CssClass="LblDesc" Text="Nombre"></asp:Label></td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <asp:DropDownList ID="DdlParentesco" runat="server" AutoPostBack="true" CssClass="TxtDesNS">
                                                                                                            </asp:DropDownList>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:TextBox ID="TxtNombre" runat="server" MaxLength="50" Width="225px"></asp:TextBox></td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <asp:Label ID="LblFechaD" runat="server" CssClass="LblDesc" Text="Fecha Defunción"></asp:Label>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:Label ID="LblCiudad" runat="server" CssClass="LblDesc" Text=" Ciudad y Estado"></asp:Label>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <asp:TextBox ID="TxtFechaD" runat="server" CssClass="TxtDesc" Width="80px" Enabled="False"></asp:TextBox>
                                                                                                            <asp:CalendarExtender ID="TxtFechaD_CalendarExtender" runat="server" CssClass="Calendario" Enabled="True" PopupButtonID="ImgFechaD" TargetControlID="TxtFechaD" Format="ddMMyy">
                                                                                                            </asp:CalendarExtender>
                                                                                                            <asp:Image ID="ImgFechaD" runat="server" ImageUrl="Imagenes/ImgCalendario.png" />

                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:TextBox ID="TxtCiudad" runat="server" MaxLength="50" Width="225px"></asp:TextBox>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <asp:Label ID="LblActaD" runat="server" CssClass="LblDesc" Text="Acta Defunción"></asp:Label>
                                                                                                        </td>
                                                                                                        <td>&nbsp;</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <asp:TextBox ID="TxtActaD" runat="server" MaxLength="50" Width="127px"></asp:TextBox>
                                                                                                        </td>
                                                                                                        <td>&nbsp;</td>
                                                                                                    </tr>
                                                                                                </table>
                                                                                            </asp:Panel>
                                                                                            <asp:Panel runat="server" ID="PnlACLQ" Visible="false">
                                                                                                <table>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <asp:Label ID="LblFolioDI" runat="server" CssClass="LblDesc" Text="Folio"></asp:Label>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:Label ID="LblNumeroFDI" runat="server" CssClass="LblDesc" Text="Numero de folio"></asp:Label>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:Label ID="LblTipoDI" runat="server" CssClass="LblDesc" Text="Tipo De Aclaración"></asp:Label>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <asp:DropDownList ID="DdlFolioDI" runat="server" AutoPostBack="true" CssClass="TxtDesNS">
                                                                                                                <asp:ListItem Selected="True">Seleccione</asp:ListItem>

                                                                                                                <asp:ListItem>Con Folio</asp:ListItem>
                                                                                                                <asp:ListItem>Sin Folio</asp:ListItem>
                                                                                                            </asp:DropDownList>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:TextBox ID="TxtNumeroFDI" runat="server" CssClass="TxtDesc" Width="103px"></asp:TextBox>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:DropDownList ID="DDlTipoDI" runat="server" AutoPostBack="true" CssClass="TxtDesNS">
                                                                                                                <asp:ListItem Selected="True">Seleccione</asp:ListItem>
                                                                                                                <asp:ListItem>Clonación</asp:ListItem>
                                                                                                                <asp:ListItem>Homonimia</asp:ListItem>
                                                                                                                <asp:ListItem>No reconoce saldo, cuenta o cargos</asp:ListItem>
                                                                                                                <asp:ListItem>Robo de identidad</asp:ListItem>
                                                                                                                <asp:ListItem>Comisión anual y libra plus (Montos exactos indicados en Instructivo para Tratamiento de Aclaraciones en Agencias Externas BERE)</asp:ListItem>
                                                                                                            </asp:DropDownList>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <asp:Label ID="LblFechaDI" runat="server" CssClass="LblDesc" Text="Fecha"></asp:Label>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:Label ID="LblMontoDI" runat="server" CssClass="LblDesc" Text="Monto"></asp:Label>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:Label ID="LblPlazoDI" runat="server" CssClass="LblDesc" Text="Plazo"></asp:Label>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <asp:TextBox ID="TxtFechaDI" runat="server" CssClass="TxtDesc" Width="103px" Enabled="False"></asp:TextBox>
                                                                                                            <asp:CalendarExtender ID="FechaDI_CalendarExtender" runat="server" CssClass="Calendario" Enabled="True" Format="ddMMyy" PopupButtonID="ImgFechaDI" TargetControlID="TxtFechaDI">
                                                                                                            </asp:CalendarExtender>
                                                                                                            <asp:Image ID="ImgFechaDI" runat="server" ImageUrl="Imagenes/ImgCalendario.png" />
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:TextBox ID="TxtMontoDI" runat="server" CssClass="TxtDesc" Width="103px"></asp:TextBox>
                                                                                                            <asp:FilteredTextBoxExtender ID="TxtMontoDI_FilteredTextBoxExtender" runat="server" Enabled="True" TargetControlID="TxtMontoDI" ValidChars="1234567890.">
                                                                                                            </asp:FilteredTextBoxExtender>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:TextBox ID="TxtPlazoDI" runat="server" CssClass="TxtDesc" Width="103px"></asp:TextBox>

                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <asp:Label ID="LblMedioDI" runat="server" CssClass="LblDesc" Text="Medio De Pago"></asp:Label>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:Label ID="LblAgenciaDI" runat="server" CssClass="LblDesc" Text="Agencia"></asp:Label>
                                                                                                        </td>
                                                                                                        <td></td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <asp:TextBox ID="TxtMedioDI" runat="server" CssClass="TxtDesc" Width="103px"></asp:TextBox>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:TextBox ID="TxtAgenciaDI" runat="server" CssClass="TxtDesc" Width="103px"></asp:TextBox>
                                                                                                        </td>
                                                                                                        <td>&nbsp;</td>
                                                                                                    </tr>
                                                                                                </table>
                                                                                            </asp:Panel>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>&nbsp;<asp:Label ID="LblInformacion_Adicional" runat="server" CssClass="LblDesc" Text="Información Adicional" Visible="false"></asp:Label>

                                                                                        </td>
                                                                                        <td>
                                                                                            <asp:DropDownList ID="DdlInformacion_Adicional" runat="server" AutoPostBack="true" CssClass="DdlDesc" Visible="false">
                                                                                            </asp:DropDownList>
                                                                                        </td>
                                                                                        <td>
                                                                                            <asp:ImageButton ID="ImgVerIA" runat="server" ImageUrl="~/Imagenes/ImgVer.png" Visible="false" />
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <asp:Label ID="LblRS" runat="server" CssClass="LblDesc" Text="RS" Visible="False"></asp:Label>
                                                                                        </td>
                                                                                        <td>
                                                                                            <asp:DropDownList ID="DdlRS" runat="server" AutoPostBack="True" CssClass="TxtDesNS" Visible="False">
                                                                                            </asp:DropDownList>
                                                                                        </td>
                                                                                        <td>
                                                                                            <asp:ImageButton ID="ImgVerRS" runat="server" ImageUrl="~/Imagenes/ImgVer.png" Visible="false" />
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <asp:Label ID="LblHist_Ge_Telefono" runat="server" CssClass="LblDesc" Text="Teléfono De Contacto" Visible="false"></asp:Label>
                                                                                        </td>
                                                                                        <td>
                                                                                            <asp:TextBox ID="TxtHist_Ge_Telefono" runat="server" MaxLength="10" ReadOnly="true" Visible="false"></asp:TextBox>
                                                                                            <asp:FilteredTextBoxExtender ID="FtbTxtHist_Ge_Telefono" runat="server" Enabled="True" TargetControlID="TxtHist_Ge_Telefono" ValidChars="1234567890">
                                                                                            </asp:FilteredTextBoxExtender>
                                                                                        </td>
                                                                                        <td>&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>&nbsp;</td>
                                                                                        <td>
                                                                                            <asp:Label ID="LblCampo" runat="server" CssClass="LblDesc" Visible="FALSE"></asp:Label>
                                                                                            <asp:Label ID="LblTipoCampo" runat="server" CssClass="LblDesc"></asp:Label>
                                                                                        </td>
                                                                                        <td>&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <asp:Label ID="LblPR_CD_DOM_VALIDO" runat="server" CssClass="LblDesc" Text="Domicilio Valido" Visible="False"></asp:Label>
                                                                                        </td>
                                                                                        <td>
                                                                                            <asp:DropDownList ID="DdlPR_CD_DOM_VALIDO" runat="server" CssClass="TxtDesNS" Visible="False">
                                                                                                <asp:ListItem Selected="True">Seleccione</asp:ListItem>
                                                                                                <asp:ListItem>Si</asp:ListItem>
                                                                                                <asp:ListItem>No</asp:ListItem>
                                                                                            </asp:DropDownList>
                                                                                        </td>
                                                                                        <td>&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>&nbsp;</td>
                                                                                        <td>&nbsp;</td>
                                                                                        <td>
                                                                                            <table>
                                                                                                <tr>
                                                                                                    <td>
                                                                                                        <asp:Button ID="BtnGuardar" runat="server" CssClass="Botones" OnClientClick="clickOnce(this, 'Procesando...')" Text="Guardar" UseSubmitBehavior="false" ValidationGroup="Procesar" Visible="false" />
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                            <td class="Arriba">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <asp:TextBox ID="TxtHist_Ge_Comentario" runat="server" CssClass="TxtDesc" Height="103px" MaxLength="500" TextMode="MultiLine" Width="299px"></asp:TextBox>
                                                                                            <asp:FilteredTextBoxExtender ID="Hist_Vi_ComentarioFTB" runat="server" Enabled="True" TargetControlID="TxtHist_Ge_Comentario" ValidChars="@_-.aqzxswcdevfrbgtnhymjukiloñpZAQXSWCDEVFRBGTNHYMJUKILOPÑ1230456789 ">
                                                                                            </asp:FilteredTextBoxExtender>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <asp:TextBox ID="TxtEscenario" runat="server" CssClass="TxtDesc" Height="103px" MaxLength="500" TextMode="MultiLine" Width="299px" Visible="false"></asp:TextBox>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>

                                                                                            <asp:Panel ID="PnlColores" runat="server">
                                                                                            </asp:Panel>

                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                                <td>
                                                                    <table>
                                                                        <tr class="Izquierda">
                                                                            <td>
                                                                                <div class="ScroolCalTelefonica" id="ScrollCool">
                                                                                    <div class="force-overflow">
                                                                                        <asp:UpdatePanel ID="UpnlTelefonos" runat="server">
                                                                                            <ContentTemplate>
                                                                                                <asp:GridView ID="GvCalTelefonos" runat="server" CssClass="mGrid" Font-Names="Tahoma" Font-Size="Small" Style="font-size: x-small; text-align: right">
                                                                                                    <AlternatingRowStyle CssClass="alt" />
                                                                                                    <Columns>
                                                                                                        <asp:TemplateField>
                                                                                                            <ItemTemplate>
                                                                                                                <table style="border-style: hidden; text-align: left">
                                                                                                                    <tr style="border-style: hidden;">
                                                                                                                        <td style="vertical-align: top; border-style: hidden">
                                                                                                                            <asp:ImageButton ID="ImgValido" Visible="false" runat="server" ImageUrl="~/Imagenes/ImgValido.png" OnClick="ImgValido_Click" />
                                                                                                                        </td>
                                                                                                                        <td style="vertical-align: top; border-style: hidden">&nbsp;</td>
                                                                                                                        <td style="vertical-align: top; border-style: hidden">
                                                                                                                            <asp:ImageButton ID="ImgNoValido" Visible="false" runat="server" ImageUrl="~/Imagenes/ImgNoValido.png" OnClick="ImgValido_Click" />
                                                                                                                        </td>
                                                                                                                        <td style="vertical-align: top; border-style: hidden">&nbsp;</td>
                                                                                                                        <td style="vertical-align: top; border-style: hidden">
                                                                                                                            <asp:Label ID="LblTelefono" runat="server" CssClass="LblDesc" Text='<%# Bind("Telefono") %>'></asp:Label>
                                                                                                                        </td>
                                                                                                                        <td style="vertical-align: top; border-style: hidden">&nbsp;</td>
                                                                                                                        <td style="vertical-align: top; border-style: hidden">
                                                                                                                            <asp:Image ID="ImgLike" runat="server" ImageUrl="~/Imagenes/ImgLike.png" />
                                                                                                                        </td>
                                                                                                                        <td style="vertical-align: top; border-style: hidden">&nbsp;</td>
                                                                                                                        <td style="vertical-align: top; border-style: hidden">
                                                                                                                            <asp:Image ID="ImgNoLike" runat="server" ImageUrl="~/Imagenes/ImgNoLike.png" Visible="false" />
                                                                                                                        </td>
                                                                                                                        <td style="vertical-align: top; border-style: hidden">&nbsp;</td>
                                                                                                                        <td style="vertical-align: top; border-style: hidden">
                                                                                                                            <asp:DropDownList ID="DdlTEL_VALIDO" runat="server" CssClass="TxtDesNS" Visible="False">
                                                                                                                                <asp:ListItem Selected="True">Seleccione</asp:ListItem>
                                                                                                                                <asp:ListItem>Si</asp:ListItem>
                                                                                                                                <asp:ListItem>No</asp:ListItem>
                                                                                                                            </asp:DropDownList>
                                                                                                                        </td>
                                                                                                                        <td style="vertical-align: top; border-style: hidden">
                                                                                                                            <asp:ImageButton ID="ImgBtnCall" Visible="true" runat="server" ImageUrl="~/Imagenes/ImgMarcar.png" OnClick="ImgBtnCall_Click" />
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </ItemTemplate>
                                                                                                        </asp:TemplateField>
                                                                                                    </Columns>
                                                                                                    <PagerStyle CssClass="pgr" />
                                                                                                </asp:GridView>
                                                                                            </ContentTemplate>
                                                                                        </asp:UpdatePanel>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <div id="DivIntegracion">
                                                                            <caption>
                                                                                <%--<input id="btSet" type="button" value="Set Session" onclick="SetSession()" />--%>
                                                                                <script type="text/javascript">

                                                                                        function SetSession(valor) {
                                                                                            var name = valor//document.getElementById("<%=TXBIDCall.ClientID%>").value;
                                                                                            var request;
                                                                                            if (window.XMLHttpRequest) {
                                                                                                //New browsers.
                                                                                                request = new XMLHttpRequest();
                                                                                            }
                                                                                            else if (window.ActiveXObject) {
                                                                                                //Old IE Browsers.
                                                                                                request = new ActiveXObject("Microsoft.XMLHTTP");
                                                                                            }
                                                                                            if (request != null) {
                                                                                                var url = "MasterPage.aspx/SetSession";
                                                                                                request.open("POST", url, false);
                                                                                                var params = "{llamada: '" + name + "'}";
                                                                                                request.setRequestHeader("Content-Type", "application/json");
                                                                                                request.onreadystatechange = function () {
                                                                                                    if (request.readyState == 4 && request.status == 200) {
                                                                                                        //  alert(JSON.parse(request.responseText).d);
                                                                                                        var respu = JSON.parse(request.responseText).d;
                                                                                                    }
                                                                                                };
                                                                                                request.send(params);
                                                                                            }
                                                                                        }
                                                                                </script>
                                                                                <script type="text/javascript">

                                                                                        function Settypecall(valor) {
                                                                                            var name = valor//document.getElementById("<%=TXBIDCall.ClientID%>").value;
                                                                                            var request;
                                                                                            if (window.XMLHttpRequest) {
                                                                                                //New browsers.
                                                                                                request = new XMLHttpRequest();
                                                                                            }
                                                                                            else if (window.ActiveXObject) {
                                                                                                //Old IE Browsers.
                                                                                                request = new ActiveXObject("Microsoft.XMLHTTP");
                                                                                            }
                                                                                            if (request != null) {
                                                                                                var url = "MasterPage.aspx/Settypecall";
                                                                                                request.open("POST", url, false);
                                                                                                var params = "{typecall: '" + name + "'}";
                                                                                                request.setRequestHeader("Content-Type", "application/json");
                                                                                                request.onreadystatechange = function () {
                                                                                                    if (request.readyState == 4 && request.status == 200) {
                                                                                                        //  alert(JSON.parse(request.responseText).d);
                                                                                                        var respu = JSON.parse(request.responseText).d;
                                                                                                    }
                                                                                                };
                                                                                                request.send(params);
                                                                                            }
                                                                                        }
                                                                                </script>
                                                                                <script type="text/javascript">

                                                                                        function Setphone(valor) {
                                                                                            var name = valor//document.getElementById("<%=TXBIDCall.ClientID%>").value;
                                                                                            var request;
                                                                                            if (window.XMLHttpRequest) {
                                                                                                //New browsers.
                                                                                                request = new XMLHttpRequest();
                                                                                            }
                                                                                            else if (window.ActiveXObject) {
                                                                                                //Old IE Browsers.
                                                                                                request = new ActiveXObject("Microsoft.XMLHTTP");
                                                                                            }
                                                                                            if (request != null) {
                                                                                                var url = "MasterPage.aspx/Setphone";
                                                                                                request.open("POST", url, false);
                                                                                                var params = "{phone: '" + name + "'}";
                                                                                                request.setRequestHeader("Content-Type", "application/json");
                                                                                                request.onreadystatechange = function () {
                                                                                                    if (request.readyState == 4 && request.status == 200) {
                                                                                                        //  alert(JSON.parse(request.responseText).d);
                                                                                                        var respu = JSON.parse(request.responseText).d;
                                                                                                    }
                                                                                                };
                                                                                                request.send(params);
                                                                                            }
                                                                                        }
                                                                                </script>

                                                                            </caption>

                                                                            <div class="float-left" id="dividllamada" style="display: none;">
                                                                                <div>
                                                                                    <asp:Label runat="server" Text="ID de Llamada" ForeColor="Black"></asp:Label>
                                                                                    <asp:TextBox ID="TXBIDCall" runat="server" Enabled="false"></asp:TextBox>
                                                                                </div>
                                                                                <div>
                                                                                    <asp:Label runat="server" ForeColor="Black" Text="Tipo Llamada"></asp:Label>
                                                                                    <asp:TextBox ID="TXTTypeCall" runat="server" Enabled="false"></asp:TextBox>
                                                                                </div>
                                                                            </div>
                                                                            <asp:Panel runat="server" ID="PnlManuaCall" Visible="false">
                                                                                <div id="divmanualcall" class="card" style="display: block">
                                                                                    <div class="card-body" id="marcador">
                                                                                        <div class="row">
                                                                                            <div class="input-group col-12 mt-1">
                                                                                                <asp:ImageButton runat="server" OnClientClick="DTMFDigit('1')" ImageUrl="Imagenes/1.png" Width="50px" Height="50px" />
                                                                                                <asp:ImageButton runat="server" class="btn btn-primary" OnClientClick="DTMFDigit('2')" ImageUrl="~/Imagenes/2.png" Width="50px" Height="50px" />
                                                                                                <asp:ImageButton runat="server" class="btn btn-primary" OnClientClick="DTMFDigit('3')" ImageUrl="~/Imagenes/3.png" Width="50px" Height="50px" />
                                                                                            </div>
                                                                                            <div class="input-group col-12 mt-1">
                                                                                                <asp:ImageButton runat="server" class="btn btn-primary" OnClientClick="DTMFDigit('4')" ImageUrl="~/Imagenes/4.png" Width="50px" Height="50px" />
                                                                                                <asp:ImageButton runat="server" class="btn btn-primary" OnClientClick="DTMFDigit('5')" ImageUrl="~/Imagenes/5.png" Width="50px" Height="50px" />
                                                                                                <asp:ImageButton runat="server" class="btn btn-primary" OnClientClick="DTMFDigit('6')" ImageUrl="~/Imagenes/6.png" Width="50px" Height="50px" />
                                                                                            </div>
                                                                                            <div class="input-group col-12 mt-1">
                                                                                                <asp:ImageButton runat="server" class="btn btn-primary" OnClientClick="DTMFDigit('7')" ImageUrl="~/Imagenes/7.png" Width="50px" Height="50px" />
                                                                                                <asp:ImageButton runat="server" class="btn btn-primary" OnClientClick="DTMFDigit('8')" ImageUrl="~/Imagenes/8.png" Width="50px" Height="50px" />
                                                                                                <asp:ImageButton runat="server" class="btn btn-primary" OnClientClick="DTMFDigit('9')" ImageUrl="~/Imagenes/9.png" Width="50px" Height="50px" />
                                                                                            </div>
                                                                                            <div class="input-group col-12 mt-1">
                                                                                                <asp:ImageButton runat="server" class="btn btn-primary" OnClientClick="DTMFDigit('*')" ImageUrl="~/Imagenes/asterisco.png" Width="50px" Height="50px" />
                                                                                                <asp:ImageButton runat="server" class="btn btn-primary" OnClientClick="DTMFDigit('0')" ImageUrl="~/Imagenes/0.png" Width="50px" Height="50px" />
                                                                                                <asp:ImageButton runat="server" class="btn btn-primary" OnClientClick="DTMFDigit('#')" ImageUrl="~/Imagenes/signo.png" Width="50px" Height="50px" />
                                                                                            </div>
                                                                                            <asp:Button runat="server" OnClientClick="DTMFClear()" Text="Limpiar" />

                                                                                            <%--  <div class="row ml-3">
                                                                                                <button class="col-4  btn btn-primary" onclick="getIVRList()">getIVRList</button>
                                                                                                <select class="col-4 ml-5 form-control" name="getIVRList" id="IVRList"></select>
                                                                                            </div>--%>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </asp:Panel>
                                                                            <asp:Panel runat="server" ID="Pnlcalltab" Visible="false">


                                                                                <div id="calltab" style="display: none;">
                                                                                    <label>Seleccione una campaña</label>


                                                                                    <table>


                                                                                        <tr>
                                                                                            <td>
                                                                                                <%--<button class="col-4  btn btn-success" onclick="GetCampaignsRelated()">Campañas</button>--%>
                                                                                                <asp:Label runat="server" Text="Campaña" ForeColor="Black"></asp:Label>

                                                                                            </td>
                                                                                            <td>
                                                                                                <select id="Campaigns" class="col-4 ml-5 form-control" name="unavailables" onchange="setcamp" runat="server"></select>
                                                                                                <input class="form-control" type="hidden" id="campanaselected" />
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <asp:Label runat="server" Text="Telefono:" ForeColor="Black" Visible="true"></asp:Label>
                                                                                            </td>

                                                                                            <td>
                                                                                                <input type="text" class="form-control" id="phoneNumber1" disabled />
                                                                                            </td>

                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <asp:Label runat="server" Text="ClientName:" ForeColor="Black" Visible="false"></asp:Label>
                                                                                            </td>
                                                                                            <td>
                                                                                                <input type="hidden" class="form-control" id="clientName" />
                                                                                            </td>

                                                                                        </tr>

                                                                                        <tr>
                                                                                            <td>
                                                                                                <asp:Label runat="server" Text="Call Key:" ForeColor="Black" Visible="false"></asp:Label>
                                                                                            </td>
                                                                                            <td>
                                                                                                <input class="form-control" type="hidden" id="callKey" />
                                                                                            </td>
                                                                                        </tr>

                                                                                        <tr>
                                                                                            <td>
                                                                                                <%--                                                                                        <asp:UpdatePanel runat ="server" ID="UpnlCall" >
                                                                                            <ContentTemplate>--%>
                                                                                                <asp:Button runat="server" ID="BtnCall" OnClientClick="makeManualCall(); return false;" Text="Call" />
                                                                                                <%--    </ContentTemplate>
                                                                                        </asp:UpdatePanel>--%>

                                                                                                <%--<button class="btn btn-secondary" onclick="makeManualCall()">Call</button>--%>
                                                                                            </td>
                                                                                            <%--   <td>
                                                                                                <asp:Button runat="server" OnClientClick="hangUp()" Text="Hang Up" />
                                                                                                <button class="btn btn-danger" onclick="hangUp()">Hang Up</button>
                                                                                            </td>--%>
                                                                                        </tr>
                                                                                        <%--    <tr>
                                                                                            <td>
                                                                                                <asp:Button runat="server" OnClientClick="HangUpAndLeaveMessage()" Text="Hang Up & Leave Message" />
                                                                                                <button class="btn btn-danger" onclick="HangUpAndLeaveMessage()">Hang Up & Leave Message</button>
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:Button runat="server" OnClientClick="HangUpManualDial()" Text="Hang Up Manual Dial" />
                                                                                                <button class="btn btn-info" onclick="HangUpManualDial()">Hang Up Manual Dial</button>
                                                                                            </td>
                                                                                        </tr>--%>
                                                                                    </table>
                                                                                </div>

                                                                            </asp:Panel>
                                                                        </div>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </asp:Panel>
                                                </ContentTemplate>
                                            </asp:UpdatePanel>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <table>
                                    <tr>
                                        <td colspan="10">
                                            <asp:Label ID="lblPr_Ca_Msj" runat="server" CssClass="LblDescNS" BackColor="Yellow" ForeColor="Black" Visible="False" Width="100%"></asp:Label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <asp:Label ID="LblPr_Mc_Credito" runat="server" CssClass="LblDescNS" Text="Crédito: " Visible="False"></asp:Label>
                                        </td>
                                        <td>
                                            <asp:Label ID="lblPr_Mc_CreditoV" runat="server" CssClass="LblDescNS" Visible="False"></asp:Label>
                                            &nbsp;&nbsp; </td>
                                        <td>
                                            <asp:Label ID="LblPr_Cd_Nombre" runat="server" CssClass="LblDescNS" Text="Nombre: " Visible="False"></asp:Label>
                                            <asp:Label ID="LblPr_Cd_NombreV" runat="server" CssClass="LblDescNS" Visible="False"></asp:Label>
                                            &nbsp;&nbsp;&nbsp;&nbsp; </td>
                                        <td>
                                            <asp:Label ID="LblPr_Mc_Expediente" runat="server" CssClass="LblDescNS" Text="Folio:" Visible="False"></asp:Label>
                                        </td>
                                        <td>
                                            <asp:Label ID="LblPr_Mc_ExpedienteV" runat="server" CssClass="LblDesc" Visible="False"></asp:Label>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>
                                        <td>
                                            <asp:Label ID="LblPr_Ca_Tipotarjeta" runat="server" CssClass="LblDescNS" Text="Tipo De Tarjeta:" Visible="False"></asp:Label>
                                        </td>
                                        <td>
                                            <asp:Label ID="LblPr_Ca_Tipotarjetav" runat="server" CssClass="LblDescNS" Visible="False"></asp:Label>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>
                                        <td>
                                            <asp:Label ID="LblPr_Mc_Producto" runat="server" CssClass="LblDescNS" Text="Portafolio:" Visible="False"></asp:Label>
                                        </td>
                                        <td>
                                            <asp:Label ID="LblPr_Mc_ProductoV" runat="server" CssClass="LblDescNS" Visible="False"></asp:Label>
                                        </td>
                                        <td>&nbsp;&nbsp;
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <asp:TabContainer ID="TCM" runat="server" ActiveTabIndex="0" Width="100%" Visible="false">
                                    <asp:TabPanel runat="server" HeaderText="Información General" ID="TabPanel1">
                                        <HeaderTemplate>
                                            Información General
                                       
                                        </HeaderTemplate>
                                        <ContentTemplate>
                                            <table class="Table">
                                                <tr>
                                                    <td>
                                                        <MPCU1:InformacionGeneral ID="InformacionGeneral" runat="server" />
                                                    </td>
                                                </tr>
                                                <tr class="Arriba">
                                                    <td class="Arriba">
                                                        <table class="Table">
                                                            <tr class="Titulos">
                                                                <td>Información Sistema</td>
                                                                <td>Scoring Crédito</td>
                                                            </tr>
                                                            <tr class="Arriba">
                                                                <td>

                                                                    <table class="Izquierda">
                                                                        <tr>
                                                                            <td>
                                                                                <asp:Label ID="LblPr_Mc_Usuario" runat="server" CssClass="LblDesc" Text="Gestor Trabajó"></asp:Label>
                                                                            </td>
                                                                            <td>
                                                                                <asp:TextBox ID="TxtPr_Mc_Usuario" runat="server" CssClass="TxtDesNS" ReadOnly="True" Width="200px"></asp:TextBox>
                                                                            </td>
                                                                            <td>
                                                                                <asp:Label ID="LblPr_Mc_Uasignado" runat="server" CssClass="LblDesc" Text="Gestor Asignado"></asp:Label>
                                                                            </td>
                                                                            <td>
                                                                                <asp:TextBox ID="TxtPr_Mc_Uasignado" runat="server" CssClass="TxtDesNS" ReadOnly="True"></asp:TextBox>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <asp:Label ID="LblPr_Mc_Resultado" runat="server" CssClass="LblDesc" Text="Última Gestión"></asp:Label>
                                                                            </td>
                                                                            <td>
                                                                                <asp:TextBox ID="TxtPr_Mc_Resultado" runat="server" CssClass="TxtDesNS" ReadOnly="True" Width="200px"></asp:TextBox>
                                                                            </td>
                                                                            <td>
                                                                                <asp:Label ID="LblPr_Mc_Dtegestion" runat="server" CssClass="LblDesc" Text="Fecha Última Gestión"></asp:Label>
                                                                            </td>
                                                                            <td>
                                                                                <asp:TextBox ID="TxtPr_Mc_Dtegestion" runat="server" CssClass="TxtDesNS" ReadOnly="True"></asp:TextBox>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <asp:Label ID="LblPr_Mc_Resultadorelev" runat="server" CssClass="LblDesc" Text="Mejor Gestión"></asp:Label>
                                                                            </td>
                                                                            <td>
                                                                                <asp:TextBox ID="TxtPr_Mc_Resultadorelev" runat="server" CssClass="TxtDesNS" ReadOnly="True" Width="200px"></asp:TextBox>
                                                                            </td>
                                                                            <td>
                                                                                <asp:Label ID="LblPr_Mc_Dteresultadorelev" runat="server" CssClass="LblDesc" Text="Fecha Última Gestión"></asp:Label>
                                                                            </td>
                                                                            <td>
                                                                                <asp:TextBox ID="TxtPr_Mc_Dteresultadorelev" runat="server" CssClass="TxtDesNS" ReadOnly="True"></asp:TextBox>
                                                                            </td>
                                                                        </tr>
                                                                    </table>

                                                                </td>
                                                                <td>
                                                                    <table>
                                                                        <tr>
                                                                            <td>
                                                                                <asp:Label ID="LblVi_Semaforo_Gestion" runat="server" CssClass="LblDesc" Text="Semaforo Gestión"></asp:Label>
                                                                            </td>
                                                                            <td>
                                                                                <asp:Image ID="ImgSemaforo" runat="server" ImageUrl="~/Imagenes/ImgSemaforoRojo.png" />
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="3">
                                                                                <asp:Label ID="LblVi_Dias_Semaforo_Gestion" runat="server" CssClass="LblDesc"></asp:Label>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <asp:Label ID="LblPr_Mc_Creditocontactado" runat="server" CssClass="LblDesc" Text="Deudor Contactado"></asp:Label>
                                                                            </td>
                                                                            <td colspan="2">
                                                                                <asp:Image ID="ImgNoContacto" runat="server" ImageUrl="~/Imagenes/ImgNoContacto.png" />
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <asp:Label ID="LblPr_Mc_Dtecreditocontactado" runat="server" CssClass="LblDesc" Text="Fecha De Contacto"></asp:Label>
                                                                            </td>
                                                                            <td colspan="2">
                                                                                <asp:TextBox ID="TxtPr_Mc_Dtecreditocontactado" runat="server" CssClass="TxtDesNS" ReadOnly="True"></asp:TextBox>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <asp:Label ID="LblPr_Mc_Primeragestion" runat="server" CssClass="LblDesc" Text="Primera Gestión"></asp:Label>
                                                                            </td>
                                                                            <td colspan="2">
                                                                                <asp:TextBox ID="TxtPr_Mc_Primeragestion" runat="server" CssClass="TxtDesNS" ReadOnly="True"></asp:TextBox>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <asp:Label ID="LblPr_Mc_Dteprimeragestion" runat="server" CssClass="LblDesc">Fecha Primera Gestión</asp:Label>
                                                                            </td>
                                                                            <td colspan="2">
                                                                                <asp:TextBox ID="TxtPr_Mc_Dteprimeragestion" runat="server" CssClass="TxtDesNS" ReadOnly="True"></asp:TextBox>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>&nbsp;</td>
                                                                            <td>&nbsp;</td>
                                                                            <td>&nbsp;</td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </ContentTemplate>
                                    </asp:TabPanel>
                                    <asp:TabPanel runat="server" HeaderText="Información Financiera" ID="InfoGral">
                                        <HeaderTemplate>
                                            Información Financiera
                                        </HeaderTemplate>
                                        <ContentTemplate>
                                            <MPCU2:InformacionFinanciera ID="InformacionFinanciera" runat="server" />
                                        </ContentTemplate>
                                    </asp:TabPanel>
                                    <asp:TabPanel runat="server" HeaderText="Información Adicional" ID="InfoAdicinal">
                                        <HeaderTemplate>
                                            Información Adicional
                                        </HeaderTemplate>
                                        <ContentTemplate>
                                            <MPCU7:Adicional ID="Adicional" runat="server" />
                                        </ContentTemplate>
                                    </asp:TabPanel>
                                    <asp:TabPanel runat="server" HeaderText="Histórico Actividades" ID="HisAct" OnClick="actGestiones">
                                        <HeaderTemplate>
                                            Histórico Actividades
                                        </HeaderTemplate>
                                        <ContentTemplate>
                                            <table class="Table">
                                                <tr class="Titulos">
                                                    <td>Histórico De Actividades</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <asp:Label ID="LblSort" runat="server" CssClass="LblDesc" Text="Ordenar Por:"></asp:Label>
                                                                </td>
                                                                <td>
                                                                    <asp:DropDownList ID="DdlSort" runat="server" CssClass="DdlDesc">
                                                                        <asp:ListItem Selected="True" Value="Hist_Ge_Dteactividad">Fecha</asp:ListItem>
                                                                        <asp:ListItem Value="Hist_Ge_Ponderacion">Ponderación</asp:ListItem>
                                                                    </asp:DropDownList>
                                                                </td>
                                                                <td>
                                                                    <asp:Label ID="LblSortTipo" runat="server" CssClass="LblDesc" Text="Tipo:"></asp:Label>
                                                                </td>
                                                                <td>
                                                                    <asp:RadioButtonList ID="RblSortTipo" runat="server" AutoPostBack="True" CssClass="RblDesc" RepeatDirection="Horizontal">
                                                                        <asp:ListItem Value="Asc">Ascendente</asp:ListItem>
                                                                        <asp:ListItem Value="Desc">Descendente</asp:ListItem>
                                                                    </asp:RadioButtonList>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr align="center">
                                                    <td>
                                                        <div class="ScroolHist_ActCap">
                                                            <div class="force-overflow">
                                                                <asp:GridView ID="GvHistAct" runat="server" CssClass="mGrid" Font-Names="Tahoma" Font-Size="Small" AllowPaging="True" PageSize="40" OnPageIndexChanging="GvHist_Act_PageIndexChanging">
                                                                    <AlternatingRowStyle CssClass="alt" />
                                                                    <PagerStyle CssClass="pgr" />
                                                                </asp:GridView>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <MPCU3:Historico_De_Actividades ID="HIstoricos_De_Actividades" runat="server" />
                                                    </td>
                                                </tr>
                                            </table>

                                        </ContentTemplate>
                                    </asp:TabPanel>
                                    <asp:TabPanel runat="server" HeaderText="Histórico Pagos" ID="TCHist_Pagos">
                                        <HeaderTemplate>
                                            Histórico Pagos
                                       
                                        </HeaderTemplate>
                                        <ContentTemplate>
                                            <MPCU5:Hist_Pagos ID="Hist_Pagos" runat="server"></MPCU5:Hist_Pagos>
                                        </ContentTemplate>
                                    </asp:TabPanel>
                                    <asp:TabPanel runat="server" HeaderText="Histórico Visitas" ID="TC_Hist_Visitas">
                                        <HeaderTemplate>
                                            Histórico Visitas
                                       
                                        </HeaderTemplate>
                                        <ContentTemplate>
                                            <table class="Table">
                                                <tr class="Titulos">
                                                    <td>Histórico De Visitas</td>
                                                </tr>
                                                <tr class="Izquierda">
                                                    <td>
                                                        <asp:ImageButton ID="ImgAddVisita" runat="server" ImageUrl="~/Imagenes/ImgAddVisitas.png" ToolTip="Ir A Módulo Captura De Visitas" Visible="false" />

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="ScroolHistVisitas">
                                                            <div class="force-overflow">

                                                                <asp:GridView ID="GvVisitas" runat="server" CssClass="mGrid" Font-Names="Tahoma" Font-Size="Small">
                                                                    <AlternatingRowStyle CssClass="alt" Width="100%" />
                                                                    <PagerStyle CssClass="pgr" />
                                                                </asp:GridView>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </ContentTemplate>
                                    </asp:TabPanel>
                                    <asp:TabPanel runat="server" HeaderText="Negociaciones" ID="TNegociaciones">

                                        <ContentTemplate>
                                            <MPCU8:GNegociaciones ID="UNegociaciones" runat="server" />
                                        </ContentTemplate>
                                    </asp:TabPanel>
                                    <asp:TabPanel ID="TcRelacionados" runat="server" HeaderText="Créditos Relacionados">
                                        <HeaderTemplate>
                                            Créditos Relacionados
                                       
                                        </HeaderTemplate>
                                        <ContentTemplate>
                                            <table class="Table">
                                                <tr>
                                                    <td>
                                                        <MPCU4:Relacionados ID="Relacionados" runat="server" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                </tr>
                                            </table>
                                        </ContentTemplate>
                                    </asp:TabPanel>
                                    <asp:TabPanel ID="TcHist_Asig" runat="server" HeaderText="Histórico De Asignación">
                                        <HeaderTemplate>
                                            Histórico De Asignación
                                       
                                        </HeaderTemplate>
                                        <ContentTemplate>
                                            <table class="Table">
                                                <tr>
                                                    <td>
                                                        <MPCU6:Hist_Asig ID="Hist_Asig" runat="server" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                </tr>
                                            </table>
                                        </ContentTemplate>
                                    </asp:TabPanel>
                                    <asp:TabPanel runat="server" HeaderText="Negociaciones Especiales" ID="TNegociacionesEspeciales">
                                        <ContentTemplate>
                                            <table class="Table">
                                                <tr>
                                                    <td>
                                                        <MPCU9:GNegociacionesEspeciales ID="UNegociacionesEspeciales" runat="server" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                </tr>
                                            </table>
                                        </ContentTemplate>
                                    </asp:TabPanel>
                                    <asp:TabPanel ID="TcDocumentos" runat="server" HeaderText="Documentos">
                                        <HeaderTemplate>
                                            Histórico De Documentos
                                       
                                        </HeaderTemplate>
                                        <ContentTemplate>
                                            <table class="Table">
                                                <tr>
                                                    <td>
                                                        <MPCU10:Documentos ID="Documentos" runat="server" />
                                                    </td>
                                                </tr>
                                            </table>
                                        </ContentTemplate>
                                    </asp:TabPanel>
                                </asp:TabContainer>
                            </td>
                        </tr>
                    </table>
                </div>
                <asp:Button ID="BtnModalMsj" runat="server" Style="visibility: hidden" />
                <asp:Panel ID="PnlModalMsj" runat="server" CssClass="ModalMsj" Style="display: none">
                    <div class="heading">
                        Aviso
                   
                    </div>
                    <div class="CuerpoMsj">
                        <table class="Table">
                            <tr align="center">
                                <td>&nbsp;</td>
                            </tr>
                            <tr align="center">
                                <td>
                                    <asp:Label ID="LblMsj" runat="server" CssClass="LblDesc"></asp:Label>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                            </tr>
                            <tr>
                                <td align="center">
                                    <asp:Button ID="BtnCancelarMsj" runat="server" CssClass="button green close" Text="Aceptar" />
                                </td>
                            </tr>
                        </table>
                    </div>
                </asp:Panel>
                <asp:ModalPopupExtender ID="MpuMensajes" runat="server" PopupControlID="PnlModalMsj" TargetControlID="BtnModalMsj"
                    CancelControlID="BtnCancelarMsj" BackgroundCssClass="modalBackground">
                </asp:ModalPopupExtender>

                <asp:Button ID="BtnModalSession" runat="server" Style="visibility: hidden" />
                <asp:Panel ID="PnlModalSession" runat="server" CssClass="ModalMsj" Style="display: none">
                    <div class="heading">
                        Su Sesión Caducara en     <font id="TimeField" size="3"><span class="count">0</span></font>
                    </div>
                    <div class="CuerpoMsj">
                        <table class="Table">
                            <tr align="center">
                                <td>&nbsp;</td>
                            </tr>
                            <tr align="center">
                                <td>
                                    <asp:Label ID="LblSession" runat="server" CssClass="LblDesc" Text="¿Continuar En El Sistema?"></asp:Label>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                            </tr>
                            <tr>
                                <td align="center">
                                    <asp:Button ID="BtnCancelarSession" runat="server" CssClass="button green close" Text="Aceptar" />
                                </td>
                            </tr>
                        </table>
                    </div>
                </asp:Panel>
                <asp:ModalPopupExtender ID="MpuSession" runat="server" PopupControlID="PnlModalSession" TargetControlID="BtnModalSession"
                    CancelControlID="BtnCancelarSession" BackgroundCssClass="modalBackground">
                </asp:ModalPopupExtender>

                <asp:Button ID="BtnModalAcciones" runat="server" Style="visibility: hidden" />
                <asp:Panel ID="PnlModalAcciones" runat="server" CssClass="ModalAcciones" Style="display: none">
                    <table class="Table">
                        <tr class="heading">
                            <td colspan="2">
                                <asp:Label ID="LblTitulo" runat="server"></asp:Label>
                            </td>
                        </tr>
                        <tr class="CuerpoAcciones">
                            <td colspan="2">
                                <div class="ScroolBusquedas">
                                    <asp:GridView ID="GvBusquedas" runat="server" AlternatingRowStyle-CssClass="alt" CssClass="mGrid" Font-Names="Tahoma" Font-Size="small" PagerStyle-CssClass="pgr" Style="font-size: small" AutoGenerateColumns="true">
                                        <AlternatingRowStyle CssClass="alt" />
                                        <Columns>
                                            <asp:CommandField ButtonType="Image" HeaderText="" SelectImageUrl="~/Imagenes/ImgSeleccion.png" ShowSelectButton="True" />
                                        </Columns>
                                        <PagerStyle CssClass="pgr" />
                                    </asp:GridView>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Button ID="BtnCancelarAcciones" runat="server" CssClass="button red close" Text="Cancelar" />
                            </td>
                            <td>
                                <asp:Button ID="BtnAceptarAcciones" runat="server" CssClass="button green close" Visible="false" />
                            </td>
                        </tr>
                    </table>
                </asp:Panel>
                <asp:ModalPopupExtender ID="MpuAcciones" runat="server" PopupControlID="PnlModalAcciones" TargetControlID="BtnModalAcciones"
                    CancelControlID="BtnCancelarAcciones" BackgroundCssClass="modalBackground">
                </asp:ModalPopupExtender>

                <asp:Button ID="BtnModalAceptar" runat="server" Style="visibility: hidden" />
                <asp:Panel ID="PnlModalAceptar" runat="server" CssClass="ModalAcciones" Style="display: none">
                    <table class="Table">
                        <tr class="heading">
                            <td>
                                <asp:Label ID="LblAceptarA" runat="server"></asp:Label>

                                <asp:Label ID="LblAceptarA0" runat="server"></asp:Label>
                            </td>
                        </tr>
                        <tr class="CuerpoAcciones">
                            <td>
                                <table>
                                    <tr>
                                        <td>

                                            <asp:Label ID="LblUsuarioA" runat="server" Text="Usuario:" CssClass="LblDesc"></asp:Label>

                                        </td>
                                        <td>

                                            <asp:TextBox ID="TxtUsuarioA" runat="server" CssClass="TxtDesc"></asp:TextBox>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>

                                            <asp:Label ID="LblContrasenaA" runat="server" Text="Contraseña:" CssClass="LblDesc"></asp:Label>

                                        </td>
                                        <td>
                                            <asp:TextBox ID="TxtContrasenaA" runat="server" TextMode="Password"></asp:TextBox>


                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2"></td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <asp:Label ID="LblErrorA" runat="server" CssClass="LblError"></asp:Label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <asp:Button ID="BtnAceptarAceptar" runat="server" CssClass="button green close" Text="Aceptar" OnClientClick="clickOnce2(this, 'Procesando...')" UseSubmitBehavior="false" ValidationGroup="Procesar" />
                                        </td>
                                        <td>
                                            <asp:Button ID="BtnCancelarAceptar" runat="server" CssClass="button red close" Text="Cancelar" />
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </asp:Panel>
                <asp:ModalPopupExtender ID="MpuAceptar" runat="server" PopupControlID="PnlModalAceptar" TargetControlID="BtnModalAceptar"
                    CancelControlID="BtnCancelarAceptar" BackgroundCssClass="modalBackground">
                </asp:ModalPopupExtender>

                <asp:Button ID="BtnModalTelefonos" runat="server" Style="visibility: hidden" />
                <asp:Panel ID="PnlModalTelefonos" runat="server" CssClass="ModalAcciones">
                    <asp:Button ID="BtnCancelarTelefonos_Hiden" runat="server" Style="visibility: hidden" />
                    <%-- Style="display: none">--%>
                    <table class="Table">
                        <tr class="heading">
                            <td colspan="2">
                                <asp:Label ID="LblTituloTelefonos" runat="server"></asp:Label>
                            </td>
                        </tr>
                        <tr class="CuerpoAcciones">
                            <td colspan="2" align="center">
                                <asp:Panel runat="server" Visible="false" ID="PnlIA">
                                    <table>
                                        <tr class="Titulos">
                                            <td>Posición
                                            </td>
                                            <td>Telefonos</td>
                                            <td>Tipo</td>
                                            <td>Extensión</td>
                                            <td>Correos
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <asp:Image ID="Img1" runat="server" ImageUrl="~/Imagenes/ImgNumber1.png" />
                                            </td>
                                            <td>
                                                <asp:TextBox ID="Telefono1" runat="server" MaxLength="10"></asp:TextBox>
                                                <asp:FilteredTextBoxExtender ID="Ftbe_Telefono1" runat="server" Enabled="True" TargetControlID="Telefono1" ValidChars="1234567890">
                                                </asp:FilteredTextBoxExtender>
                                            </td>
                                            <td>
                                                <asp:DropDownList ID="DdlHist_Te_Tipo1" runat="server" AutoPostBack="true" CssClass="DdlDesc">
                                                </asp:DropDownList>
                                            </td>
                                            <td>
                                                <asp:TextBox ID="TxtHist_Te_Extension1" runat="server" MaxLength="10" Visible="false" Width="40"></asp:TextBox>
                                            </td>
                                            <td>
                                                <asp:TextBox ID="Correo1" runat="server" MaxLength="150" Width="264px"></asp:TextBox>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <asp:Image ID="Img2" runat="server" ImageUrl="~/Imagenes/ImgNumber2.png" />
                                            </td>
                                            <td>
                                                <asp:TextBox ID="Telefono2" runat="server" MaxLength="10"></asp:TextBox>
                                                <asp:FilteredTextBoxExtender ID="Telefono2_FilteredTextBoxExtender" runat="server" Enabled="True" TargetControlID="Telefono2" ValidChars="1234567890">
                                                </asp:FilteredTextBoxExtender>
                                            </td>
                                            <td>
                                                <asp:DropDownList ID="DdlHist_Te_Tipo2" runat="server" AutoPostBack="true" CssClass="DdlDesc">
                                                </asp:DropDownList>
                                            </td>
                                            <td>
                                                <asp:TextBox ID="TxtHist_Te_Extension2" runat="server" MaxLength="10" Visible="false" Width="40"></asp:TextBox>
                                            </td>
                                            <td>
                                                <asp:TextBox ID="Correo2" runat="server" MaxLength="150" Width="264px"></asp:TextBox>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <asp:Image ID="Img5" runat="server" ImageUrl="~/Imagenes/ImgNumber3.png" />
                                            </td>
                                            <td>
                                                <asp:TextBox ID="Telefono3" runat="server" MaxLength="10"></asp:TextBox>
                                                <asp:FilteredTextBoxExtender ID="Telefono3_FilteredTextBoxExtender" runat="server" Enabled="True" TargetControlID="Telefono3" ValidChars="1234567890">
                                                </asp:FilteredTextBoxExtender>
                                            </td>
                                            <td>
                                                <asp:DropDownList ID="DdlHist_Te_Tipo3" runat="server" AutoPostBack="true" CssClass="DdlDesc">
                                                </asp:DropDownList>
                                            </td>
                                            <td>
                                                <asp:TextBox ID="TxtHist_Te_Extension3" runat="server" MaxLength="10" Visible="false" Width="40"></asp:TextBox>
                                            </td>
                                            <td>
                                                <asp:TextBox ID="Correo3" runat="server" MaxLength="150" Width="264px"></asp:TextBox>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <asp:Image ID="Img6" runat="server" ImageUrl="~/Imagenes/ImgNumber4.png" />
                                            </td>
                                            <td>
                                                <asp:TextBox ID="Telefono4" runat="server" MaxLength="10"></asp:TextBox>
                                                <asp:FilteredTextBoxExtender ID="Telefono4_FilteredTextBoxExtender" runat="server" Enabled="True" TargetControlID="Telefono4" ValidChars="1234567890">
                                                </asp:FilteredTextBoxExtender>
                                            </td>
                                            <td>
                                                <asp:DropDownList ID="DdlHist_Te_Tipo4" runat="server" AutoPostBack="true" CssClass="DdlDesc">
                                                </asp:DropDownList>
                                            </td>
                                            <td>
                                                <asp:TextBox ID="TxtHist_Te_Extension4" runat="server" MaxLength="10" Visible="false" Width="40"></asp:TextBox>
                                            </td>
                                            <td>
                                                <asp:TextBox ID="Correo4" runat="server" MaxLength="150" Width="264px"></asp:TextBox>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <asp:Image ID="Img7" runat="server" ImageUrl="~/Imagenes/ImgNumber5.png" />
                                            </td>
                                            <td>
                                                <asp:TextBox ID="Telefono5" runat="server" MaxLength="10"></asp:TextBox>
                                                <asp:FilteredTextBoxExtender ID="Telefono5_FilteredTextBoxExtender" runat="server" Enabled="True" TargetControlID="Telefono5" ValidChars="1234567890">
                                                </asp:FilteredTextBoxExtender>
                                            </td>
                                            <td>
                                                <asp:DropDownList ID="DdlHist_Te_Tipo5" runat="server" AutoPostBack="true" CssClass="DdlDesc">
                                                </asp:DropDownList>
                                            </td>
                                            <td>
                                                <asp:TextBox ID="TxtHist_Te_Extension5" runat="server" MaxLength="10" Visible="false" Width="40"></asp:TextBox>
                                            </td>
                                            <td>
                                                <asp:TextBox ID="Correo5" runat="server" MaxLength="150" Width="264px"></asp:TextBox>
                                            </td>
                                        </tr>
                                    </table>
                                </asp:Panel>
                                <asp:Panel runat="server" Visible="false" ID="PnlRS">
                                    <table>
                                        <tr class="Arriba">
                                            <td>
                                                <asp:GridView ID="GvRSTelefonos" runat="server" CssClass="mGrid" Font-Names="Tahoma" Font-Size="Small" Style="font-size: x-small; text-align: right">
                                                    <AlternatingRowStyle CssClass="alt" />
                                                    <Columns>
                                                        <asp:TemplateField>
                                                            <ItemTemplate>
                                                                <table style="border-style: hidden; text-align: left">
                                                                    <tr style="border-style: hidden;">
                                                                        <td style="vertical-align: top; border-style: hidden">
                                                                            <asp:CheckBox ID="CbxRS" runat="server" />
                                                                        </td>
                                                                        <td style="vertical-align: top; border-style: hidden">
                                                                            <asp:Label ID="LblTelefono" runat="server" CssClass="LblDesc" Text='<%# Bind("Telefono") %>'></asp:Label>
                                                                        </td>
                                                                        <td>
                                                                            <asp:DropDownList ID="DdlEscenario" runat="server" CssClass="TxtDesNS">
                                                                                <asp:ListItem Selected="True">Seleccione</asp:ListItem>
                                                                                <asp:ListItem>Cliente solicita restriccion</asp:ListItem>
                                                                                <asp:ListItem>Interlocutor solicita restriccion</asp:ListItem>
                                                                            </asp:DropDownList>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                    </Columns>
                                                    <PagerStyle CssClass="pgr" />
                                                </asp:GridView>
                                            </td>
                                            <td>
                                                <asp:GridView ID="GvRSCoreos" runat="server" CssClass="mGrid" Font-Names="Tahoma" Font-Size="Small" Style="font-size: x-small; text-align: right">
                                                    <AlternatingRowStyle CssClass="alt" />
                                                    <Columns>
                                                        <asp:TemplateField>
                                                            <ItemTemplate>
                                                                <table style="border-style: hidden; text-align: left">
                                                                    <tr style="border-style: hidden;">
                                                                        <td style="vertical-align: top; border-style: hidden">
                                                                            <asp:CheckBox ID="CbxRS" runat="server" />
                                                                        </td>
                                                                        <td style="vertical-align: top; border-style: hidden">
                                                                            <asp:Label ID="LblCorreo" runat="server" CssClass="LblDesc" Text='<%# Bind("Correo") %>'></asp:Label>
                                                                        </td>
                                                                        <td>
                                                                            <asp:DropDownList ID="DdlEscenario" runat="server" CssClass="TxtDesNS">
                                                                                <asp:ListItem Selected="True">Seleccione</asp:ListItem>
                                                                                <asp:ListItem>Cliente solicita restriccion</asp:ListItem>
                                                                                <asp:ListItem>Interlocutor solicita restriccion</asp:ListItem>
                                                                            </asp:DropDownList>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                    </Columns>
                                                    <PagerStyle CssClass="pgr" />
                                                </asp:GridView>
                                            </td>
                                        </tr>
                                    </table>

                                </asp:Panel>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <asp:Label ID="LblTelefonosError" runat="server" CssClass="LblError"></asp:Label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Button ID="BtnAceptarTelefonos" runat="server" CssClass="button green close" Text="Aceptar" />
                            </td>
                            <td>
                                <asp:Button ID="BtnCancelarTelefonos" runat="server" CssClass="button red close" Text="Cancelar" />

                            </td>
                        </tr>
                    </table>
                </asp:Panel>
                <asp:ModalPopupExtender ID="MpuTelefonos" runat="server" PopupControlID="PnlModalTelefonos" TargetControlID="BtnModalTelefonos"
                    CancelControlID="BtnCancelarTelefonos_Hiden" BackgroundCssClass="modalBackground">
                </asp:ModalPopupExtender>

                <asp:Button ID="BtnModalTelefonosSA" runat="server" Style="visibility: hidden" />
                <asp:Panel ID="PnlModalTelefonosSA" runat="server" CssClass="ModalAcciones">
                    <asp:Button ID="BtnCancelarTelefonos_HidenSA" runat="server" Style="visibility: hidden" />
                    <%-- Style="display: none">--%>
                    <table class="Table">
                        <tr class="heading">
                            <td colspan="2">
                                <asp:Label ID="LblTituloTelefonosSA" runat="server"></asp:Label>
                            </td>
                        </tr>
                        <tr class="CuerpoAcciones">
                            <td colspan="2" align="center">
                                <asp:Panel runat="server" Visible="false" ID="PnlRSSA">
                                    <table>
                                        <tr class="Arriba">
                                            <td>
                                                <asp:GridView ID="GvRSTelefonosSA" runat="server" CssClass="mGrid" Font-Names="Tahoma" Font-Size="Small" Style="font-size: x-small; text-align: right">
                                                    <AlternatingRowStyle CssClass="alt" />
                                                    <Columns>
                                                        <asp:TemplateField>
                                                            <ItemTemplate>
                                                                <table style="border-style: hidden; text-align: left">
                                                                    <tr style="border-style: hidden;">
                                                                        <td style="vertical-align: top; border-style: hidden">
                                                                            <asp:CheckBox ID="CbxRSSA" runat="server" />
                                                                        </td>
                                                                        <td style="vertical-align: top; border-style: hidden">
                                                                            <asp:Label ID="LblTelefono" runat="server" CssClass="LblDesc" Text='<%# Bind("Telefono") %>'></asp:Label>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                    </Columns>
                                                    <PagerStyle CssClass="pgr" />
                                                </asp:GridView>
                                            </td>
                                            <td>
                                                <asp:GridView ID="GvRSCoreosSA" runat="server" CssClass="mGrid" Font-Names="Tahoma" Font-Size="Small" Style="font-size: x-small; text-align: right">
                                                    <AlternatingRowStyle CssClass="alt" />
                                                    <Columns>
                                                        <asp:TemplateField>
                                                            <ItemTemplate>
                                                                <table style="border-style: hidden; text-align: left">
                                                                    <tr style="border-style: hidden;">
                                                                        <td style="vertical-align: top; border-style: hidden">
                                                                            <asp:CheckBox ID="CbxRSSA" runat="server" />
                                                                        </td>
                                                                        <td style="vertical-align: top; border-style: hidden">
                                                                            <asp:Label ID="LblCorreoSA" runat="server" CssClass="LblDesc" Text='<%# Bind("Correo") %>'></asp:Label>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                    </Columns>
                                                    <PagerStyle CssClass="pgr" />
                                                </asp:GridView>
                                            </td>
                                        </tr>
                                    </table>

                                </asp:Panel>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <asp:Label ID="LblTelefonosErrorSA" runat="server" CssClass="LblError"></asp:Label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Button ID="BtnAceptarTelefonosSA" runat="server" CssClass="button green close" Text="Aceptar" />
                            </td>
                            <td>
                                <asp:Button ID="BtnCancelarTelefonosSA" runat="server" CssClass="button red close" Text="Cancelar" />

                            </td>
                        </tr>
                    </table>
                </asp:Panel>
                <asp:ModalPopupExtender ID="MpuTelefonosSA" runat="server" PopupControlID="PnlModalTelefonosSA" TargetControlID="BtnModalTelefonosSA"
                    CancelControlID="BtnCancelarTelefonos_HidenSA" BackgroundCssClass="modalBackground">
                </asp:ModalPopupExtender>

                <asp:Button ID="BtnModalBuscarMarcador" runat="server" Style="visibility: hidden" />
                <asp:Panel ID="PnlModalBuscarMarcador" runat="server" CssClass="ModalAcciones" Style="display: none" DefaultButton="BtnBuscar2">
                    <table>
                        <tr class="heading">
                            <td>Buscar Por Llamada De Entrada
                            </td>
                        </tr>
                        <tr class="CuerpoAcciones">
                            <td align="center">
                                <table>
                                    <tr>
                                        <td>
                                            <asp:TextBox ID="TxtBuscar2" runat="server" CssClass="TxtxSearch" MaxLength="100"></asp:TextBox>
                                            <asp:Button ID="BtnBuscar2" runat="server" CssClass="SearchButton" Text="Ir" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="Izquierda">
                                            <asp:Label ID="LblMsjBuscarMarcador" runat="server" CssClass="LblMsj"></asp:Label>
                                        </td>
                                    </tr>
                                    <tr>

                                        <td>
                                            <asp:Button ID="BtnCancelarBuscarMarcador" runat="server" CssClass="button red close" Style="visibility: hidden" />
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </asp:Panel>
                <asp:ModalPopupExtender ID="MpuBuscarMarcador" runat="server" PopupControlID="PnlModalBuscarMarcador" TargetControlID="BtnModalBuscarMarcador"
                    CancelControlID="BtnCancelarBuscarMarcador" BackgroundCssClass="modalBackground">
                </asp:ModalPopupExtender>
            </ContentTemplate>
        </asp:UpdatePanel>

        <input id="TextoBusca"  type="text" runat="server" style="display: none; border-style: none; border-color: inherit; border-width: medium; width: 0px; height: 2px; background-color: #b6b7bc; color: gray" />
        <input id="call_id"     type="text" runat="server" style="display: none; border-style: none; border-color: inherit; border-width: medium; width: 0px; height: 2px; background-color: #b6b7bc; color: gray" />
        <input id="phoneNumber" type="text" runat="server" style="display: none; border-style: none; border-color: inherit; border-width: medium; width: 0px; height: 2px; background-color: #b6b7bc; color: gray" />
        <input id="typeCall"    type="text" runat="server" style="display: none; border-style: none; border-color: inherit; border-width: medium; width: 0px; height: 2px; background-color: #b6b7bc; color: gray" />
        <input id="dnis"        type="text" runat="server" style="display: none; border-style: none; border-color: inherit; border-width: medium; width: 0px; height: 2px; background-color: #b6b7bc; color: gray" />

        <asp:HiddenField runat="server" ID="HiddUsr" />

        <asp:Button ID="buscarNuevo" runat="server" Text="" BackColor="Gray" BorderColor="Gray" BorderStyle="None" Width="0px" Style="height: 0px; display: none" />
<%--        <script language="JavaScript" type="text/javascript">       obsoletoo
                AC_FL_RunContent(
                    'codebase', 'http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0',
                    'width', '400px',
                    'height', '150px',
                    'src', 'JavaScriptPackageRemote',
                    'quality', 'best',
                    'pluginspage', 'http://www.adobe.com/go/getflashplayer',
                    'align', 'middle',
                    'play', 'true',
                    'loop', 'true',
                    'scale', 'showall',
                    'wmode', 'opaque',
                    'devicefont', 'false',
                    'id', 'JavaScriptPackageRemote',
                    'bgcolor', '#ffffff',
                    'name', 'JavaScriptPackageRemote',
                    'menu', 'true',
                    'allowFullScreen', 'false',
                    'allowScriptAccess', 'sameDomain',
                    'movie', 'JavaScriptPackageRemote',
                    'salign', ''
                ); //end AC code
        </script>
        <noscript>
            <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0"
                width="0px" height="0px" id="JavaScriptPackageRemote" align="middle">
                <param name="allowScriptAccess" value="always" />
                <param name="allowFullScreen" value="false" />
                <param name="movie" value="JavaScriptPackageRemote.swf" />
                <param name="quality" value="best" />
                <param name="wmode" value="opaque" />
                <param name="bgcolor" value="#ffffff" />
                <embed src="JavaScriptPackageRemote.swf" quality="best" wmode="opaque" bgcolor="#ffffff"
                    width="0px" height="0px" name="JavaScriptPackageRemote" align="middle" allowscriptaccess="always"
                    allowfullscreen="false" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer" />
            </object>
        </noscript>--%>
    </form>
</body>
</html>
