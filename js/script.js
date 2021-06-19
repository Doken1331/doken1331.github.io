menu.onclick = function myFunction () {
    var x = document.getElementById('top_menu');
    if (x.className === "navigation") {
        x.className += "responsive";
    }   else {
                x.className ="navigation";
            }
    var y = document.getElementById('top_header');
        if (y.className === "new_menu") {
            y.className += "_upp";
        }
            else {
                y.className = "new_menu";
            }
}