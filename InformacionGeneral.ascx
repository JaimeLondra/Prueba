<%@ control language="VB" autoeventwireup="false" inherits="InformacionGeneral, App_Web_qiaq133f" %>
<link href="Estilos/HTML.css" rel="stylesheet" />
<link href="Estilos/ObjHtmlNoS.css" rel="stylesheet" />
<link href="Estilos/ObjHtmlS.css" rel="stylesheet" />
<asp:Label ID="LblCat_Lo_Usuario" runat="server" Visible="false"></asp:Label>
<table>
    <tr class="Titulos">
        <td>Información General</td>
        <td>Información Financiera</td>
    </tr>

    <tr class="Arriba">
        <td>
            <table>
                <tr>
                    <td><asp:Label ID="LblPR_CD_NOMBRE" runat="server"  Text="Nombre" CssClass="LblDesc"  ></asp:Label></td>
                    <td colspan="3"><asp:TextBox ID="TxtPR_CD_NOMBRE" runat="server" MaxLength="80" ReadOnly="True" CssClass="TxtDesNS" Width="370px" ></asp:TextBox></td>
                </tr>
                <tr>
                    <td><asp:Label ID="LblPR_CD_CALLEYNUM" runat="server"  Text="Calle Y Número " CssClass="LblDesc"  ></asp:Label></td>
                    <td colspan="3"><asp:TextBox ID="TxtPR_CD_CALLEYNUM" runat="server" MaxLength="80" ReadOnly="True" CssClass="TxtDesNS"  Width="370px"></asp:TextBox></td>
                </tr>
                <tr>
                    <td><asp:Label ID="LblPR_CD_COLONIA" runat="server"  Text="Colonia" CssClass="LblDesc"  ></asp:Label></td>
                    <td colspan="3"><asp:TextBox ID="TxtPR_CD_COLONIA" runat="server" MaxLength="80" ReadOnly="True" CssClass="TxtDesNS" Width="370px" ></asp:TextBox></td>
                </tr>
                <tr>
                    <td><asp:Label ID="LblPR_CD_CIUDAD" runat="server"  Text="Ciudad" CssClass="LblDesc"  ></asp:Label></td>
                    <td><asp:TextBox ID="TxtPR_CD_CIUDAD" runat="server" MaxLength="40" ReadOnly="True" CssClass="TxtDesNS"  Width="140px"></asp:TextBox></td>
                    <td><asp:Label ID="LblPR_CD_CP" runat="server"  Text="Código Postal" CssClass="LblDesc"  ></asp:Label></td>
                    <td><asp:TextBox ID="TxtPR_CD_CP" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="92px"></asp:TextBox></td>
                </tr>
                <tr>
                    <td><asp:Label ID="LblPR_CD_ESTADO" runat="server"  Text="Estado " CssClass="LblDesc"  ></asp:Label></td>
                    <td><asp:TextBox ID="TxtPR_CD_ESTADO" runat="server" MaxLength="4" ReadOnly="True" CssClass="TxtDesNS" Width="140px"></asp:TextBox></td>
                    <td><asp:Label ID="LblPR_CD_RFC" runat="server"  Text="Rfc" CssClass="LblDesc"  ></asp:Label></td>
                    <td><asp:TextBox ID="TxtPR_CD_RFC" runat="server" MaxLength="13" ReadOnly="True" CssClass="TxtDesNS"  Width="92px"></asp:TextBox></td>
                </tr>
                <tr>
                    <td><asp:Label ID="LblPR_CD_EMAIL" runat="server"  Text="E-Mail" CssClass="LblDesc"  ></asp:Label></td>
                    <td colspan="3"><asp:TextBox ID="TxtPR_CD_EMAIL" runat="server" MaxLength="60" ReadOnly="True" CssClass="TxtDesNS"  Width="370px"></asp:TextBox></td>
                </tr>
                <tr>
                    <td><asp:Label ID="LblRegion" runat="server"  Text="Región" CssClass="LblDesc"  ></asp:Label></td>
                    <td colspan="3"><asp:TextBox ID="TxtRegion" runat="server" MaxLength="60" ReadOnly="True" CssClass="TxtDesNS"  Width="370px"></asp:TextBox></td>
                </tr>
            </table>
        </td>
        <td>
            <table class="Table">
                <tr>
                    <td>
                        <asp:Label ID="LblRollBack" runat="server" CssClass="LblDesc" Text="RollBack" Visible="False"></asp:Label>
                    </td>
                    <td>
                        <asp:TextBox ID="TxtRollBack" runat="server" CssClass="TxtDesNS" MaxLength="22" ReadOnly="True"  Visible="false" Width="100px"></asp:TextBox>
                    </td>
                    <td>
                        <asp:Label ID="Lblpr_cf_minimopagar" runat="server" CssClass="LblDesc" Text="Pago Minimo" Visible="False"></asp:Label>
                    </td>
                    <td>
                        <asp:TextBox ID="Txtpr_cf_minimopagar" runat="server" CssClass="TxtDesNS" MaxLength="22" ReadOnly="True"  Visible="false" Width="100px"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>
                        <asp:Label ID="LblDiasTermino" runat="server" CssClass="LblDesc" Text="Días Termino"></asp:Label>
                    </td>
                    <td>
                        <asp:TextBox ID="TxtDiasTermino" runat="server" CssClass="TxtDesNS" MaxLength="22" ReadOnly="True" Width="100px"></asp:TextBox>
                    </td>
                    <td>
                        <asp:Label ID="LblFechaTermino" runat="server" CssClass="LblDesc" Text="Fecha Término"></asp:Label>
                    </td>
                    <td>
                        <asp:TextBox ID="TxtFechaTermino" runat="server" CssClass="TxtDesNS" MaxLength="22" ReadOnly="True" Width="100px"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>
                        <asp:Label ID="LblPR_CF_SALDOVENCIDO" runat="server" CssClass="LblDesc" Text="Saldo Vencido "></asp:Label>
                    </td>
                    <td>
                        <asp:TextBox ID="TxtPR_CF_SALDOVENCIDO" runat="server" CssClass="TxtDesNS" MaxLength="22" ReadOnly="True" Width="100px"></asp:TextBox>
                    </td>
                    <td style="background-color: #CC0000">
                        <asp:Label ID="LblPR_CF_SALDOACTUAL" runat="server" CssClass="LblDesc" Text="Saldo Actual"></asp:Label>
                    </td>
                    <td>
                        <asp:TextBox ID="TxtPR_CF_SALDOACTUAL" runat="server" CssClass="TxtDesNS" MaxLength="22" ReadOnly="True" Width="100px"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>
                        <asp:Label ID="LblPR_CF_MESVENCIDO" runat="server" CssClass="LblDesc" Text="Meses Vencidos"></asp:Label>
                    </td>
                    <td>
                        <asp:TextBox ID="TxtPR_CF_MESVENCIDO" runat="server" CssClass="TxtDesNS" MaxLength="22" ReadOnly="True" Width="100px"></asp:TextBox>
                    </td>
                    <td>
                        <asp:Label ID="LblPR_CA_DIASWO" runat="server" CssClass="LblDesc" Text="Dias Wo"></asp:Label>
                    </td>
                    <td>
                        <asp:TextBox ID="TxtPR_CA_DIASWO" runat="server" CssClass="TxtDesNS" MaxLength="22" ReadOnly="True" Width="100px"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td style="background-color: #00CC00">
                        <asp:Label ID="LblPR_CF_COMPRASDISP" runat="server" CssClass="LblDesc" Text="Compras Disposiciones"></asp:Label>
                    </td>
                    <td>
                        <asp:TextBox ID="TxtPR_CF_COMPRASDISP" runat="server" CssClass="TxtDesNS" MaxLength="22" ReadOnly="True" Width="100px"></asp:TextBox>
                    </td>
                    <td>
                        <asp:Label ID="LblPR_CF_MESLIBRO" runat="server" CssClass="LblDesc" Text="Meses En Libro"></asp:Label>
                    </td>
                    <td>
                        <asp:TextBox ID="TxtPR_CF_MESLIBRO" runat="server" CssClass="TxtDesNS" MaxLength="22" ReadOnly="True" Width="100px"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>
                        <asp:Label ID="LblPR_CA_SEGMENTO" runat="server" CssClass="LblDesc" Text="Segmento"></asp:Label>
                    </td>
                    <td>
                        <asp:TextBox ID="TxtPR_CA_SEGMENTO" runat="server" CssClass="TxtDesNS" MaxLength="4" ReadOnly="True" Width="100px"></asp:TextBox>
                    </td>
                    <td>
                        <asp:Label ID="LblPR_CF_DIACORTE" runat="server" CssClass="LblDesc" Text="Día De Corte"></asp:Label>
                    </td>
                    <td>
                        <asp:TextBox ID="TxtPR_CF_DIACORTE" runat="server" CssClass="TxtDesNS" MaxLength="22" ReadOnly="True" Width="100px"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>
                        <asp:Label ID="LblPR_CF_FECHAWRITEOFF" runat="server" CssClass="LblDesc" Text="Fecha Write Off"></asp:Label>
                    </td>
                    <td>
                        <asp:TextBox ID="TxtPR_CF_FECHAWRITEOFF" runat="server" CssClass="TxtDesNS" MaxLength="7" ReadOnly="True" Width="100px"></asp:TextBox>
                    </td>
                    <td>
                        <asp:Label ID="LblPR_CA_PORTAFOLIO" runat="server"  Text="Portafolio" CssClass="LblDesc"  >
                        </asp:Label>
                    </td>
                    <td>
                        <asp:TextBox ID="TxtPR_CA_PORTAFOLIO" runat="server" MaxLength="4" ReadOnly="True" CssClass="TxtDesNS" Width="100px" ></asp:TextBox>

                    </td>
                </tr>
                <tr>
                    <td>
                        <asp:Label ID="LblPR_CA_RECOMENDOUOU" runat="server" CssClass="LblDesc" Text="Recomendación On Us Off Us"></asp:Label>
                    </td>
                    <td>
                        <asp:TextBox ID="TxtPR_CA_RECOMENDOUOU" runat="server" CssClass="TxtDesNS" MaxLength="2" ReadOnly="True" Width="100px"></asp:TextBox>
                    </td>
                    <td>
                        <asp:Label ID="LblPR_CA_ONUSOFFUS" runat="server" CssClass="LblDesc" Text="On Us Off Us"></asp:Label>
                    </td>
                    <td>
                        <asp:TextBox ID="TxtPR_CA_ONUSOFFUS" runat="server" CssClass="TxtDesNS" MaxLength="4" ReadOnly="True" Width="100px"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>
                        <asp:Label ID="LblPR_CA_RECOMENINFERIDA" runat="server" CssClass="LblDesc" Text="Recomendación Inferida"></asp:Label>

                    </td>
                    <td>
                        <asp:TextBox ID="TxtPR_CA_RECOMENINFERIDA" runat="server" CssClass="TxtDesNS" MaxLength="4" ReadOnly="True" Width="100px"></asp:TextBox>
                    </td>
                    <td>
                        <asp:Label ID="LblPR_CA_FECHASIGNA" runat="server" CssClass="LblDesc" Text="Fecha De Asignación"></asp:Label>

                    </td>
                    <td>
                        <asp:TextBox ID="TxtPR_CA_FECHASIGNA" runat="server" CssClass="TxtDesNS" MaxLength="4" ReadOnly="True" Width="100px"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <asp:Label ID="LblPR_CA_MATRIZSECOUOU" runat="server"  Text="Matriz De Secuencia Onus Offus" CssClass="LblDesc"  ></asp:Label>

                    </td>
                    <td colspan="2">
                        <asp:TextBox ID="TxtPR_CA_MATRIZSECOUOU" runat="server" MaxLength="100" ReadOnly="True" CssClass="TxtDesNS" Width="208px" ></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <asp:Label ID="LblPR_CA_MARCACAMPESPSEGM" runat="server" CssClass="LblDesc" Text="Marca Campaña Especial Segmentacion"></asp:Label>

                    </td>
                    <td colspan="2">
                        <asp:TextBox ID="TxtPR_CA_MARCACAMPESPSEGM" runat="server" CssClass="TxtDesNS" MaxLength="2" ReadOnly="True" Width="208px"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td><asp:Label ID="LblPR_CA_STATUSNEGO_DESC" runat="server"  Text="Estatus De La Negociación" CssClass="LblDesc"  ></asp:Label></td>
                    <td><asp:TextBox ID="TxtPR_CA_STATUSNEGO_DESC" runat="server" MaxLength="50" ReadOnly="True" CssClass="TxtDesNS" Width="100px" TextMode="MultiLine" ></asp:TextBox></td>
                    <td><asp:Label ID="LblPR_CA_FECHACAMBIOSTAT" runat="server"  Text="Fecha De Cambio De Estatus" CssClass="LblDesc"  ></asp:Label></td>
                    <td><asp:TextBox ID="TxtPR_CA_FECHACAMBIOSTAT" runat="server" MaxLength="7" ReadOnly="True" CssClass="TxtDesNS" Width="100px" ></asp:TextBox></td>
                </tr>
                
                </table>
        </td>
    </tr>

</table>
