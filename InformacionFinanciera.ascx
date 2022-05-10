<%@ control language="VB" autoeventwireup="false" inherits="InformacionFinanciera, App_Web_qiaq133f" %>
<link href="Estilos/HTML.css" rel="stylesheet" />
<link href="Estilos/ObjHtmlNoS.css" rel="stylesheet" />
<link href="Estilos/ObjHtmlS.css" rel="stylesheet" />

<asp:Label ID="LblCat_Lo_Usuario" runat="server" Visible="false"></asp:Label>
<table>
    <tr class="Titulos">
        <td colspan="6">Información Financiera
        </td>
    </tr>
    <tr>
        <td>
                        <asp:Label ID="LblPR_CF_SALDOACTUAL" runat="server" Text="Saldo Actual" CssClass="LblDesc"></asp:Label></td>
        <td>
                        <asp:TextBox ID="TxtPR_CF_SALDOACTUAL" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
        <td>
                        <asp:Label ID="LblPR_CF_SALDOVENCIDO" runat="server" Text="Saldo Vencido " CssClass="LblDesc"></asp:Label></td>
        <td>
                        <asp:TextBox ID="TxtPR_CF_SALDOVENCIDO" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
        <td>
                    <asp:Label ID="LblPR_CF_COMPRASDISP" runat="server" Text="Compras Disposiciones" CssClass="LblDesc"></asp:Label></td>
        <td>
                    <asp:TextBox ID="TxtPR_CF_COMPRASDISP" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
    </tr>
    <tr>
        <td>
                        <asp:Label ID="LblPR_CF_MINIMOPAGAR" runat="server" Text="Mínimo A Pagar" CssClass="LblDesc"></asp:Label></td>
        <td>
                        <asp:TextBox ID="TxtPR_CF_MINIMOPAGAR" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
        <td>
                    <asp:Label ID="LblPR_CF_COMISIONES" runat="server" Text="Comisiones" CssClass="LblDesc"></asp:Label></td>
        <td>
                    <asp:TextBox ID="TxtPR_CF_COMISIONES" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
        <td>
                    <asp:Label ID="LblPR_CF_GASTOSCBZ" runat="server" Text="Gastos De Cobranza" CssClass="LblDesc"></asp:Label></td>
        <td>
                    <asp:TextBox ID="TxtPR_CF_GASTOSCBZ" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
    </tr>
    <tr>
        <td>
                    <asp:Label ID="LblPR_CF_GASTOSLIQUIDA" runat="server" Text="Gastos De Liquidacion" CssClass="LblDesc"></asp:Label></td>
        <td>
                    <asp:TextBox ID="TxtPR_CF_GASTOSLIQUIDA" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
        <td>
                    <asp:Label ID="LblPR_CF_GASTOSADMINISTRA" runat="server" Text="Gastos Administrativos" CssClass="LblDesc"></asp:Label></td>
        <td>
                    <asp:TextBox ID="TxtPR_CF_GASTOSADMINISTRA" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
        <td>
                    <asp:Label ID="LblPR_CF_INTERESESORDINARIOS" runat="server" Text="Intereses Ordinarios" CssClass="LblDesc"></asp:Label></td>
        <td>
                    <asp:TextBox ID="TxtPR_CF_INTERESESORDINARIOS" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
    </tr>
    <tr>
        <td>
                    <asp:Label ID="LblPR_CF_INTERESGASTOSCOB" runat="server" Text="Interes De Gastos De Cobranza" CssClass="LblDesc"></asp:Label></td>
        <td>
                    <asp:TextBox ID="TxtPR_CF_INTERESGASTOSCOB" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
        <td>
                    <asp:Label ID="LblPR_CF_INTERESMORATORSTASA" runat="server" Text="Interes Moratorio Sobre Tasa" CssClass="LblDesc"></asp:Label></td>
        <td>
                    <asp:TextBox ID="TxtPR_CF_INTERESMORATORSTASA" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
        <td>
                        <asp:Label ID="LblPR_CF_INTERESMORATOTARDIO" runat="server" Text="Interes Moratorio Tardio" CssClass="LblDesc"></asp:Label></td>
        <td>
                        <asp:TextBox ID="TxtPR_CF_INTERESMORATOTARDIO" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
    </tr>
    <tr>
        <td>
                        <asp:Label ID="LblPR_CF_IVAINTERESORDINARIO" runat="server" Text="Iva Interes Ordinario" CssClass="LblDesc"></asp:Label></td>
        <td>
                        <asp:TextBox ID="TxtPR_CF_IVAINTERESORDINARIO" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
        <td>
                        <asp:Label ID="LblPR_CF_IVAINTERMORATORIO" runat="server" Text="Iva Interes Moratorio" CssClass="LblDesc"></asp:Label></td>
        <td>
                        <asp:TextBox ID="TxtPR_CF_IVAINTERMORATORIO" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
        <td>
                        <asp:Label ID="LblPR_CF_IVALIQUIDACION" runat="server" Text="Iva De Liquidacion" CssClass="LblDesc"></asp:Label></td>
        <td>
                        <asp:TextBox ID="TxtPR_CF_IVALIQUIDACION" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
    </tr>
    <tr>
        <td>
                        <asp:Label ID="LblPR_CF_MESLIBRO" runat="server" Text="Meses En Libro" CssClass="LblDesc"></asp:Label></td>
        <td>
                        <asp:TextBox ID="TxtPR_CF_MESLIBRO" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
        <td>
                        <asp:Label ID="LblPR_CF_MESVENCIDO" runat="server" Text="Meses Vencidos" CssClass="LblDesc"></asp:Label></td>
        <td>
                        <asp:TextBox ID="TxtPR_CF_MESVENCIDO" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
        <td>
                    <asp:Label ID="LblPR_CF_DIACORTE" runat="server" Text="Día De Corte" CssClass="LblDesc"></asp:Label></td>
        <td>
                    <asp:TextBox ID="TxtPR_CF_DIACORTE" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
    </tr>
    <tr>
        <td>
                    <asp:Label ID="LblPR_CF_FECHAULTPAG" runat="server" Text="Fecha De Último Pago" CssClass="LblDesc"></asp:Label></td>
        <td>
                    <asp:TextBox ID="TxtPR_CF_FECHAULTPAG" runat="server" MaxLength="7" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
        <td>
                    <asp:Label ID="LblPR_CF_FECHAWRITEOFF" runat="server" Text="Fecha Write Off" CssClass="LblDesc"></asp:Label></td>
        <td>
                    <asp:TextBox ID="TxtPR_CF_FECHAWRITEOFF" runat="server" MaxLength="7" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
        <td>
                    <asp:Label ID="LblPR_CF_IMPUESTOSIVA" runat="server" Text="Impuestosiva" CssClass="LblDesc"></asp:Label></td>
        <td>
                    <asp:TextBox ID="TxtPR_CF_IMPUESTOSIVA" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
    </tr>
    <tr>
        <td>
                        <asp:Label ID="LblPR_CF_SEGURO" runat="server" Text="Seguro" CssClass="LblDesc"></asp:Label></td>
        <td>
                        <asp:TextBox ID="TxtPR_CF_SEGURO" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
        <td>
                        <asp:Label ID="LblPR_CF_SOBREGIRO" runat="server" Text="Sobregiro" CssClass="LblDesc"></asp:Label></td>
        <td>
                        <asp:TextBox ID="TxtPR_CF_SOBREGIRO" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
        <td>
                        <asp:Label ID="LblPR_CF_TARIFANUALESIVA" runat="server" Text="Tarifa Anualesiva" CssClass="LblDesc"></asp:Label></td>
        <td>
                        <asp:TextBox ID="TxtPR_CF_TARIFANUALESIVA" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
    </tr>
    <tr>
        <td>
                        <asp:Label ID="LblPR_CF_TARIFAXSOBREGIRO" runat="server" Text="Tarifa X Sobregiro" CssClass="LblDesc"></asp:Label></td>
        <td>
                        <asp:TextBox ID="TxtPR_CF_TARIFAXSOBREGIRO" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
        <td>
                        <asp:Label ID="LblPR_CF_NUMCLIENTE" runat="server" Text="Número De Cliente Banamex " CssClass="LblDesc"></asp:Label></td>
        <td>
                        <asp:TextBox ID="TxtPR_CF_NUMCLIENTE" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
        <td><asp:Label ID="LblPR_CA_ONUSOFFUS" runat="server"  Text="On Us Off Us" CssClass="LblDesc"  ></asp:Label></td>
        <td><asp:TextBox ID="TxtPR_CA_ONUSOFFUS" runat="server" MaxLength="4" ReadOnly="True" CssClass="TxtDesNS" Width="100px" ></asp:TextBox></td>
    </tr>
    <tr>
        <td><asp:Label ID="LblPR_CA_SEGMENTO" runat="server"  Text="Segmento" CssClass="LblDesc"  ></asp:Label></td>
        <td><asp:TextBox ID="TxtPR_CA_SEGMENTO" runat="server" MaxLength="4" ReadOnly="True" CssClass="TxtDesNS" Width="100px" ></asp:TextBox></td>
        <td><asp:Label ID="LblPR_CA_DIASWO" runat="server"  Text="Dias Wo" CssClass="LblDesc"  ></asp:Label></td>
        <td><asp:TextBox ID="TxtPR_CA_DIASWO" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px" ></asp:TextBox></td>
        <td><asp:Label ID="LblPR_CA_PORTAFOLIO" runat="server"  Text="Portafolio" CssClass="LblDesc"  ></asp:Label></td>
        <td><asp:TextBox ID="TxtPR_CA_PORTAFOLIO" runat="server" MaxLength="4" ReadOnly="True" CssClass="TxtDesNS" Width="100px" ></asp:TextBox></td>
    </tr>
    <tr>
        <td><asp:Label ID="LblPR_CA_RECOMENDOUOU" runat="server"  Text="Recomendación On Us Off Us" CssClass="LblDesc"  ></asp:Label></td>
        <td><asp:TextBox ID="TxtPR_CA_RECOMENDOUOU" runat="server" MaxLength="2" ReadOnly="True" CssClass="TxtDesNS" Width="100px" ></asp:TextBox></td>
        <td><asp:Label ID="LblPR_CA_RECOMENINFERIDA" runat="server"  Text="Recomendación Inferida" CssClass="LblDesc"  ></asp:Label></td>
        <td><asp:TextBox ID="TxtPR_CA_RECOMENINFERIDA" runat="server" MaxLength="4" ReadOnly="True" CssClass="TxtDesNS" Width="100px" ></asp:TextBox></td>
        <td><asp:Label ID="LblPR_CA_AGENCIA" runat="server"  Text="Agencia" CssClass="LblDesc"  ></asp:Label></td>
        <td><asp:TextBox ID="TxtPR_CA_AGENCIA" runat="server" MaxLength="8" ReadOnly="True" CssClass="TxtDesNS" Width="100px" ></asp:TextBox></td>
    </tr>
    <tr>
        <td><asp:Label ID="LblPR_CA_TIMEZONE" runat="server"  Text="Timezone" CssClass="LblDesc"  ></asp:Label></td>
        <td><asp:TextBox ID="TxtPR_CA_TIMEZONE" runat="server" MaxLength="2" ReadOnly="True" CssClass="TxtDesNS" Width="100px" ></asp:TextBox></td>
        <td><asp:Label ID="LblPR_CA_SUBACT" runat="server"  Text="Subact" CssClass="LblDesc"  ></asp:Label></td>
        <td><asp:TextBox ID="TxtPR_CA_SUBACT" runat="server" MaxLength="2" ReadOnly="True" CssClass="TxtDesNS" Width="100px" ></asp:TextBox></td>
        <td><asp:Label ID="LblPR_CA_ACT" runat="server"  Text="Act" CssClass="LblDesc"  ></asp:Label></td>
        <td><asp:TextBox ID="TxtPR_CA_ACT" runat="server" MaxLength="2" ReadOnly="True" CssClass="TxtDesNS" Width="100px" ></asp:TextBox></td>
    </tr>
    <tr>
        <td><asp:Label ID="LblPR_CA_STATUSNEGO" runat="server"  Text="Estatus De La Negociación" CssClass="LblDesc"  ></asp:Label></td>
        <td><asp:TextBox ID="TxtPR_CA_STATUSNEGO" runat="server" MaxLength="1" ReadOnly="True" CssClass="TxtDesNS" Width="100px" ></asp:TextBox></td>
        <td><asp:Label ID="LblPR_CA_STATUSPROM" runat="server"  Text="Estatus De Promesa" CssClass="LblDesc"  ></asp:Label></td>
        <td><asp:TextBox ID="TxtPR_CA_STATUSPROM" runat="server" MaxLength="1" ReadOnly="True" CssClass="TxtDesNS" Width="100px" ></asp:TextBox></td>
        <td><asp:Label ID="LblPR_CA_SITUACIONCTA" runat="server"  Text="Situación De La Cuenta" CssClass="LblDesc"  ></asp:Label></td>
        <td><asp:TextBox ID="TxtPR_CA_SITUACIONCTA" runat="server" MaxLength="1" ReadOnly="True" CssClass="TxtDesNS" Width="100px" ></asp:TextBox></td>
    </tr>
    <tr>
        <td><asp:Label ID="LblPR_CA_PROMROTAS" runat="server"  Text="Promesas Rotas" CssClass="LblDesc"  ></asp:Label></td>
        <td><asp:TextBox ID="TxtPR_CA_PROMROTAS" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px" ></asp:TextBox></td>
        <td><asp:Label ID="LblPR_CA_BANDERAPROM" runat="server"  Text="Bandera De Promesa" CssClass="LblDesc"  ></asp:Label></td>
        <td><asp:TextBox ID="TxtPR_CA_BANDERAPROM" runat="server" MaxLength="1" ReadOnly="True" CssClass="TxtDesNS" Width="100px" ></asp:TextBox></td>
        <td><asp:Label ID="LblPR_CA_IDACUERDO" runat="server"  Text="Id Acuerdo" CssClass="LblDesc"  ></asp:Label></td>
        <td><asp:TextBox ID="TxtPR_CA_IDACUERDO" runat="server" MaxLength="8" ReadOnly="True" CssClass="TxtDesNS" Width="100px" ></asp:TextBox></td>
    </tr>
    <tr>
        <td><asp:Label ID="LblPR_CA_FECHACAMBIOSTAT" runat="server"  Text="Fecha De Cambio De Estatus" CssClass="LblDesc"  ></asp:Label></td>
        <td><asp:TextBox ID="TxtPR_CA_FECHACAMBIOSTAT" runat="server" MaxLength="7" ReadOnly="True" CssClass="TxtDesNS" Width="100px" ></asp:TextBox></td>
        <td><asp:Label ID="LblPR_CA_TASAOUOUPAYPLA" runat="server"  Text="Tasa Onus Offus Payment Plan" CssClass="LblDesc"  ></asp:Label></td>
        <td><asp:TextBox ID="TxtPR_CA_TASAOUOUPAYPLA" runat="server" MaxLength="8" ReadOnly="True" CssClass="TxtDesNS" Width="100px" ></asp:TextBox></td>
        <td><asp:Label ID="LblPR_CA_TASAOUOUSETTLE" runat="server"  Text="Tasa Onus Offus Settlement" CssClass="LblDesc"  ></asp:Label></td>
        <td><asp:TextBox ID="TxtPR_CA_TASAOUOUSETTLE" runat="server" MaxLength="2" ReadOnly="True" CssClass="TxtDesNS" Width="100px" ></asp:TextBox></td>
    </tr>
    <tr>
        <td><asp:Label ID="LblPR_CA_MARCACAMPESPSEGM" runat="server"  Text="Marca Campaña Especial Segmentacion" CssClass="LblDesc"  ></asp:Label></td>
        <td><asp:TextBox ID="TxtPR_CA_MARCACAMPESPSEGM" runat="server" MaxLength="2" ReadOnly="True" CssClass="TxtDesNS" Width="100px" ></asp:TextBox></td>
        <td><asp:Label ID="LblPR_CA_EDOFUNCIONAL" runat="server"  Text="Estado Funcional" CssClass="LblDesc"  ></asp:Label></td>
        <td><asp:TextBox ID="TxtPR_CA_EDOFUNCIONAL" runat="server" MaxLength="3" ReadOnly="True" CssClass="TxtDesNS" Width="100px" ></asp:TextBox></td>
        <td><asp:Label ID="LblPR_CA_QUALITYCOLLID" runat="server"  Text="Quality Collid" CssClass="LblDesc"  ></asp:Label></td>
        <td><asp:TextBox ID="TxtPR_CA_QUALITYCOLLID" runat="server" MaxLength="40" ReadOnly="True" CssClass="TxtDesNS" Width="100px" ></asp:TextBox></td>
    </tr>
    <tr>
        <td><asp:Label ID="LblPR_CA_MATRIZSECOUOU" runat="server"  Text="Matriz De Secuencia Onus Offus" CssClass="LblDesc"  ></asp:Label></td>
        <td><asp:TextBox ID="TxtPR_CA_MATRIZSECOUOU" runat="server" MaxLength="100" ReadOnly="True" CssClass="TxtDesNS" Width="100px" ></asp:TextBox></td>
        <td><asp:Label ID="LblPR_CA_COLLINDICATOR" runat="server"  Text="Coll Indicator" CssClass="LblDesc"  ></asp:Label></td>
        <td><asp:TextBox ID="TxtPR_CA_COLLINDICATOR" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px" ></asp:TextBox></td>
        <td><asp:Label ID="LblPR_CA_LOCACION" runat="server"  Text="Locacion" CssClass="LblDesc"  ></asp:Label></td>
        <td><asp:TextBox ID="TxtPR_CA_LOCACION" runat="server" MaxLength="6" ReadOnly="True" CssClass="TxtDesNS" Width="100px" ></asp:TextBox></td>
    </tr>
    <tr>
        <td><asp:Label ID="LblPR_CA_CALIFRIESGOOUOU" runat="server"  Text="Calificacion De Riesgo Onus Offus" CssClass="LblDesc"  ></asp:Label></td>
        <td><asp:TextBox ID="TxtPR_CA_CALIFRIESGOOUOU" runat="server" MaxLength="4" ReadOnly="True" CssClass="TxtDesNS" Width="100px" ></asp:TextBox></td>
        <td><asp:Label ID="LblPR_CA_LABEL4" runat="server"  Text="Label4" CssClass="LblDesc"  ></asp:Label></td>
        <td><asp:TextBox ID="TxtPR_CA_LABEL4" runat="server" MaxLength="4" ReadOnly="True" CssClass="TxtDesNS" Width="100px" ></asp:TextBox></td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
    </tr>
    <tr class="Titulos">
        <td colspan="6">
            Saldos de Asignacion
        </td>
    </tr>
    <tr>
        <td><asp:Label ID="LblPR_CF_COMPRASDISP_ASG" runat="server"  Text="Compras + Disposiciones" CssClass="LblDesc"  ></asp:Label></td>
        <td>
                        <asp:TextBox ID="TxtPR_CF_COMPRASDISP_ASG" runat="server" CssClass="TxtDesNS" MaxLength="22" ReadOnly="True" Width="100px"></asp:TextBox>
                    </td>
        <td><asp:Label ID="LblPR_CF_SALDOACTUAL_ASG" runat="server"  Text="Saldo actual (Capital + Interés normal + Interés moratorio)" CssClass="LblDesc"  ></asp:Label></td>
        <td>
                        <asp:TextBox ID="TxtPR_CF_SALDOACTUAL_ASG" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
        <td><asp:Label ID="LblPR_CF_SALDOVENCIDO_ASG" runat="server"  Text="Saldo vencido" CssClass="LblDesc"  ></asp:Label></td>
        <td>
                        <asp:TextBox ID="TxtPR_CF_SALDOVENCIDO_ASG" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
    </tr>
    <tr>
        <td><asp:Label ID="LblPR_CF_COMISIONES_ASG" runat="server"  Text="Comisiones" CssClass="LblDesc"  ></asp:Label></td>
        <td>
                    <asp:TextBox ID="TxtPR_CF_COMISIONES_ASG" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
        <td><asp:Label ID="LblPR_CF_GASTOSCBZ_ASG" runat="server"  Text="Gastos de Cobranza" CssClass="LblDesc"  ></asp:Label></td>
        <td>
                    <asp:TextBox ID="TxtPR_CF_GASTOSCBZ_ASG" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
        <td><asp:Label ID="LblPR_CF_INTERESESORDINARIOS_ASG" runat="server"  Text="Intereses Ordinarios" CssClass="LblDesc"  ></asp:Label></td>
        <td>
                    <asp:TextBox ID="TxtPR_CF_INTERESESORDINARIOS_ASG" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
    </tr>
    <tr>
        <td><asp:Label ID="LblPR_CF_IVAINTERESORDINARIO_ASG" runat="server"  Text="Iva interes Ordinario" CssClass="LblDesc"  ></asp:Label></td>
        <td>
                        <asp:TextBox ID="TxtPR_CF_IVAINTERESORDINARIO_ASG" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
        <td><asp:Label ID="LblPR_CF_INTERESMORATORSTASA_ASG" runat="server"  Text="Interes Moratorio sobre Tasa" CssClass="LblDesc"  ></asp:Label></td>
        <td>
                    <asp:TextBox ID="TxtPR_CF_INTERESMORATORSTASA_ASG" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
        <td><asp:Label ID="LblPR_CF_IVAINTERMORATORIO_ASG" runat="server"  Text="Iva interes Moratorio" CssClass="LblDesc"  ></asp:Label></td>
        <td>
                        <asp:TextBox ID="TxtPR_CF_IVAINTERMORATORIO_ASG" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
    </tr>
    <tr>
        <td><asp:Label ID="LblPR_CF_INTERESMORATOTARDIO_ASG" runat="server"  Text="Interes Moratorio Tardio" CssClass="LblDesc"  ></asp:Label></td>
        <td>
                        <asp:TextBox ID="TxtPR_CF_INTERESMORATOTARDIO_ASG" runat="server" MaxLength="22" ReadOnly="True" CssClass="TxtDesNS" Width="100px"></asp:TextBox></td>
        <td><asp:Label ID="LblPR_CA_ONUSOFFUS_ASG" runat="server"  Text="On Us Off Us" CssClass="LblDesc"  ></asp:Label></td>
        <td><asp:TextBox ID="TxtPR_CA_ONUSOFFUS_ASG" runat="server" MaxLength="4" ReadOnly="True" CssClass="TxtDesNS" Width="100px" ></asp:TextBox></td>
        <td></td>
        <td></td>
    </tr>
</table>
