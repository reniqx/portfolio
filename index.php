

<?php
	include "includes/head.php";
?>




<body>
	<div class="wrapper ">

<div class="row">
<div id="container" class="clearfix">
  <canvas id="q" class="clearfix"></canvas>
  <div id="overlay">
<div class="col col_1 clearfix">
<span id="logoWrap">
<img src="images/logo.png" class="logo">
</span>


<?php
	include "includes/nav.php";
?>
</div>

<div class="col col_2" id="col_2">

<?php
if(isset($_GET['page'])){
	// page content is loaded
	$page = $_GET['page'] . ".php";
	include $page;
}else {
	include 'welcome.php';
}?>
  </div>
</div>


</div>
</div>

	<div class="row"></div>


</div>
<div>
	<?php include "includes/footer.php";?>
</div>
	</body></html>"