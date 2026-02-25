var grid_bg = document.getElementById("grid_bg");
grid_count = 100;
function makeGrideBg(){
    for(var i = 0; i < grid_count; i++){
        for(var j = 0; j < grid_count; j++){
            var grid = document.createElement("div");
            grid.className = "grid_bg_item";
            grid_bg.appendChild(grid);
            grid.style.top = (i * 30) + "px";
            grid.style.left = (j * 30) + "px";
            // grid.style.margin = "10px";
        }
    }
}

makeGrideBg();