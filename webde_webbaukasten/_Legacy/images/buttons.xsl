<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format">
<xsl:output method="html" indent="no"/>
<xsl:strip-space elements="*"/>
	<!--MENU-->
	<xsl:template match="MENU" mode="top">
		<xsl:apply-templates select="MENU-ITEM"  mode="top"/>
	</xsl:template>    

	<!--MENU-ITEM-->
	<xsl:template match="MENU-ITEM"  mode="top">
   		<xsl:choose>
           <!-- active menu with link-->
           	<xsl:when test="MENU-ITEM[@ID=/LAYOUT/@ID]" >
  				<tr>
                    <td class="menu-bg"><div style="width:4px; height:30px;"><span></span></div></td>
  					<td style="padding-left: 25px; width: 100%;"><a href="{@HREF}" class="amenu"><xsl:value-of select="@TITLE" disable-output-escaping="yes"/></a></td>
  					<td align="right" style="padding: 0 0 0 5px"><a href="{@HREF}"><img src="images/bullet.gif" border="0" alt=""/></a></td>
  				</tr>
            </xsl:when>
            <!-- active menu without link-->
            <xsl:when test="MENU-ITEM[@ID=/LAYOUT/@ID] or @ID=/LAYOUT/@ID" >
  				<tr>
                    <td class="menu-bg"><div style="width:4px; height:30px;"><span></span></div></td>
  					<td class="amenu" style="padding-left: 25px; width: 100%;"><xsl:value-of select="@TITLE" disable-output-escaping="yes"/></td>
  					<td align="right" style="padding: 0 0 0 5px"><img src="images/bullet.gif" border="0" alt=""/></td>
  				</tr>
            </xsl:when>
            <xsl:otherwise>
  				<tr>
                    <td class="menu-bg"><div style="width:4px; height:30px;"><span></span></div></td>
  					<td style="padding-left: 25px; width: 100%;"><a href="{@HREF}" class="menu"><xsl:value-of select="@TITLE" disable-output-escaping="yes"/></a></td>
  					<td align="right" style="padding: 0 0 0 5px"><a href="{@HREF}"><img src="images/bullet.gif" border="0" alt=""/></a></td>
  				</tr>
            </xsl:otherwise>
	    </xsl:choose>
		<xsl:if test="position()!=last()">
			<tr><td></td><td colspan="2"><div style="height:1px; background-color: #E3E3E3; "><span></span></div></td></tr>
	</xsl:if>
	</xsl:template>	

</xsl:stylesheet>
