window.addEventListener("load", () => {
    var r = document.querySelector(':root');
    if (localStorage.bodyColor) {
        r.style.setProperty('--bodyColor',localStorage.bodyColor);
    }
    if (localStorage.titleColor) {
        r.style.setProperty('--titleColor',localStorage.titleColor);
    }
    if (localStorage.subtitleColor) {
        r.style.setProperty('--subtitleColor',localStorage.subtitleColor);
    }
    if (localStorage.buttonColor) {
        r.style.setProperty('--buttonColor',localStorage.buttonColor);
    }
    if (localStorage.buttonBColor) {
        r.style.setProperty('--buttonBColor',localStorage.buttonBColor);
    }
    if(localStorage.textColor) {
        r.style.setProperty('--textColor',localStorage.textColor);
    }
    if(localStorage.titleF){
        r.style.setProperty('--titleFont',localStorage.titleF);
    }
    if(localStorage.subtitleF){
        r.style.setProperty('--subTitleFont',localStorage.subtitleF);
    }
    if(localStorage.buttonTextF){
        r.style.setProperty('--buttonTextFont',localStorage.buttonTextF);
    }
    if(localStorage.textF){
        r.style.setProperty('--textFont',localStorage.textF);  
    }
    duckDuck.addEventListener("click",function() {
        /*localStorage.removeItem("duckobj");
        localStorage.removeItem("points");*/
        if (localStorage.duckobj != 1){        
             localStorage.duckobj = 1;
             if(typeof localStorage.points === "undefined") {
                 localStorage.points = 0;
             } 
             localStorage.points = parseInt(localStorage.points) + 1;
             console.log(localStorage.points);
        }
    });
    badger.addEventListener("click",function () {
        if(localStorage.badgerobj != 1) {
            localStorage.badgerobj = 1;
            if(typeof localStorage.points === "undefined") {
                localStorage.points = 0;
            }
            localStorage.points = parseInt(localStorage.points) + 1;
            console.log(localStorage.points);
        }
    });

});