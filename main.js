canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var last_position_of_mouse_x, last_position_of_mouse_y;
var width = 3; 
var color = "black";
var radius = 30;
var mouseEvent = "empty";
addEventListener("mousedown", my_mousedown)
function my_mousedown(e){
    width = document.getElementById("width_input").value;
    color = document.getElementById("color_input").value;
    radius = document.getElementById("radius_input").value;
    mouseEvent = "mousedown";
}
addEventListener("mousemove", my_mousemove)
function my_mousemove(e){
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.arc(current_position_of_x,current_position_of_y,40,0,2*Math.PI)
        ctx.lineWidth = width ;

        console.log("Last position of x and y coordinates = ");
        console.log("x = "+ last_position_x + "y =" + last_position_y);
        ctx.moveTo(last_position_x,last_position_y);

        console.log("current position of x and y coordinates = ");
        console.log("x = "+ current_position_of_x + "y =" + current_position_of_y);
        ctx.stroke();

    }
    last_position_x = current_position_of_x;
    last_position_y = current_position_of_y;
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseUP";
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}
function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

    
    

