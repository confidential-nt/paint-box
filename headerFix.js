const mainHeader = document.querySelector("#mainHeader");
const headerLogo = document.querySelector("#headerLogo");

function handleHeaderFix(){
    const movingScroll = window.scrollY > 0;
    if(movingScroll){
        headerLogo.classList.add("scale-down-center");
        mainHeader.classList.add("headerFix");
        
        headerLogo.classList.remove("scale-down-center-reverse");
    }else{
        mainHeader.classList.remove("headerFix");
        headerLogo.classList.remove("scale-down-center");
        headerLogo.classList.add("scale-down-center-reverse");
    }
}

window.addEventListener("scroll", handleHeaderFix);