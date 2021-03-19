import getDOMInputs from "./getDomInputs.js";
import updateCode from "./viewCodeUpdate.js";
import RangeInput from "./RangeInput.js";
import ColorInput from "./ColorInput.js";

function rangeElementRender(){
    let selectors = document.querySelectorAll(".range-selector");
    selectors.forEach(element=>{
        element.innerHTML = RangeInput(`${element.id}`,element.getAttribute("data-title"), element.getAttribute("data-value"), element.getAttribute("data-min"), element.getAttribute("data-max"));
    })
}
function colorElementRender(){
    let selectors = document.querySelectorAll(".color-selector");
    selectors.forEach(element=>{
        element.innerHTML = ColorInput(`${element.id}`,element.getAttribute("data-title"), element.getAttribute("data-value"));
    })
}



//CONFIG
let button = document.querySelector(".view-container button");
let container = document.querySelector(".view-container");
let DOMInputs;

//UPDATE HANDLER
let updateHandler = (element) =>{
   
    UpdateMethods[element].call();
    updateCode(mainStylesContainer);
    injectMainStyles();
    injectHoverStyles();


};
//STYLES OBJECTS
const mainStylesContainer = document.querySelector("#main");
const hoverStylesContainer = document.querySelector("#hover");
class Styles {
    constructor(){
        this.borderRadius= null;
        this.borderWidth= null;
        this.borderColor= null;
        this.borderStyle= null;
        this.paddingTop=null;
        this.paddingBottom=null;
        this.paddingLeft=null;
        this.paddingRight=null;
        this.backgorundColor=null;
        this.color=null;
        this.fontSize=null;
        this.textTransform=null;
        this.boxShadow=null;
    }  
}
let MainStyles = new Styles;
let HoverStyles = new Styles;

let UpdateMethods = {
    textContent: ()=>{
        button.innerText =  DOMInputs.textContent.value;
        
    },
    containerBackground: ()=>{
        container.style.backgroundColor = DOMInputs.containerBackground.value;
        
    },
    borderRadius: function(){
        MainStyles.borderRadius = `${DOMInputs.borderRadius.value}px`;
        if(DOMInputs.borderRadius.value==0){
            button.style.borderRadius = "";
        }
        
    },
    borderWidth: ()=>{
        MainStyles.borderWidth = `${DOMInputs.borderWidth.value}px`;
        if(DOMInputs.borderWidth.value==0){
            MainStyles.borderWidth = `0px`;
        }
     
    },
    borderStyle: ()=>{
        MainStyles.borderStyle = `${DOMInputs.borderStyle.value}`;
      
    },
    borderColor: ()=>{
        MainStyles.borderColor = DOMInputs.borderColor.value;
        
    },
    paddingX: ()=>{
        MainStyles.paddingRight = `${DOMInputs.paddingX.value}px`;
        MainStyles.paddingLeft = `${DOMInputs.paddingX.value}px`;
        if(DOMInputs.paddingX.value==0){
            MainStyles.paddingRight = "0";
            MainStyles.paddingLeft = "0";
        }
       
    },
    paddingY: ()=>{
        MainStyles.paddingTop = `${DOMInputs.paddingY.value}px`;
        MainStyles.paddingBottom = `${DOMInputs.paddingY.value}px`;
        if(DOMInputs.paddingX.value==0){
            MainStyles.paddingTop = "0";
            MainStyles.paddingBottom = "0";
        }
        
    },
    backgroundColor: ()=>{

           MainStyles.backgroundColor = DOMInputs.backgroundColor.value; 
        
        
        
    },
    textColor: ()=>{
        MainStyles.color = DOMInputs.textColor.value;
      
    },
    fontSize: ()=>{
        MainStyles.fontSize = `${DOMInputs.fontSize.value}px`;
       
    },
    textTransform: ()=>{
        MainStyles.textTransform = `${DOMInputs.textTransform.value}`;
        
    },
    boxShadowX: ()=>{
        MainStyles.boxShadow = `${DOMInputs.boxShadowX.value}px ${DOMInputs.boxShadowY.value}px ${DOMInputs.boxShadowBlur.value}px ${DOMInputs.boxShadowColor.value}`;
        
    },
    boxShadowY: ()=>{
        MainStyles.boxShadow = `${DOMInputs.boxShadowX.value}px ${DOMInputs.boxShadowY.value}px ${DOMInputs.boxShadowBlur.value}px ${DOMInputs.boxShadowColor.value}`;
        
    },
    boxShadowBlur: ()=>{
        MainStyles.boxShadow = `${DOMInputs.boxShadowX.value}px ${DOMInputs.boxShadowY.value}px ${DOMInputs.boxShadowBlur.value}px ${DOMInputs.boxShadowColor.value}`;
        
    },
    boxShadowColor: ()=>{
        MainStyles.boxShadow = `${DOMInputs.boxShadowX.value}px ${DOMInputs.boxShadowY.value}px ${DOMInputs.boxShadowBlur.value}px ${DOMInputs.boxShadowColor.value}`;
        
    }
}


//INJECT STYLE FUNCTIONS
const injectMainStyles = ()=>{
    let style = "";
    for(let rule in MainStyles){
        let _rule = rule;
       if(rule.match(/[A-Z]/g)){
           _rule = rule.replace(/[A-Z]/g, "-"+rule.match(/[A-Z]/g)[0].toLowerCase());
       }
       if(MainStyles[rule]!==null){
         style+=_rule+":"+MainStyles[rule]+";";  
       }
       
    }
   
    mainStylesContainer.innerText = `.button{${style}}`;
}
const injectHoverStyles = ()=>{
    let style = "";
    for(let rule in HoverStyles){
        let _rule = rule;
       if(rule.match(/[A-Z]/g)){
           _rule = rule.replace(/[A-Z]/g, "-"+rule.match(/[A-Z]/g)[0].toLowerCase());
       }
       if(HoverStyles[rule]!==null){
         style+=_rule+":"+HoverStyles[rule]+";";  
       }
       
    }
   
    hoverStylesContainer.innerText = `.button:hover{${style}}`;
}


//LOAD EVENT
window.addEventListener("load",()=>{
    rangeElementRender();
    colorElementRender();
    DOMInputs = getDOMInputs();
    for(let element in DOMInputs){
    
        DOMInputs[element].addEventListener("input",()=>updateHandler(element));
    }
    
    for(let element in UpdateMethods){
        updateHandler(element);
    }
   

});

