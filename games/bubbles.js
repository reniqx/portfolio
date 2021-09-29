// Index.js

function initBubbles(){
var audio = new Audio('Royalty Free Music - Epic Trailer.mp3');
var endScreen = document.getElementById('endScreen');
endScreen.style.visibility = 'hidden';
//fullScreen


var image = new Image();
image.src = "../images/logo.png";



let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let scoreBoard = document.getElementById('score');
canvas.width = innerWidth;
canvas.height = innerHeight;


// Decloration of Player Class
class Player{
	constructor (source, x, y, height, width, radius, speed){
		this.x = x;
		this.y = y;
		this.height = height;
		this.width = width;
        this.speed = speed;
        this.source = source;
        this.radius = radius;
	}

	draw(){

            
			 ctx.beginPath();
			 	ctx.arc(this.x, this.y, radius, 0, Math.PI * 2, false);
                ctx.strokeStyle="#000000";
                ctx.fillStyle="#FFFFFF";
                ctx.fillStyle = 'rgba(0, 0, 0, 0)';

            ctx.drawImage(this.source, this.x, this.y, this.width, this.height);    
	}

    update(){
		this.draw();
		this.x = this.x + this.speed.x;
		this.y = this.y + this.speed.y;

	}
}



// Decloration of projectile class
class Projectile{
	constructor(x, y, radius, color, velocity){
				this.x = x;
				this.y = y;
				this.radius = radius;
				this.color = color;				
				this.velocity = velocity;
	}

	draw(){
			ctx.beginPath();
				ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
				ctx.fillStyle = this.color;
				ctx.fill();
	}

	update(){
		this.draw();
		this.x = this.x + this.velocity.x * 6;
		this.y = this.y + this.velocity.y * 6;

	}
}

// Decloration of enemy class
class Enemy{
	constructor(x, y, radius, color, velocity, speed){
				this.x = x;
				this.y = y;
				this.radius = radius;
				this.color = color;				
				this.velocity = velocity;
                this.speed = speed;
	}

	draw(){
			ctx.beginPath();
				ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
				ctx.fillStyle = this.color;
				ctx.fill();
	}

	update(){
		this.draw();
		this.x = this.x + this.velocity.x * this.speed;
		this.y = this.y + this.velocity.y * this.speed;

	}
}

// Decloration of Particle Class
class Particle{
	constructor(x, y, radius, color, velocity){
				this.x = x;
				this.y = y;
				this.radius = radius;
				this.color = color;				
				this.velocity = velocity;
				this.alpha = 1;
	}

	draw(){
				ctx.save();
				ctx.globalAlpha = this.alpha;
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
				ctx.fillStyle = this.color;
				ctx.fill();
				ctx.restore();
	}

	update(){

		this.draw();
		this.x = this.x + this.velocity.x;
		this.y = this.y + this.velocity.y;
		this.alpha -= .01;
	}
}


const player = [];
const particles = [];
const projectiles = [];
const enemies = [];
score = 0;

let playerX = canvas.width / 2,
 playerY = canvas.height / 2;
    const playerWidth = 50;
    const playerHeight = 43;
    const playerRadius = playerHeight / 2;
    const playerSpeed = {
            x: 4,
            y: 4
                };

function spawnPlayer(source, x, y, height, width, radius, speed){
    this.x = x, this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.source = source
    this.radius = radius;
    if(player[0]){
        player.pop();
        player.push(new Player(this.source, this.x, this.y, this.height, this.width, this.radius, this.speed));
    }else{
         player.push(new Player(this.source, this.x, this.y, this.height, this.width, this.radius, this.speed));
    }

    player[0].draw();
}

function spwanEnemies(){
    let time = 2000;
    if(score == 300){
        time = 0;
    }
	setInterval(()=>{
		const radius = Math.random() * (30 - 10) + 10;
// Randomize spawn location
    let x;
    let y;

		if(Math.random() < 0.5){
		 x = Math.random() < .5 ? 0 - radius: canvas.width + radius;
		 y = Math.random() * canvas.height;
		}else{
		
		x = Math.random() * canvas.width;
		y = Math.random() < .5 ? 0 - radius: canvas.height + radius;
		
		}
		
        const colors = ['red', 'blue', 'green']
		//const color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        const color = colors[Math.floor(Math.random() * colors.length)];

		//calculate velocity
		const angle = Math.atan2(
			playerY - y,
			playerX - x);
		const velocity = {
			x: Math.cos(angle),
			 y: Math.sin(angle)
			};
		// add enemies to array
       let enemySpeed = 1;

       if(color == 'green'){
         enemySpeed = 4;
       }

		enemies.push(new Enemy(x,
				    			 y,
					    		radius, color,
								velocity, enemySpeed));
	}, 
			time);
}

function restart(){
    endScreen.style.visibility = 'visible';
    //alert("You got " + score + " points" );
    //initBubbles();
    score = 0;
    scoreBoard.innerHTML = score;



    var buttons = document.getElementsByClassName('start');
        for(var i = 0; i <= buttons.length -1; i++){
            buttons[i].style.visibility = "visible";
        }
}


function playSound(audio) {
  this.audio = audio;
  this.audio.play();
}

function pauseSound(audio){

}

        
    //Move player
        addEventListener("keydown", (event)=>{
          const key = event.keyCode;
            console.log(key);
          switch(key){
              case 87:
              playerY -=playerSpeed.y;
              spawnPlayer(playerX, playerY, playerHeight, playerWidth, playerRadius, playerSpeed);
              console.log(player[0]);
              break;

            case 83:
              playerY +=playerSpeed.y;
              spawnPlayer(playerX, playerY, playerHeight, playerWidth, playerRadius, playerSpeed);
              console.log(player[0]);
              break;
             
              case 68:
              playerX +=playerSpeed.x;
              spawnPlayer(playerX, playerY, playerHeight, playerWidth, playerRadius, playerSpeed);
              console.log(player[0]);
              break;

            case 65:
              playerX -= playerSpeed.x;
              spawnPlayer(playerX, playerY, playerHeight, playerWidth, playerRadius, playerSpeed);
              break;
          }
        });

         addEventListener("ontouchmove", (event)=>{
            alert("touched");

        });



//Animation\\
let aniId; //Animation Id
function animate(){

    aniId =	requestAnimationFrame(animate);
    spawnPlayer(image, playerX, playerY, playerHeight, playerWidth, playerRadius, playerSpeed * 10000);
    addEventListener('resize',(event)=>{
            canvas.width = innerWidth;
            canvas.height = innerHeight;
            spawnPlayer(image, canvas.width / 2, canvas.height / 2, playerHeight, playerWidth, playerRadius, playerSpeed);

        });
    

	ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	

    particles.forEach((particle, index)=>{
                        if(particle.alpha <= 0){ 
                            particles.splice(index, 1)
                        }else{
                        particle.update();
                        }
                    })

        
        projectiles.forEach((projectile, pIndex)=>{
            
            projectile.update();
            
            // remove projectiles from screen if they are at the end of the screen
            if(
                    projectile.x + projectile.radius < 0 ||
                    projectile.x - projectile.radius > canvas.width || 
                    projectile.y + projectile.radius < 0 ||
                    projectile.y - projectile.radius > canvas.height
                    ){
                        projectiles.splice(pIndex, 1);
            }
        });

    enemies.forEach((enemy, index)=>{
            enemy.update();
            
            const dist = Math.hypot(player[0].x - enemy.x, player[0].y - enemy.y);
                
                // end game
                setTimeout(()=>{
                    if(dist - player[0].radius - enemy.radius < 1){
                    cancelAnimationFrame(aniId);

                    restart();

                }
                },0);

    // Remove Enemies
    projectiles.forEach( (projectile, pIndex) => {
    const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y);
    if(dist - projectile.radius - enemy.radius < 1){			
                
                    for (let i = 0; i < 5; i++) {
                        particles.push(new Particle(projectile.x, projectile.y, 5, enemy.color, {x: Math.random() - 0.5, y: Math.random() - 0.5,}));
                    }

                    
                if(enemy.radius - 5 > 10){
                        enemy.radius -= 5;
            
                    setTimeout(()=>{
                        projectiles.splice(pIndex, 1);
                },0);
                    score += 10;
                    scoreBoard.innerHTML = score;

                }else{

                setTimeout(()=>{
                    enemies.splice(index, 1);
                    projectiles.splice(pIndex, 1);
                    score += 20;
                    scoreBoard.innerHTML = score;
                },0);
            }
        }
        
        }); // end projectiles loop
            

        }); // end enemy loop

    }

    // Event Listeners

    // Shoot projectiles
    addEventListener("click", (event)=>{
            const angle = Math.atan2(event.clientY - playerY, event.clientX - playerX);
            const velocity = {
                x: Math.cos(angle),
                y: Math.sin(angle)
                };
            projectiles.push(
                    new Projectile(
                    playerX,
                    playerY,
                    5, "red",
                    velocity));

})// end of animate
		
	
	animate();
	spwanEnemies();

    //playSound(audio);
       
var buttons = document.getElementsByClassName('start');
        for(var i = 0; i <= buttons.length -1; i++){
            buttons[i].style.visibility = "hidden";
        }


}