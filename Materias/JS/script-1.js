const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("oscuro");
    
    if(body.classList.contains("oscuro")){
        btnpresionado = false;
        modeText.innerText = "Light mode";
resetear(); 
            btnpresionado = true;  
    }else{
        modeText.innerText = "Dark mode";
        
            btnpresionado = true;    
    }

});

