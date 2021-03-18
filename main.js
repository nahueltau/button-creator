//CONFIG
let button = document.querySelector(".view-container button");
let container = document.querySelector(".view-container");
const updateCode = ()=>{
    showHTMLcode();
    showCSScode();
}
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
//HTML CODE SHOW
const showHTMLcode = ()=>{
    let htmlViewer = document.querySelector(".html-code-container");
    let viewCode =  document.querySelector(".view-container").innerHTML;

    let styleStartIndex = viewCode.search(/style="/i);
    let styleEndIndex = viewCode.search(/">/i);
    let viewCodeWithoutStyle = viewCode.slice(0,styleStartIndex-1)+viewCode.slice(styleEndIndex+1,viewCode.length);
    if(styleStartIndex===-1){
        viewCodeWithoutStyle = viewCode;
    }
   
    let viewCodeEscaped = viewCodeWithoutStyle.replace(/</g,"&lt;").replace(/>/g,"&gt;");

    htmlViewer.innerHTML = viewCodeEscaped;
}
//CSS SHOW CODE
const showCSScode = ()=>{
    let cssViewer = document.querySelector(".css-code-container");

    //let viewCode = button.style.cssText;
    let viewCode = mainStylesContainer.innerText;
    let viewCodewithBreaks = viewCode.replace(/;/g,";<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;").replace(/{/g,"{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;").replace(/:/g,":&nbsp;");

    cssViewer.innerHTML = viewCodewithBreaks;
}   

const DOMInputs = {
containerBackground: document.querySelector("#background-container-config"),
textContent: document.querySelector("#text-content-config"),
borderRadius: document.querySelector("#border-radius-config"),
borderWidth: document.querySelector("#border-width-config"),
borderColor: document.querySelector("#border-color-config"),
borderStyle: document.querySelector("#border-style-config"),
paddingX: document.querySelector("#padding-x-config"),
paddingY: document.querySelector("#padding-y-config"),
backgroundColor: document.querySelector("#background-color-config"),
textColor: document.querySelector("#text-color-config"),
fontSize: document.querySelector("#font-size-config"),
textTransform: document.querySelector("#text-transform-config"),
boxShadowX: document.querySelector("#shadow-x-config"),
boxShadowY: document.querySelector("#shadow-y-config"),
boxShadowBlur: document.querySelector("#shadow-blur-config"),
boxShadowColor: document.querySelector("#shadow-color-config"),
}

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
            MainStyles.style.borderWidth = `0px`;
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
            MainStyles.paddingRight = "";
            MainStyles.paddingLeft = "";
        }
       
    },
    paddingY: ()=>{
        MainStyles.paddingTop = `${DOMInputs.paddingY.value}px`;
        MainStyles.paddingBottom = `${DOMInputs.paddingY.value}px`;
        if(DOMInputs.paddingX.value==0){
            MainStyles.paddingTop = "";
            MainStyles.paddingBottom = "";
        }
        
    },
    backgroundColor: ()=>{
        if(DOMInputs.backgroundColor.getAttribute("data-custom")==="true"){
            HoverStyles.backgroundColor = DOMInputs.backgroundColor.value; 
        }else{
           MainStyles.backgroundColor = DOMInputs.backgroundColor.value; 
        }
        
        
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
/* let UpdateMethods = {
    textContent: ()=>{
        button.innerText =  DOMInputs.textContent.value;
        
    },
    containerBackground: ()=>{
        container.style.backgroundColor = DOMInputs.containerBackground.value;
        
    },
    borderRadius: function(){
        button.style.borderRadius = `${DOMInputs.borderRadius.value}px`;
        if(DOMInputs.borderRadius.value==0){
            button.style.borderRadius = "";
        }
        
    },
    borderWidth: ()=>{
        button.style.borderWidth = `${DOMInputs.borderWidth.value}px`;
        if(DOMInputs.borderWidth.value==0){
            button.style.borderWidth = `0px`;
        }
     
    },
    borderStyle: ()=>{
        button.style.borderStyle = `${DOMInputs.borderStyle.value}`;
      
    },
    borderColor: ()=>{
        button.style.borderColor = DOMInputs.borderColor.value;
        
    },
    paddingX: ()=>{
        button.style.paddingRight = `${DOMInputs.paddingX.value}px`;
        button.style.paddingLeft = `${DOMInputs.paddingX.value}px`;
        if(DOMInputs.paddingX.value==0){
            button.style.paddingRight = "";
            button.style.paddingLeft = "";
        }
       
    },
    paddingY: ()=>{
        button.style.paddingTop = `${DOMInputs.paddingY.value}px`;
        button.style.paddingBottom = `${DOMInputs.paddingY.value}px`;
        if(DOMInputs.paddingX.value==0){
            button.style.paddingTop = "";
            button.style.paddingBottom = "";
        }
        
    },
    backgroundColor: ()=>{
        button.style.backgroundColor = DOMInputs.backgroundColor.value;
        
    },
    textColor: ()=>{
        button.style.color = DOMInputs.textColor.value;
      
    },
    fontSize: ()=>{
        button.style.fontSize = `${DOMInputs.fontSize.value}px`;
       
    },
    textTransform: ()=>{
        button.style.textTransform = `${DOMInputs.textTransform.value}`;
        
    },
    boxShadowX: ()=>{
        button.style.boxShadow = `${DOMInputs.boxShadowX.value}px ${DOMInputs.boxShadowY.value}px ${DOMInputs.boxShadowBlur.value}px ${DOMInputs.boxShadowColor.value}`;
        
    },
    boxShadowY: ()=>{
        button.style.boxShadow = `${DOMInputs.boxShadowX.value}px ${DOMInputs.boxShadowY.value}px ${DOMInputs.boxShadowBlur.value}px ${DOMInputs.boxShadowColor.value}`;
        
    },
    boxShadowBlur: ()=>{
        button.style.boxShadow = `${DOMInputs.boxShadowX.value}px ${DOMInputs.boxShadowY.value}px ${DOMInputs.boxShadowBlur.value}px ${DOMInputs.boxShadowColor.value}`;
        
    },
    boxShadowColor: ()=>{
        button.style.boxShadow = `${DOMInputs.boxShadowX.value}px ${DOMInputs.boxShadowY.value}px ${DOMInputs.boxShadowBlur.value}px ${DOMInputs.boxShadowColor.value}`;
        
    }
} */

let updateProxyHandler = {
    get: function(obj,prop){
        obj[prop].call();
        updateCode();
        injectMainStyles();
        injectHoverStyles();
    }

};
let UpdateMethodsProxy = new Proxy(UpdateMethods,updateProxyHandler);

window.addEventListener("load",()=>{

    for(let element in UpdateMethods){
        UpdateMethodsProxy[element];
    }
    updateCode();
    injectMainStyles();
});
for(let element in DOMInputs){
    
    DOMInputs[element].addEventListener("input",()=>UpdateMethodsProxy[element]);
}
const injectMainStyles = ()=>{
    let style = "";
    for(rule in MainStyles){
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
    for(rule in HoverStyles){
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
