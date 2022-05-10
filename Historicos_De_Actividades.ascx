<%@ control language="VB" autoeventwireup="false" inherits="Historicos_De_Actividades, App_Web_qiaq133f" %>
<link href="Estilos/ObjHtmlS.css" rel="stylesheet" />
<link href="Estilos/ObjHtmlNoS.css" rel="stylesheet" />
<link href="Estilos/ObjAjax.css" rel="stylesheet" />
<link href="Estilos/Modal.css" rel="stylesheet" />
<link href="Estilos/HTML.css" rel="stylesheet" />
<table class="Table">
    <tr class="Titulos">
        <td>Histórico De Carteo
        </td>
    </tr>
    <tr>
        <td align="center">
            <div class="ScroolHist_ActOtro">
                <div class="force-overflow">
                    <asp:GridView ID="GvHistActCarteo" runat="server" CssClass="mGrid" Font-Names="Tahoma" Font-Size="Small" AllowPaging="True" PageSize="20" OnPageIndexChanging="GVHistActCarteo_PageIndexChanging">
                        <AlternatingRowStyle CssClass="alt" />
                        <PagerStyle CssClass="pgr" />
                    </asp:GridView>
                </div>
            </div>
        </td>
    </tr>
    <tr class="Titulos">
        <td>Histórico Gest
        </td>
    </tr>
    <tr>
        <td align="center">
            <div class="ScroolHist_ActOtro">
                <div class="force-overflow">
                    <asp:GridView ID="GvHistActGest" runat="server" CssClass="mGrid" Font-Names="Tahoma" Font-Size="Small" AllowPaging="True" PageSize="20" OnPageIndexChanging="GVHistActGest_PageIndexChanging">
                        <AlternatingRowStyle CssClass="alt" />
                        <PagerStyle CssClass="pgr" />
                    </asp:GridView>
                </div>
            </div>
        </td>
    </tr>
    <tr class="Titulos">
        <td>Histórico De Actividades
        </td>
    </tr>
    <tr>
        <td align="center">
            <div class="ScroolHist_ActOtro">
                <div class="force-overflow">
                    <asp:GridView ID="GvHistActMasivo" runat="server" CssClass="mGrid" Font-Names="Tahoma" Font-Size="Small" AllowPaging="True" PageSize="40" OnPageIndexChanging="GvHistActMasivo_PageIndexChanging">
                        <AlternatingRowStyle CssClass="alt" />
                        <PagerStyle CssClass="pgr" />
                    </asp:GridView>
                </div>
            </div>
        </td>
    </tr>
</table>
