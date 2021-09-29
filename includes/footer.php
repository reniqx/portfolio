

<footer class ="clearfix">

	<p> 
        <?php
		$startYear = 2016;
		$thisYear = date('Y');

		if(isset($_GET['page'])){
			$page = $_GET["page"];
			switch ($page) {
                case 'home':
                    ?>
                    <script type="text/javascript" src="jscript/matrix.js"></script>
					<?php
					echo(ucwords("luck is when preparation meets opportunity"));
					break;
                
                case 'graphics':
                    ?>
                    <script type="text/javascript" src="jscript/hoopies.js"></script>
					<?php
					break;
				
				case 'about':
					?>
                    <script type="text/javascript" src="jscript/n_rain.js"></script>
					<?php
					break;
				case 'contact':
					?>
                    <script type="text/javascript" src="jscript/matrix.js"></script>
					<?php
                    break;
				case 'games':
					?>
                    <script type="text/javascript" src="jscript/stars.js"></script>;
					<?php
                    break;
                
                case 'stuff':
                	echo "I really love doing this &#9787; <a href='?page=graphics'>Graphics</a>";
					?>
                    <script type="text/javascript" src="jscript/stars.js"></script>;
					<?php
                    break;
				default:
                    ?>
                    <script type="text/javascript" src="jscript/matrix.js"></script>
					<?php
			}

		
			if($startYear == $thisYear){
				$copy = " &copy".$startYear;
				echo $copy;
			}else{
				$copy = " &copy{$startYear}&ndash;{$thisYear} ";
				echo $copy;
				}
			}else{
				if($startYear == $thisYear){
				$copy = " &copy".$startYear;
				echo $copy;
			}else{
				$copy = " &copy{$startYear}&ndash;{$thisYear} ";
				echo $copy;
				}
            ?>
             <script type="text/javascript" src="jscript/matrix.js"></script>
            <?php
			}


            
            
	?></p>

<script type="text/javascript">listen('image_wrap')</script>

<div id="slideShow" class="slider fade ">

<img  id="slideCon" src="" onclick="nextSlide()">


<button class="clearFix slideBtn slideBtnP " type="button" onclick="prevSlide()"></button>
<button class="clearFix slideBtn slideBtnC" type="button" onclick="slideShow()">X</button>
<button class="clearFix slideBtn slideBtnN" type="button" onclick="nextSlide()"></button>



</div>
        

<script>
  
	const maxWidth = 768;

	const screenW = window.outerWidth;
	const screenH = window.outerHeight;



    const myDiv = document.querySelector('#col_2');
    const body = document.querySelector('body');
    
    if(screenW >= maxWidth){

	    body.style.overflow = "hidden";
	    myDiv.style.overflow = "scroll";
	    myDiv.onmouseover = scrollBy({
	        top: 0,
	        left: 100,
	        behavior: 'smooth'
	    });
    }

</script>





<script>
(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('col_2').scrollLeft -= (delta * 40); // Multiplied by 40
       // e.preventDefault();
    }
    if (document.getElementById('col_2').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('col_2').addEventListener('mousewheel', scrollHorizontally, true);
        // Firefox
        document.getElementById('col_2').addEventListener('DOMMouseScroll', scrollHorizontally, true);
    } else {
        // IE 6/7/8
        document.getElementById('col_2').attachEvent('onmousewheel', scrollHorizontally);
    }
})();

</script>


</footer>
	