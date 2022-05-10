<%@ control language="VB" autoeventwireup="false" inherits="NegociacionesVisitas, App_Web_qiaq133f" %>
<link href="Estilos/ObjHtmlS.css" rel="stylesheet" />
<link href="Estilos/HTML.css" rel="stylesheet" />
<link href="Estilos/ObjHtmlNoS.css" rel="stylesheet" />
<link href="Estilos/ObjAjax.css" rel="stylesheet" />
<link href="Estilos/Modal.css" rel="stylesheet" />
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>

<script type="text/javascript">
    function clicTwice(btn, msg) {
        btn.value = msg;
        btn.disabled = true;
        return true;
    }
</script>
<asp:Label ID="PR_CD_NOMBRE" runat="server" CssClass="LblDesc" Visible="False"></asp:Label>
<asp:Label ID="PR_MC_EXPEDIENTE" runat="server" CssClass="LblDesc" Visible="False"></asp:Label>
<asp:Label ID="VI_FECHA" runat="server" CssClass="LblDesc" Visible="False"></asp:Label>
<asp:Label ID="PR_CD_CALLEYNUM" runat="server" CssClass="LblDesc" Visible="False"></asp:Label>
<asp:Label ID="PR_CD_COLONIA" runat="server" CssClass="LblDesc" Visible="False"></asp:Label>
<asp:Label ID="PR_CD_CIUDAD" runat="server" CssClass="LblDesc" Visible="False"></asp:Label>
<asp:Label ID="PR_CD_CP" runat="server" CssClass="LblDesc" Visible="False"></asp:Label>
<asp:Label ID="PR_CA_TIPOTARJETA" runat="server" CssClass="LblDesc" Visible="False"></asp:Label>
<asp:Label ID="PR_CF_COMPRASDISP" runat="server" CssClass="LblDesc" Visible="False"></asp:Label>
<asp:Label ID="PR_CF_SALDOACTUAL" runat="server" CssClass="LblDesc" Visible="False"></asp:Label>
<asp:Label ID="vi_intereses" runat="server" CssClass="LblDesc" Visible="False"></asp:Label>
<asp:Label ID="vi_comisiones" runat="server" CssClass="LblDesc" Visible="False"></asp:Label>
<asp:Label ID="PR_CA_ONUSOFFUS_REAL" runat="server" CssClass="LblDesc" Visible="False"></asp:Label>
<asp:Label ID="CAT_BP_PORTAFOLIO" runat="server" CssClass="LblDesc" Visible="False"></asp:Label>
<asp:Label ID="CAT_BP_PRODUCTO" runat="server" CssClass="LblDesc" Visible="False"></asp:Label>
<asp:Panel ID="PnlEstatus" runat="server" Visible="false">
    <asp:Panel ID="PnlNeGociacion" runat="server" Visible="false">
        <table class="Table">
            <tr class="Titulos">
                <td>Negociaciones
                </td>
            </tr>
            <tr>
                <td>
                    <table>
                        <tr>
                            <td>
                                <asp:Label ID="LblTiposNegociaciones" runat="server" CssClass="DdlDesc" Text="Seleccione Una Opción"></asp:Label>
                            </td>
                            <td>
                                <asp:DropDownList ID="DdlTiposNegociaciones" runat="server" AutoPostBack="true">
                                </asp:DropDownList>
                            </td>
                            <td></td>
                            <td>&nbsp;</td>
                            <td>
                                <asp:Label ID="LblDescuentoMaximo" runat="server" CssClass="LblDesc" Text="El Decuento Maximo Es:" Visible="false"></asp:Label>
                            </td>
                            <td class="LblDesc">
                                <asp:Label ID="LblDescuentoMaximo0" runat="server" CssClass="LblDesc"></asp:Label>
                                <asp:Label ID="LblSimboloDesc" runat="server" CssClass="LblDesc" Visible="false">%</asp:Label>
                            </td>
                            <td></td>
                            <td>
                                <asp:Label ID="LblNumPagos" runat="server" CssClass="LblDesc" Text="Número Maximo De Pagos" Visible="false"></asp:Label>
                            </td>
                            <td>
                                <asp:Label ID="LblNumPagos0" runat="server" CssClass="LblDesc"></asp:Label>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <asp:Panel runat="server" ID="PnlDetalle" Visible="false">
                        <table class="Table">
                            <tr class="Arriba">
                                <td style="width: 50%">
                                    <table class="Table">
                                        <tr class="Titulos">
                                            <td colspan="8">Información Financiera</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <asp:Label ID="LblRollBack" runat="server" CssClass="LblDesc" Text="RollBack" Visible="False"></asp:Label>
                                            </td>
                                            <td>
                                                <asp:TextBox ID="TxtRollBack" runat="server" CssClass="TxtDesNS" MaxLength="22" ReadOnly="True" Visible="false" Width="100px"></asp:TextBox>
                                            </td>
                                            <td>
                                                <asp:Label ID="LblPR_CF_SALDOACTUAL" runat="server" CssClass="LblDesc" Text="Saldo Actual"></asp:Label>
                                            </td>
                                            <td>
                                                <asp:TextBox ID="TxtPR_CF_SALDOACTUAL" runat="server" CssClass="TxtDesNS" MaxLength="22" ReadOnly="True" Width="100px"></asp:TextBox>
                                            </td>
                                            <td>
                                                <asp:Label ID="LblPR_CF_SALDOVENCIDO" runat="server" CssClass="LblDesc" Text="Saldo Vencido "></asp:Label>
                                            </td>
                                            <td>
                                                <asp:TextBox ID="TxtPR_CF_SALDOVENCIDO" runat="server" CssClass="TxtDesNS" MaxLength="22" ReadOnly="True" Width="100px"></asp:TextBox>
                                            </td>
                                            <td>
                                                <asp:Label ID="LblPR_CA_DIASWO" runat="server" CssClass="LblDesc" Text="Dias Wo"></asp:Label>
                                            </td>
                                            <td>
                                                <asp:TextBox ID="TxtPR_CA_DIASWO" runat="server" CssClass="TxtDesNS" MaxLength="22" ReadOnly="True" Width="100px"></asp:TextBox>
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
                                                <asp:Label ID="LblPR_CF_COMPRASDISP" runat="server" CssClass="LblDesc" Text="Compras Disposiciones"></asp:Label>
                                            </td>
                                            <td>
                                                <asp:TextBox ID="TxtPR_CF_COMPRASDISP" runat="server" CssClass="TxtDesNS" MaxLength="22" ReadOnly="True" Width="100px"></asp:TextBox>
                                            </td>
                                            <td>
                                                <asp:Label ID="LblPR_CA_ONUSOFFUS" runat="server" CssClass="LblDesc" Text="On Us Off Us"></asp:Label>
                                            </td>
                                            <td>
                                                <asp:TextBox ID="TxtPR_CA_ONUSOFFUS" runat="server" CssClass="TxtDesNS" MaxLength="4" ReadOnly="True" Width="100px"></asp:TextBox>
                                            </td>
                                            <td>
                                                <asp:Label ID="LblPr_Mc_SubProd" runat="server" CssClass="LblDesc" Text="Producto"></asp:Label>
                                            </td>
                                            <td>
                                                <asp:TextBox ID="TxtPr_Mc_SubProd" runat="server" CssClass="TxtDesNS" MaxLength="7" ReadOnly="True" Width="100px"></asp:TextBox>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <asp:Label ID="LblPR_CA_SEGMENTO" runat="server" CssClass="LblDesc" Text="Segmento"></asp:Label>
                                            </td>
                                            <td>
                                                <asp:TextBox ID="TxtPR_CA_SEGMENTO" runat="server" CssClass="TxtDesNS" MaxLength="4" ReadOnly="True" Width="100px"></asp:TextBox>
                                            </td>
                                            <td>&nbsp;</td>
                                            <td>
                                                <asp:Label ID="LblPR_MC_CREDITO" runat="server" CssClass="LblDesc" Visible="False"></asp:Label>
                                            </td>
                                            <td>
                                                <asp:Label ID="LblPR_MC_PRODUCTO" runat="server" CssClass="LblDesc" Visible="False"></asp:Label>
                                            </td>
                                            <td>
                                                <asp:Label ID="LblPR_CA_AGENCIA" runat="server" CssClass="LblDesc" Visible="False"></asp:Label>
                                            </td>
                                            <td>
                                                <asp:Label ID="LblPR_MC_CODIGO" runat="server" CssClass="LblDesc" Visible="False"></asp:Label>
                                            </td>
                                            <td>&nbsp;</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </asp:Panel>
                </td>
            </tr>

            <tr>
                <td>
                    <asp:Panel runat="server" ID="PnlConfiguracion" Visible="false">
                        <table class="Table">
                            <tr class="Arriba">
                                <td>
                                    <asp:Panel runat="server" ID="PnlFechas" Visible="false">
                                        <table class="Table">
                                            <tr>
                                                <td class="Titulos" colspan="2">Negociación</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2">
                                                    <table>
                                                        <tr>
                                                            <td>
                                                                <asp:Panel ID="PnlParametros" runat="server">
                                                                    <table>
                                                                        <tr>
                                                                            <td>
                                                                                <asp:Label ID="LblFechaMax" runat="server" CssClass="LblDesc"></asp:Label>
                                                                            </td>
                                                                            <td style="text-align: right">
                                                                                <asp:Label ID="LblEtiquetaNego" runat="server" CssClass="LblDesc"></asp:Label>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="2" class="LblDesc">El saldo Negociado no puede ser menor a:
                                                                            <asp:Label ID="LblMinSaldoNego" runat="server" ForeColor="#006600"></asp:Label>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <asp:Label ID="LblSaldoNegociado1" runat="server" CssClass="LblDesc" Text="Negociar Por"></asp:Label>
                                                                                <asp:Image ID="Img1" runat="server" ImageUrl="~/Imagenes/ImgNumber1.png" />
                                                                            </td>
                                                                            <td>&nbsp;</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <asp:RadioButtonList ID="RblTipo" runat="server" AutoPostBack="true" CssClass="RblDesc" RepeatDirection="Horizontal">
                                                                                    <asp:ListItem Selected="True">Seleccione</asp:ListItem>
                                                                                    <asp:ListItem>Saldo</asp:ListItem>
                                                                                    <asp:ListItem>Descuento</asp:ListItem>
                                                                                </asp:RadioButtonList>
                                                                            </td>
                                                                            <td>&nbsp;</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="2">
                                                                                <asp:Image ID="Img2" runat="server" ImageUrl="~/Imagenes/ImgNumber2.png" />
                                                                                <asp:Label ID="LblSaldoNegociado" runat="server" CssClass="LblDesc" Visible="False"></asp:Label>
                                                                                <asp:TextBox ID="TxtSaldoNegociado" runat="server" AutoPostBack="True" CssClass="TxtDesc" MaxLength="20" Visible="false"></asp:TextBox>
                                                                                <asp:FilteredTextBoxExtender ID="FtbTxtSaldoNegociado" runat="server" Enabled="True" TargetControlID="TxtSaldoNegociado" ValidChars="1234567890.">
                                                                                </asp:FilteredTextBoxExtender>
                                                                                <asp:Label ID="LblMinSaldoNego0" runat="server" ForeColor="#006600"></asp:Label>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="2">
                                                                                <asp:Panel ID="PnlPagoUnico" runat="server" Visible="false">
                                                                                    <table>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <asp:Label ID="LblPagoInicialU" runat="server" CssClass="LblDesc" Text="Pago Inicial"></asp:Label>
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:TextBox ID="TxtPagoInicialU" runat="server" CssClass="TxtDesc" Width="80px"></asp:TextBox>
                                                                                                <asp:FilteredTextBoxExtender ID="TxtPagoInicialU_FilteredTextBoxExtender" runat="server" Enabled="True" TargetControlID="TxtPagoInicialU" ValidChars="1234567890.">
                                                                                                </asp:FilteredTextBoxExtender>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <asp:Label ID="LblFechaPagoInicialU" runat="server" CssClass="LblDesc" Text="Fecha Pago Inicial"></asp:Label>
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:TextBox ID="TxtFechaPagoInicialU" runat="server" CssClass="TxtDesc" Width="80px"></asp:TextBox>
                                                                                                <asp:CalendarExtender ID="TxtFechaPagoInicialU_CalendarExtender" runat="server" CssClass="Calendario" Enabled="True" PopupButtonID="TxtFechaPagoInicial" TargetControlID="TxtFechaPagoInicialU">
                                                                                                </asp:CalendarExtender>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <asp:Label ID="LblMontoPagosU" runat="server" CssClass="LblDesc" Text="Monto De Pago"></asp:Label>
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:TextBox ID="TxtMontoPagosU" runat="server" Width="80px"></asp:TextBox>
                                                                                                <asp:Image ID="Img3" runat="server" ImageUrl="~/Imagenes/ImgNumber3.png" />
                                                                                                <asp:FilteredTextBoxExtender ID="TxtMontoPagosU_FilteredTextBoxExtender" runat="server" Enabled="True" TargetControlID="TxtMontoPagosU" ValidChars="1234567890.">
                                                                                                </asp:FilteredTextBoxExtender>

                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <asp:Label ID="LblFechaPagoU" runat="server" CssClass="LblDesc" Text="Fecha De Pago"></asp:Label>
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:TextBox ID="TxtFechaPagoU" runat="server" CssClass="TxtDesc" Width="80px"></asp:TextBox>
                                                                                                <asp:CalendarExtender ID="TxtFechaPagoU_CalendarExtender" runat="server" CssClass="Calendario" Enabled="True" PopupButtonID="TxtFechaPagoU" TargetControlID="TxtFechaPagoU">
                                                                                                </asp:CalendarExtender>
                                                                                                <asp:Image ID="Img4" runat="server" ImageUrl="~/Imagenes/ImgNumber4.png" />
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </asp:Panel>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="2">

                                                                                  <asp:Panel ID="PnlPago90" runat="server" Visible="false">
                                                                                    <table>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <asp:Image ID="Img5" runat="server" ImageUrl="~/Imagenes/ImgNumber3.png" />
                                                                                                <asp:Label ID="LblInicial90" runat="server" CssClass="LblDesc" Text="Pago Inicial"></asp:Label>
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:TextBox ID="TxtInicial90" runat="server" CssClass="TxtDesc" Width="80px"></asp:TextBox>
                                                                                                <asp:FilteredTextBoxExtender ID="TxtInicial90_FilteredTextBoxExtender0" runat="server" Enabled="True" TargetControlID="TxtInicial90" ValidChars="1234567890.">
                                                                                                </asp:FilteredTextBoxExtender>
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:Label ID="LblFechaInicial90" runat="server" CssClass="LblDesc" Text="Fecha"></asp:Label>
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:TextBox ID="TxtFechaInicial90" runat="server" CssClass="TxtDesc" Width="80px" Enabled="False"></asp:TextBox>

                                                                                                   <asp:CalendarExtender ID="CETxtFechaInicial90" runat="server" CssClass="Calendario" Enabled="True" Format="dd/MM/yyyy" PopupButtonID="ImgFechaInicial90" TargetControlID="TxtFechaInicial90">
                                                                                                </asp:CalendarExtender>

                                                                                                
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:Image ID="ImgFechaInicial90" runat="server" ImageUrl="Imagenes/ImgCalendario.png" />
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <asp:Image ID="Img6" runat="server" ImageUrl="~/Imagenes/ImgNumber4.png" />
                                                                                                <asp:Label ID="LblPago190" runat="server" CssClass="LblDesc" Text="Pago 1"></asp:Label>
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:TextBox ID="TxtPago190" runat="server" CssClass="TxtDesc" Width="80px"></asp:TextBox>
                                                                                                <asp:FilteredTextBoxExtender ID="FTBTxtPago190" runat="server" Enabled="True" TargetControlID="TxtPago190" ValidChars="1234567890.">
                                                                                                </asp:FilteredTextBoxExtender>
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:Label ID="LblFecha190" runat="server" CssClass="LblDesc" Text="Fecha"></asp:Label>
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:TextBox ID="TxtFecha190" runat="server" CssClass="TxtDesc" Width="80px" Enabled="False"></asp:TextBox>
                                                                                                   <asp:CalendarExtender ID="CETxtFecha190" runat="server" CssClass="Calendario" Enabled="True" Format="dd/MM/yyyy" PopupButtonID="ImgFecha190" TargetControlID="TxtFecha190">
                                                                                                </asp:CalendarExtender>

                                                                                                 
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:Image ID="ImgFecha190" runat="server" ImageUrl="Imagenes/ImgCalendario.png" />
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <asp:Image ID="Img7" runat="server" ImageUrl="~/Imagenes/ImgNumber5.png" />
                                                                                                <asp:Label ID="LblPago290" runat="server" CssClass="LblDesc" Text="Pago 2"></asp:Label>
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:TextBox ID="TxtPago290" runat="server" CssClass="TxtDesc" Width="80px"></asp:TextBox>
                                                                                                <asp:FilteredTextBoxExtender ID="FTBLblPago290" runat="server" Enabled="True" TargetControlID="TxtPago290" ValidChars="1234567890.">
                                                                                                </asp:FilteredTextBoxExtender>
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:Label ID="LblFecha290" runat="server" CssClass="LblDesc" Text="Fecha"></asp:Label>
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:TextBox ID="TxtFecha290" runat="server" CssClass="TxtDesc" Width="80px" Enabled="False"></asp:TextBox>


                                                                                                <asp:CalendarExtender ID="CETxtFecha290" runat="server" CssClass="Calendario" Enabled="True" Format="dd/MM/yyyy" PopupButtonID="ImgFecha290" TargetControlID="TxtFecha290">
                                                                                                </asp:CalendarExtender>

                                                                                                 
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:Image ID="ImgFecha290" runat="server" ImageUrl="Imagenes/ImgCalendario.png" />
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <asp:Image ID="Img8" runat="server" ImageUrl="~/Imagenes/ImgNumber6.png" />
                                                                                                <asp:Label ID="LblPago390" runat="server" CssClass="LblDesc" Text="Pago 3"></asp:Label>
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:TextBox ID="TxtPago390" runat="server" CssClass="TxtDesc" Width="80px"></asp:TextBox>
                                                                                                <asp:FilteredTextBoxExtender ID="FTBTxtPago390" runat="server" Enabled="True" TargetControlID="TxtPago390" ValidChars="1234567890.">
                                                                                                </asp:FilteredTextBoxExtender>
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:Label ID="LblFecha390" runat="server" CssClass="LblDesc" Text="Fecha"></asp:Label>
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:TextBox ID="TxtFecha390" runat="server" CssClass="TxtDesc" Width="80px" Enabled="False"></asp:TextBox>
                                                                                                  <asp:CalendarExtender ID="CETxtFecha390" runat="server" CssClass="Calendario" Enabled="True" Format="dd/MM/yyyy" PopupButtonID="ImgFecha390" TargetControlID="TxtFecha390">
                                                                                                </asp:CalendarExtender>

                                                                                               
                                                                                            </td>
                                                                                            <td>
                                                                                                <asp:Image ID="ImgFecha390" runat="server" ImageUrl="Imagenes/ImgCalendario.png" />
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </asp:Panel>

                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="2">
                                                                                <asp:Panel ID="PnlCalendario" runat="server" Visible="false">
                                                                                    <table>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <table>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <asp:Label ID="LblCat_Ne_Num_Pagos" runat="server" CssClass="LblDesc" Text="Número De Pagos"></asp:Label>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:DropDownList ID="DdlCat_Ne_Num_Pagos" runat="server" AutoPostBack="true">
                                                                                                            </asp:DropDownList>
                                                                                                            <asp:Image ID="Image1" runat="server" ImageUrl="~/Imagenes/ImgNumber3.png" />
                                                                                                        </td>
                                                                                                        <td>&nbsp;</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <asp:Label ID="LblInicialPay" runat="server" CssClass="LblDesc" Text="Pago Inicial"></asp:Label>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:TextBox ID="TxtInicialPay" runat="server" CssClass="TxtDesc" Width="80px"></asp:TextBox>
                                                                                                            <asp:FilteredTextBoxExtender ID="FTBTxtInicialPay" runat="server" Enabled="True" TargetControlID="TxtInicialPay" ValidChars="1234567890.">
                                                                                                            </asp:FilteredTextBoxExtender>
                                                                                                            <asp:Image ID="Image2" runat="server" ImageUrl="~/Imagenes/ImgNumber4.png" />
                                                                                                        </td>
                                                                                                        <td>&nbsp;</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <asp:Label ID="LblFechaInicialPay" runat="server" CssClass="LblDesc" Text="Fecha Pago Inicial"></asp:Label>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:TextBox ID="TxtFechaInicialPay" runat="server" CssClass="TxtDesc" Width="80px"></asp:TextBox>
                                                                                                            <asp:CalendarExtender ID="CETxtFechaInicialPay" runat="server" CssClass="Calendario" Enabled="True" PopupButtonID="TxtFechaInicialPay" TargetControlID="TxtFechaInicialPay">
                                                                                                            </asp:CalendarExtender>
                                                                                                            <asp:Image ID="Img9" runat="server" ImageUrl="~/Imagenes/ImgNumber5.png" />
                                                                                                        </td>
                                                                                                        <td>&nbsp;</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <asp:Label ID="LblMontoMenPay" runat="server" CssClass="LblDesc" Text="Monto De Las Mensualidades"></asp:Label>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:TextBox ID="TxtMontoMenPay" runat="server" Width="80px"></asp:TextBox>
                                                                                                            <asp:FilteredTextBoxExtender ID="FTBTxtMontoMenPay" runat="server" Enabled="True" TargetControlID="TxtMontoMenPay" ValidChars="1234567890.">
                                                                                                            </asp:FilteredTextBoxExtender>
                                                                                                            <asp:Image ID="Img10" runat="server" ImageUrl="~/Imagenes/ImgNumber6.png" />
                                                                                                        </td>
                                                                                                        <td>&nbsp;</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <asp:Label ID="LblFechaMenPay" runat="server" CssClass="LblDesc" Text="Dias De Pago"></asp:Label>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:TextBox ID="TxtFechaMenPay" runat="server" CssClass="TxtDesc" Width="80px"></asp:TextBox>
                                                                                                            <asp:CalendarExtender ID="CETxtFechaMenPay" runat="server" CssClass="Calendario" Enabled="True" PopupButtonID="TxtFechaMenPay" TargetControlID="TxtFechaMenPay">
                                                                                                            </asp:CalendarExtender>
                                                                                                            <asp:Image ID="Img11" runat="server" ImageUrl="~/Imagenes/ImgNumber7.png" />
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <asp:Label ID="LblSaldoReal" runat="server" ForeColor="#006600"></asp:Label>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </table>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </asp:Panel>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </asp:Panel>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <asp:Button ID="BtnVisualizar" runat="server" CssClass="Botones" Text="Visualizar Calendario" />
                                                </td>
                                                <td class="LblDesc">
                                                    <asp:Button ID="BtnCancelarVis" runat="server" CssClass="Botones" Text="Cancelar" Visible="False" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2">
                                                    <table class="Table">
                                                        <tr>
                                                            <td>
                                                                <asp:Label ID="LblCalendario" runat="server" CssClass="Titulos" Text="Calendario" Width="100%"></asp:Label>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="Izquierda">
                                                                <div class="ScroolCalendarioPagos">
                                                                    <div class="force-overflow">
                                                                        <asp:GridView ID="GvCalendario" runat="server" CssClass="mGrid" Font-Names="Tahoma" Font-Size="Small" Width="200PX">
                                                                            <AlternatingRowStyle CssClass="alt" />
                                                                            <PagerStyle CssClass="pgr" />
                                                                        </asp:GridView>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </asp:Panel>
                                </td>
                                <td>
                                    <asp:Panel ID="PnlGEstion" runat="server" Visible="false">
                                        <table class="Table">
                                            <tr class="Titulos">
                                                <td colspan="2">Captura De Gestión</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2">
                                                    <table>
                                                        <tr>
                                                            <td class="Arriba">
                                                                <table>
                                                                    <tr>
                                                                        <td>
                                                                            <asp:Label ID="LblHIST_VI_FOLIO" runat="server" CssClass="LblDesc" Text="Folio"></asp:Label>
                                                                        </td>
                                                                        <td>
                                                                            <asp:TextBox ID="TxtHIST_VI_FOLIO" runat="server" MaxLength="49"></asp:TextBox>
                                                                        </td>
                                                                        <td>&nbsp;</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <asp:Label ID="LblHist_Vi_Visitador" runat="server" CssClass="LblDesc" Text="Visitador"></asp:Label>
                                                                        </td>
                                                                        <td>
                                                                            <asp:DropDownList ID="DdlHist_Vi_Visitador" runat="server" CssClass="DdlDesc">
                                                                            </asp:DropDownList>
                                                                        </td>
                                                                        <td>&nbsp;</td>
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
                                                                            <asp:Label ID="LblResultado_Gestion" runat="server" CssClass="LblDesc" Text="Resultado Gestión" ></asp:Label>
                                                                        </td>
                                                                        <td>
                                                                            <asp:DropDownList ID="DdlResultado_Gestion" runat="server" CssClass="TxtDesNS"  AutoPostBack="true">
                                                                            </asp:DropDownList>
                                                                        </td>
                                                                        <td>
                                                                            <asp:DropDownList ID="DdlEscenario" runat="server" AutoPostBack="true" CssClass="TxtDesNS" Visible="False">
                                                                            </asp:DropDownList>
                                                                        </td>
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
                                                                                            <asp:FilteredTextBoxExtender ID="TxtSecPV_FilteredTextBoxExtender" runat="server" Enabled="True" TargetControlID="TxtSecPV" ValidChars="1234567890.">
                                                                                            </asp:FilteredTextBoxExtender>
                                                                                        </td>
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
                                                                                <table style="width: 429px">
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
                                                                                            <asp:Image ID="ImgFechaDI" runat="server" ImageUrl="Imagenes/ImgCalendario.png" />
                                                                                            <asp:CalendarExtender ID="FechaDI_CalendarExtender" runat="server" CssClass="Calendario" Enabled="True" Format="ddMMyy" PopupButtonID="ImgFechaDI" TargetControlID="TxtFechaDI">
                                                                                            </asp:CalendarExtender>
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
                                                                            &nbsp;</td>
                                                                        <td>
                                                                            &nbsp;</td>
                                                                        <td>&nbsp;</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>&nbsp;</td>
                                                                        <td>
                                                                            &nbsp;</td>
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
                                                                </table>
                                                            </td>
                                                            <td class="Arriba">
                                                                <table>
                                                                    <tr>
                                                                        <td>
                                                                            <asp:TextBox ID="TxtHist_Ge_Comentario" runat="server" CssClass="TxtDesc" Height="103px" MaxLength="500" TextMode="MultiLine" Width="399px"></asp:TextBox>
                                                                            <asp:FilteredTextBoxExtender ID="Hist_Vi_ComentarioFTB" runat="server" Enabled="True" TargetControlID="TxtHist_Ge_Comentario" ValidChars="@_-.aqzxswcdevfrbgtnhymjukiloñpZAQXSWCDEVFRBGTNHYMJUKILOPÑ1230456789 ">
                                                                            </asp:FilteredTextBoxExtender>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <asp:TextBox ID="TxtEscenario" runat="server" CssClass="TxtDesc" Height="103px" MaxLength="500" TextMode="MultiLine" Width="399px" Visible="false"></asp:TextBox>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>

                                                                            <asp:Panel ID="PnlColores" runat="server">
                                                                            </asp:Panel>

                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <table>
                                                                                <tr class="Arriba"><td><asp:UpdatePanel ID="UpnlTelefonos" runat="server">
                                                                                        <ContentTemplate>
                                                                                            <asp:GridView ID="GvCalTelefonos" runat="server" CssClass="mGrid" Font-Names="Tahoma" Font-Size="Small" Style="font-size: x-small; text-align: right">
                                                                                                <AlternatingRowStyle CssClass="alt" />
                                                                                                <Columns>
                                                                                                    <asp:TemplateField>
                                                                                                        <ItemTemplate>
                                                                                                            <table style="border-style: hidden; text-align: left">
                                                                                                                <tr style="border-style: hidden;">
                                                                                                                    <td style="vertical-align: top; border-style: hidden">
                                                                                                                        <asp:ImageButton ID="ImgValido" runat="server" ImageUrl="~/Imagenes/ImgValido.png"  />
                                                                                                                    </td>
                                                                                                                    <td style="vertical-align: top; border-style: hidden">&nbsp;</td>
                                                                                                                    <td style="vertical-align: top; border-style: hidden">
                                                                                                                        <asp:ImageButton ID="ImgNoValido" runat="server" ImageUrl="~/Imagenes/ImgNoValido.png"  />
                                                                                                                    </td>
                                                                                                                    <td style="vertical-align: top; border-style: hidden">&nbsp;</td>
                                                                                                                    <td style="vertical-align: top; border-style: hidden">
                                                                                                                        <asp:Label ID="LblTelefono0" runat="server" CssClass="LblDesc" Text='<%# Bind("Telefono") %>'></asp:Label>
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
                                                                                                                </tr>
                                                                                                            </table>
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                </Columns>
                                                                                                <PagerStyle CssClass="pgr" />
                                                                                            </asp:GridView>
                                                                                        </ContentTemplate>
                                                                                    </asp:UpdatePanel></td>
                                                                                    <td> <table>
                                                                   <%-- <tr>
                                                                        <td>
                                                                            <asp:DropDownList ID="DdlCorreos" runat="server" AutoPostBack="true">
                                                                            </asp:DropDownList>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <asp:TextBox runat="server" ID="TxtCorreo" Visible="false" Width="300px"></asp:TextBox>
                                                                        </td>
                                                                    </tr>--%>
                                                                </table></td></tr>
                                                                            </table>
                                                                                    
                                                                        </td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                
                                                                &nbsp;</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <asp:Label ID="LblHist_Pr_SupervisorAuto" runat="server" CssClass="LblDesc" Text="Supervisor" Visible="False"></asp:Label>
                                </td>
                                <td>
                                    <asp:TextBox ID="TxtHist_Pr_SupervisorAuto" runat="server" MaxLength="25" Visible="False"></asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <asp:Label ID="LblContrasenaAuto" runat="server" CssClass="LblDesc" Text="Contraseña" Visible="False"></asp:Label>
                                </td>
                                <td>
                                    <asp:TextBox ID="TxtContrasenaAuto" runat="server" MaxLength="10" TextMode="Password" Visible="False"></asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" aling="left">
                                    <table>
                                        <tr class="Titulos">
                                            <td colspan="2">Datos Visita</td>
                                        </tr>
                                        <tr class="Arriba">
                                            <td>
                                                <table>
                                                    <tr>
                                                        <td>
                                                            <asp:Label ID="LblHist_Vi_Dtevisita" runat="server" CssClass="LblDesc" Text="Fecha Y hora De Visita"></asp:Label>
                                                        </td>
                                                        <td>
                                                            <asp:TextBox ID="TxtHist_Vi_Dtevisita" runat="server"></asp:TextBox>
                                                            <asp:CalendarExtender ID="TxtHist_Vi_Dtevisita_CalendarExtender" runat="server" Enabled="True" PopupButtonID="TxtHist_Vi_Dtevisita" TargetControlID="TxtHist_Vi_Dtevisita">
                                                            </asp:CalendarExtender>
                                                            <asp:TextBox ID="TxtHist_Vi_Dtevisita2" runat="server" Width="50px"></asp:TextBox>
                                                            <asp:MaskedEditExtender ID="TxtHist_Vi_Dtevisita2MEE" runat="server" AcceptNegative="None" ErrorTooltipEnabled="True" InputDirection="RightToLeft" Mask="99:99" MaskType="Time" MessageValidatorTip="true" OnFocusCssClass="MaskedEditFocus" OnInvalidCssClass="MaskedEditError" TargetControlID="TxtHist_Vi_Dtevisita2">
                                                            </asp:MaskedEditExtender>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <asp:Label ID="LblHist_Vi_Referencia" runat="server" CssClass="LblDesc" Text="Punto De Referencia"></asp:Label>
                                                        </td>
                                                        <td>
                                                            <asp:TextBox ID="TxtHist_Vi_Referencia" runat="server" Height="70px" TextMode="MultiLine" Width="250px"></asp:TextBox>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <asp:Label ID="LblHist_Vi_Entrecalle1" runat="server" CssClass="LblDesc" Text="Entre Calle"></asp:Label>
                                                        </td>
                                                        <td>
                                                            <asp:TextBox ID="TxtHist_Vi_Entrecalle1" runat="server" Width="250px"></asp:TextBox>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <asp:Label ID="LblHist_Vi_Entrecalle2" runat="server" CssClass="LblDesc" Text="Entre Calle"></asp:Label>
                                                        </td>
                                                        <td>
                                                            <asp:TextBox ID="TxtHist_Vi_Entrecalle2" runat="server" Width="250px"></asp:TextBox>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <asp:Label ID="LblHist_Vi_Colorf" runat="server" CssClass="LblDesc" Text="Color De La Fachada"></asp:Label>
                                                        </td>
                                                        <td>
                                                            <asp:TextBox ID="TxtHist_Vi_Colorf" runat="server" BackColor="White" Enabled="false" Font-Size="0px" Height="17px" Text="FFFFFF" Width="50px"></asp:TextBox>
                                                            <asp:ImageButton ID="ImgColorF" runat="server" Height="24px" ImageUrl="~/Imagenes/ImgColor.png" Width="32px" />
                                                              <asp:ColorPickerExtender ID="CPImgColorF" runat="server" Enabled="True" PopupButtonID="ImgColorF" SampleControlID="TxtHist_Vi_Colorf" TargetControlID="TxtHist_Vi_Colorf">
                                                                                                        </asp:ColorPickerExtender>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <asp:Label ID="LblHist_Vi_Colorp" runat="server" CssClass="LblDesc" Text="Color De La Puerta"></asp:Label>
                                                        </td>
                                                        <td>
                                                            <asp:TextBox ID="TxtHist_Vi_Colorp" runat="server" BackColor="White" Enabled="false" Font-Size="0px" Height="17px" Text="FFFFFF" Width="50px"></asp:TextBox>
                                                            <asp:ImageButton ID="ImgColorP" runat="server" Height="23px" ImageUrl="~/Imagenes/ImgColor.png" Width="32px" />
                                                              <asp:ColorPickerExtender ID="CpImgColorP" runat="server" Enabled="True" PopupButtonID="ImgColorP" SampleControlID="TxtHist_Vi_Colorp" TargetControlID="TxtHist_Vi_Colorp">
                                                                                                        </asp:ColorPickerExtender>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <asp:Label ID="LblHist_Vi_Tipodomicilio" runat="server" CssClass="LblDesc" Text="Tipo"></asp:Label>
                                                        </td>
                                                        <td>
                                                            <asp:DropDownList ID="DdlHist_Vi_Tipodomicilio" runat="server" CssClass="DdlDesc">
                                                                <asp:ListItem> </asp:ListItem>
                                                                <asp:ListItem>Depto.</asp:ListItem>
                                                                <asp:ListItem>Casa</asp:ListItem>
                                                                <asp:ListItem>Otro</asp:ListItem>
                                                            </asp:DropDownList>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <asp:Label ID="LblHist_Vi_Caracteristicas" runat="server" CssClass="LblDesc" Text="Caracteristicas"></asp:Label>
                                                        </td>
                                                        <td>
                                                            <asp:DropDownList ID="DdlHist_Vi_Caracteristicas" runat="server" CssClass="DdlDesc">
                                                                <asp:ListItem> </asp:ListItem>
                                                                <asp:ListItem>Propia</asp:ListItem>
                                                                <asp:ListItem>Rentada</asp:ListItem>
                                                                <asp:ListItem>Otro</asp:ListItem>
                                                            </asp:DropDownList>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <asp:Label ID="LblHist_Vi_Nivelsocio" runat="server" CssClass="LblDesc" Text="Nivel Socioeconómico"></asp:Label>
                                                        </td>
                                                        <td>
                                                            <asp:DropDownList ID="DdlHist_Vi_Nivelsocio" runat="server" CssClass="DdlDesc">
                                                                <asp:ListItem> </asp:ListItem>
                                                                <asp:ListItem>Alto</asp:ListItem>
                                                                <asp:ListItem>Medio</asp:ListItem>
                                                                <asp:ListItem>Bajo</asp:ListItem>
                                                                <asp:ListItem>Otro</asp:ListItem>
                                                            </asp:DropDownList>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <asp:Label ID="LblHist_Vi_Niveles" runat="server" CssClass="LblDesc" Text="Niveles"></asp:Label>
                                                        </td>
                                                        <td>
                                                            <asp:TextBox ID="TxtHist_Vi_Niveles" runat="server" MaxLength="2" Width="50px"></asp:TextBox>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td>
                                                <table>
                                                    <tr class="Arriba">
                                                        <td>
                                                            <asp:Label ID="LblHist_Vi_Dcontacto" runat="server" CssClass="LblDesc" Text="Dias"></asp:Label>
                                                        </td>
                                                        <td>
                                                            <asp:GridView ID="GvDiasVisita" runat="server" AlternatingRowStyle-CssClass="alt" AutoGenerateColumns="True" CssClass="mGrid" Font-Names="Tahoma" Font-Size="small" PagerStyle-CssClass="pgr">
                                                                <Columns>
                                                                    <asp:TemplateField HeaderText="Seleccionar">
                                                                        <ItemTemplate>
                                                                            <asp:CheckBox ID="chkSelect" runat="server" />
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>
                                                                </Columns>
                                                            </asp:GridView>
                                                        </td>
                                                    </tr>
                                                    <tr class="Arriba">
                                                        <td>
                                                            <asp:Label ID="LblHist_Vi_Hcontacto" runat="server" CssClass="LblDesc" Text="Horario De Contacto"></asp:Label>
                                                        </td>
                                                        <td>
                                                            <asp:TextBox ID="TxtHist_Vi_Hcontacto" runat="server" MaxLength="5" Width="35px"></asp:TextBox>
                                                            <asp:MaskedEditExtender ID="TxtHist_Vi_HcontactoMEE" runat="server" AcceptNegative="None" ErrorTooltipEnabled="True" InputDirection="RightToLeft" Mask="99:99" MaskType="Time" MessageValidatorTip="true" OnFocusCssClass="MaskedEditFocus" OnInvalidCssClass="MaskedEditError" TargetControlID="TxtHist_Vi_Hcontacto">
                                                            </asp:MaskedEditExtender>
                                                            &nbsp;<asp:Label ID="LblHist_Vi_Hcontacto0" runat="server" CssClass="LblDesc" Text="a"></asp:Label>
                                                            &nbsp;<asp:TextBox ID="TxtHist_Vi_Hcontacto0" runat="server" MaxLength="5" Width="35px"></asp:TextBox>
                                                            <asp:MaskedEditExtender ID="TxtHist_Vi_Hcontacto0MEE" runat="server" AcceptNegative="None" ErrorTooltipEnabled="True" InputDirection="RightToLeft" Mask="99:99" MaskType="Time" MessageValidatorTip="true" OnFocusCssClass="MaskedEditFocus" OnInvalidCssClass="MaskedEditError" TargetControlID="TxtHist_Vi_Hcontacto0">
                                                            </asp:MaskedEditExtender>
                                                        </td>
                                                    </tr>
                                                    <tr class="Arriba">
                                                        <td>&nbsp;</td>
                                                        <td>&nbsp;</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                            </tr>
                            <tr>
                                <td colspan="2">&nbsp;</td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <asp:Button ID="BtnGuardar" runat="server" CssClass="Botones" Text="Guardar Negociacion" Visible="false" OnClientClick="clicTwice(this, 'Procesando...')" UseSubmitBehavior="false" ValidationGroup="Procesar" />
                                    <asp:Button ID="BtnGuardar0" runat="server" CssClass="Botones" Text="Guardar" Visible="false" />
                                </td>
                            </tr>
                        </table>
                    </asp:Panel>
                </td>
            </tr>
            <tr class="Arriba">
                <td colspan="2"></td>
            </tr>
        </table>
    </asp:Panel>
    </td>
            </tr>
        </table>
</asp:Panel>
</asp:Panel>


<asp:Panel ID="PnlNegoVigente" runat="server" Visible="false">
    <table>
        <tr class="Arriba">
            <td>
                <table>
                    <tr class="Titulos">
                        <td colspan="2">
                            <asp:Label ID="LblPromesa" runat="server"></asp:Label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="LblHist_Pr_Supervisor" runat="server" CssClass="LblDesc" Text="Supervisor"></asp:Label>
                        </td>
                        <td>
                            <asp:TextBox ID="TxtHist_Pr_Supervisor" runat="server" MaxLength="25"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="LblContrasena" runat="server" CssClass="LblDesc" Text="Contraseña"></asp:Label>
                        </td>
                        <td>
                            <asp:TextBox ID="TxtContrasena" runat="server" MaxLength="10" TextMode="Password"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="LblHist_Pr_Motivo" runat="server" CssClass="LblDesc" Text="Motivo"></asp:Label>
                        </td>
                        <td>
                            <asp:TextBox ID="TxtHist_Pr_Motivo" runat="server" MaxLength="200" Height="67px" Width="311px" TextMode="MultiLine" CssClass="TxtDesc"></asp:TextBox>
                            <asp:FilteredTextBoxExtender ID="TxtHist_Pr_Motivo_FilteredTextBoxExtender" runat="server" Enabled="True" TargetControlID="TxtHist_Pr_Motivo" ValidChars="aqzxswcdevfrbgtnhymjukiloñpZAQXSWCDEVFRBGTNHYMJUKILOPÑ1230456789@ ">
                            </asp:FilteredTextBoxExtender>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <asp:Button ID="BtnAceptarPromesa" runat="server" CssClass="Botones" Text="Aceptar" />
                        </td>
                        <td>&nbsp;</td>
                    </tr>
                </table>
            </td>
            <td>
                <table>
                    <tr class="Titulos">
                        <td>Calendario De Promesas</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="ScroolCalendarioPagos">
                                <div class="force-overflow">
                                    <asp:GridView ID="GvCalendarioVig" runat="server" CssClass="mGrid" Font-Names="Tahoma" Font-Size="Small" Width="200PX">
                                        <AlternatingRowStyle CssClass="alt" />
                                        <PagerStyle CssClass="pgr" />
                                    </asp:GridView>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>

            </td>
        </tr>
    </table>
</asp:Panel>


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
                                <asp:Image ID="Image3" runat="server" ImageUrl="~/Imagenes/ImgNumber1.png" />
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
                                <asp:Image ID="Image4" runat="server" ImageUrl="~/Imagenes/ImgNumber2.png" />
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
                                <asp:Image ID="Image5" runat="server" ImageUrl="~/Imagenes/ImgNumber3.png" />
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
                                <asp:Image ID="Image6" runat="server" ImageUrl="~/Imagenes/ImgNumber4.png" />
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
                                <asp:Image ID="Image7" runat="server" ImageUrl="~/Imagenes/ImgNumber5.png" />
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
                            <asp:Button ID="BtnAceptarAceptar" runat="server" CssClass="button green close" Text="Aceptar" />
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
