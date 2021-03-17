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
window.addEventListener("load",showHTMLcode);

//CSS SHOW CODE
const showCSScode = ()=>{
    let viewCode =  document.querySelector(".view-container").innerHTML;
    let cssViewer = document.querySelector(".css-code-container");


    let styleStartIndex = viewCode.search(/style="/i)+7;
    let styleEndIndex = viewCode.search(/">/i);
    let viewCodeTrimmed = viewCode.slice(styleStartIndex,styleEndIndex)

    let viewCodewithBreaks = viewCodeTrimmed.replace(/;/g,";<br>");

    cssViewer.innerHTML = viewCodewithBreaks;
}   

//CONFIG
let button = document.querySelector(".view-container button");

//BORDER RADIUS
let borderRadius = document.querySelector(".border-radius-config");
let updateBorderRadius = ()=>{
    button.style.borderRadius = `${borderRadius.value}px`;
    if(borderRadius.value==0){
        button.style.borderRadius = "";
    }
    showHTMLcode();
    showCSScode();
}
borderRadius.addEventListener("change",updateBorderRadius);

//PADDING X
let paddingX = document.querySelector(".padding-x-config");
let updatePaddingX = ()=>{
    button.style.paddingRight = `${paddingX.value}px`;
    button.style.paddingLeft = `${paddingX.value}px`;
    if(paddingX.value==0){
        button.style.paddingRight = "";
        button.style.paddingLeft = "";
    }
    showHTMLcode();
    showCSScode();
}
paddingX.addEventListener("change",updatePaddingX);