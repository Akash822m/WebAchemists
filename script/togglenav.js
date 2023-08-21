function toggle(){
    let menuIcon = document.getElementById("navbar_vertical");
    const val = document.getElementById("navbar_vertical").style.getPropertyValue("display");
   
    if( val == "" ){
        menuIcon.style.display = "flex";
    }
    else if( val == "flex"){
        menuIcon.style.display = "none";
    }
    else if(val == "none"){
        menuIcon.style.display = "flex";
    }  
}

function handleDisplay() {
    const targetElement = document.getElementById("navbar_vertical");
    if (window.innerWidth > 651) {
      targetElement.style.display = "none";
    }
  }

  handleDisplay();
  window.addEventListener("resize", handleDisplay);