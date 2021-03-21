const updateCode = ()=>{
    showHTMLcode();
    showCSScode();
}

//HTML CODE SHOW
const showHTMLcode = ()=>{
    let htmlViewer = document.querySelector(".html-code-container");
    let viewCode =  document.querySelector(".container").outerHTML;

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
    let stylesheets = document.querySelectorAll(".stylesheet-view");
    let cssViewer = document.querySelector(".css-code-container");
    cssViewer.innerHTML = "";
    stylesheets.forEach(sheet=>{
        let viewCode = sheet.innerText;
        let viewCodewithBreaks = viewCode.replace(/;/g,";<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;").replace(/{/g,"{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")/* .replace(/:/g,":&nbsp;") */;
        cssViewer.innerHTML += viewCodewithBreaks+"<br><br>";
    })
}
export default updateCode;