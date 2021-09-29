
<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="viewport" content= "width=device-width, user-scalable=no">
	<title>Shooting Balls</title>
	
	
	<style type="text/css">
		
			body{
				margin: 0;
                background: transparent;
			}

            /*#canvas{
                opacity: 0.5;
            }*/

            .start {
                background-color: green;
						    color: white;
						    border-radius: 5px;
						    height: 50px;
						    font-family: arial;
						    font-weight: bold;
						    border: none;
						    box-shadow: 1px 4px #888888;
						    z-index: 2;
						    position: absolute;
						    float: left;
						    left: 50%;
						    top: 50%;
			 }

             .start:hover{
                 background-color: white;
                 color: black;
                 border-radius: 50px;
             }


             #canvas{
             	overflow: hidden;
             }

			#score{
				position: relative;
				color: black;
				float: right;
				padding: 2%;
				font-family: arial, serif;
			}
			 #scoreBoardWrap{
				border-radius: 5px;
				border-top-left-radius: 0px;				
				position: absolute;
				float: left;
				z-index: 3;
				idth: 100px;
			    height: 30px;
				}

			    #endScreen{
			        background-color: white;
			        height: 60%;
			        width: 60%;
			        position: absolute;
			        top: 25%;
			        left: 25%;
			        right: 25%;
			        bottom: 25%;
			        border-radius: 10px;
			        visibility: hidden;
			        background:  url("https://img.freepik.com/free-vector/space-game-background-neon-night-alien-landscape_107791-1624.jpg?size=626&ext=jpg");
			        background-size: cover;
			    }
	

	</style>
</head>

	<body>



<audio id="bgmusic">
  <source src="Royalty Free Music - Epic Trailer.mp3">
  Your browser does not support the audio element.
</audio>


		<div id="scoreBoardWrap">
		<span id="score">
		</span>
		</div>

        <div id="endScreen">

        	

        </div>

        <button id= "startBubbles" class="start" onclick="initBubbles()">Start Game</button>
        <canvas id = "canvas">
		
		</canvas>

		<?php

			include "resourses.php";
		?>



	</body>
	<script type="text/javascript" src ="bubbles.js"></script>
	<script type="text/javascript" src ="stars.js"></script>

	<script type="text/javascript">
	
	document.addEventListener("click", ()=>{
	document.getElementById('bgmusic').play();
    })

	document.getElementById('startBubbles').addEventListener("click", ()=>{
	document.getElementById('bgmusic').pause();
    })
    </script>

	</html>

