const buttons = document.querySelectorAll(".button");
const text = document.querySelectorAll(".text");
const hero = document.querySelectorAll(".hero");
const image = document.querySelectorAll(".glassesimage");
const navelement = document.querySelectorAll(".navigatorelement");
const nvigator = document.querySelectorAll(".navigator");
const navelementcontain = document.querySelectorAll(".navelementcontainer");
const logo = document.querySelectorAll(".logo");
const wlogo = document.getElementById("whitelogoimage");
const blogo = document.getElementById("blacklogoimage");
const imagecontainer = document.getElementById("imagecontainer");
function mobileResize(){
    console.log("MOBILE");

    nvigator.forEach(nvgtr => {
        nvgtr.style.minHeight = "10em";
    });
    navelement.forEach(element => {
        element.style.fontSize = "4rem";
    });
    logo.forEach(lgo => {
        lgo.style.maxHeight = "10000px";
        lgo.style.maxWidth ="25rem";
    });
    buttons.forEach(bttn => {
        bttn.style.width = "50rem";
        bttn.style.height = "7.5rem";
        bttn.style.fontSize = "2.25rem";
        bttn.style.justifySelf = "center";
    });
    text.forEach(txt =>{
        txt.style.fontSize = "5rem";
        console.log(txt)
    })
    hero.forEach(hro => {
        hro.style.margin = "5vh";
        hro.style.marginTop = "0px"
    });
    image.forEach(img => {
        img.style.maxWidth = "80vw";
    });
}
function ipadResize(){
    console.log("IPAD");
        nvigator.forEach(nvgtr => {
            nvgtr.style.minHeight = "10vh";
        });
        buttons.forEach(bttn => {
            bttn.style.height = "5em"
            bttn.style.fontSize = "1.5em";
            bttn.style.borderRadius = "5em";
        });
        navelement.forEach(element => {
            element.style.fontSize = "calc(2rem * 1.5)"
        });
        
        logo.forEach(lgo => {
            lgo.style.maxHeight = "5vh";
            
        });
        
}
function pcResize(){
    nvigator.forEach(nvgtr => {
        nvgtr.style.minHeight = null;
    });
    navelement.forEach(element => {
        element.style.fontSize = null;
    });
    logo.forEach(lgo => {
        lgo.style.maxHeight = null;
        lgo.style.maxWidth =null;
    });
    buttons.forEach(bttn => {
        bttn.style.width = null;
        bttn.style.height = null;
        bttn.style.fontSize = null;
        bttn.style.justifySelf = null;
    });
    text.forEach(txt =>{
        txt.style.fontSize = null;
    })
    hero.forEach(hro => {
        hro.style.margin = null;
        hro.style.marginTop = null;
    });
    image.forEach(img => {
        img.style.maxWidth = null;
    });
}
window.addEventListener('load', function(event) {
    if(window.innerHeight/window.innerWidth >= 1.7){
        mobileResize();
    } 
    else if(window.innerHeight/window.innerWidth >= 0.75){
        ipadResize();
    }
    else{
        pcResize();
    }
  });
window.addEventListener('resize', function(event) {
    
    if(window.innerHeight/window.innerWidth >= 1.7){
        mobileResize();
    } 
    else if(window.innerHeight/window.innerWidth >= 0.75){
        ipadResize();
    }
    else{
        pcResize();
    }
  });
