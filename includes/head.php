<?php
	if(isset($_GET['page'])){
		$title = $_GET['page'];
		$title = ucfirst($title);
	}

?>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
	<meta charset="utf-8">
	<!--meta http-equiv="refresh" content="30"-->
	<script type="text/javascript" src="jscript/main.js"></script>
	<script type="text/javascript" src="jscript/slideshow.js"></script>
	<link rel="stylesheet" type="text/css" href="styles/test.css">
	<link rel="stylesheet" type="text/css" href="styles/mtest.css">
	<title><?php if(isset($title)){echo $title;}else{echo "Home";}?></title>
</head>