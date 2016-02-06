<?php
/**
 * Server provided remote request
 *
 * @author Dobrenko Andrey <adobrenko@swsoft.com> 
 * @version $Id: Server.php 16885 2006-07-22 12:04:30Z abelyaev $
 * @since 2006/03/27
 * @package Sitebuilder
 * @subpackage Modules
 * @copyright (c) 2004-2006, SWsoft
 */

//error_reporting (E_ALL);

ini_set('include_path', "./:/kunden/usr/local/sitebuilder/4.0.1/include:/kunden/usr/local/sitebuilder/4.0.1/include/PEAR");
require_once ('init.php');

SB_Modules::loadClass('SB_Modules_Transport_Server_Response');

$response = new SB_Modules_Transport_Server_Response();
$response->execute();
$response->sendResponse();

?>