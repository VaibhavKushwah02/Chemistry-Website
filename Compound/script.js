// script for image -> 1
boxMainBody1 = document.getElementById("boxMainBody1");
hoverPart1 = document.getElementById("OnClickPart1");
hoverPartWrap1 = document.getElementById("OnClickPartWrap1").style;

boxMainBody1.addEventListener('click', () => {
    console.log("hello buddy");
    if (hoverPart1.style.display === 'none'){
        hoverPartWrap1.height = "cal(100% - 2rem)"
        hoverPartWrap1.width = "cal(100% - 2rem)"
        hoverPart1.style.height = 35+"rem"
        hoverPart1.style.width = 65+"rem"
        hoverPart1.style.transition = "all ease-in .1s"
        hoverPart1.style.display = "flex"
    }else{
        hoverPart1.style.height = 0+"rem"
        hoverPart1.style.width = 0+"rem"
        hoverPart1.style.display = "none"
    }
});

// Script for image -> 2
boxMainBody2 = document.getElementById("boxMainBody2");
hoverPart2 = document.getElementById("OnClickPart2");
hoverPartWrap2 = document.getElementById("OnClickPartWrap2").style;

boxMainBody2.addEventListener('click', () => {
    console.log("hello buddy");
    if (hoverPart2.style.display === 'none'){
        hoverPartWrap2.height = "cal(100% - 2rem)"
        hoverPartWrap2.width = "cal(100% - 2rem)"
        hoverPart2.style.height = 35+"rem"
        hoverPart2.style.width = 65+"rem"
        hoverPart2.style.transition = "all ease-in .1s"
        hoverPart2.style.display = "flex"
    }else{
        hoverPart2.style.height = 0+"rem"
        hoverPart2.style.width = 0+"rem"
        hoverPart2.style.display = "none"
    }
});