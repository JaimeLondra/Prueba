<%@ page language="VB" autoeventwireup="false" inherits="AdminSesion, App_Web_qiaq133f" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Administrar Sesión</title>
    <link href="Estilos/HTML.css" rel="stylesheet" />
    <link href="Estilos/ObjHtmlS.css" rel="stylesheet" />
    <link href="Estilos/ObjHtmlNoS.css" rel="stylesheet" />
    <link href="Estilos/Modal.css" rel="stylesheet" />
    <script src="JQ/jquery.min.js"></script>
    <script src="JQ/jquery.timer.js"></script>
    <script lang="javascript" type="text/javascript">
        var count = 180
        var Verde = 'JQ/SessionActive.png';
        var Amarillo = 'JQ/SessionInActive2.png';
        var Rojo = 'JQ/SessionInActive.png';
        var timer = $.timer(
            function () {
                count--;
                if (count == 0) {
                    window.location.href = "ExpiroSesion.aspx";
                }
                else {

                    $('.count').html(count);
                    if (count <= 30) {
                        $find("MpuSession").show();
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
                url: "AdminSesion.aspx/KeepActiveSession",
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
        };
    </script>
</head>

<body onclick="Mover(event);">
    <form id="FrmMasterPage" runat="server">
        <asp:ToolkitScriptManager ID="TKSMMaster" runat="server" CombineScripts="true" EnableScriptGlobalization="true">
        </asp:ToolkitScriptManager>
        <div class="Pagina">
            <table class="Table">
                <tr>
                    <td class="Izquierda" rowspan="2">
                        <asp:Image ID="ImgLogo_Cl" runat="server" ImageUrl="~/Imagenes/ImgLogo_Cl.png" />
                    </td>
                    <td class="TituloP" rowspan="2">Módulo De Gestión
                    </td>
                    <td class="Derecha">
                        <asp:Image ID="ImgLogo_Ca" runat="server" ImageUrl="~/Imagenes/ImgLogo_Ca.png" />
                    </td>
                </tr>
                <tr>
                    <td class="Derecha">
                        <div>
                            <marquee width="30%" scrolldelay="100" scrollamount="5" direction="left"
                                loop="infinite">
                            <asp:Label ID="LblCat_Lo_Usuario1" runat="server" CssClass="LblSesion" Text="Usuario:"></asp:Label>
                            <asp:Label ID="LblCat_Lo_Usuario" runat="server" CssClass="LblSesion1"></asp:Label>
                            <asp:Label ID="LblCat_Lo_Nombre1" runat="server" CssClass="LblSesion" Text="Nombre:"></asp:Label>
                            <asp:Label ID="LblCat_Lo_Nombre" runat="server" CssClass="LblSesion1"></asp:Label>
                            <asp:Label ID="LblCAT_PE_PERFIL1" runat="server" CssClass="LblSesion" Text="Rol:"></asp:Label>
                            <asp:Label ID="LblCAT_PE_PERFIL" runat="server" CssClass="LblSesion1"></asp:Label>
                            <asp:Label ID="LblCat_Lo_Productos1" runat="server" CssClass="LblSesion" Text="Campaña:"></asp:Label>
                            <asp:Label ID="LblCat_Lo_Productos" runat="server" CssClass="LblSesion1"></asp:Label></marquee>
                            <asp:LinkButton ID="SESION" runat="server" Visible="true" BackColor="White"
                                CssClass="LblMsj">Cerrar Sesión</asp:LinkButton>
                        </div>
                    </td>
                </tr>
            </table>
            <div class="Espacio">
            </div>
            <table class="Table" align="center">
                <tr align="center">
                    <td align="center">

                        <asp:GridView ID="GvUsuarios" runat="server" AlternatingRowStyle-CssClass="alt" CssClass="mGrid" Font-Names="Tahoma" Font-Size="small" PagerStyle-CssClass="pgr" Style="font-size: small" AutoGenerateColumns="false">
                            <Columns>
                                <asp:TemplateField HeaderText="Usuario">
                                    <ItemTemplate>
                                        <table>
                                            <tr>
                                                <td rowspan="5">

                                                    <asp:Image ID="ImgUsrConectado0" runat="server" ImageUrl="~/Imagenes/ImgUsrConectado.png" />
                                                </td>
                                                <td>

                                                    <asp:Label ID="LblDesconectar0" runat="server" Text="Desconectar:"></asp:Label>

                                                </td>
                                                <td>

                                                    <asp:ImageButton ID="ImgDesconectar0" runat="server" ImageUrl="~/Imagenes/ImgDesconectar.png" OnClick="ImgDesconectar_Click" />

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <asp:Label ID="LblUsuarioD0" runat="server" Text="Usuario:"></asp:Label>
                                                </td>

                                                <td>
                                                    <asp:Label ID="LblUsuario0" runat="server" Text='<%# Bind("Usuario0") %>'></asp:Label>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    <asp:Label ID="LblHoraD0" runat="server" Text="Hora De Conección:"></asp:Label>
                                                </td>
                                                <td>
                                                    <asp:Label ID="LblHora0" runat="server" Text='<%# Bind("Hora0") %>'></asp:Label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <asp:Label ID="LblIpD0" runat="server" Text="Ip"></asp:Label>
                                                </td>
                                                <td>
                                                    <asp:Label ID="LblIp0" runat="server" Text='<%# Bind("Ip0")%>'></asp:Label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <asp:Label ID="LblOtroD0" runat="server" Text="Otro"></asp:Label>
                                                </td>
                                                <td>
                                                    <asp:Label ID="LblOtro0" runat="server" Text='<%# Bind("Otro0")%>'></asp:Label>
                                                </td>
                                            </tr>
                                        </table>
                                    </ItemTemplate>
                                </asp:TemplateField>
                                <asp:TemplateField HeaderText="Usuario">
                                    <ItemTemplate>
                                        <table>
                                            <tr>
                                                <td rowspan="5">

                                                    <asp:Image ID="ImgUsrConectado1" runat="server" ImageUrl="~/Imagenes/ImgUsrConectado.png" />
                                                </td>
                                                <td>

                                                    <asp:Label ID="LblDesconectar1" runat="server" Text="Desconectar:"></asp:Label>

                                                </td>
                                                <td>

                                                    <asp:ImageButton ID="ImgDesconectar1" runat="server" ImageUrl="~/Imagenes/ImgDesconectar.png" OnClick="ImgDesconectar_Click" />

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <asp:Label ID="LblUsuarioD1" runat="server" Text="Usuario:"></asp:Label>
                                                </td>

                                                <td>
                                                    <asp:Label ID="LblUsuario1" runat="server" Text='<%# Bind("Usuario1") %>'></asp:Label>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    <asp:Label ID="LblHoraD1" runat="server" Text="Hora De Conección:"></asp:Label>
                                                </td>
                                                <td>
                                                    <asp:Label ID="LblHora1" runat="server" Text='<%# Bind("Hora1") %>'></asp:Label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <asp:Label ID="LblIpD1" runat="server" Text="Ip"></asp:Label>
                                                </td>
                                                <td>
                                                    <asp:Label ID="LblIp1" runat="server" Text='<%# Bind("Ip1")%>'></asp:Label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <asp:Label ID="LblOtroD1" runat="server" Text="Otro"></asp:Label>
                                                </td>
                                                <td>
                                                    <asp:Label ID="LblOtro1" runat="server" Text='<%# Bind("Otro1")%>'></asp:Label>
                                                </td>
                                            </tr>
                                        </table>
                                    </ItemTemplate>
                                </asp:TemplateField>
                                <asp:TemplateField HeaderText="Usuario">
                                    <ItemTemplate>
                                        <table>
                                            <tr>
                                                <td rowspan="5">

                                                    <asp:Image ID="ImgUsrConectado2" runat="server" ImageUrl="~/Imagenes/ImgUsrConectado.png" />
                                                </td>
                                                <td>

                                                    <asp:Label ID="LblDesconectar2" runat="server" Text="Desconectar:"></asp:Label>

                                                </td>
                                                <td>

                                                    <asp:ImageButton ID="ImgDesconectar2" runat="server" ImageUrl="~/Imagenes/ImgDesconectar.png" OnClick="ImgDesconectar_Click" />

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <asp:Label ID="LblUsuarioD2" runat="server" Text="Usuario:"></asp:Label>
                                                </td>

                                                <td>
                                                    <asp:Label ID="LblUsuario2" runat="server" Text='<%# Bind("Usuario2") %>'></asp:Label>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    <asp:Label ID="LblHoraD2" runat="server" Text="Hora De Conección:"></asp:Label>
                                                </td>
                                                <td>
                                                    <asp:Label ID="LblHora2" runat="server" Text='<%# Bind("Hora2") %>'></asp:Label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <asp:Label ID="LblIpD2" runat="server" Text="Ip"></asp:Label>
                                                </td>
                                                <td>
                                                    <asp:Label ID="LblIp2" runat="server" Text='<%# Bind("Ip2")%>'></asp:Label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <asp:Label ID="LblOtroD2" runat="server" Text="Otro"></asp:Label>
                                                </td>
                                                <td>
                                                    <asp:Label ID="LblOtro2" runat="server" Text='<%# Bind("Otro2")%>'></asp:Label>
                                                </td>
                                            </tr>
                                        </table>
                                    </ItemTemplate>
                                </asp:TemplateField>
                                <asp:TemplateField HeaderText="Usuario">
                                    <ItemTemplate>
                                        <table>
                                            <tr>
                                                <td rowspan="5">

                                                    <asp:Image ID="ImgUsrConectado3" runat="server" ImageUrl="~/Imagenes/ImgUsrConectado.png" />
                                                </td>
                                                <td>

                                                    <asp:Label ID="LblDesconectar3" runat="server" Text="Desconectar:"></asp:Label>

                                                </td>
                                                <td>

                                                    <asp:ImageButton ID="ImgDesconectar3" runat="server" ImageUrl="~/Imagenes/ImgDesconectar.png" OnClick="ImgDesconectar_Click" />

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <asp:Label ID="LblUsuarioD3" runat="server" Text="Usuario:"></asp:Label>
                                                </td>

                                                <td>
                                                    <asp:Label ID="LblUsuario3" runat="server" Text='<%# Bind("Usuario3") %>'></asp:Label>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    <asp:Label ID="LblHoraD3" runat="server" Text="Hora De Conección:"></asp:Label>
                                                </td>
                                                <td>
                                                    <asp:Label ID="LblHora3" runat="server" Text='<%# Bind("Hora3") %>'></asp:Label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <asp:Label ID="LblIpD3" runat="server" Text="Ip"></asp:Label>
                                                </td>
                                                <td>
                                                    <asp:Label ID="LblIp3" runat="server" Text='<%# Bind("Ip3")%>'></asp:Label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <asp:Label ID="LblOtroD3" runat="server" Text="Otro"></asp:Label>
                                                </td>
                                                <td>
                                                    <asp:Label ID="LblOtro3" runat="server" Text='<%# Bind("Otro3")%>'></asp:Label>
                                                </td>
                                            </tr>
                                        </table>
                                    </ItemTemplate>
                                </asp:TemplateField>
                                <asp:TemplateField HeaderText="Usuario">
                                    <ItemTemplate>
                                        <table>
                                            <tr>
                                                <td rowspan="5">

                                                    <asp:Image ID="ImgUsrConectado4" runat="server" ImageUrl="~/Imagenes/ImgUsrConectado.png" />
                                                </td>
                                                <td>

                                                    <asp:Label ID="LblDesconectar4" runat="server" Text="Desconectar:"></asp:Label>

                                                </td>
                                                <td>

                                                    <asp:ImageButton ID="ImgDesconectar4" runat="server" ImageUrl="~/Imagenes/ImgDesconectar.png" OnClick="ImgDesconectar_Click" />

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <asp:Label ID="LblUsuarioD4" runat="server" Text="Usuario:"></asp:Label>
                                                </td>

                                                <td>
                                                    <asp:Label ID="LblUsuario4" runat="server" Text='<%# Bind("Usuario4") %>'></asp:Label>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    <asp:Label ID="LblHoraD4" runat="server" Text="Hora De Conección:"></asp:Label>
                                                </td>
                                                <td>
                                                    <asp:Label ID="LblHora4" runat="server" Text='<%# Bind("Hora4") %>'></asp:Label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <asp:Label ID="LblIpD4" runat="server" Text="Ip"></asp:Label>
                                                </td>
                                                <td>
                                                    <asp:Label ID="LblIp4" runat="server" Text='<%# Bind("Ip4")%>'></asp:Label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <asp:Label ID="LblOtroD4" runat="server" Text="Otro"></asp:Label>
                                                </td>
                                                <td>
                                                    <asp:Label ID="LblOtro4" runat="server" Text='<%# Bind("Otro4")%>'></asp:Label>
                                                </td>
                                            </tr>
                                        </table>
                                    </ItemTemplate>
                                </asp:TemplateField>
                            </Columns>
                        </asp:GridView>
                    </td>
                </tr>
                <tr>
                    <td>
                        <asp:Button ID="BtnRegresar" runat="server" CLASS="Botones" Text="Regresar" />
                    </td>
                </tr>
            </table>
        </div>
        <asp:Button ID="BtnModalMsj" runat="server" Style="visibility: hidden" />
        <asp:Panel ID="PnlModalMsj" runat="server" CssClass="ModalMsj" Style="display: none">
            <%-- Style="display: none">--%>
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
    </form>
</body>
</html>
