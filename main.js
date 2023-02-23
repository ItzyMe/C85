//Criar uma referência para tela
canvas= document.getElementById('myCanvas')
ctx=canvas.getContext("2d")
//Dê altura e largura específicas para a imagem do carro
greencar_width=75;
greencar_height=100;
greencar_x=5;
greencar_y=255;
backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

//Defina a posição inicial para uma imagem de carro.

function add() {
background_imgTag=new Image();
background_imgTag.onload= uploadBackground;
background_imgTag.src=backgroundImage;
greencar_imgTag= new Image();
greencar_imgTag.onload= uploadgreenCar;
greencar_imgTag.src=greencarImage;
}

function uploadBackground() {
	//Defina a função ‘uploadBackground’
   ctx.drawImage (background_imgTag,0,0, canvas.width, canvas.height)
}

function uploadgreenCar() {
	ctx.drawImage (greencar_imgTag, greencar_x,greencar_y, greencar_width, greencar_height);

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Definir função para mover o carro para cima
	if(greencar_y>=0)
	{ greencar_y=greencar_y-10;
		console.log("Quando a seta cima for pressionada,x= "+greencar_x+"| y= "+greencar_y);
		uploadBackground();
		uploadgreenCar();

	}
}

function down()
{
	//Definir função para mover o carro para baixo
	if(greencar_y>=350)
	{ greencar_y=greencar_y-10;
		console.log("Quando a seta baixo for pressionada,x= "+greencar_x+"| y= "+greencar_y);
		uploadBackground();
		uploadgreenCar();

	}
}

function left()
{
	//Definir função para mover o carro para o lado esquerdo
	if(greencar_x>=0)
	{ greencar_x=greencar_x+10;
		console.log("Quando a seta esquerda for pressionada,y= "+greencar_y+"| x= "+greencar_x);
		uploadBackground();
		uploadgreenCar();

	}
}

function right()
{
	//Definir função para mover o lado direito do carro
	if(greencar_x<=750)
	{ greencar_x=greencar_x+10;
		console.log("Quando a seta right for pressionada,y= "+greencar_y+"| x= "+greencar_x);
		uploadBackground();
		uploadgreenCar();

	}
}
