function navToggle() {
    var menu = document.getElementById("content-toggle");
    if (menu.className === "navigation-menu") {
        menu.className += " responsive";
    } else {
        menu.className = "navigation-menu";
    }
} 
function closeMenu() {
    var menu = document.getElementById("content-toggle");
    if (menu.className === "navigation-menu responsive") {
        menu.className = "navigation-menu";
    } else {
        menu.className = "navigation-menu";
    }
}
