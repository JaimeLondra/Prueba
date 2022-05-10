<%@ control language="VB" autoeventwireup="false" inherits="Historico_Asignacion, App_Web_ydhknwvx" %>

<link href="Estilos/HTML.css" rel="stylesheet" />
<link href="Estilos/ObjHtmlNoS.css" rel="stylesheet" />
<link href="Estilos/ObjHtmlS.css" rel="stylesheet" />
<asp:Label ID="LblCat_Lo_Usuario" runat="server" Visible="false"></asp:Label>
<table class="Table">
    <tr class="Titulos">
        <td>Histórico De Asignación
        </td>
    </tr>
    <tr align="center">
        <td>
            <div class="ScroolHistAsig">
                <div class="force-overflow">
                <asp:GridView ID="GvAsignacion" runat="server" AlternatingRowStyle-CssClass="alt" CssClass="mGrid" Font-Names="Tahoma" Font-Size="small" PagerStyle-CssClass="pgr" Style="font-size: small" AutoGenerateColumns="true">
                    <AlternatingRowStyle CssClass="alt" />
                    <PagerStyle CssClass="pgr" />
                </asp:GridView>
                    </div>
            </div>
        </td>
    </tr>
</table>
