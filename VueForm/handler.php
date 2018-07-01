<?php 
if (isset($_GET['action']))
	$action = $_GET['action'];
else
	$action = "";

if (isset($_GET['data']))
	$data = $_GET['data'];
else
	$data = "";

if ($action == "ping")
	echo "pong";

if ($action == "data")
{
	echo $data;
}
?>