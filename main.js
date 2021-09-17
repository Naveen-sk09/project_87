
// Create canvas variable
var canvas= new fabric.Canvas("myCanvas");
 b_y=1;
 b_x=1;

b_width = 350;
b_height = 430;

var b_object= "";



	// to upload images
	function new_image(get_image){
		fabric.Image.fromURL(get_image,function (Img)
		{
			b_object=Img;
		 b_object.scaleToWidth (b_width);
		 b_object.scaleToHeight (b_height);
		 b_object.set({ top:b_y, left:b_x });
		  canvas.add(b_object); }); 
		}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		// upload red ranger
		new_image('rr1.png');
	}
	if(keyPressed == '71')
	{
		b_x = 200;
		// upload green ranger
		new_image('gr.png');
	}
	
	if(keyPressed == '89')
	{
		b_x =350;
		// upload yellow ranger
		new_image('yr.png');

	}
	if(keyPressed == '80')
	{
		b_x = 600;
		// upload pink ranger
		new_image('pr.png');
	}
	if(keyPressed == '66')
	{
		b_x = 700;
	// upload blue ranger
	new_image('br.png');
	}
	
}

