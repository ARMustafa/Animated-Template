// Note: This file is used to toggle the navbar on small screens when clicking on the menu button
function toggleNavbar(collapseID) {
    document.getElementById(collapseID).classList.toggle("hidden");
    document.getElementById(collapseID).classList.toggle("block");
  }