<%@ page language="VB" autoeventwireup="false" inherits="LogIn, App_Web_qiaq133f" uiculture="es" culture="es-MX" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Inicio de sesión</title>
    <link href="Estilos/HTML.css" rel="stylesheet" />
    <link href="Estilos/ObjAjax.css" rel="stylesheet" />
    <link href="Estilos/ObjHtmlNoS.css" rel="stylesheet" />
    <link href="Estilos/ObjHtmlS.css" rel="stylesheet" />
    <link href="Imagenes/IcoLogo_Mc.ico" rel="Shortcut icon" />
    <script src="JQ/CORE_API_MC.js"></script>
</head>
    <script>
        window.open('https://cwmilla.nuxiba.com/agentkolob/?softphone=WebRTC');
    </script>
<body>
    <form id="FrmLogin" runat="server">
        <asp:ToolkitScriptManager ID="TKSMLogin" runat="server"></asp:ToolkitScriptManager>
        <div class="Pagina">
            <table class="Table">
                <tr>
                    <td class="Izquierda">
                        <asp:Image ID="ImgLogo_Cl" runat="server" ImageUrl="~/Imagenes/ImgLogo_Cl.png" />
                    </td>
                    <td class="TituloP">Módulo De Gestión
                    </td>
                    <td class="Centro">
                        <asp:Image ID="ImgLogo_Ca" runat="server" ImageUrl="~/Imagenes/ImgLogo_Ca.png" />
                    </td>
                </tr>
            </table>
            <div class="Espacio">
                <asp:Label runat="server" ID="lblAmbiente"></asp:Label>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <asp:UpdatePanel ID="UpnlGral" runat="server">
                <ContentTemplate>
                    <asp:UpdatePanel ID="UpnlLogin" runat="server">
                        <ContentTemplate>
                            <table align="center">
                                <tr>
                                    <td>
                                        <asp:Label ID="LblCat_Lo_Usuario" runat="server" Text="Usuario" CssClass="LblDesc"></asp:Label>
                                    </td>
                                    <td>
                                        <asp:TextBox ID="UserName" runat="server" MaxLength="25" Width="127px"></asp:TextBox>
                                    </td>
                                    <td>
                                        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="UserName" Display="Static" ErrorMessage="* Introduce Usuario" ForeColor="#03205C"></asp:RequiredFieldValidator>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <asp:Label ID="LblCat_Lo_Contrasena" runat="server" Text="Contraseña" CssClass="LblDesc"></asp:Label>
                                    </td>
                                    <td>
                                        <asp:TextBox ID="UserPass" runat="server" MaxLength="25" TextMode="Password" Width="127px"></asp:TextBox>
                                    </td>
                                    <td>
                                        <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="UserPass" Display="Static" ErrorMessage="* Introduce Contraseña" ForeColor="#03205C"></asp:RequiredFieldValidator>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                      
                                    </td>
                                    <td>&nbsp;</td>
                                    <td>
                                        <asp:Button ID="LoginBtn" runat="server" CssClass="Botones" Text="Iniciar Sesión" />
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <asp:UpdatePanel runat="server" ID="UpnlMsj">
                                            <ContentTemplate>
                                                <asp:Label ID="LblMsj" runat="server" CssClass="LblMsj"></asp:Label>
                                            </ContentTemplate>
                                        </asp:UpdatePanel>
                                    </td>
                                </tr>
                            </table>
                        </ContentTemplate>
                    </asp:UpdatePanel>
                    <asp:UpdatePanel ID="UPnlCambioPass" runat="server" Visible="false">
                        <ContentTemplate>
                            <br />
                            <br />
                            <div class="CajaDialogo">
                                <table align="center">
                                    <tr class="Titulos">
                                        <td colspan="2">Usuario Expirado, Cambie su Contraseña</td>
                                    </tr>
                                    <tr>
                                        <td class="Centro" colspan="2">
                                            <asp:Label ID="LblUsuario" runat="server" CssClass="LblMsj" Text="Usuario"></asp:Label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <asp:Label ID="LblPass1" runat="server" CssClass="LblDesc" Text="Contraseña"></asp:Label>
                                        </td>
                                        <td>
                                            <asp:TextBox ID="TxtPassword" runat="server" AutoPostBack="False" MaxLength="8" TextMode="Password"></asp:TextBox>
                                            <asp:PasswordStrength ID="TxtPassword_PasswordStrength" runat="server" BarBorderCssClass="barIndicatorBorder" BarIndicatorCssClass="MuySimple;Simple;Bien;Fuerte;Excelente" CalculationWeightings="50;15;15;20" DisplayPosition="RightSide" Enabled="True" HelpStatusLabelID="Pass_l" MinimumNumericCharacters="1" MinimumSymbolCharacters="1" PreferredPasswordLength="8" PrefixText="Complejidad:" RequiresUpperAndLowerCaseCharacters="false" StrengthIndicatorType="BarIndicator" StrengthStyles="MuySimple; Simple; Bien; Fuerte; Excelente" TargetControlID="TxtPassword">
                                            </asp:PasswordStrength>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <asp:Label ID="Pass_l" runat="server" Style="color: #000000; font-size: small"></asp:Label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <asp:Label ID="LblPass2" runat="server" CssClass="LblDesc" Text="Repetir Contraseña"></asp:Label>
                                        </td>
                                        <td>
                                            <asp:TextBox ID="TxtPassword2" runat="server" MaxLength="8" TextMode="Password"></asp:TextBox>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <asp:Label ID="LblErrores" runat="server" CssClass="LblError"></asp:Label>
                                        </td>
                                    </tr>
                                    <tr class="Centro">
                                        <td>
                                            <asp:Button ID="guardarcon" runat="server" CssClass="Botones" Text="Guardar" />
                                        </td>
                                        <td>
                                            <asp:Button ID="guardarsin" runat="server" CssClass="Botones" Text="Cancelar" />
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </ContentTemplate>
                    </asp:UpdatePanel>
                </ContentTemplate>
            </asp:UpdatePanel>
            <br />
            <br />
            <br />
            <br />
            <br />
            <img id="ImgLogo_Mc2" src="Imagenes/ImgLogo_Mc2.jpg" />
            <asp:Label ID="LblVer" runat="server" Text="Powered By MC V3.1" Style="color: #000000; font-size: xx-small" ></asp:Label>
            <br />
        </div>
    </form>
</body>
</html>
