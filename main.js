//HTML CODE SHOW
const showHTMLcode = ()=>{
    let viewCode =  document.querySelector(".view-container").innerHTML;
    let viewCodeEscaped = viewCode.replace(/</g,"&lt;").replace(/>/g,"&gt;");

    let htmlViewer = document.querySelector(".html-code-container");
    htmlViewer.innerHTML = viewCodeEscaped;
}
window.addEventListener("load",showHTMLcode);