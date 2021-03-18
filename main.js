//CONFIG
let button = document.querySelector(".view-container button");
const updateCode = ()=>{
    showHTMLcode();
    showCSScode();
}
window.addEventListener("load",updateCode);
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

    let viewCode = button.style.cssText;
    let viewCodewithBreaks = viewCode.replace(/;/g,";<br>");

    cssViewer.innerHTML = viewCodewithBreaks;
}   

//BORDER RADIUS
let borderRadius = document.querySelector("#border-radius-config");
let updateBorderRadius = ()=>{
    button.style.borderRadius = `${borderRadius.value}px`;
    if(borderRadius.value==0){
        button.style.borderRadius = "";
    }
    updateCode();
}
borderRadius.addEventListener("change",updateBorderRadius);


//BORDER WIDTH
let borderWidth = document.querySelector("#border-width-config");
let updateBorderWidth = ()=>{
    button.style.borderWidth = `${borderWidth.value}px`;
    if(borderWidth.value==0){
        button.style.borderWidth = `0px`;
    }
    updateCode();
}
borderWidth.addEventListener("change",updateBorderWidth);


//BORDER STYLE
let borderStyle = document.querySelector("#border-style-config");
let updateBorderStyle = ()=>{
    button.style.borderStyle = `${borderStyle.value}`;
    updateCode();
}
borderStyle.addEventListener("change",updateBorderStyle);

//PADDING X
let paddingX = document.querySelector("#padding-x-config");
let updatePaddingX = ()=>{
    button.style.paddingRight = `${paddingX.value}px`;
    button.style.paddingLeft = `${paddingX.value}px`;
    if(paddingX.value==0){
        button.style.paddingRight = "";
        button.style.paddingLeft = "";
    }
    updateCode();
}
paddingX.addEventListener("change",updatePaddingX);


//PADDING Y
let paddingY = document.querySelector("#padding-y-config");
let updatePaddingY = ()=>{
    button.style.paddingTop = `${paddingY.value}px`;
    button.style.paddingBottom = `${paddingY.value}px`;
    if(paddingX.value==0){
        button.style.paddingTop = "";
        button.style.paddingBottom = "";
    }
    updateCode();
}
paddingY.addEventListener("change",updatePaddingY);


//BACKGROUND COLOR
let backgroundColor = document.querySelector("#background-color-config");
let updateBackgroundColor = ()=>{
    button.style.backgroundColor = backgroundColor.value;
    updateCode();
}
backgroundColor.addEventListener("change",updateBackgroundColor);


//TEXT COLOR
let textColor = document.querySelector("#text-color-config");
let updateTextColor = ()=>{
    button.style.color = textColor.value;
    updateCode();
}
textColor.addEventListener("change",updateTextColor);

//TEXT SIZE
let fontSize = document.querySelector("#font-size-config");
let updateFontSize = ()=>{
    button.style.fontSize = `${fontSize.value}px`;
    updateCode();
}
fontSize.addEventListener("change",updateFontSize);